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
      <div className='flex-container'>
      <Link to={`/equipment-list`}>
      <button className='btn btn-primary p-3 center-this mb-2'>Agregar Equipo</button>
      </Link>
      <Link to={`/supplies-list`}>
      <button className='btn btn-primary p-3 center-this'>Agregar Insumo</button>
      </Link>
      </div>
        </div>
    );
}

export default OrderBuild;
