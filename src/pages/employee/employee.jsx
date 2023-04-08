import { useParams } from "react-router";
import Header from "../../components/header/header";
import TaskItem from "../../components/task-item/task-item";
import { emplList, Tasks } from "../../const";

import './employee.scss';

const Employee = () => {

    const { id } = useParams();

    const { emplname, photo, position } = emplList.filter(item => item.id === id)[0];

    return (
        <>
            <Header />
            <section className="main">
                <div className="main-container">
                    <div className="user">

                        <div className="user-column">
                            <div className="user-info">
                                <div className="user-photo">
                                    <img src={photo} alt="photography" className="user-photo-face" />
                                </div>
                                <div className="user-about">
                                    <div className="user-name">{emplname}</div>
                                    <div className="user-position">{position}</div>
                                </div>
                            </div>
                        </div>

                        <div className="user-column">
                            <div className="user-tasks sm">
                                {Tasks.map(item => item.idEmpl === id ? <TaskItem item={item} key={item.id} /> : null)}
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Employee;