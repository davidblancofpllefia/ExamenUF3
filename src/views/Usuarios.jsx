import React from 'react';
import NuevoPedido from '../components/NuevoPedido';


function Usuarios() {
  return (
    <div className="container mt-3 p-5 border shadow-lg">
      <h1 className="text-center mb-5">----- Vista usuario -----</h1>
      <div className="row">
        <div className="col-md-6">
          <NuevoPedido />
        </div>
    
        <div className="col-md-6 border">
          <div className="p-3 d-flex">
            <div className="w-50">
              <img src="estrella.jpg" alt="Estrella Galicia" className="w-100" />
            </div>
            <div className="ms-3">
              <h4>Estrella Galicia</h4>
              <p>Cerveza suave y equilibrada con un sabor ligeramente amargo y aroma a malta.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usuarios;
