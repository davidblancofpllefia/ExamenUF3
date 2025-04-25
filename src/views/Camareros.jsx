import React, { useState } from 'react';
import TablaPedidos from '../components/TablaPedidos';
import { pedidos as pedidosData } from '../bd/pedidos';



function Camareros() {
  const [pedidosState, setPedidosState] = useState(pedidosData); 

  const borrarPedido = (id) => {
    setPedidosState(pedidosState.filter(pedido => pedido.id !== id)); 
  };

  const cambiarEstadoPedido = (id) => {
    setPedidosState(
      pedidosState.map((pedido) =>
        pedido.id === id
          ? { ...pedido, estado: pedido.estado === 'pendiente' ? 'servido' : 'pendiente' }  // Cambia el estado
          : pedido
      )
    );
  };

  return (
    <div className="container mt-5 mb-5 p-5 border shadow-lg">
      <h1 className="text-center mb-5">----- Vista camareros -----</h1>
      <TablaPedidos pedidos={pedidosState}  borrarPedido={borrarPedido} cambiarEstadoPedido={cambiarEstadoPedido} /> 
    </div>
  );
}

export default Camareros;



