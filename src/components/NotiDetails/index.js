function NotiDetails() {
   return (
      <div class="notification-list notification-list--unread btn btn-light d-flex border">
         <div class="notification-list_content text-start">
            <div class="notification-list_img">
               <img src="https://i.imgur.com/zYxDCQT.jpg" alt="user" />
            </div>
            <div class="notification-list_detail">
               <p>
                  <b>John Doe</b> reacted to your post
               </p>
               <p class="text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, dolorem.</p>
               <p class="text-muted">
                  <small>10 mins ago</small>
               </p>
            </div>
         </div>
         <div class="notification-list_feature-img text-end">
            <img src="https://i.imgur.com/AbZqFnR.jpg" alt="Feature image" />
         </div>
      </div>
   );
}

export default NotiDetails;
