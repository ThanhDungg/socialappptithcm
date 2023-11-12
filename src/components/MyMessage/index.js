function MyMessage({ msg, time, img, type }) {
   return (
      <div class="pb-4">
         <div class="chat-message-right">
            <div>
               {/* <img src={`${img}`} class="rounded-circle mr-1" alt="Chris Wood" width="40" height="40" /> */}
               {/* <div class="text-muted small text-nowrap mt-2">{time}</div> */}
            </div>
            <div class="flex-shrink-1 bg-primary rounded py-2 px-3 mr-3 text-white" style={{ maxWidth: '400px' }}>
               <div class="font-weight-bold mb-1 ">{/* <strong>You</strong> */}</div>
               {type == 'text' ? msg : <img style={{ width: '200px' }} src={msg} />}
               {/* {msg} */}
            </div>
         </div>
         <div class="text-muted small text-end mt-2">{time}</div>
      </div>
   );
}

export default MyMessage;
