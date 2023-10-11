import { listImg, src } from '../../config';
import classNames from 'classnames/bind';
import style from './ImgPost.module.scss';

const cx = classNames.bind(style);

function PostImg({ listImg1 = listImg }) {
   return (
      <div class="container text-center my-3">
         <div class="row mx-auto my-auto justify-content-center">
            <div id="recipeCarousel" class="carousel slide text-align-center" data-bs-ride="carousel">
               <div class="carousel-inner" role="listbox">
                  {listImg1.map((item) => {
                     return (
                        <div class="carousel-item active">
                           <div class="col-md-3">
                              <div class="">
                                 <div class="">
                                    <img src={item.src} className={cx('img-post')} />
                                 </div>
                              </div>
                           </div>
                        </div>
                     );
                  })}
               </div>
               <a
                  class="carousel-control-prev bg-transparent w-aut"
                  href="#recipeCarousel"
                  role="button"
                  data-bs-slide="prev"
               >
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
               </a>
               <a
                  class="carousel-control-next bg-transparent w-aut"
                  href="#recipeCarousel"
                  role="button"
                  data-bs-slide="next"
               >
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
               </a>
            </div>
         </div>
      </div>
   );
}

export default PostImg;
