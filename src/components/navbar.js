import React, { useState,useEffect } from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom'; // Usamos NavLink para manejar la clase activa
import Menu from '../utils/navbar/menu.webp';


const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [isProyectosOpen, setIsProyectosOpen] = useState(false);
  const [isServicioOpen, setIsServicioOpen] = useState(false);
  
  const [selectedCity, setSelectedCity] = useState(null);


  // Cerrar el menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.querySelector('.navbar');
      if (navbar && !navbar.contains(event.target)) {
        setMenuActive(false);
        setIsProyectosOpen(false);
        setSelectedCity(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const selectCity = (city) => {
    setSelectedCity(city);
  };
  

  const toggleProyectosMenu = () => {
    setIsProyectosOpen(prevState => !prevState);  
    //setIsProyectosOpen(!isProyectosOpen);
  };
  
  const toggleServiciosMenu = () => {
    setIsServicioOpen(prevState => !prevState);  
    //setIsProyectosOpen(!isProyectosOpen);
  };

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
            className={({ isActive }) => 
              isActive || isProyectosOpen ? 'active' : ''
            }
          >
            PROYECTOS
          </NavLink>
          {isProyectosOpen && (
            <ul >
              <li
                className="union-item"
                onMouseEnter={() => selectCity('Antioquia')}
                onMouseLeave={() => selectCity(null)}
              >
                Antioquia
                {selectedCity === 'Antioquia' && (
                  <ul>
                    <li>
                      <NavLink to="/proyectos/antioquia/Sauces">Los Sauces</NavLink>
                    </li>
                    
                  </ul>
                )}
              </li>
              
              <li
                className="bolivar-item"
                onMouseEnter={() => selectCity('Cartagena')}
                onMouseLeave={() => selectCity(null)}
              >
                Cartagena
                {selectedCity === 'Cartagena' && (
                  <ul >
                    <li>
                      <NavLink to="/proyectos/cartagena/Piamonte">Piamonte</NavLink>
                    </li>
                    <li>
                      <NavLink to="/proyectos/cartagena/Acacias">Las Acacias</NavLink>
                    </li>
                    <li>
                      <NavLink to="/proyectos/cartagena/SantaClara">Santa Clara</NavLink>
                    </li>
                    
                  </ul>
                )}
              </li>
              <li
                className="sucre-item"
                onMouseEnter={() => selectCity('Sincelejo')}
                onMouseLeave={() => selectCity(null)}
              >
                Sincelejo
                {selectedCity === 'Sincelejo' && (
                  <ul >
                    <li>
                      <NavLink to="/proyectos/sincelejo/Alameda">Alameda</NavLink>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>

        <li className='proxLanzamientos'><a href="/lanzamientos">PRÓXIMOS LANZAMIENTOS</a></li>
        
        <li className='servicioClienteLi'>
          <NavLink
            to="#"
            onClick={toggleServiciosMenu}
            className={({ isActive }) => 
              isActive || isServicioOpen ? 'active' : ''
            }
          >
            SERVICIO AL CLIENTE
          </NavLink>
          {isServicioOpen && (
            <ul className='servicioCliente' >
              <li><NavLink style={{ color: '#525151' }} to="/constructor" className={({ isActive }) => (isActive ? 'active' : '')}>Soy constructor</NavLink></li>
              <li><NavLink style={{ color: '#525151' }} to="/vivienda" className={({ isActive }) => (isActive ? 'active' : '')}>Comprar vivienda</NavLink></li>
              <li><NavLink style={{ color: '#525151' }} to="/pqr" className={({ isActive }) => (isActive ? 'active' : '')}>PQR</NavLink></li>
            </ul>
          )}
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
            className={({ isActive }) => 
              isActive || isProyectosOpen ? 'active' : ''
            }
          >
            PROYECTOS
          </NavLink>
          {isProyectosOpen && (
            <ul>
              <li
                onMouseEnter={() => selectCity('Antioquia')}
                onMouseLeave={() => selectCity(null)}
              >
                Antioquia
                {selectedCity === 'Antioquia' && (
                  <ul >
                    <li>
                      <NavLink to="/proyectos/antioquia/Sauces">Los Sauces</NavLink>
                    </li>
                  </ul>
                )}
              </li>
              
              <li
                onMouseEnter={() => selectCity('Cartagena')}
                onMouseLeave={() => selectCity(null)}
              >
                Cartagena
                {selectedCity === 'Cartagena' && (
                  <ul>
                    <li>
                      <NavLink to="/proyectos/cartagena/Piamonte">Piamonte</NavLink>
                    </li>
                    <li>
                      <NavLink to="/proyectos/cartagena/Acacias">Las Acacias</NavLink>
                    </li>
                    <li>
                      <NavLink to="/proyectos/cartagena/SantaClara">Santa Clara</NavLink>
                    </li>
                  </ul>
                )}
              </li>
              <li
                onMouseEnter={() => selectCity('Sincelejo')}
                onMouseLeave={() => selectCity(null)}
              >
                Sincelejo
                {selectedCity === 'Sincelejo' && (
                  <ul >
                    <li>
                      <NavLink to="/proyectos/sincelejo/Alameda">Alameda</NavLink>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>

          <li className='proxLanzamientos'><NavLink to="/lanzamientos" className={({ isActive }) => (isActive ? 'active' : '')}>PRÓXIMOS LANZAMIENTOS</NavLink></li>
          <li>
          <NavLink
            to="#"
            onClick={toggleServiciosMenu}
            className={({ isActive }) => 
              isActive || isServicioOpen ? 'active' : ''
            }
          >
            SERVICIO AL CLIENTE
          </NavLink>
          {isServicioOpen && (
            <ul className='servicioCliente'>
              <li><NavLink to="/constructor" className={({ isActive }) => (isActive ? 'active' : '')}>Soy constructor</NavLink></li>
              <li><NavLink to="/vivienda" className={({ isActive }) => (isActive ? 'active' : '')}>Comprar vivienda</NavLink></li>
              <li><NavLink to="/pqr" className={({ isActive }) => (isActive ? 'active' : '')}>PQR</NavLink></li>
            </ul>
          )}
        </li>
        </ul>
      </div>

      
    </nav>
  );
};


export default Navbar;
