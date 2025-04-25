import React from 'react';

function Camareros() {
  return (
    <div className="container mt-5 mb-5 p-5 border shadow-lg">
      <h1 className="text-center mb-5">----- Vista camareros -----</h1>
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
          <tr>
            <td>1</td>
            <td>Borrachos de DAW2</td>
            <td>1</td>
            <td>Estrella Galicia</td>
            <td>3</td>
            <td>
              <div className="d-flex gap-2">
                <button className="btn btn-outline-warning w-100 btn-sm">Pedido pendiente...</button>
                <button className="btn btn-outline-danger w-100 btn-sm">🗑 Borrar pedido</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Cabezones contentos</td>
            <td>1</td>
            <td>Estrella DAM</td>
            <td>2</td>
            <td>
              <div className="d-flex gap-2">
                <button className="btn btn-outline-success w-100 btn-sm">¡Pedido servido!</button>
                <button className="btn btn-outline-danger w-100 btn-sm">🗑 Borrar pedido</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Camareros;
