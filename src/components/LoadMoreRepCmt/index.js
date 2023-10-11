function LoadMoreRepCmt() {
   return (
      <a
         href="#!"
         role="button"
         class="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center mb-3 ms-5"
         data-bs-toggle="button"
         aria-pressed="true"
      >
         <div class="spinner-dots me-2">
            <span class="spinner-dot"></span>
            <span class="spinner-dot"></span>
            <span class="spinner-dot"></span>
         </div>
         Load more replies
      </a>
   );
}

export default LoadMoreRepCmt;
