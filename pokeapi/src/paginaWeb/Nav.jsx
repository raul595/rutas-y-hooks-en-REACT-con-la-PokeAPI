import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="p-3">
      <Navbar.Brand style={{ color: 'white', fontWeight: 'bold', marginLeft: '15px' }}>
        Pokeapi
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/" style={{ color: 'gray' }}>
            Inicio
          </Nav.Link>
          <Nav.Link as={Link} to="/gen1" style={{ color: 'gray' }}>
            Gen1
          </Nav.Link>
          <Nav.Link as={Link} to="/gen2" style={{ color: 'gray' }}>
            Gen2
          </Nav.Link>
          <Nav.Link as={Link} to="/gen3" style={{ color: 'gray' }}>
            Gen3
          </Nav.Link>
          <Nav.Link as={Link} to="/contacto/Morgado" style={{ color: 'gray' }}>
            Morgado
          </Nav.Link>
          <Nav.Link as={Link} to="/contacto/Domingo" style={{ color: 'gray' }}>
            Domingo
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;








