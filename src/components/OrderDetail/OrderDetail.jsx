import React from 'react';
import sentImg from '../../assets/img/sent.png'

const OrderDetail = () => {
    return (
        <div className='container mt-4 detail-order'>
         <div className='row'>
            <h3 className='col mt-3'>Detalles de Orden</h3> <p className='col mt-1'>N° de Incidencia:  56877</p>
         </div>
            <hr></hr>
        <div className="row">
            <p className='col'>Cliente:  Nodos y oficinas</p>
            <p className='col'>Localidad:  Sierra Barrosa</p>
            <p>Tipo de Servicio:  Servicio Técnico</p>
            <hr></hr>
            <p className='col-6'>Fecha:  03/01/2023</p>
            <p className='col-6'>Hora:  15:15 / 18:00</p>
            <p>Usuario: Administrador</p>
            <p>Estado: <img src={sentImg}></img> Enviado</p>
            </div>
            <button>Anterior</button> <button>Siguiente</button>
        </div>
    );
}

export default OrderDetail;
