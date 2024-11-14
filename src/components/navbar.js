import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom'; // Usamos NavLink para manejar la clase activa


const navbar = () => {
  return (
   
     <nav className='navbar'>
      <div className="logo-container">
        <img className="logo" src="/LogoEC.webp" alt="Logo"  /> 
      </div>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            INICIO
          </NavLink>
        </li>
        <li>
          <NavLink to="/conocenos" className={({ isActive }) => (isActive ? 'active' : '')}>
            CONÓCENOS
          </NavLink>
        </li>
        <li>
          <NavLink to="/proyectos" className={({ isActive }) => (isActive ? 'active' : '')}>
            PROYECTOS
          </NavLink>
        </li>
        <li>
          <NavLink to="/lanzamientos" className={({ isActive }) => (isActive ? 'active' : '')}>
            PRÓXIMOS LANZAMIENTOS
          </NavLink>
        </li>
      </ul>
      <div className='btnNaranja'>
        <a href="https://wa.me/3206192322" target="_blank" rel="noopener noreferrer">Contáctanos</a>
      </div>

   </nav>
  );
};

export default navbar;
