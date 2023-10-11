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
      handleClick(setFormOtp, setFormPhone, setFormRegis);
   };

   const handleNextAccount = () => {
      handleClick(setFormRegis, setFormPhone, setFormOtp);
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
                  {formPhone && <FormRegisPhone handleSendOTP={handleSendOTP} />}
                  {formOtp && <FormRegisOTP handleNextAccount={handleNextAccount} />}
                  {formRegis && <FormRegisAccount />}
               </div>
            </div>
         </div>
         <Footer />
      </section>
   );
}

export default RegisterPage;
