import ScrollToBottom from 'react-scroll-to-bottom';
import HeaderMessage from '../../components/HeaderMessage';
import MyMessage from '../../components/MyMessage';
import OrtherMessage from '../../components/OrtherMessage';
import './MessagePageComponent.css';
import * as Icon from 'react-bootstrap-icons';

function MessagePageComponent() {
   return (
      <main class="content">
         <div class="container p-0">
            <h3 class="m-b-50 heading-line">
               Message <i class="fa fa-bell text-muted"></i>
            </h3>

            <div class="card">
               <div class="row g-0">
                  <div class="col-12 col-lg-5 col-xl-3 border-right">
                     <div class="px-4 d-none d-md-block">
                        <div class="d-flex align-items-center">
                           <div class="flex-grow-1">
                              <input type="text" class="form-control my-3" placeholder="Search..." />
                           </div>
                        </div>
                     </div>

                     <a href="#" class="list-group-item list-group-item-action border-0 mb-2">
                        <div class="badge bg-success float-right">5</div>
                        <div class="d-flex align-items-start  btn btn-light text-start">
                           <img
                              src="https://bootdey.com/img/Content/avatar/avatar5.png"
                              class="rounded-circle mr-1"
                              alt="Vanessa Tucker"
                              width="40"
                              height="40"
                           />
                           <div class="flex-grow-1 ml-3">
                              Vanessa Tucker
                              <div class="small">
                                 <span class="fas fa-circle chat-online"></span> Online
                              </div>
                           </div>
                        </div>
                     </a>
                     <a href="#" class="list-group-item list-group-item-action border-0 mb-2">
                        <div class="badge bg-success float-right">2</div>
                        <div class="d-flex align-items-start  btn btn-light text-start">
                           <img
                              src="https://bootdey.com/img/Content/avatar/avatar2.png"
                              class="rounded-circle mr-1"
                              alt="William Harris"
                              width="40"
                              height="40"
                           />
                           <div class="flex-grow-1 ml-3">
                              William Harris
                              <div class="small">
                                 <span class="fas fa-circle chat-online"></span> Online
                              </div>
                           </div>
                        </div>
                     </a>
                     <a href="#" class="list-group-item list-group-item-action border-0 mb-2">
                        <div class="d-flex align-items-start  btn btn-light text-start">
                           <img
                              src="https://bootdey.com/img/Content/avatar/avatar3.png"
                              class="rounded-circle mr-1"
                              alt="Sharon Lessman"
                              width="40"
                              height="40"
                           />
                           <div class="flex-grow-1 ml-3">
                              Sharon Lessman
                              <div class="small">
                                 <span class="fas fa-circle chat-online"></span> Online
                              </div>
                           </div>
                        </div>
                     </a>
                     <a href="#" class="list-group-item list-group-item-action border-0 mb-2">
                        <div class="d-flex align-items-start  btn btn-light text-start">
                           <img
                              src="https://bootdey.com/img/Content/avatar/avatar4.png"
                              class="rounded-circle mr-1"
                              alt="Christina Mason"
                              width="40"
                              height="40"
                           />
                           <div class="flex-grow-1 ml-3">
                              Christina Mason
                              <div class="small">
                                 <span class="fas fa-circle chat-offline"></span> Offline
                              </div>
                           </div>
                        </div>
                     </a>
                     <a href="#" class="list-group-item list-group-item-action border-0 mb-2">
                        <div class="d-flex align-items-start  btn btn-light text-start">
                           <img
                              src="https://bootdey.com/img/Content/avatar/avatar5.png"
                              class="rounded-circle mr-1"
                              alt="Fiona Green"
                              width="40"
                              height="40"
                           />{' '}
                           <div class="flex-grow-1 ml-3">
                              Fiona Green
                              <div class="small">
                                 <span class="fas fa-circle chat-offline"></span> Offline
                              </div>
                           </div>
                        </div>
                     </a>
                     <a href="#" class="list-group-item list-group-item-action border-0 mb-2">
                        <div class="d-flex align-items-start  btn btn-light text-start">
                           <img
                              src="https://bootdey.com/img/Content/avatar/avatar2.png"
                              class="rounded-circle mr-1"
                              alt="Doris Wilder"
                              width="40"
                              height="40"
                           />
                           <div class="flex-grow-1 ml-3">
                              Doris Wilder
                              <div class="small">
                                 <span class="fas fa-circle chat-offline"></span> Offline
                              </div>
                           </div>
                        </div>
                     </a>
                     <a href="#" class="list-group-item list-group-item-action border-0 mb-2">
                        <div class="d-flex align-items-start  btn btn-light text-start">
                           <img
                              src="https://bootdey.com/img/Content/avatar/avatar4.png"
                              class="rounded-circle mr-1"
                              alt="Haley Kennedy"
                              width="40"
                              height="40"
                           />
                           <div class="flex-grow-1 ml-3">
                              Haley Kennedy
                              <div class="small">
                                 <span class="fas fa-circle chat-offline"></span> Offline
                              </div>
                           </div>
                        </div>
                     </a>
                     <a href="#" class="list-group-item list-group-item-action border-0 mb-2">
                        <div class="d-flex align-items-start  btn btn-light text-start">
                           <img
                              src="https://bootdey.com/img/Content/avatar/avatar3.png"
                              class="rounded-circle mr-1"
                              alt="Jennifer Chang"
                              width="40"
                              height="40"
                           />
                           <div class="flex-grow-1 ml-3">
                              Jennifer Chang
                              <div class="small">
                                 <span class="fas fa-circle chat-offline"></span> Offline
                              </div>
                           </div>
                        </div>
                     </a>
                     <hr class="d-block d-lg-none mt-1 mb-0" />
                  </div>
                  <div class="col-12 col-lg-7 col-xl-9 bg-light">
                     <div class="py-2 px-4 border-bottom d-none d-lg-block">
                        <HeaderMessage
                           img={'https://bootdey.com/img/Content/avatar/avatar1.png'}
                           name={'Sharon Lessman'}
                        />
                     </div>

                     <ScrollToBottom class="scrollbottom">
                        <div class="position-relative">
                           <div class="chat-messages p-4">
                              <MyMessage
                                 msg={'Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.'}
                                 time={'2:33 am'}
                                 img={'https://bootdey.com/img/Content/avatar/avatar1.png'}
                              />

                              <OrtherMessage
                                 msg={'Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.'}
                                 time={'2:34 am'}
                                 img={'https://bootdey.com/img/Content/avatar/avatar3.png'}
                                 name={'Sharon Lessman'}
                              />

                              <MyMessage
                                 msg={'Cum ea graeci tractatos.'}
                                 time={'2:35 am'}
                                 img={'https://bootdey.com/img/Content/avatar/avatar1.png'}
                              />

                              <div class="chat-message-left pb-4">
                                 <div>
                                    <img
                                       src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                       class="rounded-circle mr-1"
                                       alt="Sharon Lessman"
                                       width="40"
                                       height="40"
                                    />
                                    <div class="text-muted small text-nowrap mt-2">2:44 am</div>
                                 </div>
                                 <div class="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                                    <div class="font-weight-bold mb-1">Sharon Lessman</div>
                                    Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.
                                 </div>
                              </div>
                              <div class="chat-message-left pb-4">
                                 <div>
                                    <img
                                       src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                       class="rounded-circle mr-1"
                                       alt="Sharon Lessman"
                                       width="40"
                                       height="40"
                                    />
                                    <div class="text-muted small text-nowrap mt-2">2:44 am</div>
                                 </div>
                                 <div class="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                                    <div class="font-weight-bold mb-1">Sharon Lessman</div>
                                    Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.
                                 </div>
                              </div>
                           </div>
                        </div>
                     </ScrollToBottom>

                     <div class="flex-grow-0 py-3 px-4 border-top">
                        <div class="input-group">
                           <label for="msg-input-img">
                              <input type="file" hidden id="msg-input-img" />
                              <Icon.Image class="me-2 display-6" />
                           </label>
                           <input type="text" class="form-control" placeholder="Type your message" />
                           <button class="btn btn-primary">Send</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </main>
   );
}

export default MessagePageComponent;
