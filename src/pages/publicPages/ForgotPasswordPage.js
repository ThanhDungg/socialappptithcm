import { useState } from 'react';
import Footer from '../../Layout/Footer';
import FormForgotPhone from '../../Layout/FormForgotPhone';
import FormRegisOTP from '../../Layout/FormRegisOTP';
import FormForgotPassword from '../../Layout/FormForgotPassword';

function ForgotPasswordPage() {
   const [formPhone, setFormPhone] = useState(true);
   const [formOtp, setFormOtp] = useState(false);
   const [formForgot, setFormForgot] = useState(false);

   const handleClick = (setFormTrue, setFormFalse1, setFormFalse2) => {
      setFormTrue(true);
      setFormFalse1(false);
      setFormFalse2(false);
   };

   const handleForgotSendOTP = () => {
      handleClick(setFormOtp, setFormPhone, setFormForgot);
   };

   const handleNextAccount = () => {
      handleClick(setFormForgot, setFormPhone, setFormOtp);
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
                  {formPhone && <FormForgotPhone handleForgotSendOTP={handleForgotSendOTP} />}
                  {formOtp && <FormRegisOTP handleNextAccount={handleNextAccount} />}
                  {formForgot && <FormForgotPassword />}
               </div>
            </div>
         </div>
         <Footer />
      </section>
   );
}

export default ForgotPasswordPage;
