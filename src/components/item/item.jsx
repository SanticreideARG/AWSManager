import React from 'react';

const Item = ({item}) => {
    return (
        <div className='card'> 
            <h4>{item.detalle}</h4>
            <hr />
            <p>{item.descripcion}</p>
            <button className='btn btn-primary'>Agregar</button>
        </div>
    );
}

export default Item;
