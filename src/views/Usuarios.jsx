import React, { useState } from 'react';
import NuevoPedido from '../components/NuevoPedido';
import FichaBirra from '../components/FichaBirra';
import TablaPedidos from '../components/TablaPedidos'; 
import { bd } from '../bd/bd';

function Usuarios() {
  const [cervezaInfo, setCervezaInfo] = useState(null); 
  const [pedidosState, setPedidosState] = useState([]); 

  const handleCervezaSelect = (id) => {
    const selectedCerveza = bd.find((cerveza) => cerveza.id === parseInt(id)); 
    setCervezaInfo(selectedCerveza);
  };

  const agregarPedido = (nuevoPedido) => {
    setPedidosState((prevPedidos) => [...prevPedidos, nuevoPedido]);
  };

  const borrarPedido = (id) => {
    setPedidosState((prev) => prev.filter(p => p.id !== id));
  };

  const cambiarEstadoPedido = (id) => {
    setPedidosState((prev) =>
      prev.map((pedido) =>
        pedido.id === id
          ? { ...pedido, estado: pedido.estado === 'pendiente' ? 'servido' : 'pendiente' }
          : pedido
      )
    );
  };

  return (
    <div className="container mt-3 p-5 border shadow-lg">
      <h1 className="text-center mb-5">----- Vista usuario -----</h1>
      <div className="row">
        <div className="col-md-6">
          <NuevoPedido 
            onCervezaSelect={handleCervezaSelect} 
            onAgregarPedido={agregarPedido}  
          /> 
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

      <div className="mt-5">
        <TablaPedidos 
          pedidos={pedidosState} 
          borrarPedido={borrarPedido}
          cambiarEstadoPedido={cambiarEstadoPedido}
        />
      </div>
    </div>
  );
}

export default Usuarios;
