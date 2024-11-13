import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom'; // Usamos NavLink para manejar la clase activa


const navbar = () => {
  return (
   
     <nav className='navbar'>
      <div className="logo-container">
        <img src="/LogoEC.webp" alt="Logo" className="logo" /> 
      </div>
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
   </nav>
  );
};

export default navbar;
