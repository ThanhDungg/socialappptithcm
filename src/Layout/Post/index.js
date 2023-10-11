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

const cx = classNames.bind(style);

function Post() {
   const src = 'https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien.jpeg';

   const [show, setShow] = useState(false);

   const forcusMore = () => {
      setShow(!show);
   };

   return (
      <div class="card">
         <div class="card-header border-0 pb-0">
            <HeaderPostCmt />
         </div>
         <div class="card-body">
            <p>
               I'm thrilled to share that I've completed a graduate certificate course in project management with the
               president's honor roll.
            </p>
            <PostImg />
            <ul class="nav nav-stack py-3 small">
               <li class="nav-item pe-auto">
                  <Icon.Heart />
                  <Icon.HeartFill />
                  Likes (56)
               </li>
               <li class="nav-item ms-4">Comments (12)</li>
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
            <AddCmt />
            {/* <ul class="comment-wrap list-unstyled">
               <CommentHasRepCmt />
               <CommentNoRepCmt />
            </ul>{' '} */}
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
