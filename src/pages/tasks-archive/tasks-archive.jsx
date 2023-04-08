import Header from '../../components/header/header';
import TaskItem from '../../components/task-item/task-item';
import {Tasks} from '../../const';
import './tasks-archive.scss';

const TasksArchive = () => {

     return (
      <>
         <Header/>
         <section className="main">
               <div className="main-container">
                  
                  {Tasks.map(item => item.archive ? null : <TaskItem item={item} key={item.id}/>)}

               </div>
         </section>
      </>
     )
}

export default TasksArchive;