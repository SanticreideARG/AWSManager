import React from 'react';

const SuppliesList = () => {
    return (
        <div>
            <h3 className='mt-3 center-this'>Seleccion de Suministros</h3>
            <div className="container category-container">
                <div className="category-item">
                    <img src='' className='center-this' />
                    <h4 className='center-this'>Cables y Conectores</h4>
                </div>
                <div className="category-item">
                <img src='' className='center-this' />
                    <h4 className='center-this'>Postes y Mastiles</h4>
                </div>
                <div className="category-item">
                <img src='' className='center-this' />
                    <h4 className='center-this'>Soportes/Abrazaderas</h4>
                </div>
                <div className="category-item">
                <img src='' className='center-this' />
                    <h4 className='center-this'>Tornilleria</h4>
                </div>
                <div className="category-item">
                <img src='' className='center-this' />
                    <h4 className='center-this'>Routerboards</h4>
                </div>
                <div className="category-item">
                <img src='' className='center-this' />
                    <h4 className='center-this'>Otros</h4>
                </div>
            </div>
        </div>
    );
}

export default SuppliesList;
