import NotiDetails from '../../components/NotiDetails';
import './NotificationPageComponent.css';

function NotificationPageComponent() {
   return (
      <section class="section-50">
         <div class="container">
            <h3 class="m-b-50 heading-line">
               Notifications <i class="fa fa-bell text-muted"></i>
            </h3>

            <div class="notification-ui_dd-content">
               <NotiDetails />
               <NotiDetails />
               <NotiDetails />
               <NotiDetails />
               <NotiDetails />
            </div>

            <div class="text-center">
               <button class="btn btn-primary border">Load more activity</button>
            </div>
         </div>
      </section>
   );
}

export default NotificationPageComponent;
