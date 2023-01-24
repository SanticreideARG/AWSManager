import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className='container'>
            <h3 className='mt-3'>Bienvenido Administrador</h3>
            <Link to={`/new-order`}>
              <button className='btn btn-primary mt-3'>Crear Nueva Orden de Servicio</button>
            </Link>
            <h4 className='mt-3'>Historial</h4>

            <table className="table table-hover mt-3">
        <thead>
          <tr>
            <th scope="col">Numero de ID</th>
            <th scope="col">Cliente/Nodo</th>
            <th scope="col">Tipo de Orden</th>
            <th scope="col">Fecha</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-dark">
            <th scope="row">#57899</th>
            <td>Rep Loma de la Lata Norte</td>
            <td>Nodos/Oficinas</td>
            <td>5/1/2023</td>
            <td>
            <Link to={`/order-detail`}>
              <button className='btn btn-secondary'>Detalles</button>
            </Link></td>
          </tr>
          <tr className="table-dark">
            <th scope="row">#57469</th>
            <td>YPF Pozo 265</td>
            <td>Cliente Corporativo</td>
            <td>4/1/2023</td>
            <td><button className='btn btn-secondary'>Detalles</button></td>
          </tr>
          <tr className="table-dark">
            <th scope="row">#57467</th>
            <td>Martin Arevalo</td>
            <td>Cliente Domiciliario</td>
            <td>2/1/2023</td>
            <td><button className='btn btn-secondary'>Detalles</button></td>
          </tr>
        </tbody>
      </table>
        </div>
    );
}

export default Home;
