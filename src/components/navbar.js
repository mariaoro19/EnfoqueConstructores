import React, { useState } from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom'; // Usamos NavLink para manejar la clase activa
import Menu from '../utils/navbar/menu.webp';

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuActive(!isMenuActive);
  };
  return (
   
     <nav className='navbar'>
      <div className="logo-container">
        <img className="logo" src="/LogoEC.webp" alt="Logo"  /> 
      </div>
      

      <div className={`menu-content ${isMenuActive ? 'active' : ''}`}>
        <ul>
          <li><a href="/">INICIO</a></li>
          <li><a href="/conocenos">CONÓCENOS</a></li>
          <li><a href="/proyectos">PROYECTOS</a></li>
          <li><a href="/lanzamientos">PRÓXIMOS LANZAMIENTOS</a></li>
          <li>
            <div className='btnNaranjaNavbarMovil'>
            <a href="https://wa.me/3206192322" target="_blank" rel="noopener noreferrer">Contáctanos</a>
          </div>
          </li>
        </ul>
    </div>
      {/* El ícono del menú para pantallas pequeñas */}
      <div className="menu-icon" onClick={handleMenuToggle}>
        <img src={Menu} alt="Menu" />
      </div>
      <div className='navbar-pc'>
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

      </div>
      
      <div className='btnNaranjaNavbar'>
        <a href="https://wa.me/3206192322" target="_blank" rel="noopener noreferrer">Contáctanos</a>
      </div>

   </nav>
  );
};

export default Navbar;
