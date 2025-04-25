import React, { useState } from 'react';
import TablaPedidos from '../components/TablaPedidos';
import { pedidos as pedidosData } from '../bd/pedidos'; 

function Camareros() {
  const [pedidosState, setPedidosState] = useState(pedidosData); 

  return (
    <div className="container mt-5 mb-5 p-5 border shadow-lg">
      <h1 className="text-center mb-5">----- Vista camareros -----</h1>
      <TablaPedidos pedidos={pedidosState} /> 
    </div>
  );
}

export default Camareros;



