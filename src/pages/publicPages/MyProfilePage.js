import { useNavigate } from 'react-router-dom';
import MyProfile from '../../Layout/MyProfile';
import SideBar from '../../Layout/Sidebar';
import { useEffect } from 'react';

function MyProfilePage() {
   const navigate = useNavigate();

   useEffect(() => {
      if (localStorage.getItem('accessToken')) {
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
                  <MyProfile />
               </div>
            </div>
         </div>
      </div>
   );
}

export default MyProfilePage;
