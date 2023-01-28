import React from 'react';
import { Link } from 'react-router-dom';

const InputData = () => {
    return (
        <div className="container">
         <div>

                <label for="cost" className='center-this mt-3'>Costo de Servicio:</label><br></br>
                <select id="cost" className='center-this p-2'>
                  <option value="paid">Servicio con Costo</option>
                  <option value="free">Servicio sin Costo</option>
                  <option  value="undeterminated" selected="selected">Costo no determinado</option>
                </select><br></br>

                <label for="modempropiety" className='center-this'>Propiedad del Modem:</label><br></br>
                <select id="modempropiety" className='center-this p-2'>
                  <option value="modemAfter">Propiedad de After-Wire</option>
                  <option value="modemClient">Propiedad de Cliente</option>
                </select><br></br>
                <label for="stabilizier" className='center-this'>Estabilizacion de Corriente</label><br></br>
                <select id="stabilizier" className='center-this p-2'>
                <option value="stableAfter" selected="selected">Sin Estabilizacion</option>
                  <option value="stableAfter">Estabilizador de After-Wire</option>
                  <option value="stableClient">Propiedad de Cliente</option>
                </select><br></br>

                <label for="bandwidth" className='center-this'>Ancho de Banda (Mbp/s):</label><br></br>
                <input type='number' className='center-this'></input><br></br>
            <div className='center-this'>
                <Link to={`/new-order`}>
                 <button className='btn btn-dark m-3 p-3'>Anterior</button>
                </Link>
                <Link to={`/order-build`}>
                 <button className='btn btn-dark m-3 p-3'>Siguiente</button>
                </Link>
                <button className='btn btn-danger p-4 center-this mb-3 mt-4'>Borrar Todo</button>
                </div>
         </div>
        </div>
    );
}

export default InputData;
