import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { countDate, setTime } from '../../config';

function NotiDetails({ hidden = false, noti, handleStatusPost }) {
   useEffect(() => {
      // countDate(noti, `noti-${noti.ID}`);
      document.getElementById(`noti-${noti.ID}`).innerText = setTime(noti.createdAt);
   }, []);
   return (
      <div>
         {!hidden ? (
            <div class={`notification-list notification-list--unread d-flex border`}>
               <div class="notification-list_content text-start">
                  <Link
                     to={noti.USER_ID == localStorage.getItem('id') ? `/myprofile` : `/profile/${noti.USER_ID}`}
                     class="notification-list_img"
                  >
                     <img src={noti.USER.AVATAR} alt="" />
                  </Link>
                  <div
                     class="notification-list_detail w-100"
                     style={{ cursor: 'pointer' }}
                     onClick={() => {
                        if (noti.TYPE == 'follow') {
                           return;
                        }
                        handleStatusPost(noti.POST_ID);
                     }}
                  >
                     <p>
                        <b>{noti.USER.USERNAME}</b> {noti.TYPE} to {noti.TYPE == 'follow' ? 'you' : 'your post'}
                     </p>
                     <p class="text-muted">
                        <small id={`noti-${noti.ID}`}></small>
                     </p>
                  </div>
               </div>
            </div>
         ) : (
            <div class="list-noti-item" style={{ display: 'none' }}>
               <div class={`notification-list notification-list--unread d-flex border`}>
                  <div class="notification-list_content text-start">
                     <Link
                        to={noti.USER_ID == localStorage.getItem('id') ? `/myprofile` : `/profile/${noti.USER_ID}`}
                        class="notification-list_img"
                     >
                        <img src={noti.USER.AVATAR} alt="" />
                     </Link>
                     <div
                        class="notification-list_detail"
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                           if (noti.TYPE == 'follow') {
                              return;
                           }
                           handleStatusPost(noti.POST_ID);
                        }}
                     >
                        <p>
                           <b>{noti.USER.USERNAME}</b> {noti.TYPE} to {noti.TYPE == 'follow' ? 'you' : 'your post'}
                        </p>

                        <p class="text-muted">
                           <small id={`noti-${noti.ID}`}>10 mins ago</small>
                        </p>
                     </div>
                  </div>
                  {/* <div class="notification-list_feature-img text-end">
                     <img src="https://i.imgur.com/AbZqFnR.jpg" alt="Feature image" />
                  </div> */}
               </div>
            </div>
         )}
      </div>
   );
}

export default NotiDetails;
