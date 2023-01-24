import React from 'react';
import { Link } from 'react-router-dom';

const SetTime = () => {
    return (
        <div className='container center-this'>
            <div>
                <h6 className='m-2'>Ingrese Fecha</h6>
                <input id='name' type="date" className='p-2' />
                <button className='ms-3 btn btn-primary'>Definir</button>
            </div>
            <div>
                <h6 className='m-2'>Ingrese Hora de Inicio</h6>
                <input type="time" className='p-2'/>
                <button className='ms-3 btn btn-primary'>Definir</button>
            </div>
            <div>
                <h6 className='m-2'>Ingrese Hora de Finalizacion</h6>
                <input type="time"  className='p-2'/>
                <button className='ms-3 btn btn-primary'>Definir</button>
            </div>
            <p>Podra ingresar o modificar estos datos posteriormente.</p>
            <Link to={`/new-order`}>
               <button className='btn btn-success m-3 p-3'>Volver</button>
            </Link>
        </div>
    );
}

export default SetTime;
