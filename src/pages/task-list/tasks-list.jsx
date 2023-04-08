import Header from '../../components/header/header';
import TaskItem from '../../components/task-item/task-item';
import {Tasks} from '../../const';
import './tasks-list.scss';

const TaskLists = () => {

     return (
      <>
         <Header/>
         <section className="main">
               <div className="main-container">
                  
                  {Tasks.map(item => item.archive ? <TaskItem item={item} key={item.id}/> : null)}

               </div>
         </section>
      </>
     )
}

export default TaskLists;