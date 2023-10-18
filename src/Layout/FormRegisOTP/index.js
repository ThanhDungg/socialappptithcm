import Input from '../../components/Input';

function FormRegisOTP({ handleNextAccount, onChange }) {
   return (
      <form>
         <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0">Forgot password</p>
         </div>

         <Input
            id={'regis-otp'}
            type={'text'}
            title={'OTP'}
            placeholder={'Enter valid OTP'}
            maxLength={6}
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
         <div id="error-regis-otp" class="text-danger font-italic" style={{ fontStyle: 'italic' }}></div>

         <div class="text-center text-lg-start mt-4 pt-2">
            <button
               type="button"
               class="btn btn-primary btn-lg"
               // style="padding-left: 2.5rem; padding-right: 2.5rem;"
               onClick={handleNextAccount}
            >
               Next
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

export default FormRegisOTP;
