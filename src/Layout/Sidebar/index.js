import { Link, NavLink, useNavigate } from 'react-router-dom';

import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faBell,
   faBookBookmark,
   faBookmark,
   faGear,
   faHome,
   faMessage,
   faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Popur from '../../components/Popur';

const cx = classNames.bind(style);

function SideBar() {
   const src = 'https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien.jpeg';

   const navigate = useNavigate();

   const [Alt, setAlt] = useState();

   const chooseFile = (input) => {
      const file = input.target.files[0];

      file.preview = URL.createObjectURL(file);

      setAlt(file);
   };

   const handleLogOut = async () => {
      try {
         await localStorage.removeItem('accessToken');
         await navigate('/');
         await window.location.reload();
      } catch (e) {}
   };

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
                        <li
                           class="nav-item  btn btn-light text-start"
                           data-bs-target="#exampleModal"
                           data-bs-toggle="modal"
                        >
                           <Link class="nav-link text-muted">
                              <FontAwesomeIcon className={cx('icon')} icon={faPlus} />
                              <span>Create Story</span>
                           </Link>
                        </li>
                        <li class="nav-item  btn btn-light text-start" data-bs-target="#logout" data-bs-toggle="modal">
                           <Link class="nav-link text-muted">
                              <FontAwesomeIcon className={cx('icon')} icon={faGear} />
                              <span>Log out</span>
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>

               <Popur
                  id={'exampleModal'}
                  title={'Create story'}
                  chooseFile={chooseFile}
                  Alt={Alt}
                  titleBtn={'Post story'}
               />

               <Popur
                  id={'logout'}
                  title={'Logout'}
                  createStory={false}
                  titleBody={'Do you want logout?'}
                  titleBtn={'Log out'}
                  onClick={handleLogOut}
               />
            </div>
         </div>
      </nav>
   );
}

export default SideBar;
