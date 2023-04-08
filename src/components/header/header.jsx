import { NavLink } from 'react-router-dom';
import { AppRoute, Tasks, emplList } from '../../const';
import './header.scss';
import { useState } from 'react';

const Header = () => {

    const [modalActive, setModalActive] = useState(false);
    const [taskForm, setTaskForm] = useState({
        id: Date.now(),
        employye: '',
        taskTitle: '',
        taskText: '',
        archive: true,
        date: new Date(),
    });

    const addTask = (e) => {
        const { name, value } = e.target;
        setTaskForm({
            ...taskForm,
            [name]: value,
        })
    }

    const handleAddTask = (e) => {
        // e.preventDefault();
        Tasks.push(taskForm);
    }

    console.log(taskForm)
    console.log(Tasks)

    const handleClick = (e) => {
        e.preventDefault();
        setModalActive(true);
    }

    
    return (
        <>
            <section className="header">
                <header className="header-wrap">
                    <div className="header-logo">
                        <img src="./images/logo.webp" alt="ЛогоГриба" className="header-logo-img" />
                    </div>
                    <div className="header-add" onClick={handleClick}>
                        Добавить задачу
                    </div>
                    <div className="header-links">
                        <NavLink to={AppRoute.TASKSLIST} className="header-lnk">Задачи</NavLink>
                        <NavLink to={AppRoute.TASKSARCHIVE} className="header-lnk">Архив</NavLink>
                        <NavLink to={AppRoute.EMPLOYEESLIST} className="header-lnk">Сотрудники</NavLink>
                    </div>
                </header>
            </section>

            <div className={modalActive ? 'modal-active' : 'modal'} onClick={() => setModalActive(false)}>
                <div className="modal-info" onClick={e => e.stopPropagation()}>

                    <div className="modal-close"onClick={() => setModalActive(false)}></div>

                    <form className="modal-form">
                        <div className="modal-item">
                            <label className="modal-title">Имя Сотрудника</label>
                            <select 
                                name="employye" 
                                className="modal-input" 
                                onChange={addTask}
                                required>
                                    <option hidden selected>Имя сотрудника</option>
                                    {emplList.map(item => <option value={item.emplname} key={item.id}>{item.emplname}</option>)}
                            </select>
                        </div>

                        <div className="modal-item">
                            <label className="modal-title">Заголовок задачи</label>
                            <input 
                                name="taskTitle" 
                                className="modal-input" 
                                placeholder=''
                                onChange={addTask}
                                required />
                        </div>
                        
                        <div className="modal-item">
                            <label className="modal-title">Текст задачи</label>
                            <textarea 
                                name="taskText" 
                                className="modal-textarea" 
                                // placeholder='Текст задачи...'
                                onChange={addTask}
                                required></textarea>
                        </div>

                        <div className="modal-btn">
                            <button 
                                className="modal-btn-add"
                                type='submit'
                                onClick={handleAddTask}>Добавить</button>
                            <button 
                                className="modal-btn-cancel"
                                type='reset'
                                onClick={() => setModalActive(false)}>Отмена</button>
                        </div>
                    </form>


                </div>
            </div>
        </>
    )
}

export default Header;