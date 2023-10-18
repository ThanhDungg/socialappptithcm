import { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';

function EditProfile() {
   const [Alt, setAlt] = useState();

   const chooseFile = (input) => {
      const file = input.target.files[0];

      file.preview = URL.createObjectURL(file);

      setAlt(file);
   };

   return (
      <div class="container bootstrap snippets bootdeys">
         <div class="row">
            <div class="col-xs-12 col-sm-9">
               <form class="form-horizontal">
                  <div class="panel panel-default">
                     <div class="panel-body text-center">
                        <img
                           src={Alt ? Alt.preview : 'https://bootdey.com/img/Content/avatar/avatar6.png'}
                           class="card-img rounded-circle"
                           style={{ width: '40%' }}
                           alt="User avatar"
                        />
                        <div>
                           <label for="input-info-img">
                              <input type="file" id="input-info-img" hidden onChange={chooseFile} />
                              <Icon.Image />
                           </label>
                        </div>
                     </div>
                  </div>

                  <div class="panel panel-default">
                     <div class="panel-heading">
                        <h4 class="panel-title">Infomation</h4>
                     </div>
                     <div class="panel-body">
                        <div class="form-group">
                           <label class="col-sm-2 control-label">First name</label>
                           <div class="col-sm-10">
                              <input type="tel" class="form-control" placeholder="First name..." />
                           </div>
                        </div>
                        <div class="form-group">
                           <label class="col-sm-2 control-label">Last name</label>
                           <div class="col-sm-10">
                              <input type="tel" class="form-control" placeholder="Last name..." />
                           </div>
                        </div>
                        
                        <div class="form-group">
                           <div class="col-sm-10 col-sm-offset-2">
                              <button type="submit" class="btn btn-primary">
                                 Submit
                              </button>
                              {/* <button type="reset" class="btn btn-default">
                                 Cancel
                              </button> */}
                           </div>
                        </div>
                     </div>
                  </div>

                  <div class="panel panel-default">
                     <div class="panel-heading">
                        <h4 class="panel-title">Security</h4>
                     </div>
                     <div class="panel-body">
                        <div class="form-group">
                           <label class="col-sm-2 control-label">Password</label>
                           <div class="col-sm-10">
                              <input type="password" class="form-control" placeholder="Current password..." />
                           </div>
                        </div>
                        <div class="form-group">
                           <label class="col-sm-2 control-label">New password</label>
                           <div class="col-sm-10">
                              <input type="password" class="form-control" placeholder="New password..." />
                           </div>
                        </div>

                        <div class="form-group">
                           <div class="col-sm-10 col-sm-offset-2">
                              <button type="submit" class="btn btn-primary">
                                 Submit
                              </button>
                              {/* <button type="reset" class="btn btn-default">
                                 Cancel
                              </button> */}
                           </div>
                        </div>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}

export default EditProfile;
