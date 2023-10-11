import { Link } from 'react-router-dom';
import Img from '../Avatar';
import { src } from '../../config';

function Comment() {
   return (
      <div class="d-flex position-relative">
         <div class="ms-2">
            <div class="bg-light rounded-start-top-0 p-3 rounded">
               <div class="d-flex">
                  <div class="avatar avatar-xs">
                     <Link class="d-flex align-items-center text-decoration-none btn btn-light">
                        <Img src={src} />
                        <div class="align-items-center ms-2 text-primary">Frances Guerrero</div>
                        <small class="ms-2">5hr</small>
                     </Link>
                  </div>
               </div>
               <p class="small mb-0">
                  Removed demands expense account in outward tedious do. Particular way thoroughly unaffected
                  projection.
               </p>
            </div>
            <ul class="nav nav-divider py-2 small">
               <li class="nav-item">
                  <a class="nav-link" href="#!">
                     {' '}
                     Like (3)
                  </a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="#!">
                     {' '}
                     Reply
                  </a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="#!">
                     {' '}
                     View 5 replies
                  </a>
               </li>
            </ul>
         </div>
      </div>
   );
}

export default Comment;
