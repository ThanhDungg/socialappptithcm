function OrtherMessage({ msg, time, img, name, type }) {
   return (
      <div class=" pb-4">
         <div class="chat-message-left">
            <div>
               {/* <img src={`${img}`} class="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40" /> */}
               {/* <div class="text-muted small text-nowrap mt-2">{time}</div> */}
            </div>
            <div class="flex-shrink-1 bg-white rounded py-2 px-3 ml-3">
               <div class="font-weight-bold mb-1">{/* <strong>{name}</strong> */}</div>
               {type == 'text' ? msg : <img style={{ width: '200px' }} src={msg} />}
            </div>
            {/* {time} */}
         </div>
         <div class="text-muted small text-nowrap">{time}</div>
      </div>
   );
}

export default OrtherMessage;
