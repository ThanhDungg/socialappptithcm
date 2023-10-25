import Input from '../../components/Input';
import LoadingBtn from '../../components/LoadingBtn';

function FormForgotPassword({ handleChangePassword, onChange, loadingBtn }) {
   return (
      <form>
         <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0">Forgot password</p>
         </div>
         <Input
            id={'regis-password'}
            type={'password'}
            title={'PassWord'}
            placeholder={'Your password'}
            maxLength={100}
            onChange={() => {
               onChange();
            }}
         />
         <Input
            id={'regis-repassword'}
            type={'password'}
            title={'RePassWord'}
            placeholder={'Re password'}
            maxLength={100}
            onChange={() => {
               onChange();
            }}
         />

         <div id="error-regis-account" class="text-danger font-italic" style={{ fontStyle: 'italic' }}></div>

         <div class="text-center text-lg-start mt-4 pt-2">
            {!loadingBtn ? (
               <button
                  type="button"
                  class="btn btn-primary btn-lg"
                  // style="padding-left: 2.5rem; padding-right: 2.5rem;"
                  onClick={() => {
                     handleChangePassword();
                  }}
               >
                  Change password
               </button>
            ) : (
               <LoadingBtn />
            )}
         </div>
      </form>
   );
}

export default FormForgotPassword;
