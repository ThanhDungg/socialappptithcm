import * as Icon from 'react-bootstrap-icons';

function Popur({ id, title, createStory = true, chooseFile, Alt, titleBtn, titleBody, onClick }) {
   return (
      <div class="modal fade" id={id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog">
            <div class="modal-content">
               <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                     {title}
                  </h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               {createStory ? (
                  <label for="input-story" class="modal-body">
                     {Alt ? (
                        <div class="card-img">
                           <img src={Alt.preview} class="card-img" />
                        </div>
                     ) : (
                        ''
                     )}
                     <input
                        type="file"
                        hidden
                        id="input-story"
                        onChange={(e) => {
                           chooseFile(e);
                        }}
                     />
                     <Icon.Image />
                  </label>
               ) : (
                  <div class="text-danger p-4">{titleBody}</div>
               )}
               <div class="text-danger" id="error-edit-employee"></div>

               <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="clear">
                     Close
                  </button>
                  <button type="button" class="btn btn-primary" onClick={onClick}>
                     {titleBtn}
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Popur;
