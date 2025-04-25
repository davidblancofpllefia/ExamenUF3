import React, { useState } from 'react';
import TablaPedidos from '../components/TablaPedidos';
import { pedidos } from '../bd/pedidos';

function Camareros() {
  const [comandas, setComandas] = useState(pedidos); 

  return (
    <div className="container mt-5 mb-5 p-5 border shadow-lg">
      <h1 className="text-center mb-5">----- Vista camareros -----</h1>
      <TablaPedidos pedidos={comandas} />
    </div>
  );
}

export default Camareros;


