import { useState } from 'react';
import Footer from '../../Layout/Footer';
import FormForgotPhone from '../../Layout/FormForgotPhone';
import FormRegisOTP from '../../Layout/FormRegisOTP';
import FormForgotPassword from '../../Layout/FormForgotPassword';
import {
   forgotEmail,
   postData,
   putData,
   putOTPChangePassword,
   regisOTP,
   verifiOTPForgotPassword,
} from '../../config/fetchData';
import { useNavigate } from 'react-router-dom';

function ForgotPasswordPage() {
   var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

   const navigate = useNavigate();

   const [formPhone, setFormPhone] = useState(true);
   const [formOtp, setFormOtp] = useState(false);
   const [formForgot, setFormForgot] = useState(false);
   const [loadingBtn, setLoadingBtn] = useState(false);

   const [email, setEmail] = useState('');
   const [otp, setOTP] = useState('');

   const handleClick = (setFormTrue, setFormFalse1, setFormFalse2) => {
      setFormTrue(true);
      setFormFalse1(false);
      setFormFalse2(false);
   };

   const onChangeEmail = () => {
      document.getElementById('error-forgot-phone').innerText = '';
   };

   const onChangeOTP = () => {
      document.getElementById('error-regis-otp').innerText = '';
   };

   const onChangeForgot = () => {
      document.getElementById('error-regis-account').innerText = '';
   };

   const handleForgotSendOTP = async () => {
      if (document.getElementById('forgot-phone').value == '') {
         document.getElementById('error-forgot-phone').innerText = 'Email is empty...';
      } else if (!filter.test(document.getElementById('forgot-phone').value)) {
         document.getElementById('error-forgot-phone').innerText = 'Email wrong format...';
      } else if (document.getElementById('forgot-phone').value.length < 15) {
         document.getElementById('error-forgot-phone').innerText = 'Email must be at least 15 characters...';
      } else {
         setEmail(document.getElementById('forgot-phone').value);
         try {
            setLoadingBtn(true);
            await postData(
               forgotEmail,
               {
                  email: document.getElementById('forgot-phone').value,
               },
               '',
            ).then((res) => {
               setLoadingBtn(false);
               console.log(res);
               if (res.data.code == 200) {
                  handleClick(setFormOtp, setFormPhone, setFormForgot);
               } else {
                  document.getElementById('error-forgot-phone').innerText = res.data.message;
               }
            });
         } catch (e) {
            setLoadingBtn(false);
            document.getElementById('error-regis-account').innerText = 'Email not exist...';
            console.log(e);
         }
      }
      // handleClick(setFormOtp, setFormPhone, setFormForgot);
   };

   const handleNextAccount = async () => {
      if (document.getElementById('regis-otp').value == '') {
         document.getElementById('error-regis-otp').innerText = 'OTP is empty...';
      } else if (document.getElementById('regis-otp').value.length < 6) {
         document.getElementById('error-regis-otp').innerText = 'OTP must 6 number...';
      } else {
         try {
            setLoadingBtn(true);
            await postData(
               verifiOTPForgotPassword,
               {
                  email: email,
                  otp: document.getElementById('regis-otp').value,
               },
               '',
            ).then((res) => {
               setLoadingBtn(false);
               console.log(res);
               if (res.data.code == 200) {
                  setOTP(document.getElementById('regis-otp').value);
                  handleClick(setFormForgot, setFormPhone, setFormOtp);
               } else {
                  document.getElementById('error-regis-account').innerText = 'OTP complete failed...';
               }
            });
         } catch (e) {
            setLoadingBtn(false);
            document.getElementById('error-regis-account').innerText = 'OTP complete failed...';
            console.log(e);
         }
      }
   };

   const handleChangePassword = async () => {
      if (document.getElementById('regis-password').value == '') {
         document.getElementById('error-regis-account').innerText = 'Password is empty...';
      } else if (document.getElementById('regis-password').value.length < 6) {
         document.getElementById('error-regis-account').innerText = 'Password more 6 character...';
      } else if (document.getElementById('regis-repassword').value == '') {
         document.getElementById('error-regis-account').innerText = 'RePassword is empty...';
      } else if (document.getElementById('regis-repassword').value != document.getElementById('regis-password').value) {
         document.getElementById('error-regis-account').innerText = 'RePassword not match Password...';
      } else {
         try {
            setLoadingBtn(true);
            await putData(
               putOTPChangePassword,
               {
                  password: document.getElementById('regis-password').value,
                  re_password: document.getElementById('regis-repassword').value,
                  email: email,
                  otp: otp,
               },
               '',
            ).then((res) => {
               console.log(res);
               setLoadingBtn(false);
               if (res.data.code == 200) {
                  navigate('/');
               } else {
                  document.getElementById('error-regis-account').innerText = 'Change password failed...';
               }
            });
         } catch (e) {
            setLoadingBtn(false);
            document.getElementById('error-regis-account').innerText = 'Change password failed...';
            console.log(e);
         }
      }
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
                  {formPhone && (
                     <FormForgotPhone
                        handleForgotSendOTP={handleForgotSendOTP}
                        onChange={onChangeEmail}
                        loadingBtn={loadingBtn}
                     />
                  )}
                  {formOtp && (
                     <FormRegisOTP
                        handleNextAccount={handleNextAccount}
                        onChange={onChangeOTP}
                        loadingBtn={loadingBtn}
                     />
                  )}
                  {formForgot && (
                     <FormForgotPassword
                        handleChangePassword={handleChangePassword}
                        onChange={onChangeForgot}
                        loadingBtn={loadingBtn}
                     />
                  )}
               </div>
            </div>
         </div>
         <Footer />
      </section>
   );
}

export default ForgotPasswordPage;
