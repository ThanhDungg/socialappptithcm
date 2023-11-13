import AddCmt from '../../components/AddCmt';
import HeaderPostCmt from '../../components/HeaderPostCmt';
import PostImg from '../../components/ImgPost';
import * as Icon from 'react-bootstrap-icons';
import CommentHasRepCmt from '../CommentHasRepCmt';
import { useState } from 'react';
import { deleteData, getComment, getData, likePost, postComment, postData, putStatus } from '../../config/fetchData';
import CommentInProfile from '../../components/CommentInProfile';

function StatusPost({ post, onClickClose, handleEditPost, header = true }) {
   const [show, setShow] = useState(false);
   const [showCmt, setShowCmt] = useState(false);

   const [listCmt, setListCmt] = useState([]);

   const [isLike, setIsLike] = useState(parseInt(post.ISLIKED));

   const handleLikePost = async () => {
      try {
         await postData(likePost + `${post.ID}`, {}, localStorage.getItem('accessToken')).then((res) => {
            if (res.data.code == 201) {
               setIsLike(1);
            }
            console.log(res);
         });
      } catch (e) {}
   };

   const handleUnLikePost = async () => {
      try {
         await deleteData(likePost + `${post.ID}`, localStorage.getItem('accessToken')).then((res) => {
            if (res.data.code == 201) {
               setIsLike(0);
            }
            console.log(res);
         });
      } catch (e) {}
   };

   const handleShowCmt = async () => {
      await setShowCmt(!showCmt);
      // if (showCmt) {
      try {
         await getData(getComment + `${post.ID}`, localStorage.getItem('accessToken')).then((res) => {
            if (res.data.code == 200) {
               if (res.data.result.comments.length != 0) {
                  setListCmt(res.data.result.comments);
               }
            }
         });
      } catch (e) {}
      // }
   };

   const handleComment = async () => {
      if (document.getElementById(`par-comment-input-${post.ID}`).value == '') {
         return;
      } else {
         try {
            console.log(document.getElementById(`par-comment-input-${post.ID}`).value);
            await postData(
               postComment + `${post.ID}`,
               {
                  content: document.getElementById(`par-comment-input-${post.ID}`).value,
               },
               localStorage.getItem('accessToken'),
            ).then(async (res) => {
               console.log(res);
               if (res.data.code == 201) {
                  try {
                     document.getElementById(`par-comment-input-${post.ID}`).value = '';
                     await getData(getComment + `${post.ID}`, localStorage.getItem('accessToken')).then((res) => {
                        if (res.data.code == 200) {
                           if (res.data.result.comments.length != 0) {
                              setListCmt(res.data.result.comments);
                           }
                        }
                     });
                  } catch (e) {}
               }
            });
         } catch (e) {}
      }
   };

   const onClickDelete = async () => {
      if (!window.confirm('Do you want delete this post?')) {
         return;
      } else {
         try {
            await deleteData(putStatus + `${post.ID}`, localStorage.getItem('accessToken')).then((res) => {
               window.location.reload();
               console.log(res);
            });
         } catch (e) {
            console.log(e);
         }
      }
   };

   return (
      <div class="">
         <div class="card position-fixed" style={{ zIndex: 5, marginRight: '50%', marginTop: '-50px' }}>
            <div class="card-header border-0 text-end">
               <button class="btn btn-light text-danger" onClick={onClickClose}>
                  X
               </button>
               {header && (
                  <HeaderPostCmt
                     post={post}
                     hidePost={false}
                     onClickDelete={onClickDelete}
                     handleEditPost={handleEditPost}
                  />
               )}
            </div>
            <div class="card-body d-flex">
               <div>
                  <p>{post.CAPTION}</p>
                  {post.POST_IMAGEs.length == 0 ? '' : <PostImg listImg1={post.POST_IMAGEs} post={post} />}
                  <ul class="nav nav-stack py-3 small">
                     <li class="nav-item pe-auto">
                        {isLike ? (
                           <Icon.HeartFill onClick={handleUnLikePost} />
                        ) : (
                           <Icon.Heart onClick={handleLikePost} />
                        )}
                        Likes ({post.LIKES})
                     </li>
                     <li class="nav-item ms-4" style={{ cursor: 'pointer' }} onClick={handleShowCmt}>
                        Comments
                     </li>
                     <li class="nav-item dropdown ms-sm-auto">
                        <a
                           class="nav-link mb-0"
                           href="#"
                           id="cardShareAction"
                           data-bs-toggle="dropdown"
                           aria-expanded="false"
                        >
                           <i class="bi bi-reply-fill flip-horizontal ps-1"></i>Share (3)
                        </a>
                     </li>
                  </ul>
                  <hr />
                  <AddCmt id={`par-comment-input-${post.ID}`} onClick={handleComment} />
               </div>
               <div class="w-100" style={{ height: '600px', overflowY: 'scroll' }}>
                  {showCmt
                     ? listCmt.length == 0
                        ? ''
                        : listCmt.map((cmt) => {
                             return <CommentInProfile comment={cmt} post={post} />;
                          })
                     : ''}
               </div>
            </div>
         </div>
      </div>
   );
}

export default StatusPost;
