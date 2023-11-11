import { useState } from 'react';
import EditPostImg from '../../components/EditPostImg';
import * as Icon from 'react-bootstrap-icons';
import AddPostImg from '../../components/AddPostImg';
import HeaderPostCmt from '../../components/HeaderPostCmt';
import { BASE_URL, putData, putStatus } from '../../config/fetchData';
import BtnLoading from '../../components/BtnLoading';

function EditPost({ handleClose, post }) {
   const [imgInput, setImgInput] = useState([]);
   const [listImg, setListImg] = useState([]);
   const [tempArray, setTempArray] = useState([]);

   const [loadingBtn, setLoadingBtn] = useState(false);

   const handleDeleteImgEdit = (id) => {
      console.log(document.getElementById(`edit-img-${id}`));
      setTempArray((list) => [...list, id]);
      document.getElementById(`edit-img-${id}`).remove();
   };

   const handleEditPost = async () => {
      try {
         setLoadingBtn(true);
         let formData = new FormData();
         listImg.map((item) => {
            formData.append('file', item);
            console.log('1');
         });
         formData.append('caption', document.getElementById('edit-caption').value);
         formData.append('deletedImages', JSON.stringify(tempArray));
         console.log(JSON.stringify(tempArray));
         // await putData(putStatus + `${post.ID}`, formData, localStorage.getItem('accessToken')).then((res) => {
         //    console.log(res);
         // });
         await fetch(`${BASE_URL}api/post/${post.ID}`, {
            method: 'PUT',
            body: formData,
            headers: {
               accessToken: localStorage.getItem('accessToken'),
            },
         })
            .then((json) => json.json())
            .then(async (res) => {
               console.log(res);
               if (res.code == 200) {
                  window.location.reload();
               } else {
                  alert('That bai');
               }
            });
         console.log(formData);
      } catch (e) {
         console.log(e);
      }
   };

   const handleDeleteAddImgEdit = (index1) => {
      setImgInput((list) => {
         return list.filter((item, index) => index != index1);
      });
   };

   const chooseFile = (file) => {
      const f = Object.values(file.target.files);
      console.log(f);
      let arrayImg = [];

      f.map((item) => {
         arrayImg.push({ IMAGE: URL.createObjectURL(item) });
      });
      setImgInput(arrayImg);
      setListImg(f);
      // f.map((item) => {
      //    setImgInput((list) => [...list, { IMAGE: URL.createObjectURL(item) }]);
      // });
   };

   return (
      <div class="">
         <div class="card position-fixed ms-5" style={{ zIndex: 5, marginRight: '50%', marginTop: '-50px' }}>
            <div class="card-header border-0 text-end">
               <button class="btn btn-light text-danger" onClick={handleClose}>
                  X
               </button>
               <HeaderPostCmt
                  post={post}
                  hidePost={false}
                  //
               />
            </div>
            <div class="card-body">
               <div>
                  <textarea class="w-100" id="edit-caption" defaultValue={post ? post.CAPTION : ''} />
                  <div
                     className="m-5 d-flex flex-wrap"
                     style={{ width: '500px', height: '300px', overflowY: 'scroll' }}
                  >
                     {post
                        ? post.POST_IMAGEs.map((item) => {
                             return <EditPostImg img={item} handleDeleteImgEdit={handleDeleteImgEdit} />;
                          })
                        : ''}
                     {imgInput.length == 0
                        ? ''
                        : imgInput.map((item, index) => {
                             return (
                                <AddPostImg img={item} index={index} handleDeleteAddImgEdit={handleDeleteAddImgEdit} />
                             );
                          })}
                  </div>
                  <hr />
                  <ul class="nav nav-pills nav-stack small fw-normal">
                     <li class="nav-item ">
                        <label for="photo-input" class="btn btn-light text-primary">
                           <Icon.Image />
                           {'  '}Photo
                           <input
                              type="file"
                              hidden
                              multiple
                              id="photo-input"
                              class="cursor-pointer"
                              accept="image/png, image/jpeg"
                              onChange={(e) => {
                                 chooseFile(e);
                              }}
                           />
                        </label>
                     </li>
                  </ul>
                  <div class="text-end">
                     <button
                        type="button"
                        class="btn btn-primary text-end"
                        data-bs-target="#editpost"
                        data-bs-toggle="modal"
                     >
                        Edit
                     </button>
                  </div>
               </div>
            </div>
         </div>
         <div class="modal fade" id="editpost" tabindex="-1" aria-labelledby="editpost" aria-hidden="true">
            <div class="modal-dialog">
               <div class="modal-content">
                  <div class="modal-header">
                     <h5 class="modal-title" id="exampleModalLabel">
                        Thông báo
                     </h5>
                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="text-danger p-4">Bạn có muốn chỉnh sửa bài viết?</div>

                  <div class="modal-footer">
                     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="clear">
                        Close
                     </button>
                     {!loadingBtn ? (
                        <button type="button" class="btn btn-primary" onClick={handleEditPost}>
                           Edit
                        </button>
                     ) : (
                        <BtnLoading />
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default EditPost;
