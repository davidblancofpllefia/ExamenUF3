import React from 'react';
import { pedidos } from '../bd/pedidos';

function TablaPedidos() {
  return (
    <div className="container mt-5 mb-5 p-5 border shadow-lg">
      <h3>Pedidos</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Grupo</th>
            <th>Mesa</th>
            <th>Cerveza</th>
            <th>Cantidad</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((pedido) => (
            <tr key={pedido.id}>
              <td>{pedido.id}</td>
              <td>{pedido.grupo}</td>
              <td>{pedido.numeroMesa}</td>
              <td>{pedido.cerveza}</td>
              <td>{pedido.cantidad}</td>
              <td>
                <div className="d-flex gap-2">
                  <button className={`btn btn-sm w-100 ${pedido.estado === 'pendiente' ? 'btn-outline-warning' : 'btn-outline-success'}`}>
                    {pedido.estado === 'pendiente' ? 'Pedido pendiente...' : '¡Pedido servido!'}
                  </button>
                  <button className="btn btn-outline-danger w-100 btn-sm">🗑 Borrar pedido</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaPedidos;
