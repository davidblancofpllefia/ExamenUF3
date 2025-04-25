import React from 'react';

function Camareros({ pedidos, borrarPedido, cambiarEstadoPedido }) {
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
            <th>Acciones</th>
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
                  <button
                    className={`btn btn-sm w-100 ${
                      pedido.estado === 'pendiente' ? 'btn-outline-warning' : 'btn-outline-success'
                    }`}
                    onClick={() => cambiarEstadoPedido(pedido.id)}
                  >
                    {pedido.estado === 'pendiente' ? 'Pedido pendiente...' : '¡Pedido servido!'}
                  </button>

                  <button
                    className="btn btn-outline-danger w-100 btn-sm"
                    onClick={() => borrarPedido(pedido.id)}
                  >
                    🗑 Borrar pedido
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Camareros;
