import styles from './Tables.module.scss';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';
import { getAllTables } from '../../../redux/store'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTableRequest } from '../../../redux/tablesRedux'





const Tables = () => {
   const [show, setShow] = useState(false);
  const [tableId, setTableId] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = (tableToDelete) => { 
    setShow(true);
    setTableId(tableToDelete);
  }






  const dispatch = useDispatch();


  const handleDelete = () => {
    setShow(false)
    console.log('tableid', tableId);
    const string = tableId.toString()
    dispatch(removeTableRequest(string));
  }
    
 const tables = useSelector(getAllTables);


  return (

    <Container className='mb-4'>
      <ListGroup>
      {tables.map(table => (
        <ListGroup.Item key={table.id} xs={12} md={3} className='d-flex justify-content-between'>
          <div className={styles.textWrapper}>
          <h3 className='pt-2'>Table {table.id}</h3>
          <p><span className={styles.caption}>Status:</span>{table.status}</p>
          </div>
          <div>
          <Link key={table.id} to={'/table/' + table.id}><Button className='m-2' variant="primary">Show More</Button></Link>
          <Button variant="outline-danger" className='m-2' onClick={() => handleShow(table.id)}>Delete</Button>
          </div>
          </ListGroup.Item>
      ))}
      </ListGroup>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>The opreation will completly remove the table. The opration can not be reversed.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Tables;

