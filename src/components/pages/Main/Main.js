import Tables from '../../features/Posts/Posts';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Main = () => {
    return (

        <div>
            <div className='d-flex justify-content-between'>
                <div className='pb-3'>
                    <h1>All Posts</h1>
                </div>
                <div>
                    <Link to="/post/add">
                        <Button variant="outline-info">Add Post</Button>
                    </Link>
                </div>
            </div>
            <Posts />
        </div>
    )
}

export default Main;