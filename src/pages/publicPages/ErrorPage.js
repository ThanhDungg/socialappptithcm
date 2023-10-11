import { Link, useNavigate } from 'react-router-dom';

function ErrorPage() {
   const navigate = useNavigate();

   return (
      <div>
         <div class="alert alert-danger" role="alert">
            Error
         </div>
         <button
            type="submit"
            class="btn btn-primary"
            onClick={() => {
               navigate(-1);
            }}
         >
            back
         </button>
      </div>
   );
}

export default ErrorPage;
