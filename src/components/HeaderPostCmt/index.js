import { Link } from 'react-router-dom';
import Img from '../Avatar';
import HidePostCmt from '../HidePostCmt';

function HeaderPostCmt() {
   const src = 'https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien.jpeg';

   return (
      <Link class="text-decoration-none" to={'/profile/0'}>
         <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex">
               <div class="">
                  <div class="nav nav-divider btn btn-light p-2">
                     <Img src={src} />
                     <h6 class="d-flex align-items-center ms-2">
                        Dung
                        <span class="nav-item small ms-4"> 2hr</span>
                     </h6>
                  </div>
                  <p class="mb-0 small">Web Developer at Webestica</p>
               </div>
            </div>
            <HidePostCmt />
         </div>
      </Link>
   );
}

export default HeaderPostCmt;
