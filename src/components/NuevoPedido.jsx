import React, { useState } from 'react';
import { bd } from '../bd/bd';

function NuevoPedido() {
  const [selectedCerveza, setSelectedCerveza] = useState(''); 
  const [cantidad, setCantidad] = useState(0); 


  const handleCervezaChange = (e) => {
    setSelectedCerveza(e.target.value); 
  };


  const handleCantidadChange = (e) => {
    setCantidad(e.target.value); 
  };

  return (
    <div>
      <h3>Grupo</h3>
      <label htmlFor="nombreGrupo" className="label-control">Nombre del grupo:</label>
      <input type="text" className="form-control mt-2" placeholder="Borrachos de DAW2" />

      <label htmlFor="numeroMesa" className="label-control">Mesa número:</label>
      <input type="number" className="form-control mt-2" placeholder="0" />

      <h3 className="mt-5">Haz tu pedido</h3>
      
      <div className="d-flex gap-3">

        <select 
          name="cervezas" 
          id="cervezas" 
          className="form-control" 
          value={selectedCerveza} 
          onChange={handleCervezaChange}
        >
          <option value="">Selecciona qué birra quieres</option>
          {bd.map((cerveza) => (
            <option key={cerveza.id} value={cerveza.id}>
              {cerveza.nombre}
            </option>
          ))}
        </select>


        <input 
          type="number" 
          className="form-control" 
          value={cantidad} 
          onChange={handleCantidadChange}
        />
      </div>

      <button className="btn btn-success mt-4 w-100">¡Enviar pedido!</button>
    </div>
  );
}

export default NuevoPedido;
