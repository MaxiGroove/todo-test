import { Link } from 'react-router-dom';
import './employee-item.scss'

const EmployeeItem = ({item}) => {

    const {id, emplname} = item;

    return (
        <div className="item">
            <Link to={`/employee/${id}?`} className="item-user">
                {emplname}
            </Link>
        </div>
    )
}

export default EmployeeItem;