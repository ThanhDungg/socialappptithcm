import { Link } from 'react-router-dom';
import Img from '../Avatar';
import HidePostCmt from '../HidePostCmt';
import { useEffect } from 'react';
import { countDate } from '../../config';
import DeletePost from '../DeletePost';

function HeaderPostCmt({ post, hidePost = true, onClickDelete }) {
   const src = 'https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien.jpeg';

   useEffect(() => {
      countDate(post, `time-post-${post.ID}`);
   }, []);

   return (
      <div class="d-flex align-items-center justify-content-between">
         <div class="d-flex">
            <Link class="text-decoration-none" to={'/profile/0'}>
               <div class="">
                  <div class="nav nav-divider btn btn-light p-2">
                     <Img src={post ? post.USER.AVATAR : ''} />
                     <h6 class="d-flex align-items-center ms-2">
                        {post ? post.USER.FULLNAME : ''}
                        <span class="nav-item small ms-4" id={`time-post-${post.ID}`}></span>
                     </h6>
                  </div>
                  {/* <p class="mb-0 small">Web Developer at Webestica</p> */}
               </div>
            </Link>
         </div>
         {hidePost && <HidePostCmt />}
         {!hidePost && <DeletePost onClick={onClickDelete} />}
      </div>
   );
}

export default HeaderPostCmt;
