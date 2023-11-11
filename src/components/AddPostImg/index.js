import { src } from '../../config';

function AddPostImg({ img, handleDeleteAddImgEdit, index }) {
   return (
      <div className="m-2" id={`edit-img-${img.ID}`} style={{ position: 'relative' }}>
         <label>
            <button
               type="button"
               class="border-0 text-white "
               aria-label="Close"
               style={{ position: 'absolute', backgroundColor: 'transparent', fontSize: '24px' }}
               onClick={() => {
                  handleDeleteAddImgEdit(index);
               }}
            >
               X
            </button>
            <img src={img.IMAGE} style={{ width: '200px', height: '200px' }} />
         </label>
      </div>
   );
}

export default AddPostImg;
