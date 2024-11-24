import React from 'react';
import Nav from './Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contenido from './Contenido';
import Cards from './Cards';
import Contacto from './Contacto';
import 'bootstrap/dist/css/bootstrap.min.css';

function Web() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Contenido />} />
          <Route path="/gen1" element={<Cards generation="1" />} />
          <Route path="/gen2" element={<Cards generation="2" />} />
          <Route path="/gen3" element={<Cards generation="3" />} />
          <Route path="/contacto" element={<Contacto />}>
            <Route path=":nombre" element={<Contacto />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default Web;





