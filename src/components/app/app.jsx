
import EmployeesList from "../../pages/employee-list/employees-list";
import TaskLists from "../../pages/task-list/tasks-list";
import TasksArchive from "../../pages/tasks-archive/tasks-archive";
import {AppRoute} from "../../const"
import {
    BrowserRouter,
    Routes,
    Route,
  } from 'react-router-dom';

import './normalize.scss';
import './app.scss';
import Employee from "../../pages/employee/employee";

const App = () => {

    return (
        <BrowserRouter>
            <Routes >
                <Route path={AppRoute.TASKSLIST} element={<TaskLists/>}/>
                <Route path={AppRoute.TASKSARCHIVE} element={<TasksArchive/>}/>
                <Route path={AppRoute.EMPLOYEESLIST} element={<EmployeesList/>}/>
                <Route path={AppRoute.EMPLOYEE} element={<Employee/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;