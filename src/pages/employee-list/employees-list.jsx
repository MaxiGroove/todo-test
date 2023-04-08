import EmployeeItem from '../../components/employee-item/employee-item';
import Header from '../../components/header/header';
import { emplList } from '../../const';

import './employees-list.scss';

const EmployeesList = () => {

     return (
      <>
         <Header/>
         <section className="main">
               <div className="main-container">
                  {emplList.map(item => <EmployeeItem item={item} key={item.id}/>)}
               </div>
         </section>
      </>
     )
}

export default EmployeesList;