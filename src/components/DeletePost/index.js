function DeletePost({ handleDeletePost, handleEditPost }) {
   return (
      <div class="dropdown">
         <button
            class="justify-content-end justify-content-top btn btn-light dropdown-toggle"
            id="dropdownMenuButton1"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
         ></button>
         {
            <ul class=" me-2 dropdown-menu" aria-labelledby="dropdownMenuButton1">
               <li class="">
                  <button class="dropdown-item cursor-pointer" onClick={handleEditPost}>
                     Edit post
                  </button>
               </li>
               <li class="">
                  <button
                     class="dropdown-item cursor-pointer"
                     onClick={() => {
                        handleDeletePost();
                     }}
                  >
                     Delete post
                  </button>
               </li>
            </ul>
         }
      </div>
   );
}

export default DeletePost;
