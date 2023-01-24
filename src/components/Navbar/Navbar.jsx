import React from 'react';
import brand from '../../assets/logo_aw.webp'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
        <Link to={`/`}>
          <a className="navbar-brand">
          <img src={brand} alt="Bootstrap" width="180" height="50" />
          </a>
         </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item m-1">
              <Link to={`/new-order`}>
                <a className="nav-link active" aria-current="page" href="#">Nueva Orden</a>
              </Link>
              </li>
              <li className="nav-item dropdown m-1">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Opciones
                </a>
                <ul className="dropdown-menu">
                <Link to={`/login`}>
                  <li><a className="dropdown-item" href="#">Cambiar de Usuario</a></li>
                </Link>
                <Link to={`/settings`}>
                  <li><a className="dropdown-item" href="#">Ajustes</a></li>
                </Link>
                  <li><hr className="dropdown-divider" /></li>
                  <Link to={`/help`}>
                  <li><a className="dropdown-item" href="#">Ayuda</a></li>
                  </Link>
                  <li className="nav-item m-1">
              <Link to={`/order-list`}>
                <a className="dropdown-item" href="#">Ordenes Anteriores</a>
              </Link>
              </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;
