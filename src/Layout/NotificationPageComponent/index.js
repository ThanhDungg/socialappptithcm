import { useEffect, useState } from 'react';
import NotiDetails from '../../components/NotiDetails';
import './NotificationPageComponent.css';
import { getData, getNoti, getStatusPost } from '../../config/fetchData';
import StatusPost from '../StatusPost';

function NotificationPageComponent() {
   const [listNoti, setListNoti] = useState([]);
   const [statusPost, setStatusPost] = useState();

   const [stateNoti, setStateNoti] = useState(0);

   const handleShowAll = () => {
      try {
         if (stateNoti == 0) {
            let temp = document.querySelectorAll('.list-noti-item');
            for (let i = 0; i < temp.length; i++) {
               temp[i].style.display = 'block';
            }
            setStateNoti(1);
         } else {
            let temp = document.querySelectorAll('.list-noti-item');
            for (let i = 0; i < temp.length; i++) {
               temp[i].style.display = 'none';
            }
            setStateNoti(0);
         }
      } catch (e) {
         console.log(e);
      }
   };

   const handleStatusPost = async (id) => {
      try {
         await getData(getStatusPost + id, localStorage.getItem('accessToken')).then((res) => {
            console.log(res);
            setStatusPost(res.data.result.post);
         });
      } catch (e) {
         console.log(e);
      }
   };

   const handleClose = () => {
      setStatusPost();
   };

   useEffect(() => {
      try {
         const fetchData = async () => {
            await getData(getNoti, localStorage.getItem('accessToken')).then((res) => {
               console.log(res);
               if (res.data.code == 201) {
                  setListNoti(res.data.result.notifications);
               }
            });
         };
         fetchData();
      } catch (e) {
         console.log(e);
      }
   }, []);
   return (
      <section class="section-50">
         <div class="container">
            <h3 class="m-b-50 heading-line">
               Notifications <i class="fa fa-bell text-muted"></i>
            </h3>
            {!statusPost ? '' : <StatusPost post={statusPost} header={false} onClickClose={handleClose} />}
            <div class="notification-ui_dd-content">
               {listNoti.length == 0
                  ? ''
                  : listNoti.map((item, index) => {
                       if (index < 5) {
                          return <NotiDetails noti={item} handleStatusPost={handleStatusPost} />;
                       } else {
                          return <NotiDetails noti={item} handleStatusPost={handleStatusPost} hidden={true} />;
                       }
                    })}
            </div>

            <div class="text-center">
               <button class="btn btn-primary border" onClick={handleShowAll}>
                  Load more activity
               </button>
            </div>
         </div>
      </section>
   );
}

export default NotificationPageComponent;
