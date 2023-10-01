import Main from './components/pages/Main/Main.js';
import Add from './components/pages/Add/Add.js';
import { Routes, Route } from 'react-router-dom';
import Table from './components/features/Table/Table.js';
import Footer from './components/views/Footer/Footer.js';
import Header from './components/views/Header/Header.js';
import { Container } from 'react-bootstrap';
import { fetchTables } from './redux/tablesRedux.js';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


const App = () => {

  const dispatch = useDispatch();
 
  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/table/add" element={<Add />} />
          <Route path="/table/:tableId" element={<Table />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
};

export default App;
