import axios from 'axios';

export const BASE_URL = 'https://socialappnew.onrender.com/';
export const login_Url = `api/signIn`;

export const home_Url = `api/home`;

export const regisOTP = `api/getOTP/regist`;
export const verifiOTPRegis = `api/verifyOTP`;
export const regis = `api/signUp`;

export const forgotEmail = `api/getOTP/forget`;
export const verifiOTPForgotPassword = `api/verifyOTP`;
export const putOTPChangePassword = `api/resetPassword`;

export const postStatus = `api/post`;

export const getConversation = `api/messege`;

export const likePost = `api/post/like/`;
export const getComment = `api/post/comment/`;
export const postComment = `api/post/comment/`;

export const getMessage = `api/messege/user`;
export const getMessageConver = `api/messege`;

export const getUser = `api/user/info`;
export const getUserPost = `api/post/user`;

export const getListUser = `api/user/search`;

export const follow = `api/user/follow`;
export const unfollow = `api/user/unfollow`;

export const getNoti = `api/user/notification`;

export const putAvatar = `api/user/avatar`;

export const putInfo = `api/user`;

export const putPassword = `api/user/password`;

export const getData = async (url, token) => {
   return await axios.get(BASE_URL + url, {
      headers: {
         accessToken: token,
         'Content-Type': 'application/json',
      },
   });
};

export const postData = async (url, data, token) => {
   return await axios.post(BASE_URL + url, data, {
      headers: {
         accessToken: token,
         'Content-Type': 'application/json',
      },
   });
};

export const putData = async (url, data, token) => {
   return await axios.put(BASE_URL + url, data, {
      headers: { accessToken: token, 'Content-Type': 'application/json' },
   });
};

export const deleteData = async (url, token) => {
   return await axios.delete(BASE_URL + url, { headers: { accessToken: token, 'Content-Type': 'application/json' } });
};
