import { useEffect, useState } from 'react';
import CreatePost from '../../Layout/CreatePost';
import Footer from '../../Layout/Footer';
import Post from '../../Layout/Post';
import SideBar from '../../Layout/Sidebar';
import Story from '../../Layout/Story';
import Suggested from '../../Layout/Suggetted';
import { getData, home_Url } from '../../config/fetchData';
import { useNavigate } from 'react-router-dom';

function HomePage() {
   const [listPost, setListPost] = useState([]);

   const [state, setState] = useState(0);

   const navigate = useNavigate();

   useEffect(() => {
      if (localStorage.getItem('accessToken')) {
         const getDataHome = async () => {
            try {
               await getData(home_Url, localStorage.getItem('accessToken')).then((res) => {
                  if (res.data.message == 'TokenExpiredError') {
                     navigate('/');
                  } else {
                     setListPost(res.data.result.newFeeds);
                  }
                  console.log(res);
               });
            } catch (e) {}
         };
         getDataHome();
      } else {
         navigate('/');
      }
   }, [state]);

   return (
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
               {/* <Story /> */}
               <CreatePost setState={setState} />
               {listPost.length == 0
                  ? ''
                  : listPost.map((item) => {
                       return <Post post={item} />;
                    })}
            </div>

            <Suggested />
         </div>
      </div>
   );
}

export default HomePage;
