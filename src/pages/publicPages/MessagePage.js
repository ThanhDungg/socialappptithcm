import { useContext, useEffect, useState } from 'react';
import MessagePageComponent from '../../Layout/MessagePageComponent';
import SideBar from '../../Layout/Sidebar';
import { useNavigate } from 'react-router-dom';
import { getConversation, getData } from '../../config/fetchData';
import { User } from '../../App';

function MessagePage() {
   const navigate = useNavigate();

   const [listConversation, setlistConversation] = useState([]);

   useEffect(() => {
      if (localStorage.getItem('accessToken')) {
         try {
            const getConversationList = async () => {
               await getData(getConversation, localStorage.getItem('accessToken')).then((res) => {
                  if (res.data.message == 'TokenExpiredError') {
                     navigate('/');
                  } else {
                     console.log(res);
                     if (res.data.code == 200) {
                        setlistConversation(res.data.result.conversations);
                     }
                  }
               });
            };
            getConversationList();
         } catch (e) {
            console.log(e);
         }
      } else {
         navigate('/');
      }
   }, []);
   return (
      <div>
         <div class="container">
            <div class="row g-4">
               <div class="col-lg-3 bg-light">
                  <div class="d-flex align-items-center d-lg-none">
                     <button
                        class="border-0 bg-transparent"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasSideNavbar"
                        aria-controls="offcanvasSideNavbar"
                     >
                        <span class="btn btn-primary">
                           <i class="fa-solid fa-sliders-h"></i>
                        </span>
                     </button>
                  </div>
                  <SideBar />
               </div>

               <div class="col-md-8 col-lg-6 vstack gap-4 w-50">
                  <MessagePageComponent listConver={listConversation} />
               </div>
            </div>
         </div>
      </div>
   );
}

export default MessagePage;
