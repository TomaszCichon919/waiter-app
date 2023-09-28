import Main from './components/pages/Main/Main.js';
import Add from './components/pages/Add/Add.js';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/pages/NotFound/NotFound.js';
import Table from './components/pages/Table/Table.js';
import Edit from './components/pages/Edit/Edit.js';
import Footer from './components/views/Footer/Footer.js'
import Header from './components/views/Header/Header.js'
import { Container } from 'react-bootstrap'

const App = () => {
  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/post/add" element={<Add />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/table/:tableId" element={<Table />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
};

export default App;
