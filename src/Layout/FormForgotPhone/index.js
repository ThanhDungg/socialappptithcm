import BtnLoading from '../../components/BtnLoading';
import Input from '../../components/Input';
import LoadingBtn from '../../components/LoadingBtn';

function FormForgotPhone({ handleForgotSendOTP, onChange, loadingBtn }) {
   return (
      <form>
         <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0">Forgot password</p>
         </div>

         <Input
            id={'forgot-phone'}
            type={'text'}
            title={'Email'}
            placeholder={'Enter valid email'}
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
         <div id="error-forgot-phone" class="text-danger font-italic" style={{ fontStyle: 'italic' }}></div>

         <div class="text-center text-lg-start mt-4 pt-2">
            {!loadingBtn ? (
               <button
                  type="button"
                  class="btn btn-primary btn-lg"
                  // style="padding-left: 2.5rem; padding-right: 2.5rem;"
                  onClick={handleForgotSendOTP}
               >
                  Send OTP
               </button>
            ) : (
               <LoadingBtn />
            )}
            {/* <BtnLoading /> */}
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

export default FormForgotPhone;
