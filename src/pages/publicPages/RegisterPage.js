import { useState } from 'react';
import Footer from '../../Layout/Footer';
import FormRegisPhone from '../../Layout/FormRegisPhone';
import FormRegisOTP from '../../Layout/FormRegisOTP';
import FormRegisAccount from '../../Layout/FormRegisAccount';

function RegisterPage() {
   const [formPhone, setFormPhone] = useState(true);
   const [formOtp, setFormOtp] = useState(false);
   const [formRegis, setFormRegis] = useState(false);

   const handleClick = (setFormTrue, setFormFalse1, setFormFalse2) => {
      setFormTrue(true);
      setFormFalse1(false);
      setFormFalse2(false);
   };

   const handleSendOTP = () => {
      if (document.getElementById('regis-phone').value == '') {
         document.getElementById('error-regis-phone').innerText = 'Number phone is empty...';
      } else if (document.getElementById('regis-phone').value.length < 10) {
         document.getElementById('error-regis-phone').innerText = 'Number phone must 10 number...';
      } else {
         handleClick(setFormOtp, setFormPhone, setFormRegis);
      }
   };

   const onChangeSendOTP = () => {
      document.getElementById('error-regis-phone').innerText = '';
   };

   const handleNextAccount = () => {
      if (document.getElementById('regis-otp').value == '') {
         document.getElementById('error-regis-otp').innerText = 'OTP is empty...';
      } else if (document.getElementById('regis-otp').value.length < 6) {
         document.getElementById('error-regis-otp').innerText = 'OTP must 6 number...';
      } else {
         handleClick(setFormRegis, setFormPhone, setFormOtp);
      }
   };

   const onChangeNextAccount = () => {
      document.getElementById('error-regis-otp').innerText = '';
   };

   const handleRegister = () => {
      if (document.getElementById('regis-first-name').value == '') {
         document.getElementById('error-regis-account').innerText = 'First name is empty...';
      } else if (document.getElementById('regis-last-name').value == '') {
         document.getElementById('error-regis-account').innerText = 'Last name is empty...';
      } else if (document.getElementById('regis-password').value == '') {
         document.getElementById('error-regis-account').innerText = 'Password is empty...';
      } else if (document.getElementById('regis-repassword').value == '') {
         document.getElementById('error-regis-account').innerText = 'RePassword is empty...';
      } else if (document.getElementById('regis-repassword').value != document.getElementById('regis-password').value) {
         document.getElementById('error-regis-account').innerText = 'RePassword not match Password...';
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
                  {formPhone && <FormRegisPhone handleSendOTP={handleSendOTP} onChange={onChangeSendOTP} />}
                  {formOtp && <FormRegisOTP handleNextAccount={handleNextAccount} onChange={onChangeNextAccount} />}
                  {formRegis && <FormRegisAccount handleRegister={handleRegister} onChange={onChangeRegis} />}
               </div>
            </div>
         </div>
         <Footer />
      </section>
   );
}

export default RegisterPage;
