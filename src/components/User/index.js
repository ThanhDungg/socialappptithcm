import { Link } from 'react-router-dom';
import style from './User.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function User() {
   const src = 'https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien.jpeg';

   return (
      <Link class="text-decoration-none" to={'/profile/0'}>
         <div class="hstack gap-2 mb-3  btn btn-light bg-image" style={{ backgroundImage: `url(${src})` }}>
            <div class="avatar">
               <img class="avatar-img" className={cx('avatar-img')} src={src} alt="" />
            </div>
            <div class="overflow-hidden">
               Judy Nguyen <p class="mb-0 small text-truncate">News anchor</p>
            </div>
         </div>
      </Link>
   );
}

export default User;
