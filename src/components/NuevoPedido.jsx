import React from 'react';

function NuevoPedido() {
  return (
    <div>
      <h3>Grupo</h3>
      <label htmlFor="nombreGrupo" className="form-label">Nombre del grupo:</label>
      <input type="text" className="form-control mt-2" placeholder="Borrachos de DAW2" />

      <label htmlFor="numeroMesa" className="form-label mt-3">Mesa número</label>
      <input type="number" className="form-control mt-2" placeholder="0" />

      <h3 className="mt-5">Haz tu pedido</h3>
      <div className="d-flex gap-3">
        <select name="cervezas" id="cervezas" className="form-control">
          <option value="">Selecciona qué birra quieres</option>
          <option value="">Estrella Galicia</option>
        </select>

        <input type="number" value="0" className="form-control" />
      </div>

      <button className="btn btn-success mt-4 w-100">¡Enviar pedido!</button>
    </div>
  );
}

export default NuevoPedido;
