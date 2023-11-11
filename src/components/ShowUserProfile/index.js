import { Link } from 'react-router-dom';
import Img from '../Avatar';
import { useState } from 'react';
import { follow, getData, unfollow } from '../../config/fetchData';

function ShowUserProfile({ item }) {
   const [isFollow, setIsFollow] = useState(parseInt(item.ISFOLLOWED));

   const handleUnFollow = async () => {
      try {
         await getData(unfollow + `/${item.ID}`, localStorage.getItem('accessToken')).then((res) => {
            console.log(res);
            setIsFollow(false);
         });
      } catch (e) {
         console.log(e);
      }
   };

   const handleFollow = async () => {
      try {
         await getData(follow + `/${item.ID}`, localStorage.getItem('accessToken')).then((res) => {
            console.log(res);
            if (res.data.code == 200) {
               setIsFollow(true);
            }
         });
      } catch (e) {
         console.log(e);
      }
   };

   return (
      <div class="mb-2 border rounded-pill p-2 bg-light d-flex">
         <Link
            to={`/profile/${item.ID}`}
            class="d-flex text-dark"
            style={{ cursor: 'pointer', textDecoration: 'none' }}
            onClick={() => {
               console.log('xyz');
            }}
         >
            <Img src={item.AVATAR} />
            <div>
               <div>{item.USERNAME}</div>
               <div>{item.FULLNAME}</div>
            </div>
         </Link>
         <div class="text-end">
            {!isFollow ? (
               <button class="btn btn-primary ms-5 rounded-pill" onClick={handleFollow}>
                  Follow
               </button>
            ) : (
               <button class="btn btn-light ms-5 rounded-pill" onClick={handleUnFollow}>
                  Following
               </button>
            )}
         </div>
      </div>
   );
}

export default ShowUserProfile;
