import React from 'react';
import { NavLink } from 'react-router-dom'; // Usamos NavLink para manejar la clase activa

import '../App.css';

const footbar = () => {
  return (
    <nav className="footbar">
      <div className="menu">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/conocenos" className={({ isActive }) => (isActive ? 'active' : '')}>
              Conócenos
            </NavLink>
          </li>
          <li>
            <NavLink to="/proyectos" className={({ isActive }) => (isActive ? 'active' : '')}>
              Proyectos
            </NavLink>
          </li>
        </ul>  
        
      </div>
      
  </nav>
  );
};

export default footbar;
