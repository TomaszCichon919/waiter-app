import { useSelector, useDispatch } from 'react-redux';
import { getTablesById} from '../../../redux/tablesRedux'
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import styles from './Table.module.scss';
import { editTable } from '../../../redux/tablesRedux'
import TableForm from '../TableForm/TableForm'
import { Navigate } from 'react-router-dom';


const Table = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = post => {
    dispatch(editTable({ ...post, id: tableId }));
    navigate('/')
  }


  const { tableId } = useParams();

  const table = useSelector(state => getTablesById(state, tableId));


  if (!table) return <Navigate to="/" />


  return (

    <section className='px-5'>
      <div className='d-flex justify-content-between'> 
        <div>
          <h3 className='py-4'>Table {tableId}</h3>
        </div>
      </div>
      <TableForm action={handleSubmit} actionText="Update" status={table.status} peopleAmount={table.peopleAmount}
            maxPeopleAmount={table.maxPeopleAmount} bill={table.bill} />
    
    </section>
  );
};

export default Table;
