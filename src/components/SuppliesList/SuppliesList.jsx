import React from 'react';
import cables from './img/cables.png';
import baterias from './img/baterias.png';
import tornillos from './img/tornillos.png';
import gabinetes from './img/gabinetes.png';
import postes from './img/postes.png';
import riendas from './img/riendas.png';
import soportes from './img/soportes.png';
import otros from './img/otros.png';


const SuppliesList = () => {
    return (
        <div>
          <h3 className='mt-3 center-this mb-4'>Seleccion de Insumos</h3>
            <div className="container category-container">
                <div className="category-item">
                    <img src={cables} className='center-this' />
                    <h4 className='center-this'>Cables y Conectores</h4>
                </div>
                <div className="category-item">
                <img src={baterias} className='center-this' />
                    <h4 className='center-this'>Baterias</h4>
                </div>
                <div className="category-item">
                <img src={tornillos} className='center-this' />
                    <h4 className='center-this'>Tornillos</h4>
                </div>
                <div className="category-item">
                <img src={gabinetes} className='center-this' />
                    <h4 className='center-this'>Gabinetes</h4>
                </div>
                <div className="category-item">
                <img src={postes} className='center-this' />
                    <h4 className='center-this'>Postes</h4>
                </div>
                <div className="category-item">
                <img src={soportes} className='center-this' />
                    <h4 className='center-this'>Soportes</h4>
                </div>
                <div className="category-item">
                <img src={riendas} className='center-this' />
                    <h4 className='center-this'>Riendas</h4>
                </div>
                <div className="category-item">
                <img src={otros} className='center-this' />
                    <h4 className='center-this'>Otros</h4>
                </div>
            </div>

        </div>
    );
}

export default SuppliesList;
