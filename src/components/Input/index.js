function Input({ id, type, title, placeholder, maxLength = 100, onChange, onKeyPress }) {
   return (
      <div class="form-outline mb-4">
         <input
            type={type}
            id={id}
            class="form-control form-control-lg"
            placeholder={placeholder}
            maxLength={maxLength}
            onChange={onChange}
            onKeyPress={onKeyPress}
         />
         <label class="form-label" for="form3Example3">
            {title}
         </label>
      </div>
   );
}

export default Input;
