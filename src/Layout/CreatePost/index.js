import * as Icon from 'react-bootstrap-icons';
import PostImg from '../../components/ImgPost';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../config/fetchData';

function CreatePost() {
   const [imgInput, setImgInput] = useState([]);
   const [listImg, setListImg] = useState([]);

   const chooseFile = (file) => {
      const f = Object.values(file.target.files);
      setListImg(f);
      f.map((item) => {
         setImgInput((list) => [...list, { src: URL.createObjectURL(item) }]);
      });
   };

   const handlePost = async () => {
      console.log(listImg);
      let formData = new FormData();
      await formData.append('caption', document.getElementById('input-caption').value);
      // console.log(tempImg);
      for (let i = 0; i < listImg.length; i++) {
         await formData.append('file', listImg[i]);
      }
      await fetch(`${BASE_URL}api/post`, {
         method: 'POST',
         body: formData,
         headers: {
            accessToken: localStorage.getItem('accessToken'),
         },
      })
         .then((json) => json.json())
         .then((res) => {
            console.log(res);
            if (res.code == 201) {
               // window.location.reload();
               alert('Thành công');
            } else {
               alert('That bai');
            }
         })
         .catch((e) => {
            console.log(e);
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
                  id="input-caption"
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
            <button type="button" class="btn btn-primary text-end" data-bs-target="#notipost" data-bs-toggle="modal">
               Post
            </button>
         </div>
         <div class="modal fade" id="notipost" tabindex="-1" aria-labelledby="notipost" aria-hidden="true">
            <div class="modal-dialog">
               <div class="modal-content">
                  <div class="modal-header">
                     <h5 class="modal-title" id="exampleModalLabel">
                        Thông báo
                     </h5>
                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="text-danger p-4">Bạn có muốn đăng bài?</div>

                  <div class="modal-footer">
                     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="clear">
                        Close
                     </button>
                     <button type="button" class="btn btn-primary" onClick={handlePost}>
                        Post
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default CreatePost;
