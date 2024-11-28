import React, { useState, useEffect } from 'react';
//import { BrowserRouter,Route, Routes,useLocation } from 'react-router-dom';
import { Routes, Route, useLocation, BrowserRouter as Router } from 'react-router-dom';
import Inicio from './pages/inicio';
import Conocenos from './pages/conocenos';
import Lanzamientos from './pages/lanzamientos';
import Navbar from './components/navbar';
import Footbar from './components/footbar';
import Sauce from './pages/proyectos/union/Sauces'; 
import Piamonte from './pages/proyectos/bolivar/Piamonte'; 
import Acacias from './pages/proyectos/bolivar/Acacias';
import Alameda from './pages/proyectos/sucre/Alameda';
import ScrollToTop from "./pages/ScrollToTop";

const CURRENT_VERSION = '1.1.2'; 

function App() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    checkForUpdates();
  }, []);


  // Función que se ejecuta cuando se hace clic en "Proyectos"
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const checkForUpdates = async () => {
    try {
      const response = await fetch('/version.json');
      if (response.ok) {
        const { version } = await response.json();
        if (version !== CURRENT_VERSION) {
          alert('Nueva versión disponible. La página se recargará.');
          window.location.reload(true); // Forzar recarga
        }
      }
    } catch (error) {
      console.error('Error al verificar la versión:', error);
    }
  };

  // Aplica 'conocenos-bg' a Footbar si la ruta es '/conocenos'
  const isConocenosPage = location.pathname === '/conocenos';
  const isSaucesPage = location.pathname === '/proyectos/union/Sauces';
  const isPiamontePage = location.pathname === '/proyectos/bolivar/Piamonte';
  const isAlamedaPage = location.pathname === '/proyectos/sucre/Alameda';
  const isAcaciasPage = location.pathname === '/proyectos/bolivar/Acacias';

  return (
    
      <div className={isMenuOpen ? 'navbar active' : ''}>
        <Navbar onMenuToggle={handleMenuToggle} />
        <div className={isMenuOpen ? 'hide-footer' : ''}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/conocenos" element={<Conocenos />} />
            <Route path="/proyectos/union/Sauces" element={<Sauce />} />
            <Route path="/proyectos/bolivar/Piamonte" element={<Piamonte />} />
            <Route path="/proyectos/bolivar/Acacias" element={<Acacias />} />
            <Route path="/proyectos/sucre/Alameda" element={<Alameda />} />
            <Route path="/lanzamientos" element={<Lanzamientos />} />
          </Routes>
        </div>
        {/* Pasamos el isConocenosPage al Footbar */}
        <Footbar isConocenosPage={isConocenosPage} 
         isSaucesPage={isSaucesPage} 
         isPiamontePage={isPiamontePage}
         isAlamedaPage={isAlamedaPage}
         isAcaciasPage={isAcaciasPage}
         />
         <ScrollToTop />
      </div>
  );
}

export default function RootApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
