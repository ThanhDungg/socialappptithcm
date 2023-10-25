import { useParams } from 'react-router-dom';
import { follow, getData, unfollow } from '../../config/fetchData';

function HeaderOrtherProfile({ user }) {
   const { id } = useParams();
   const handleUnFollow = async () => {
      try {
         console.log(id);
         await getData(unfollow + `/${id}`, localStorage.getItem('accessToken')).then((res) => {
            console.log(res);
         });
      } catch (e) {
         console.log(e);
      }
   };

   const handleFollow = async () => {
      try {
         console.log(id);
         await getData(follow + `/${id}`, localStorage.getItem('accessToken')).then((res) => {
            console.log(res);
            if (res.data.code == 200) {
               user.ISFOLLOWED = 1;
            }
         });
      } catch (e) {
         console.log(e);
      }
   };

   return (
      <div
         class="rounded-top text-white d-flex flex-row  position-relative"
         style={{
            backgroundColor: '#000',
            height: '200px',
         }}
      >
         <div class="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
            <img
               src={!user ? '' : user.AVATAR}
               alt="Generic placeholder image"
               class="img-fluid img-thumbnail mt-4 mb-2"
               style={{ width: '150px', zIndex: 1 }}
            />
            {!user ? (
               ''
            ) : !user.ISFOLLOWED ? (
               <button
                  type="button"
                  class="btn btn-light border-gray border"
                  data-mdb-ripple-color="dark"
                  style={{ zIndex: 1 }}
                  onClick={handleUnFollow}
               >
                  Following
               </button>
            ) : (
               <button
                  type="button"
                  class="btn btn-light bg-primary"
                  data-mdb-ripple-color="dark"
                  style={{ zIndex: 1 }}
                  onClick={handleFollow}
               >
                  Follow
               </button>
            )}

            <button
               type="button"
               class="btn btn-light border-gray border"
               data-mdb-ripple-color="dark"
               style={{ zIndex: 1 }}
            >
               Message
            </button>
         </div>

         <div class="ms-3 text-white" style={{ marginTop: '130px', zIndex: 2 }}>
            <h5>{user ? user.FULLNAME : ''}</h5>
            <p>{user ? user.USERNAME : ''}</p>
         </div>
      </div>
   );
}

export default HeaderOrtherProfile;
