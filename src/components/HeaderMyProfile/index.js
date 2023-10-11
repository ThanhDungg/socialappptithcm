import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

function HeaderMyProfile({ bgImg, chooseFileBgImg }) {
   return (
      <>
         {bgImg ? (
            <div
               class="rounded-top text-white d-flex flex-row  position-relative"
               style={{
                  backgroundColor: '#000',
                  height: '200px',
                  backgroundImage: `url("${bgImg}")`,
               }}
            >
               <div class="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  <img
                     src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                     alt="Generic placeholder image"
                     class="img-fluid img-thumbnail mt-4 mb-2"
                     style={{ width: '150px', zIndex: 1 }}
                  />
                  <Link to={'/editprofile'}>
                     <button
                        type="button"
                        class="btn btn-outline-dark"
                        data-mdb-ripple-color="dark"
                        style={{ zIndex: 1 }}
                     >
                        Edit profile
                     </button>
                  </Link>
               </div>
               <label for="input-bg-img">
                  <Icon.Camera class="text-white position-absolute bottom-0 end-0" size={30} />
                  <input
                     type="file"
                     hidden
                     id="input-bg-img"
                     accept="image/png, image/jpeg"
                     onChange={(e) => {
                        chooseFileBgImg(e);
                     }}
                  />
               </label>
               <div class="ms-3 text-white" style={{ marginTop: '130px', zIndex: 2 }}>
                  <h5>Andy Horwitz</h5>
                  <p>New York</p>
               </div>
            </div>
         ) : (
            <div
               class="rounded-top text-white d-flex flex-row  position-relative"
               style={{
                  backgroundColor: '#000',
                  height: '200px',
               }}
            >
               <div class="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  <img
                     src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                     alt="Generic placeholder image"
                     class="img-fluid img-thumbnail mt-4 mb-2"
                     style={{ width: '150px', zIndex: 1 }}
                  />
                  <Link to={'/editprofile'}>
                     <button
                        type="button"
                        class="btn btn-outline-dark"
                        data-mdb-ripple-color="dark"
                        style={{ zIndex: 1 }}
                     >
                        Edit profile
                     </button>
                  </Link>
               </div>
               <label for="input-bg-img">
                  <Icon.Camera class="text-white position-absolute bottom-0 end-0" size={30} />
                  <input
                     type="file"
                     hidden
                     id="input-bg-img"
                     accept="image/png, image/jpeg"
                     onChange={(e) => {
                        chooseFileBgImg(e);
                     }}
                  />
               </label>
               <div class="ms-3 text-white" style={{ marginTop: '130px', zIndex: 2 }}>
                  <h5>Andy Horwitz</h5>
                  <p>New York</p>
               </div>
            </div>
         )}
      </>
   );
}

export default HeaderMyProfile;
