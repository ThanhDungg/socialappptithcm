import { useEffect, useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { BASE_URL, getData, getUser, postData, putAvatar, putData, putInfo, putPassword } from '../../config/fetchData';
import BtnLoading from '../../components/BtnLoading';

function EditProfile() {
   const [Alt, setAlt] = useState();
   const [user, setUser] = useState();

   const [loadingBtnAvatar, setLoadingBtnAvatar] = useState(false);
   const [loadingBtnInfo, setLoadingBtnInfo] = useState(false);
   const [loadingBtnSer, setLoadingBtnSer] = useState(false);

   const chooseFile = (input) => {
      const file = input.target.files[0];

      file.preview = URL.createObjectURL(file);

      setAlt(file);
   };

   const handleChangeInfo = async () => {
      if (document.getElementById('edit-username').value == '') {
         document.getElementById('error-edit-info').innerText = 'User name is empty...';
      } else if (document.getElementById('edit-fullname').value == '') {
         document.getElementById('error-edit-info').innerText = 'Full name is empty...';
      } else if (document.getElementById('edit-mobile').value == '') {
         document.getElementById('error-edit-info').innerText = 'Mobile is empty...';
      } else if (document.getElementById('edit-mobile').value.length < 10) {
         document.getElementById('error-edit-info').innerText = 'Mobile must 10 number...';
      } else if (document.getElementById('edit-address').value == '') {
         document.getElementById('error-edit-info').innerText = 'Address is empty...';
      } else if (document.getElementById('edit-descriptions').value == '') {
         document.getElementById('error-edit-info').innerText = 'Descriptions is empty...';
      } else {
         try {
            setLoadingBtnInfo(true);
            await putData(
               putInfo,
               {
                  username: document.getElementById('edit-username').value,
                  fullname: document.getElementById('edit-fullname').value,
                  gender: 'Male',
                  mobile: document.getElementById('edit-mobile').value.trim(),
                  address: document.getElementById('edit-address').value,
                  description: document.getElementById('edit-descriptions').value,
               },
               localStorage.getItem('accessToken'),
            ).then((res) => {
               console.log(res);
               if (res.data.code == 200) {
                  alert('Success');
               } else {
                  document.getElementById('error-edit-info').innerText = 'Change info failed...';
               }
               setLoadingBtnInfo(false);
            });
         } catch (e) {
            document.getElementById('error-edit-info').innerText = 'Change info failed...';
            console.log(e);
         }
      }
   };

   const handleChangeSercu = async () => {
      if (document.getElementById('edit-password').value == '') {
         document.getElementById('error-edit-sercurity').innerText = 'Password is empty...';
      } else if (document.getElementById('edit-newpassword').value == '') {
         document.getElementById('error-edit-sercurity').innerText = 'New password is empty...';
      } else if (document.getElementById('edit-repassword').value == '') {
         document.getElementById('error-edit-sercurity').innerText = 'Re password is empty...';
      } else if (
         document.getElementById('edit-newpassword').value != document.getElementById('edit-repassword').value
      ) {
         document.getElementById('error-edit-sercurity').innerText = 'Re password not match New password.';
      } else {
         try {
            setLoadingBtnSer(true);
            await putData(
               putPassword,
               {
                  password: document.getElementById('edit-password').value,
                  n_password: document.getElementById('edit-newpassword').value,
                  re_password: document.getElementById('edit-repassword').value,
               },
               localStorage.getItem('accessToken'),
            ).then((res) => {
               console.log(res);
               if (res.data.code == 203) {
                  document.getElementById('error-edit-sercurity').innerText = 'Old password incorrect...';
               } else {
                  alert('Success');
               }
               setLoadingBtnSer(false);
            });
         } catch (e) {
            document.getElementById('error-edit-sercurity').innerText = 'Change password failed...';
            console.log(e);
         }
      }
   };

   const onChangeInput = (id) => {
      document.getElementById(id).innerText = '';
   };

   const handleChangeAvatar = async () => {
      try {
         setLoadingBtnAvatar(true);
         const formData = new FormData();
         formData.append('file', Alt);

         fetch(BASE_URL + putAvatar, {
            method: 'PUT',
            body: formData,
            credentials: 'same-origin', // include, *same-origin, omit,
            mode: 'cors',
            headers: {
               accessToken: localStorage.getItem('accessToken'),
            },
         })
            .then((res) => res.json())
            .then((json) => {
               console.log(json);
               if (json.code == 200) {
                  alert('Success');
                  setLoadingBtnAvatar(false);
               } else {
                  alert('Failed');
                  setLoadingBtnAvatar(false);
               }
            });
      } catch (e) {
         alert('Failed');
         console.log(e);
      }
   };

   useEffect(() => {
      try {
         const getDataUser = async () => {
            await getData(getUser + `/${localStorage.getItem('id')}`, localStorage.getItem('accessToken')).then(
               (res) => {
                  console.log(res);
                  setUser(res.data.result.user);
                  document.getElementById('edit-username').value = res.data.result.user.USERNAME;
                  document.getElementById('edit-fullname').value = res.data.result.user.FULLNAME;
                  document.getElementById('edit-address').value = res.data.result.user.ADDRESS;
                  document.getElementById('edit-mobile').value = res.data.result.user.MOBILE;
                  document.getElementById('edit-descriptions').value = res.data.result.user.DESCRIPTION;
               },
            );

            // await getData(getUserPost + `/${localStorage.getItem('id')}`, localStorage.getItem('accessToken')).then(
            //    (res) => {
            //       console.log(res);
            //    },
            // );
         };
         getDataUser();
      } catch (e) {
         console.log(e);
      }
   }, []);

   return (
      <div class="container bootstrap snippets bootdeys">
         <div class="row">
            <div class="col-xs-12 col-sm-9">
               {/* <form class="form-horizontal"> */}
               <div class="panel panel-default">
                  <div class="panel-body text-center">
                     <img
                        src={Alt ? Alt.preview : !user ? '' : user.AVATAR}
                        class="card-img rounded-circle"
                        style={{ width: '40%' }}
                        alt="User avatar"
                     />
                     <div>
                        <label for="input-info-img">
                           <input
                              type="file"
                              id="input-info-img"
                              accept="image/png, image/gif, image/jpeg"
                              hidden
                              onChange={chooseFile}
                           />
                           <Icon.Image />
                        </label>
                        {Alt ? (
                           <div>
                              {!loadingBtnAvatar ? (
                                 <button class="btn btn-primary" onClick={handleChangeAvatar}>
                                    Submit
                                 </button>
                              ) : (
                                 <BtnLoading />
                              )}
                           </div>
                        ) : (
                           ''
                        )}
                     </div>
                  </div>
               </div>

               <div class="panel panel-default">
                  <div class="panel-heading">
                     <h4 class="panel-title">Infomation</h4>
                  </div>
                  <div class="panel-body">
                     <div class="form-group">
                        <label class="col-sm-2 control-label">User name</label>
                        <div class="col-sm-10">
                           <input
                              id="edit-username"
                              type="tel"
                              class="form-control"
                              placeholder="User name..."
                              onChange={() => {
                                 onChangeInput('error-edit-info');
                              }}
                           />
                        </div>
                     </div>
                     <div class="form-group">
                        <label class="col-sm-2 control-label">Full name</label>
                        <div class="col-sm-10">
                           <input
                              id="edit-fullname"
                              type="tel"
                              class="form-control"
                              placeholder="Full name..."
                              onChange={() => {
                                 onChangeInput('error-edit-info');
                              }}
                           />
                        </div>
                     </div>
                     <div class="form-group">
                        <label class="col-sm-2 control-label">Mobile</label>
                        <div class="col-sm-10">
                           <input
                              id="edit-mobile"
                              type="tel"
                              class="form-control"
                              placeholder="Mobile..."
                              onChange={() => {
                                 onChangeInput('error-edit-info');
                              }}
                              maxLength={10}
                              onKeyPress={(event) => {
                                 if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                 }
                              }}
                           />
                        </div>
                     </div>
                     <div class="form-group">
                        <label class="col-sm-2 control-label">Address</label>
                        <div class="col-sm-10">
                           <input
                              id="edit-address"
                              type="tel"
                              class="form-control"
                              placeholder="Address..."
                              onChange={() => {
                                 onChangeInput('error-edit-info');
                              }}
                           />
                        </div>
                     </div>
                     <div class="form-group">
                        <label class="col-sm-2 control-label">Descriptions</label>
                        <div class="col-sm-10">
                           <input
                              id="edit-descriptions"
                              type="tel"
                              class="form-control"
                              placeholder="Descriptions..."
                              onChange={() => {
                                 onChangeInput('error-edit-info');
                              }}
                           />
                        </div>
                     </div>
                     <div id="error-edit-info" class="text-danger" style={{ fontStyle: 'italic' }}></div>

                     <div class="">
                        <div class="">
                           {!loadingBtnInfo ? (
                              <button class="btn btn-primary" onClick={handleChangeInfo}>
                                 Submit
                              </button>
                           ) : (
                              <BtnLoading />
                           )}
                        </div>
                     </div>
                  </div>
               </div>

               <div class="panel panel-default">
                  <div class="panel-heading">
                     <h4 class="panel-title">Security</h4>
                  </div>
                  <div class="panel-body">
                     <div class="form-group">
                        <label class="col-sm-2 control-label">Password</label>
                        <div class="col-sm-10">
                           <input
                              id="edit-password"
                              type="password"
                              class="form-control"
                              placeholder="Current password..."
                              onChange={() => {
                                 onChangeInput('error-edit-sercurity');
                              }}
                           />
                        </div>
                     </div>
                     <div class="form-group">
                        <label class="col-sm-2 control-label">New password</label>
                        <div class="col-sm-10">
                           <input
                              id="edit-newpassword"
                              type="password"
                              class="form-control"
                              placeholder="New password..."
                              onChange={() => {
                                 onChangeInput('error-edit-sercurity');
                              }}
                           />
                        </div>
                     </div>
                     <div class="form-group">
                        <label class="col-sm-2 control-label">Re password</label>
                        <div class="col-sm-10">
                           <input
                              id="edit-repassword"
                              type="password"
                              class="form-control"
                              placeholder="Re password..."
                              onChange={() => {
                                 onChangeInput('error-edit-sercurity');
                              }}
                           />
                        </div>
                     </div>
                     <div id="error-edit-sercurity" class="text-danger" style={{ fontStyle: 'italic' }}></div>

                     <div class="form-group">
                        <div class="col-sm-10 col-sm-offset-2">
                           {!loadingBtnSer ? (
                              <button type="submit" class="btn btn-primary" onClick={handleChangeSercu}>
                                 Submit
                              </button>
                           ) : (
                              <BtnLoading />
                           )}
                           {/* <button type="reset" class="btn btn-default">
                                 Cancel
                              </button> */}
                        </div>
                     </div>
                  </div>
               </div>
               {/* </form> */}
            </div>
         </div>
      </div>
   );
}

export default EditProfile;
