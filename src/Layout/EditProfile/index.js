import * as Icon from 'react-bootstrap-icons';

function EditProfile() {
   return (
      <div class="container bootstrap snippets bootdeys">
         <div class="row">
            <div class="col-xs-12 col-sm-9">
               <form class="form-horizontal">
                  <div class="panel panel-default">
                     <div class="panel-body text-center">
                        <img
                           src="https://bootdey.com/img/Content/avatar/avatar6.png"
                           class="img-circle profile-avatar rounded-circle"
                           alt="User avatar"
                        />
                        <div>
                           <label for="input-info-img">
                              <input type="file" id="input-info-img" hidden />
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
                           <label class="col-sm-2 control-label">User name</label>
                           <div class="col-sm-10">
                              <input type="tel" class="form-control" placeholder="User name..." />
                           </div>
                        </div>
                        <div class="form-group">
                           <label class="col-sm-2 control-label">Phone number</label>
                           <div class="col-sm-10">
                              <input type="tel" class="form-control" placeholder="Phone number..." />
                           </div>
                        </div>

                        <div class="form-group">
                           <label class="col-sm-2 control-label">Description</label>
                           <div class="col-sm-10">
                              <textarea rows="3" class="form-control" placeholder="Description..."></textarea>
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
