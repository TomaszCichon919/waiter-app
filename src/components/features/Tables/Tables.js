import styles from './Tables.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import { getAllTables } from '../../../redux/store'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getTablesById, removeTable } from '../../../redux/tablesRedux'
import { useParams } from 'react-router';





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
    dispatch(removeTable(string));
  }
    
 const tables = useSelector(getAllTables);


  return (
    <Container className='mb-4'>
      <Row>
      {tables.map(table => (
        <Col key={table.id} xs={12} md={3} className={styles.wrapper}>
          <h3 className='pt-2'>Table {table.id}</h3>
          <p><span className={styles.caption}>Status:</span>{table.status}</p>
          <Link key={table.id} to={'/table/' + table.id}><Button className='mb-3' variant="primary">Show More</Button></Link>
          <Button variant="outline-danger" className='mx-2' onClick={() => handleShow(table.id)}>Delete</Button>
          </Col>
      ))}
      </Row>
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



// if (!table) return <Navigate to="/" />
