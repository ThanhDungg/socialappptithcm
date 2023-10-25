import { useEffect, useState } from 'react';
import HeaderMyProfile from '../../components/HeaderMyProfile';
import { getData, getUser, getUserPost } from '../../config/fetchData';
import StatusPost from '../StatusPost';

function MyProfile() {
   const [bgImg, setBgImg] = useState();
   const [user, setUser] = useState();
   const [listPost, setListPost] = useState([]);
   const [stateImg, setStateImg] = useState(0);
   const [post, setPost] = useState(0);

   const handleStatusPost = (statusPost) => {
      setPost(statusPost);
   };

   const chooseFileBgImg = (input) => {
      const file = input.target.files[0];

      file.preview = URL.createObjectURL(file);

      setBgImg(file.preview);
   };

   const handleShowAll = () => {
      if (!stateImg) {
         for (let i = 0; i < document.querySelectorAll('.img-post-hidden').length; i++) {
            document.querySelectorAll('.img-post-hidden')[i].removeAttribute('hidden');
         }
         setStateImg(1);
      } else {
         for (let i = 0; i < document.querySelectorAll('.img-post-hidden').length; i++) {
            document.querySelectorAll('.img-post-hidden')[i].setAttribute('hidden', '');
         }
         setStateImg(0);
      }
   };

   useEffect(() => {
      try {
         const getDataUser = async () => {
            await getData(getUser + `/${localStorage.getItem('id')}`, localStorage.getItem('accessToken')).then(
               (res) => {
                  console.log(res);
                  setUser(res.data.result.user);
                  document.getElementById('myprofile-post').innerText = res.data.result.user.POSTS;
                  document.getElementById('myprofile-followers').innerText = res.data.result.user.FOLLOWERS;
                  document.getElementById('myprofile-following').innerText = res.data.result.user.FOLLOWING;
                  document.getElementById('myprofile-address').innerText = 'Address: ' + res.data.result.user.ADDRESS;
               },
            );

            await getData(getUserPost + `/${localStorage.getItem('id')}`, localStorage.getItem('accessToken')).then(
               (res) => {
                  console.log(res.data.result.comments);
                  setListPost(res.data.result.comments);
               },
            );
         };
         getDataUser();
      } catch (e) {
         console.log(e);
      }
   }, []);

   return (
      <section class="h-100 gradient-custom-2">
         <div class="container py-5 h-100">
            {post ? (
               <StatusPost
                  post={post}
                  onClickClose={() => {
                     setPost();
                  }}
               />
            ) : (
               ''
            )}
            <div class="row d-flex justify-content-center align-items-center h-100">
               <div class="col col-lg-9 col-xl-7">
                  <div class="card">
                     <HeaderMyProfile
                        bgImg={user ? user.AVATAR : ''}
                        chooseFileBgImg={chooseFileBgImg}
                        username={user ? user.USERNAME : ''}
                        fullname={user ? user.FULLNAME : ''}
                     />
                     <div class="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                        <div class="d-flex justify-content-end text-center py-1">
                           <div>
                              <p class="mb-1 h5" id="myprofile-post"></p>
                              <p class="small text-muted mb-0">Photos</p>
                           </div>
                           <div class="px-3">
                              <p class="mb-1 h5" id="myprofile-followers"></p>
                              <p class="small text-muted mb-0">Followers</p>
                           </div>
                           <div>
                              <p class="mb-1 h5" id="myprofile-following"></p>
                              <p class="small text-muted mb-0">Following</p>
                           </div>
                        </div>
                     </div>
                     <div class="card-body p-4 text-black">
                        <div class="mb-5">
                           <p class="lead fw-normal mb-1">About</p>
                           <div class="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                              {/* <p class="font-italic mb-1">Web Developer</p> */}
                              <p class="font-italic mb-1" id="myprofile-address"></p>
                              {/* <p class="font-italic mb-0">Photographer</p> */}
                           </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center mb-4">
                           <p class="lead fw-normal mb-0">Recent photos</p>
                           <p class="mb-0">
                              <div class="text-muted" style={{ cursor: 'pointer' }} onClick={handleShowAll}>
                                 Show all
                              </div>
                           </p>
                        </div>
                        <div class="d-flex flex-wrap">
                           {listPost.length == 0
                              ? ''
                              : listPost.map((item, index) => {
                                   if (index > 3) {
                                      return (
                                         <img
                                            src={!item ? '' : item.POST_IMAGEs[0].IMAGE}
                                            alt="image 1"
                                            class="rounded-3 m-1 img-post-hidden"
                                            hidden
                                            style={{ width: '224px', cursor: 'pointer' }}
                                            onClick={() => {
                                               handleStatusPost(item);
                                            }}
                                         />
                                      );
                                   }
                                   return (
                                      <img
                                         src={!item ? '' : item.POST_IMAGEs[0].IMAGE}
                                         alt="image 1"
                                         class="rounded-3 m-1"
                                         style={{ width: '224px', cursor: 'pointer' }}
                                         onClick={() => {
                                            handleStatusPost(item);
                                         }}
                                      />
                                   );
                                })}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default MyProfile;
