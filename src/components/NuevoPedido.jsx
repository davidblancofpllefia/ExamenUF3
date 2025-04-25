import React, { useState } from 'react';
import { bd } from '../bd/bd';

function NuevoPedido({ onCervezaSelect, onAgregarPedido }) {
  const [selectedCerveza, setSelectedCerveza] = useState('');
  const [cantidad, setCantidad] = useState(0);
  const [nombreGrupo, setNombreGrupo] = useState('');
  const [numeroMesa, setNumeroMesa] = useState('');

  const handleCervezaChange = (e) => {
    const id = e.target.value;
    setSelectedCerveza(id);
    if (onCervezaSelect) onCervezaSelect(id);  
  };

  const handleCantidadChange = (e) => {
    setCantidad(e.target.value); 
  };


  const handleSubmit = () => {
    if (!selectedCerveza || cantidad <= 0) return;
  
    const nuevaCerveza = bd.find(c => c.id === parseInt(selectedCerveza));
    const nuevoPedido = {
      grupo: nombreGrupo || "Borrachos de DAW2",
      numeroMesa: numeroMesa || 1,
      cerveza: nuevaCerveza.nombre,
      cantidad: parseInt(cantidad),
      estado: "pendiente"
    };
  
    onAgregarPedido(nuevoPedido);
  };
  

  return (
    <div>
      <h3>Grupo</h3>
      <label htmlFor="nombreGrupo" className="label-control">Nombre del grupo:</label>
      <input type="text" className="form-control mt-2" placeholder="Borrachos de DAW2" 
             value={nombreGrupo} onChange={(e) => setNombreGrupo(e.target.value)} />

      <label htmlFor="numeroMesa" className="label-control">Mesa número:</label>
      <input type="number" className="form-control mt-2" placeholder="0" 
             value={numeroMesa} onChange={(e) => setNumeroMesa(e.target.value)} />

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

      <button className="btn btn-success mt-4 w-100" onClick={handleSubmit}>¡Enviar pedido!</button>

    </div>
  );
}

export default NuevoPedido;

