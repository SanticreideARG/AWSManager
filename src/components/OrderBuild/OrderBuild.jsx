import React from 'react';
import { Link } from 'react-router-dom';


const OrderBuild = () => {
    return (
        <div>
            <h3 className='mt-3 center-this'>Detalle de Insumos y Equipos</h3>
            
            <table className="table table-hover mt-3 item-detail-table">
        <thead>
          <tr>
            <th scope="col">Detalle de Item</th>
            <th scope="col">ID-Item</th>
            <th scope="col">Estado</th>
            <th scope="col">Cantidad</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
      <div className='container center-this'>
      <div className='flex-container'>
      <Link to={`/equipment-list`}>
      <button className='btn btn-primary p-3 mb-2'>Agregar Equipo</button>
      </Link>
      <Link to={`/supplies-list`}>
      <button className='btn btn-primary p-3'>Agregar Insumo</button>
      </Link>
      <br></br>
      </div>
      </div>
      <div>
      <label for="description"  className='center-this mt-4'>Tarea Realizada:</label><br></br>
                 <textarea id="clientAdress" className='mb-2 p-2 center-this' autocomplete></textarea><br></br>
                
      </div>
      <Link to={`/input-data`}>
      <button className='btn btn-success center-this p-3 mb-3'>Volver</button>
      </Link>

        </div>
    );
}

export default OrderBuild;
