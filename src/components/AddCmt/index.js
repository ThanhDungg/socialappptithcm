import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function AddCmt({ placeholder = 'Add a comment...', onClick, id }) {
   return (
      <div class="d-flex mb-3">
         <form class="nav nav-item w-100 position-relative">
            <textarea
               data-autoresize=""
               class="form-control pe-5 bg-light"
               rows="1"
               placeholder={placeholder}
               id={id}
            ></textarea>
            <button
               class="nav-link bg-transparent px-3 position-absolute top-50 end-0 translate-middle-y border-0"
               type="button"
            >
               <FontAwesomeIcon icon={faPaperPlane} onClick={onClick} />
            </button>
         </form>
      </div>
   );
}

export default AddCmt;
