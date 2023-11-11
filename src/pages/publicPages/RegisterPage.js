import { useState } from 'react';
import Footer from '../../Layout/Footer';
import FormRegisPhone from '../../Layout/FormRegisPhone';
import FormRegisOTP from '../../Layout/FormRegisOTP';
import FormRegisAccount from '../../Layout/FormRegisAccount';
import { postData, regis, regisOTP, verifiOTPRegis } from '../../config/fetchData';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
   var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

   const navigator = useNavigate();

   const [formPhone, setFormPhone] = useState(true);
   const [formOtp, setFormOtp] = useState(false);
   const [formRegis, setFormRegis] = useState(false);
   const [loadingBtn, setLoadingBtn] = useState(false);

   const [email, setEmail] = useState('');
   const [otp, setOTP] = useState('');

   const handleClick = (setFormTrue, setFormFalse1, setFormFalse2) => {
      setFormTrue(true);
      setFormFalse1(false);
      setFormFalse2(false);
   };

   const handleSendOTP = async () => {
      if (document.getElementById('regis-phone').value == '') {
         document.getElementById('error-regis-phone').innerText = 'Email is empty...';
      } else if (!filter.test(document.getElementById('regis-phone').value)) {
         document.getElementById('error-regis-phone').innerText = 'Email wrong format...';
      } else {
         setEmail(document.getElementById('regis-phone').value);
         try {
            setLoadingBtn(true);
            await postData(
               regisOTP,
               {
                  email: document.getElementById('regis-phone').value,
               },
               '',
            ).then(async (res) => {
               await setLoadingBtn(false);
               console.log(res);
               if (res.data.code == 200) {
                  await handleClick(setFormOtp, setFormPhone, setFormRegis);
               } else {
                  document.getElementById('error-regis-phone').innerText = res.data.message;
               }
            });
         } catch (e) {
            setLoadingBtn(false);
            document.getElementById('error-regis-phone').innerText = e.response.data.message;
            console.log(e.response);
         }
      }
   };

   const onChangeSendOTP = () => {
      document.getElementById('error-regis-phone').innerText = '';
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
               verifiOTPRegis,
               {
                  email: email,
                  otp: document.getElementById('regis-otp').value,
               },
               '',
            ).then((res) => {
               console.log(res);
               setLoadingBtn(false);
               if (res.data.code == 200) {
                  setOTP(document.getElementById('regis-otp').value);
                  handleClick(setFormRegis, setFormPhone, setFormOtp);
               }
            });
         } catch (e) {
            alert('Failed');
            console.log(e);
         }
      }
   };

   const onChangeNextAccount = () => {
      document.getElementById('error-regis-otp').innerText = '';
   };

   const handleRegister = async () => {
      if (document.getElementById('regis-first-name').value == '') {
         document.getElementById('error-regis-account').innerText = 'User name is empty...';
      } else if (document.getElementById('regis-last-name').value == '') {
         document.getElementById('error-regis-account').innerText = 'Full name is empty...';
      } else if (document.getElementById('regis-last-name').value.length < 6) {
         document.getElementById('error-regis-account').innerText = 'Full name more 6 character...';
      } else if (document.getElementById('regis-mobile').value == '') {
         document.getElementById('error-regis-account').innerText = 'Mobile is empty...';
      } else if (document.getElementById('regis-mobile').value.length != 10) {
         document.getElementById('error-regis-account').innerText = 'Mobile must 10 number...';
      } else if (document.getElementById('regis-password').value == '') {
         document.getElementById('error-regis-account').innerText = 'Password is empty...';
      } else if (document.getElementById('regis-password').value.length < 6) {
         document.getElementById('error-regis-account').innerText = 'Password more 6 number...';
      } else if (document.getElementById('regis-repassword').value == '') {
         document.getElementById('error-regis-account').innerText = 'RePassword is empty...';
      } else if (document.getElementById('regis-repassword').value != document.getElementById('regis-password').value) {
         document.getElementById('error-regis-account').innerText = 'RePassword not match Password...';
      } else {
         try {
            setLoadingBtn(true);
            console.log(document.getElementById('regis-repassword').value);
            await postData(
               regis,
               {
                  email: email,
                  otp: otp,
                  mobile: document.getElementById('regis-mobile').value,
                  address: document.getElementById('regis-address').value + ' ',
                  username: document.getElementById('regis-first-name').value,
                  fullname: document.getElementById('regis-last-name').value,
                  password: document.getElementById('regis-password').value,
                  re_password: document.getElementById('regis-repassword').value,
                  gender: 'male',
               },
               '',
            ).then((res) => {
               console.log(res);
               setLoadingBtn(false);
               if (res.data.code == 201) {
                  alert('Success');
                  navigator('/');
               } else {
                  document.getElementById('error-regis-account').innerText = 'Username or Mobile existed...';
               }
            });
         } catch (e) {
            document.getElementById('error-regis-account').innerText = 'Username or Mobile existed...';
            console.log(e);
         }
      }
   };

   const onChangeRegis = () => {
      document.getElementById('error-regis-account').innerText = '';
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
                     <FormRegisPhone handleSendOTP={handleSendOTP} onChange={onChangeSendOTP} loadingBtn={loadingBtn} />
                  )}
                  {formOtp && (
                     <FormRegisOTP
                        handleNextAccount={handleNextAccount}
                        onChange={onChangeNextAccount}
                        loadingBtn={loadingBtn}
                     />
                  )}
                  {formRegis && (
                     <FormRegisAccount
                        handleRegister={handleRegister}
                        onChange={onChangeRegis}
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

export default RegisterPage;
