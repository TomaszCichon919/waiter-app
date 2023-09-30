
import { useDispatch } from 'react-redux';
import { addTable } from '../../../redux/tablesRedux'
import { useNavigate } from 'react-router-dom';
import TableForm from '../TableForm/TableForm'



const AddTableForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = table => {
        dispatch(addTable(table));
        navigate('/')
    };

    return (
        <TableForm action={handleSubmit} actionText="Add table" />
    )
};

export default AddTableForm;