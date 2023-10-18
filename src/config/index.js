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
         if (toDay.getDate() - date.getDate() == 0) {
            if (toDay.getHours() - date.getHours() == 0) {
               document.getElementById(id).innerText = '1hr';
            } else {
               document.getElementById(id).innerText = toDay.getHours() - date.getHours() + 'hr';
            }
         } else {
            document.getElementById(id).innerText = toDay.getDate() - date.getDate() + 'd';
         }
      } else {
         document.getElementById(id).innerText = toDay.getMonth() - date.getMonth() + 'm';
      }
   } else {
      document.getElementById(id).innerText = date.getFullYear() + 'y';
   }
};
