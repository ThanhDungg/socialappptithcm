import User from '../../components/User';

function FormListUserSearch() {
   return (
      <div class="container ">
         <div class="position-absolute" style={{ zIndex: 2 }}>
            <div class="col-lg-7 w-100">
               <div class="articles card">
                  {/* <div class="card-header d-flex align-items-center">
                     <h2 class="h3">Trending Articles </h2>
                     <div class="badge badge-rounded bg-green">4 New </div>
                  </div> */}
                  <div class="card-body p-1 bg-light">
                     <User />
                     <User />
                     {/* <div class="btn btn-light d-flex align-items-center">
                        <div class="image">
                           <img
                              src="https://bootdey.com/img/Content/avatar/avatar2.png"
                              alt="..."
                              class="img-fluid rounded-circle"
                           />
                        </div>
                        <div class="text">
                           <a href="#">
                              <h3 class="h5">Lorem Ipsum Dolor</h3>
                           </a>
                           <small>Posted on 5th June 2017 by Aria Smith. </small>
                        </div>
                     </div> */}

                     <div class="item d-flex align-items-center">
                        <div style={{ width: '332px' }}></div>
                        {/* <div class="image">
                           <img
                              src="https://bootdey.com/img/Content/avatar/avatar6.png"
                              alt="..."
                              class="img-fluid rounded-circle"
                           />
                        </div>
                        <div class="text">
                           <a href="#">
                              <h3 class="h5">Lorem Ipsum Dolor</h3>
                           </a>
                           <small>Posted on 5th June 2017 by Sam Martinez. </small>
                        </div> */}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default FormListUserSearch;
