import { useState } from 'react';
import './task-item.scss'

const TaskItem = ({item}) => {

    const {employye, taskTitle, date, archive} = item;

    const [archives, setArchives] = useState({
        ...item,
        archive: archive,
    });

    
    const handleArchive = () => {
        item.archive = !archive;
        console.log(item.archive)
    }

    return (
        <div className="item">
            <div className="item-user">
                {employye} {date}
            </div>

            <div className="item-text">{taskTitle}</div>

            <div className="item-archive" onClick={handleArchive}>
                Удалить
            </div>
        </div>
    )
}

export default TaskItem;