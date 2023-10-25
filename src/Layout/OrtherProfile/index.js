import { useEffect, useState } from 'react';
import HeaderOrtherProfile from '../../components/HeaderOrtherProfile';
import { useParams } from 'react-router-dom';
import { getData, getUser, getUserPost } from '../../config/fetchData';
import StatusPost from '../StatusPost';

function OrtherProfile() {
   const [bgImg, setBgImg] = useState();
   const [user, setUser] = useState();
   const [listPost, setListPost] = useState([]);
   const [post, setPost] = useState(0);
   const [stateImg, setStateImg] = useState(0);
   const { id } = useParams();

   const handleStatusPost = (statusPost) => {
      setPost(statusPost);
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

   const chooseFileBgImg = (input) => {
      const file = input.target.files[0];

      file.preview = URL.createObjectURL(file);

      setBgImg(file.preview);
   };

   useEffect(() => {
      try {
         const getOrtherUser = async () => {
            await getData(getUser + `/${id}`, localStorage.getItem('accessToken')).then((res) => {
               setUser(res.data.result.user);
               document.getElementById('orther-photos').innerText = res.data.result.user.POSTS;
               document.getElementById('orther-followers').innerText = res.data.result.user.FOLLOWERS;
               document.getElementById('orther-following').innerText = res.data.result.user.FOLLOWING;
               document.getElementById('orther-address').innerText = res.data.result.user.ADDRESS;
            });
            await getData(getUserPost + `/${id}`, localStorage.getItem('accessToken')).then((res) => {
               setListPost(res.data.result.comments);
            });
         };
         getOrtherUser();
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
                     <HeaderOrtherProfile user={user} />
                     <div class="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                        <div class="d-flex justify-content-end text-center py-1">
                           <div>
                              <p class="mb-1 h5" id="orther-photos"></p>
                              <p class="small text-muted mb-0">Photos</p>
                           </div>
                           <div class="px-3">
                              <p class="mb-1 h5" id="orther-followers"></p>
                              <p class="small text-muted mb-0">Followers</p>
                           </div>
                           <div>
                              <p class="mb-1 h5" id="orther-following"></p>
                              <p class="small text-muted mb-0">Following</p>
                           </div>
                        </div>
                     </div>
                     <div class="card-body p-4 text-black">
                        <div class="mb-5">
                           <p class="lead fw-normal mb-1">About</p>
                           <div class="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                              <p class="font-italic mb-1" id="orther-address">
                                 Web Developer
                              </p>
                           </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center mb-4">
                           <p class="lead fw-normal mb-0">Recent photos</p>
                           <p class="mb-0" style={{ cursor: 'pointer' }}>
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

export default OrtherProfile;
