import { Link, redirect, useNavigate } from 'react-router-dom';
import Footer from '../../Layout/Footer';
import { useContext, useEffect, useState } from 'react';
import Input from '../../components/Input';
import { login_Url, postData } from '../../config/fetchData';
import { PublicData } from '../../App';
import LoadingBtn from '../../components/LoadingBtn';

function LoginPage() {
   const navigate = useNavigate();

   const [loadingBtn, setLoadingBtn] = useState(false);

   const handleLogin = async () => {
      if (document.getElementById('login-email').value == '') {
         document.getElementById('error-login').innerText = 'UserName is empty...';
      } else if (document.getElementById('login-password').value == '') {
         document.getElementById('error-login').innerText = 'Password is empty...';
      } else {
         try {
            setLoadingBtn(true);
            await postData(
               login_Url,
               {
                  email: document.getElementById('login-email').value,
                  password: document.getElementById('login-password').value,
               },
               '',
            ).then(async (res) => {
               if (res.data.code == 202) {
                  localStorage.setItem('accessToken', res.data.result.token);
                  localStorage.setItem('id', res.data.result.user.ID);
                  await navigate('/home');
                  await window.location.reload();
               } else {
                  document.getElementById('error-login').innerText = res.data.message;
                  setLoadingBtn(false);
               }
            });
         } catch (e) {}
      }
   };

   const onChangeInput = () => {
      document.getElementById('error-login').innerText = '';
   };

   return (
      <section class="vh-100">
         <div class="container-fluid h-custom">
            <div class="row d-flex justify-content-center align-items-center h-100">
               <div class="col-md-9 col-lg-6 col-xl-5">
                  <img
                     src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                     class="img-fluid"
                     alt="Sample image"
                  />
               </div>
               <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                  <form>
                     <div class="divider d-flex align-items-center my-4">
                        <p class="text-center fw-bold mx-3 mb-0">Login</p>
                     </div>

                     <Input
                        id={'login-email'}
                        type={'text'}
                        title={'Account'}
                        placeholder={'Enter valid account'}
                        onChange={onChangeInput}
                        onKeyPress={(event) => {
                           // if (!/[0-9]/.test(event.key)) {
                           //    event.preventDefault();
                           // }
                        }}
                        // maxLength={10}
                     />

                     <Input
                        id={'login-password'}
                        type={'password'}
                        title={'Password'}
                        placeholder={'Enter valid password'}
                        onChange={onChangeInput}
                     />

                     <div class="d-flex justify-content-between align-items-center">
                        <div class="form-check mb-0"></div>
                        <Link to={'/forgotpassword'} class="text-body">
                           Forgot password?
                        </Link>
                     </div>

                     <div class="text-danger fst-italic" id="error-login"></div>

                     <div class="text-center text-lg-start mt-4 pt-2">
                        {!loadingBtn ? (
                           <button
                              type="button"
                              class="btn btn-primary btn-lg"
                              // style="padding-left: 2.5rem; padding-right: 2.5rem;"
                              onClick={handleLogin}
                           >
                              Login
                           </button>
                        ) : (
                           <LoadingBtn />
                        )}
                        <p class="small fw-bold mt-2 pt-1 mb-0">
                           Don't have an account?{' '}
                           <Link to={'/register'} class="link-danger">
                              Register
                           </Link>
                        </p>
                     </div>
                  </form>
               </div>
            </div>
         </div>
         <Footer />
      </section>
   );
}

export default LoginPage;
