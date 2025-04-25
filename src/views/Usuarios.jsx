import React, { useState } from 'react';
import NuevoPedido from '../components/NuevoPedido';
import FichaBirra from '../components/FichaBirra';
import { bd } from '../bd/bd';  

function Usuarios() {
  const [cervezaInfo, setCervezaInfo] = useState(null); 

  const handleCervezaSelect = (id) => {
    const selectedCerveza = bd.find((cerveza) => cerveza.id === parseInt(id)); 
    setCervezaInfo(selectedCerveza);
  };

  return (
    <div className="container mt-3 p-5 border shadow-lg">
      <h1 className="text-center mb-5">----- Vista usuario -----</h1>
      <div className="row">
        <div className="col-md-6">
          <NuevoPedido onCervezaSelect={handleCervezaSelect} /> 
        </div>

        <div className="col-md-6 border">
            {cervezaInfo && (
            <FichaBirra
                imagen={cervezaInfo.imagen}
                nombre={cervezaInfo.nombre}
                descripcion={cervezaInfo.descripcion}
            />
          )}
        </div>

      </div>
    </div>
  );
}

export default Usuarios;


