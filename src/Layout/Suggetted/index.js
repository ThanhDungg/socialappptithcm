import { useState } from 'react';
import User from '../../components/User';
import FormListUserSearch from '../FormListUserSearch';
import style from './Suggetted.module.scss';
import classNames from 'classnames/bind';
import { getData, getListUser } from '../../config/fetchData';

const cx = classNames.bind(style);

function Suggested() {
   const [showSearch, setShowSearch] = useState(false);
   const [listUser, setListUser] = useState([]);

   const onChangeSearch = async (e) => {
      if (e.target.value == '') {
         setShowSearch(false);
         setListUser([]);
      } else {
         try {
            setShowSearch(true);
            await getData(getListUser + `?username=${e.target.value}`, localStorage.getItem('accessToken')).then(
               (res) => {
                  // console.log(res);
                  setListUser(res.data.result.user);
               },
            );
         } catch (e) {
            console.log(e);
         }
      }
   };
   return (
      <div class="col-lg-3 bg-light">
         <div class="row g-4">
            <div>
               <textarea placeholder="Search" id="search" class="form-control mt-2" onChange={onChangeSearch} />
            </div>
            {showSearch && <FormListUserSearch listUser={listUser} />}
            <div class="col-sm-6 col-lg-12">
               <div class="card">
                  <div class="card-header pb-0 border-0">
                     <h5 class="card-title mb-0">Suggettions</h5>
                  </div>
                  <div class="card-body">
                     {/* <User />
                     <User /> */}

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
