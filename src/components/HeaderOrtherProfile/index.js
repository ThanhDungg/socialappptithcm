function HeaderOrtherProfile({ bgImg, chooseFileBgImg }) {
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
                  <button
                     type="button"
                     class="btn btn-light bg-primary"
                     data-mdb-ripple-color="dark"
                     style={{ zIndex: 1 }}
                  >
                     Add Friend
                  </button>
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
                  <button
                     type="button"
                     class="btn btn-light bg-primary"
                     data-mdb-ripple-color="dark"
                     style={{ zIndex: 1 }}
                  >
                     Add Friend
                  </button>
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
                  <h5>Andy Horwitz</h5>
                  <p>New York</p>
               </div>
            </div>
         )}
      </>
   );
}

export default HeaderOrtherProfile;
