import Input from '../../components/Input';

function FormRegisPhone({ handleSendOTP, onChange }) {
   return (
      <form>
         <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0">Regiter</p>
         </div>

         <Input
            id={'regis-phone'}
            type={'text'}
            title={'Phone number'}
            placeholder={'Enter valid phone number'}
            maxLength={10}
            onKeyPress={(event) => {
               if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
               }
            }}
            onChange={() => {
               onChange();
            }}
         />

         {/* <div class="d-flex justify-content-between align-items-center">
            <div class="form-check mb-0"></div>
            <a href="#!" class="text-body">
               Forgot password?
            </a>
         </div> */}
         <div id="error-regis-phone" class="text-danger fst-italic" style={{ fontStyle: 'italic' }}></div>

         <div class="text-center text-lg-start mt-4 pt-2">
            <button
               type="button"
               class="btn btn-primary btn-lg"
               // style="padding-left: 2.5rem; padding-right: 2.5rem;"
               onClick={handleSendOTP}
            >
               Send OTP
            </button>
            {/* <p class="small fw-bold mt-2 pt-1 mb-0">
               Don't have an account?{' '}
               <a href="#!" class="link-danger">
                  Register
               </a>
            </p> */}
         </div>
      </form>
   );
}

export default FormRegisPhone;
