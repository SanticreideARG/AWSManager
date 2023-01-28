import React from 'react';
import { Link } from 'react-router-dom';

const SetTime = () => {
    return (
        <div className='container center-this'>
            <div>
                <h6 className='center-this mb-2 mt-2'>Ingrese Fecha</h6>
                <input id='name' type="date" className='center-this p-2' />
                <button className='center-this mt-2 mb-4 btn btn-primary'>Definir</button>
            </div>
            <div>
                <h6 className='center-this mb-2 mt-2'>Ingrese Hora de Inicio</h6>
                <input type="time" className='center-this p-2'/>
                <button className='center-this mt-2 mb-4 btn btn-primary'>Definir</button>
            </div>
            <div>
                <h6 className='center-this mb-2 mt-2'>Ingrese Hora de Finalizacion</h6>
                <input type="time"  className='center-this p-2'/>
                <button className='center-this mt-2 mb-4 btn btn-primary'>Definir</button>
            </div>
            <p className='center-this mt-3 mb-3'>Podra ingresar o modificar estos datos posteriormente.</p>
            <Link to={`/new-order`}>
               <button className='btn btn-success center-this p-3'>Volver</button>
            </Link>
        </div>
    );
}

export default SetTime;
