import React from 'react';
import { Link } from 'react-router-dom';

const NewOrder = () => {
    return (
        <div className='container'>
            <h3 className='mt-3 center-this'>Nueva Orden de servicio</h3>
            <div className="container">
          
            <label for="tipoDeServicio" className='mt-3  center-this'>Tipo de Servicio:</label><br></br>
                <select id="tipoDeServicio" className='center-this p-2 input-modifier'>
                  <option value="servicio">Servicio Tecnico</option>
                  <option value="traslado">Traslado</option>
                  <option value="instalacion">Instalacion</option>
                  <option value="baja">Baja/Retiro</option>
                </select>
            </div>
            <div className='container mt-3'>
                <Link to={`/set-time`}>
                 <button className='btn btn-primary  center-this p-4 mt-3'>Definir Fecha y Hora</button>
                </Link>
            </div>


            <label for="clientName" className='center-this mt-5'>Numero de Incidencia:</label><br></br>
            <input id="clientName" type='number' className='mb-2 p-2 center-this'></input><br></br>

            <label for="clientName" className='center-this'>Nombre del Cliente:</label><br></br>
            <input id="clientName" type='text' className='mb-2 p-2 center-this'></input><br></br>

            <label for="province" className='mt-3 center-this'>Provincia:</label><br></br>
                <select id="cars" className='p-2 center-this'>
                  <option value="neuquen">Neuquen</option>
                  <option value="rionegro">Rio Negro</option>
                  <option value="mendoza">Mendoza</option>
                  <option value="chubut">Chubut</option>
                  <option value="santacruz">Santa Cruz</option>
                </select><br></br>

                <label for="clientCity"  className='mt-3 center-this'>Localidad:</label><br></br>
                <input id="clientAdress" type='text' className='mb-2 p-2 center-this'></input><br></br>
                
            <label for="clientAdress" className='center-this'>Domicilio:</label><br></br>
            <input id="clientAdress" type='text' className='mb-2 p-2 center-this'></input><br></br>

            <Link to={`/input-data`}>
            <button className='btn btn-dark p-4 center-this mb-4'>Siguiente</button>
            </Link>
        </div>
    );
}

export default NewOrder;
