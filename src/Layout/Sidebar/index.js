import { Link, NavLink } from 'react-router-dom';

import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBookBookmark, faBookmark, faHome, faMessage } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function SideBar() {
   const src = 'https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien.jpeg';

   return (
      <nav class="navbar navbar-expand-lg mx-0">
         <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasSideNavbar">
            <div class="offcanvas-body d-block px-2 px-lg-0">
               <div class="card overflow-hidden">
                  <div class="card-body pt-0">
                     <ul class="nav nav-link-secondary flex-column fw-bold gap-2">
                        <li class="nav-item btn btn-light text-start">
                           <Link class=" nav-link text-muted text-decoration-none" to={`/myprofile`}>
                              <img src={src} className={cx('avatar')} /> Dũng
                           </Link>
                        </li>
                        <li class="nav-item  btn btn-light text-start">
                           <Link class="nav-link text-muted" to={`/home`}>
                              <FontAwesomeIcon className={cx('icon')} icon={faHome} />
                              <span>Home </span>
                           </Link>
                        </li>
                        <li class="nav-item  btn btn-light text-start">
                           <Link class="nav-link text-muted" to={`/notification`}>
                              <FontAwesomeIcon className={cx('icon')} icon={faBell} />
                              <span>Notifications </span>
                           </Link>
                        </li>
                        <li class="nav-item  btn btn-light text-start">
                           <Link class="nav-link text-muted" to={`/message/0`}>
                              <FontAwesomeIcon className={cx('icon')} icon={faMessage} />
                              <span>Message</span>
                           </Link>
                        </li>
                        <li class="nav-item  btn btn-light text-start">
                           <Link class="nav-link text-muted">
                              <FontAwesomeIcon className={cx('icon')} icon={faBookmark} />
                              <span>Bookmarks</span>
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>

               <ul class="nav small mt-4 justify-content-center lh-1">
                  <li class="nav-item">
                     <Link class="nav-link">About</Link>
                  </li>
                  <li class="nav-item">
                     <Link class="nav-link">Settings</Link>
                  </li>
                  <li class="nav-item">
                     <Link class="nav-link" target="_blank">
                        Support{' '}
                     </Link>
                  </li>
                  <li class="nav-item">
                     <Link class="nav-link" target="_blank">
                        Docs{' '}
                     </Link>
                  </li>
                  <li class="nav-item">
                     <Link class="nav-link">Help</Link>
                  </li>
                  <li class="nav-item">
                     <Link class="nav-link">Privacy &amp; terms</Link>
                  </li>
               </ul>
               <p class="small text-center mt-1">
                  ©2023{' '}
                  <Link class="text-body" target="_blank">
                     {' '}
                     Webestica{' '}
                  </Link>
               </p>
            </div>
         </div>
      </nav>
   );
}

export default SideBar;
