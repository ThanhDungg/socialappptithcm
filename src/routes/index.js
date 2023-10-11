import EditProfilePage from '../pages/publicPages/EditProfilePage';
import ErrorPage from '../pages/publicPages/ErrorPage';
import ForgotPasswordPage from '../pages/publicPages/ForgotPasswordPage';
import HomePage from '../pages/publicPages/HomePage';
import LoginPage from '../pages/publicPages/LoginPage';
import MessagePage from '../pages/publicPages/MessagePage';
import MyProfilePage from '../pages/publicPages/MyProfilePage';
import NotificationPage from '../pages/publicPages/NotificationPage';
import OrtherProfilePage from '../pages/publicPages/OrtherProfilePage';
import RegisterPage from '../pages/publicPages/RegisterPage';

const publicsRoutes = [
   { path: '/', redirect: '/home', component: LoginPage, Layout: LoginPage },
   { path: '/home', component: HomePage, Layout: HomePage },
   { path: '/message/:id', component: MessagePage, Layout: MessagePage },
   { path: '/notification', component: NotificationPage, Layout: NotificationPage },
   { path: '/myprofile', component: MyProfilePage, Layout: MyProfilePage },
   { path: '/register', component: RegisterPage, Layout: RegisterPage },
   { path: '/editprofile', component: EditProfilePage, Layout: EditProfilePage },
   { path: '/forgotpassword', component: ForgotPasswordPage, Layout: ForgotPasswordPage },
   { path: '/profile/:id', component: OrtherProfilePage, Layout: OrtherProfilePage },
   { path: '/**', component: ErrorPage, Layout: ErrorPage },
   { path: '/*', component: ErrorPage, Layout: ErrorPage },
];

const privateRoutes = [];

export { publicsRoutes, privateRoutes };
