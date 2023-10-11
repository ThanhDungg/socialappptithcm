import User from '../../components/User';
import style from './Suggetted.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function Suggested() {
   return (
      <div class="col-lg-3 bg-light">
         <div class="row g-4">
            <div>
               <textarea placeholder="Search" id="search" class="form-control mt-2" />
            </div>
            <div class="col-sm-6 col-lg-12">
               <div class="card">
                  <div class="card-header pb-0 border-0">
                     <h5 class="card-title mb-0">Suggettions</h5>
                  </div>
                  <div class="card-body">
                     <User />
                     <User />

                     <div class="d-grid mt-3 btn btn-light">
                        <a class="btn btn-sm btn-primary-soft" href="#!">
                           View more
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Suggested;
