import React from 'react';
import NuevoPedido from '../components/NuevoPedido';
import FichaBirra from '../components/FichaBirra';

function Usuarios() {
  return (
    <div className="container mt-3 p-5 border shadow-lg">
      <h1 className="text-center mb-5">----- Vista usuario -----</h1>
      <div className="row">
        <div className="col-md-6">
          <NuevoPedido />
        </div>

        <div className="col-md-6 border">
          <FichaBirra
            imagen="estrella.jpg"
            nombre="Estrella Galicia"
            descripcion="Cerveza suave y equilibrada con un sabor ligeramente amargo y aroma a malta."
          />
        </div>
      </div>
    </div>
  );
}

export default Usuarios;

