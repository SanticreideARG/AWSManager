import React from 'react';
import routers from './img/routers.png';
import fuentes from './img/fuentes.png';
import radioenlaces from './img/radioenlaces.png';
import satelitales from './img/satelitales.png';
import repetidores from './img/repetidores.png';
import otros from './img/otros.png';

const EquipmentsList = () => {
    return (
        <div>
          <h3 className='mt-3 center-this mb-4'>Seleccion de Equipos</h3>
            <div className="container category-container">
                <div className="category-item">
                    <img src={routers} className='center-this' />
                    <h4 className='center-this'>Routerboards</h4>
                </div>
                <div className="category-item">
                <img src={fuentes} className='center-this' />
                    <h4 className='center-this'>Poe's y Fuentes</h4>
                </div>
                <div className="category-item">
                <img src={radioenlaces} className='center-this' />
                    <h4 className='center-this'>Radioenlace</h4>
                </div>
                <div className="category-item">
                <img src={satelitales} className='center-this' />
                    <h4 className='center-this'>Satelitales</h4>
                </div>
                <div className="category-item">
                <img src={repetidores} className='center-this' />
                    <h4 className='center-this'>Repetidoras 5.7</h4>
                </div>
                <div className="category-item">
                <img src={otros} className='center-this' />
                    <h4 className='center-this'>Otros</h4>
                </div>
            </div>
            <Link to={`/order-build`}>
                  <button className='btn btn-success center-this p-3 mb-3'>Volver</button>
             </Link>
        </div>
    );
}


export default EquipmentsList;
