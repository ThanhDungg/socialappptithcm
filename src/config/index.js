export const src = 'https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien.jpeg';

export const listImg = [
   { src: 'https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien.jpeg' },
   { src: 'https://vivureviews.com/wp-content/uploads/2020/04/hinh-nen-dien-thoai-buon-2.jpg' },
   { src: 'https://dulichviet.com.vn/images/bandidau/danh-sach-nhung-buc-anh-viet-nam-lot-top-anh-dep-the-gioi.jpg' },
];

export const countDate = (post, id) => {
   const date = new Date(post.createdAt);
   const toDay = new Date();
   if (toDay.getFullYear() - date.getFullYear() == 0) {
      if (toDay.getMonth() - date.getMonth() == 0) {
         if (toDay.getDate() - date.getDate() + 1 == 0) {
            if (toDay.getHours() - date.getHours() >= 0) {
               document.getElementById(id).innerText = '1hr';
            } else {
               document.getElementById(id).innerText = toDay.getHours() - date.getHours() + 'hr';
            }
         } else {
            document.getElementById(id).innerText = toDay.getDate() - date.getDate() + 1 + 'd';
         }
      } else {
         document.getElementById(id).innerText = toDay.getMonth() - date.getMonth() + 'm';
      }
   } else {
      document.getElementById(id).innerText = date.getFullYear() + 'y';
   }
};

export const setTime = (time) => {
   const tempDate = require('moment-timezone');

   const date = tempDate(time).tz('Etc/GMT');
   const toDay = new Date();

   if (toDay.getFullYear() - date.year() <= 0) {
      if (toDay.getMonth() - date.month() <= 0) {
         if (toDay.getDate() - date.date() <= 0) {
            if (toDay.getHours() - date.hours() <= 0) {
               if (toDay.getMinutes() - date.minutes() == 0) {
                  return '1 minutes ago';
               } else {
                  return toDay.getMinutes() - date.minutes() + ' minutes ago';
               }
            } else {
               return toDay.getHours() - date.hours() + ' hr ago';
            }
         } else {
            return toDay.getDate() - date.date() + 1 + ' day ago';
         }
      } else {
         return toDay.getMonth() - date.month() + ' month ago';
      }
   } else {
      return date.year() + ' years ago';
   }
};
