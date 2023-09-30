import Tables from '../../features/Tables/Tables';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Main = () => {
    return (

        <div>
            <div className='d-flex justify-content-between'>
                <div className='pb-3'>
                    <h1>All Tables</h1>
                    <div>
                    <Link to="/table/add">
                        <Button variant="outline-info">Add Table</Button>
                    </Link>
                </div>
                </div>
            </div>
            <Tables />
        </div>
    )
}

export default Main;