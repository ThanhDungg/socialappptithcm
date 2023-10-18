import { Link } from 'react-router-dom';
import Img from '../Avatar';
import { countDate, src } from '../../config';
import { useEffect, useState } from 'react';
import AddCmt from '../AddCmt';
import { postComment, postData } from '../../config/fetchData';

function Comment({ comment, post }) {
   const [showRepliesCmt, setShowRepliesCmt] = useState(false);

   const handleShowRepliesCmt = () => {
      setShowRepliesCmt(!showRepliesCmt);
   };

   const handleRepComment = async () => {
      console.log(document.getElementById(`rep-comment-input-${comment.ID}`).value);
      try {
         await postData(
            postComment + `${post.ID}/${comment.ID}`,
            {
               content: document.getElementById(`rep-comment-input-${comment.ID}`).value,
            },
            localStorage.getItem('accessToken'),
         ).then((res) => {
            console.log(res);
         });
      } catch (e) {}
   };

   useEffect(() => {
      try {
         if (comment.COMMENTs.length > 0) {
            comment.COMMENTs.map((cmt) => {
               {
                  countDate(cmt, `chil-comment-${cmt.ID}`);
               }
            });
         }
      } catch (e) {}
   }, [showRepliesCmt]);

   useEffect(() => {
      try {
         countDate(comment, `par-comment-${comment.ID}`);
      } catch (e) {}
   }, []);

   return (
      <div>
         <div class="position-relative">
            <div class="ms-2">
               <div class="bg-light rounded-start-top-0 p-3 rounded">
                  <div class="d-flex">
                     <div class="avatar avatar-xs">
                        <Link class="d-flex align-items-center text-decoration-none btn btn-light">
                           <Img src={comment.USER.AVATAR ? comment.USER.AVATAR : src} />
                           <div class="align-items-center ms-2 text-primary">
                              {comment ? comment.USER.FULLNAME : ''}
                           </div>
                           <small class="ms-2" id={`par-comment-${comment.ID}`}></small>
                        </Link>
                     </div>
                  </div>
                  <p class="small mb-0">{comment ? comment.CONTENT : ''}</p>
               </div>
               <ul class="nav nav-divider py-2 small">
                  {/* <li class="nav-item">
                     <a class="nav-link" href="#!">
                        {' '}
                        Like (3)
                     </a>
                  </li> */}
                  <li class="nav-item">
                     <a class="nav-link" href="#!">
                        {' '}
                        Reply
                     </a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" style={{ cursor: 'pointer' }} onClick={handleShowRepliesCmt}>
                        {' '}
                        {comment ? `View ${comment.COMMENTs.length} replies` : ''}
                     </a>
                  </li>
               </ul>
            </div>
         </div>
         {showRepliesCmt ? (
            comment.COMMENTs.length == 0 ? (
               <div class="ms-5">
                  <AddCmt
                     placeholder="Replies comment..."
                     id={`rep-comment-input-${comment.ID}`}
                     onClick={handleRepComment}
                  />
               </div>
            ) : (
               <div>
                  {comment.COMMENTs.map((cmt) => {
                     return (
                        <div class="ms-5 mb-3">
                           <div class="bg-light rounded-start-top-0 p-3 rounded">
                              <div class="d-flex">
                                 <div class="avatar avatar-xs">
                                    <Link class="d-flex align-items-center text-decoration-none btn btn-light">
                                       <Img src={cmt.USER.AVATAR ? cmt.USER.AVATAR : src} />
                                       <div class="align-items-center ms-2 text-primary">
                                          {cmt ? cmt.USER.FULLNAME : ''}
                                       </div>
                                       <small class="ms-2" id={`chil-comment-${cmt.ID}`}></small>
                                    </Link>
                                 </div>
                              </div>
                              <p class="small mb-0">{cmt ? cmt.CONTENT : ''}</p>
                           </div>
                           <div></div>
                        </div>
                     );
                  })}
                  <div class="ms-5">
                     <AddCmt
                        placeholder="Replies comment..."
                        id={`rep-comment-input-${comment.ID}`}
                        onClick={handleRepComment}
                     />
                  </div>
               </div>
            )
         ) : (
            ''
         )}
      </div>
   );
}

export default Comment;
