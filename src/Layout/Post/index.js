import classNames from 'classnames/bind';
import style from './Post.module.scss';
import Img from '../../components/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import AddCmt from '../../components/AddCmt';
import { Link } from 'react-router-dom';
import HidePostCmt from '../../components/HidePostCmt';
import HeaderPostCmt from '../../components/HeaderPostCmt';
import Comment from '../../components/Comment';
import LoadMoreRepCmt from '../../components/LoadMoreRepCmt';
import CommentHasRepCmt from '../CommentHasRepCmt';
import CommentNoRepCmt from '../CommentNoRepCmt';
import PostImg from '../../components/ImgPost';
import * as Icon from 'react-bootstrap-icons';
import { deleteData, getComment, getData, likePost, postComment, postData } from '../../config/fetchData';

const cx = classNames.bind(style);

function Post({ post }) {
   const src = 'https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien.jpeg';

   const [show, setShow] = useState(false);
   const [showCmt, setShowCmt] = useState(false);

   const [listCmt, setListCmt] = useState([]);

   const [isLike, setIsLike] = useState(parseInt(post.ISLIKED));

   const forcusMore = () => {
      setShow(!show);
   };

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
            ).then((res) => {
               console.log(res);
            });
         } catch (e) {}
      }
   };

   return (
      <div class="card">
         <div class="card-header border-0 pb-0">
            <HeaderPostCmt post={post} />
         </div>
         <div class="card-body">
            <p>{post.CAPTION}</p>
            {post.POST_IMAGEs.length == 0 ? '' : <PostImg listImg1={post.POST_IMAGEs} />}
            <ul class="nav nav-stack py-3 small">
               <li class="nav-item pe-auto">
                  {isLike ? <Icon.HeartFill onClick={handleUnLikePost} /> : <Icon.Heart onClick={handleLikePost} />}
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
            {showCmt
               ? listCmt.length == 0
                  ? ''
                  : listCmt.map((cmt) => {
                       if (cmt.COMMENTs.length == 0) {
                          return <CommentNoRepCmt comment={cmt} />;
                       } else {
                          return <CommentHasRepCmt comment={cmt} />;
                       }
                    })
               : ''}
         </div>
         {/* <div class="card-footer border-0 pt-0">
            <a
               href="#!"
               role="button"
               class="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center"
               data-bs-toggle="button"
               aria-pressed="true"
            >
               <div class="spinner-dots me-2">
                  <span class="spinner-dot"></span>
                  <span class="spinner-dot"></span>
                  <span class="spinner-dot"></span>
               </div>
               Load more comments
            </a>
         </div> */}
      </div>
   );
}

export default Post;
