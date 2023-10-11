function OrtherMessage({ msg, time, img, name }) {
   return (
      <div class="chat-message-left pb-4">
         <div>
            <img src={`${img}`} class="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40" />
            <div class="text-muted small text-nowrap mt-2">{time}</div>
         </div>
         <div class="flex-shrink-1 bg-white rounded py-2 px-3 ml-3">
            <div class="font-weight-bold mb-1">
               <strong>{name}</strong>
            </div>
            {msg}
         </div>
      </div>
   );
}

export default OrtherMessage;
