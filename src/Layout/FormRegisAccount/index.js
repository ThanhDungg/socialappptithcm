import Input from '../../components/Input';

function FormRegisAccount({ handleRegister, onChange }) {
   return (
      <form>
         <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0">Register</p>
         </div>

         <Input
            id={'regis-first-name'}
            type={'text'}
            title={'First Name'}
            placeholder={'Your first name'}
            maxLength={100}
            onChange={() => {
               onChange();
            }}
         />
         <Input
            id={'regis-last-name'}
            type={'text'}
            title={'Last Name'}
            placeholder={'Your last name'}
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
            <button
               type="button"
               class="btn btn-primary btn-lg"
               // style="padding-left: 2.5rem; padding-right: 2.5rem;"
               onClick={handleRegister}
            >
               Regist
            </button>
         </div>
      </form>
   );
}

export default FormRegisAccount;
