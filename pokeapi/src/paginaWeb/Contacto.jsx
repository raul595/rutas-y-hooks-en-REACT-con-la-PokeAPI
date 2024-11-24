import React from 'react';
import { useParams, Outlet } from 'react-router-dom';

function Contacto() {
  const { nombre } = useParams();

  const imagenes = {
    Morgado: '/morgado.png',
    Domingo: '/domingo.png',
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Página de Contacto</h1>
      {nombre ? (
        <>
          <h2>Contacto: {nombre}</h2>
          <img
            src={imagenes[nombre] || '/default.png'}
            alt={nombre}
            style={{ width: '200px', borderRadius: '50%' }}
          />
        </>
      ) : (
        <Outlet />
      )}
    </div>
  );
}

export default Contacto;


