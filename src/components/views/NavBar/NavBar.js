import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <Navbar expand="lg" bg="primary" variant="dark" className="px-4 mt-4 mb-4 rounded d-flex justify-content-between">
      <div>
        <Navbar.Brand href="#home">Post App</Navbar.Brand>
      </div>
      <div>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/about">About</Nav.Link>
          <Nav.Link as={NavLink} to="/categories">Categories</Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );


}

export default NavBar;