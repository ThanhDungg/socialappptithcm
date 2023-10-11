import { faChevronCircleLeft, faDiagramNext, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './Story.module.scss';
import classNames from 'classnames/bind';
import { listImg } from '../../config';
import { useEffect } from 'react';

const cx = classNames.bind(style);

function Story() {
   const src = 'https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien.jpeg';

   // var items = document.querySelectorAll('.carousel .carousel-item');
   // items.forEach((e) => {
   //    const slide = 3;
   //    let next = e.nextElementSibling;
   //    for (var i = 0; i < slide; i++) {
   //       if (!next) {
   //          next = items[0];
   //       }
   //       let cloneChild = next.cloneNode(true);
   //       e.appendChild(cloneChild.children[0]);
   //       next = next.nextElementSibling;
   //    }
   // });

   useEffect(() => {
      var items = document.querySelectorAll('#recipeCarousel1 .carousel-item');
      console.log(items);
      items.forEach((e) => {
         const slide = 1;
         let next = e.nextElementSibling;
         for (var i = 0; i < slide; i++) {
            if (!next) {
               next = items[0];
            }
            let cloneChild = next.cloneNode(true);
            e.appendChild(cloneChild.children[0]);
            next = next.nextElementSibling;
         }
      });
   }, []);

   return (
      <div class="container text-center my-3">
         <div class="row mx-auto my-auto justify-content-center">
            <div id="recipeCarousel1" class="carousel" data-bs-ride="carousel">
               <div class="carousel-inner d-flex" role="listbox">
                  {listImg.map((item) => {
                     return (
                        <div class="carousel active">
                           <div class="">
                              <img src={item.src} class="card-img h-100" />
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
                  <span class="carousel-control-prev-icon text-primary" aria-hidden="true"></span>
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

export default Story;
