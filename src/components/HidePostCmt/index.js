function HidePostCmt() {
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
                  <a class="dropdown-item cursor-pointer">Hide post</a>
               </li>
               <li class="">
                  <a class="dropdown-item cursor-pointer">Report post</a>
               </li>
            </ul>
         }
      </div>
   );
}

export default HidePostCmt;
