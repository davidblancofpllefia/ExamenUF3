import React from 'react';

function Usuarios() {
  return (
    <div className="container mt-3 p-5 border shadow-lg">
      <h1 className="text-center mb-5">----- Vista usuario -----</h1>
      <div className="row">
        <div className="col-md-6">
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
