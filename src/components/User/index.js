import { Link } from 'react-router-dom';
import style from './User.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function User({ user }) {
   const src = 'https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien.jpeg';
   console.log(user);

   return (
      <Link class="text-decoration-none " to={`/profile/${user.ID}`}>
         <div class="hstack gap-2 mb-3  btn btn-light bg-image border">
            <div class="avatar">
               <img class="avatar-img" className={cx('avatar-img')} src={!user ? src : user.AVATAR} alt="" />
            </div>
            <div class="overflow-hidden">
               {!user ? '' : user.FULLNAME}{' '}
               <p class="mb-0 small text-truncate text-start">{!user ? '' : user.USERNAME}</p>
            </div>
         </div>
      </Link>
   );
}

export default User;
