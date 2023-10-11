import * as Icon from 'react-bootstrap-icons';
import PostImg from '../../components/ImgPost';
import { useEffect, useState } from 'react';

function CreatePost() {
   const [imgInput, setImgInput] = useState([]);

   const chooseFile = (file) => {
      const f = Object.values(file.target.files);
      f.map((item) => {
         setImgInput((list) => [...list, { src: URL.createObjectURL(item) }]);
      });
   };

   return (
      <div class="card card-body">
         <div class="d-flex mb-3">
            <div class="avatar avatar-xs me-2">
               <a href="#">
                  {' '}
                  <img class="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="" />{' '}
               </a>
            </div>
            <form class="w-100">
               <textarea
                  class="form-control pe-4 border-0"
                  rows="2"
                  data-autoresize=""
                  placeholder="Share your thoughts..."
               ></textarea>
            </form>
         </div>
         <ul class="nav nav-pills nav-stack small fw-normal">
            <li class="nav-item ">
               <label for="photo-input" class="btn btn-light text-primary">
                  <Icon.Image />
                  {'  '}Photo
                  <input
                     type="file"
                     hidden
                     multiple
                     id="photo-input"
                     class="cursor-pointer"
                     accept="image/png, image/jpeg"
                     onChange={(e) => {
                        chooseFile(e);
                     }}
                  />
               </label>
            </li>
            <li class="nav-item">
               <label for="video-input" class="btn btn-light text-primary">
                  <Icon.Camera />
                  {'  '}Video
                  <input
                     type="file"
                     hidden
                     multiple
                     id="video-input"
                     class="cursor-pointer"
                     accept="video/mp4,video/x-m4v,video/*"
                  />
               </label>
            </li>
         </ul>
         {imgInput.length != 0 ? <PostImg listImg1={imgInput} /> : ''}
         <div class="text-end">
            <button type="button" class="btn btn-primary text-end">
               Post
            </button>
         </div>
      </div>
   );
}

export default CreatePost;
