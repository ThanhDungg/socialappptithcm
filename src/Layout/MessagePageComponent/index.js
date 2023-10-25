import ScrollToBottom from 'react-scroll-to-bottom';
import HeaderMessage from '../../components/HeaderMessage';
import MyMessage from '../../components/MyMessage';
import OrtherMessage from '../../components/OrtherMessage';
import './MessagePageComponent.css';
import * as Icon from 'react-bootstrap-icons';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BASE_URL, getData, getMessage, getMessageConver, getUser, postData } from '../../config/fetchData';
import { countDate, setTime } from '../../config';
import { useContext } from 'react';
import { socketContext } from '../../App';

function MessagePageComponent({ listConver }) {
   const { idConver, idUser } = useParams();

   const socket = useContext(socketContext);

   const [user, setUser] = useState();
   const [Alt, setAlt] = useState();
   const [listMes, setListMes] = useState([]);

   const [page, setPage] = useState(0);

   const onScroll = (e) => {
      if (!e.currentTarget.scrollTop) {
         setTimeout(() => {
            setPage((page) => page + 1);
         }, 1000);
      }
   };

   const chooseFIle = (input) => {
      const file = input.target.files[0];

      file.preview = URL.createObjectURL(file);
      setAlt(file);
   };

   const handleSendMes = async (e) => {
      console.log(Alt);

      if (document.getElementById('input-message').value == '' && !Alt) {
         return;
      } else {
         try {
            if (Alt) {
               let formData = new FormData();
               await formData.append('file', Alt);
               await formData.append('type', 'image');
               await fetch(`${BASE_URL}${getMessageConver}/${idConver}`, {
                  method: 'POST',
                  body: formData,
                  headers: {
                     accessToken: localStorage.getItem('accessToken'),
                  },
               })
                  .then((res) => res.json())
                  .then((json) => {
                     if (json.code == 201) {
                        setAlt();
                     }
                  });
            } else {
               await postData(
                  getMessageConver + `/${idConver}`,
                  {
                     type: 'text',
                     content: document.getElementById('input-message').value,
                  },
                  localStorage.getItem('accessToken'),
               ).then(async (res) => {
                  console.log(res);
                  if (res.data.code == 201) {
                     // socket.on('new-message', async(data) => {
                     //    console.log(data);
                     // })
                     // await setListMes((list) => [
                     //    ...list,
                     //    {
                     //       CONTENT: document.getElementById('input-message').value,
                     //       CONVERSATION_ID: idConver,
                     //       SEND_USER_ID: 0,
                     //       TYPE: 'text',
                     //       createdAt: new Date(),
                     //    },
                     // ]);
                     // await setCurMes('');
                     // e.target.value = '';
                     document.getElementById('input-message').value = '';
                  }
               });
            }
            // console.log(document.getElementById('input-message').value);
         } catch (e) {
            console.log(e);
         }
      }
   };

   useEffect(() => {
      if (idUser != 0) {
         try {
            socket.on('new-messege', async (data) => {
               setListMes((list) => [...list, data]);
            });
         } catch (e) {
            console.log(e);
         }
      }
   }, [socket]);

   useEffect(() => {
      if (idUser != 0) {
         try {
            const getMesPage = async () => {
               await getData(getMessageConver + `/${idConver}?page=${page}`, localStorage.getItem('accessToken')).then(
                  (res) => {
                     if (res.data.code == 200) {
                        console.log(res);
                        setListMes((list) => res.data.result.messeges.reverse().concat(list));
                     }
                  },
               );
            };
            getMesPage();
         } catch (e) {
            console.log(e);
         }
      }
   }, [page]);

   useEffect(() => {
      try {
         const getMes = async () => {
            if (idConver == 0) {
               return;
            } else {
               await getData(getUser + `/${idUser}`, localStorage.getItem('accessToken')).then((res) => {
                  // console.log(res);
                  setUser(res.data.result.user);
               });

               await getData(getMessage + `/${idUser}?page=0`, localStorage.getItem('accessToken')).then((res) => {
                  if (res.data.code == 200) {
                     setListMes(res.data.result.messeges.reverse());
                  }
               });
            }
         };
         getMes();
      } catch (e) {
         console.log(e);
      }
   }, [idConver]);

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

                     {listConver.length == 0
                        ? ''
                        : listConver.map((conver) => {
                             return (
                                <Link
                                   to={`/message/${conver.CONVERSATION.ID}/${conver.CONVERSATION.USER_CONVERSATIONs[0].USER_ID}`}
                                   class="list-group-item list-group-item-action border-0 mb-2"
                                >
                                   <div class="badge bg-success float-right">5</div>
                                   <div class="d-flex align-items-start  btn btn-light text-start">
                                      <img
                                         src={conver ? conver.CONVERSATION.USER_CONVERSATIONs[0].USER.AVATAR : ''}
                                         class="rounded-circle mr-1"
                                         alt="Vanessa Tucker"
                                         width="40"
                                         height="40"
                                      />

                                      <div class="flex-grow-1 ml-3">
                                         <strong>
                                            {!conver ? '' : conver.CONVERSATION.USER_CONVERSATIONs[0].USER.FULLNAME}
                                         </strong>

                                         <div class="small">
                                            <span class="fas fa-circle chat-online">online</span>
                                         </div>
                                      </div>
                                   </div>
                                </Link>
                             );
                          })}

                     <hr class="d-block d-lg-none mt-1 mb-0" />
                  </div>
                  <div class="col-12 col-lg-7 col-xl-9 bg-light">
                     {idConver == 0 ? (
                        ''
                     ) : (
                        <div>
                           <div class="py-2 px-4 border-bottom d-none d-lg-block">
                              <HeaderMessage
                                 img={!user ? 'https://bootdey.com/img/Content/avatar/avatar1.png' : user.AVATAR}
                                 name={!user ? 'Sharon Lessman' : user.USERNAME}
                              />
                           </div>

                           <ScrollToBottom class="scrollbottom">
                              <div class="position-relative">
                                 <div class="chat-messages p-4" style={{ height: '550px' }} onScroll={onScroll}>
                                    {listMes.length == 0
                                       ? ''
                                       : listMes.map((mes) => {
                                            if (mes.SEND_USER_ID != idUser) {
                                               return (
                                                  <MyMessage
                                                     type={mes.TYPE}
                                                     time={setTime(mes.createdAt)}
                                                     msg={mes.CONTENT}
                                                  />
                                               );
                                            } else {
                                               return (
                                                  <OrtherMessage
                                                     time={setTime(mes.createdAt)}
                                                     type={mes.TYPE}
                                                     msg={mes.CONTENT}
                                                  />
                                               );
                                            }
                                         })}
                                 </div>
                              </div>
                           </ScrollToBottom>

                           <div class="flex-grow-0 py-3 px-4 border-top">
                              {!Alt ? '' : <img src={Alt.preview} style={{ width: '200px' }} />}

                              <div class="input-group">
                                 <label for="msg-input-img">
                                    <input type="file" hidden id="msg-input-img" onChange={chooseFIle} />
                                    <Icon.Image class="me-2 display-6" />
                                 </label>
                                 <input
                                    id="input-message"
                                    type="text"
                                    class="form-control"
                                    placeholder="Type your message"
                                    onKeyPress={(e) => e.key == 'Enter' && handleSendMes(e)}
                                 />
                                 <button class="btn btn-primary" onClick={handleSendMes}>
                                    Send
                                 </button>
                              </div>
                           </div>
                        </div>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </main>
   );
}

export default MessagePageComponent;
