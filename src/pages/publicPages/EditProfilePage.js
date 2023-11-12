import { useEffect } from 'react';
import EditProfile from '../../Layout/EditProfile';
import SideBar from '../../Layout/Sidebar';
import { useNavigate } from 'react-router-dom';
import { getData, getUser } from '../../config/fetchData';

function EditProfilePage() {
   const navigate = useNavigate();

   useEffect(() => {
      if (localStorage.getItem('accessToken')) {
         const getDataUser = async () => {
            await getData(getUser + `/${localStorage.getItem('id')}`, localStorage.getItem('accessToken')).then(
               (res) => {
                  if (res.data.message == 'TokenExpiredError') {
                     navigate('/');
                  }
               },
            );
         };
         getDataUser();
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
                  <EditProfile />
               </div>
            </div>
         </div>
      </div>
   );
}

export default EditProfilePage;
