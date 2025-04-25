import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-black">
    <nav className="navbar navbar-expand-lg navbar-dark container">
      <div className="container-fluid">
        <span className="navbar-brand">Alumno: David Blanco</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inici</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/camareros">Camareros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/usuarios">Usuarios</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  );
}

export default Header;
