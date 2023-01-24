import React from 'react';
import Img750 from './img/rb750.webp';

const EquipmentsList = () => {
    return (
        <div>
          <h3 className='mt-3 center-this mb-4'>Seleccion de Equipos</h3>
            <div className="container category-container">
                <div className="category-item">
                    <img src={Img750} className='center-this' />
                    <h4 className='center-this'>Routerboards</h4>
                </div>
                <div className="category-item">
                <img src={Img750} className='center-this' />
                    <h4 className='center-this'>Poe's y Fuentes</h4>
                </div>
                <div className="category-item">
                <img src={Img750} className='center-this' />
                    <h4 className='center-this'>Equipos Radioenlace</h4>
                </div>
                <div className="category-item">
                <img src={Img750} className='center-this' />
                    <h4 className='center-this'>Equipos Satelitales</h4>
                </div>
                <div className="category-item">
                <img src={Img750} className='center-this' />
                    <h4 className='center-this'>Routerboards</h4>
                </div>
                <div className="category-item">
                <img src={Img750} className='center-this' />
                    <h4 className='center-this'>Otros</h4>
                </div>
            </div>

        </div>
    );
}


export default EquipmentsList;
