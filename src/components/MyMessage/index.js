function MyMessage({ msg, time, img }) {
   return (
      <div class="chat-message-right pb-4">
         <div>
            <img src={`${img}`} class="rounded-circle mr-1" alt="Chris Wood" width="40" height="40" />
            <div class="text-muted small text-nowrap mt-2">{time}</div>
         </div>
         <div class="flex-shrink-1 bg-primary rounded py-2 px-3 mr-3">
            <div class="font-weight-bold mb-1">
               <strong>You</strong>
            </div>
            {msg}
         </div>
      </div>
   );
}

export default MyMessage;
