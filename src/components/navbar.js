import React, { useState,useEffect } from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom'; // Usamos NavLink para manejar la clase activa
import Menu from '../utils/navbar/menu.webp';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [isProyectosOpen, setIsProyectosOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const navigate = useNavigate();
  /*
  const toggleProyectosMenu = () => {
    setIsProyectosOpen(!isProyectosOpen);
  };*/

  const selectCity = (city) => {
    setSelectedCity(city);
  };
  

  const toggleProyectosMenu = () => {
    setIsProyectosOpen(prevState => !prevState);  // Toggle open/close menu
  };
/*
  const selectCity = (city) => {
    setSelectedCity(city);  // Set selected city
    
    if (city === 'Medellin') {
      navigate('/proyectos/medellin/sauce'); // Redirige a la ruta de Medellín
    } else if (city === 'Santander') {
      navigate('/proyectos/santander/alamos'); // Redirige a la ruta de Santander
    }
  };*/

  const handleMenuToggle = () => {
    setMenuActive(!menuActive); // Alterna el estado
  };

  return (
    <nav className='navbar'>
      <div className="logo-container">
        <img className="logo" src="/LogoEC.webp" alt="Logo" /> 
      </div>

      <div className={`menu-content ${menuActive ? 'active' : ''}`}>
        <ul className='navbar-menu'>
          <li><a href="/">INICIO</a></li>
          <li><a href="/conocenos">CONÓCENOS</a></li>
          <li>
          <NavLink
            to="#"
            onClick={toggleProyectosMenu}
            className={({ isActive }) => (isActive || isProyectosOpen ? 'active' : '')}
          >
            PROYECTOS
          </NavLink>
          {isProyectosOpen && (
            <ul >
              <li
                onMouseEnter={() => selectCity('Medellin')}
                onMouseLeave={() => selectCity(null)}
              >
                Medellín
                {selectedCity === 'Medellin' && (
                  <ul>
                    <li>
                      <NavLink to="/proyectos/medellin/sauce">Sauce</NavLink>
                    </li>
                    <li>
                      <NavLink to="/proyectos/medellin/palmas">Palmas</NavLink>
                    </li>
                  </ul>
                )}
              </li>
              <li
                onMouseEnter={() => selectCity('Santander')}
                onMouseLeave={() => selectCity(null)}
              >
                Santander
                {selectedCity === 'Santander' && (
                  <ul >
                    <li>
                      <NavLink to="/proyectos/santander/alamos">Álamos</NavLink>
                    </li>
                    <li>
                      <NavLink to="/proyectos/santander/bosques">Bosques</NavLink>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>

          <li><a href="/lanzamientos">PRÓXIMOS LANZAMIENTOS</a></li>
          <li>
            <div className='btnNaranjaNavbarMovil'>
              <a href="https://wa.link/sjwok3" target="_blank" rel="noopener noreferrer">Contáctanos</a>
            </div>
          </li>
        </ul>
      </div>

      <div className="menu-icon" onClick={handleMenuToggle}>
        <img src={Menu} alt="Menu" />
      </div>

      <div className='navbar-pc'>
        <ul className='navbar-menu'>
          <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>INICIO</NavLink></li>
          <li><NavLink to="/conocenos" className={({ isActive }) => (isActive ? 'active' : '')}>CONÓCENOS</NavLink></li>
          <li>
          <NavLink
            to="#"
            onClick={toggleProyectosMenu}
            className={({ isActive }) => (isActive || isProyectosOpen ? 'active' : '')}
          >
            PROYECTOS
          </NavLink>
          {isProyectosOpen && (
            <ul>
              <li
                onMouseEnter={() => selectCity('Medellin')}
                onMouseLeave={() => selectCity(null)}
              >
                Medellín
                {selectedCity === 'Medellin' && (
                  <ul >
                    <li>
                      <NavLink to="/proyectos/medellin/sauce">Sauce</NavLink>
                    </li>
                    <li>
                      <NavLink to="/proyectos/medellin/palmas">Palmas</NavLink>
                    </li>
                  </ul>
                )}
              </li>
              <li
                onMouseEnter={() => selectCity('Santander')}
                onMouseLeave={() => selectCity(null)}
              >
                Santander
                {selectedCity === 'Santander' && (
                  <ul>
                    <li>
                      <NavLink to="/proyectos/santander/alamos">Álamos</NavLink>
                    </li>
                    <li>
                      <NavLink to="/proyectos/santander/bosques">Bosques</NavLink>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
          {/*<li>
          <NavLink
            to="#" // Este enlace no redirige, solo controla el estado
            onClick={toggleProyectosMenu}
            className={({ isActive }) => (isActive || isProyectosOpen ? 'active' : '')}
          >
            PROYECTOS
          </NavLink>
          {isProyectosOpen && (
            <ul className="dropdown">
              <li onClick={() => selectCity('Medellin')}>
                Medellín
                {selectedCity === 'Medellin' && (
                  <ul className="dropdown2">
                    <li>
                      <NavLink to="/proyectos/medellin/sauce">Sauce</NavLink>
                    </li>
                    <li>
                      <NavLink to="/proyectos/medellin/palmas">Palmas</NavLink>
                    </li>
                  </ul>
                )}
              </li>
              <li onClick={() => selectCity('Santander')}>
                Santander
                {selectedCity === 'Santander' && (
                  <ul className="dropdown2">
                    <li>
                      <NavLink to="/proyectos/santander/alamos">Álamos</NavLink>
                    </li>
                    <li>
                      <NavLink to="/proyectos/santander/bosques">Bosques</NavLink>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>*/}

          <li><NavLink to="/lanzamientos" className={({ isActive }) => (isActive ? 'active' : '')}>PRÓXIMOS LANZAMIENTOS</NavLink></li>
        </ul>
      </div>

      <div className='btnNaranjaNavbar'>
        <a href="https://wa.me/3206192322" target="_blank" rel="noopener noreferrer">Contáctanos</a>
      </div>
    </nav>
  );
};


export default Navbar;
