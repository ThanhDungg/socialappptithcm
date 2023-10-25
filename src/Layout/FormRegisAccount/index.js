import Input from '../../components/Input';
import LoadingBtn from '../../components/LoadingBtn';

function FormRegisAccount({ handleRegister, onChange, loadingBtn }) {
   return (
      <form>
         <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0">Register</p>
         </div>

         <Input
            id={'regis-first-name'}
            type={'text'}
            title={'User Name'}
            placeholder={'Your user name'}
            maxLength={100}
            onChange={() => {
               onChange();
            }}
         />
         <Input
            id={'regis-last-name'}
            type={'text'}
            title={'Full Name'}
            placeholder={'Your full name'}
            maxLength={100}
            onChange={() => {
               onChange();
            }}
         />
         <Input
            id={'regis-mobile'}
            type={'text'}
            title={'Mobile'}
            placeholder={'Your mobile'}
            maxLength={10}
            onChange={() => {
               onChange();
            }}
            onKeyPress={(event) => {
               if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
               }
            }}
         />
         <Input
            id={'regis-address'}
            type={'text'}
            title={'Address'}
            placeholder={'Your address'}
            maxLength={100}
            onChange={() => {
               onChange();
            }}
         />
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

         <div id="error-regis-account" class="text-danger fst-italic" style={{ fontStyle: 'italic' }}></div>

         <div class="text-center text-lg-start mt-4 pt-2">
            {!loadingBtn ? (
               <button
                  type="button"
                  class="btn btn-primary btn-lg"
                  // style="padding-left: 2.5rem; padding-right: 2.5rem;"
                  onClick={handleRegister}
               >
                  Regist
               </button>
            ) : (
               <LoadingBtn />
            )}
         </div>
      </form>
   );
}

export default FormRegisAccount;
