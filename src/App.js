import React, { useState, useEffect } from 'react';
//import { BrowserRouter,Route, Routes,useLocation } from 'react-router-dom';
import { Routes, Route, useLocation, BrowserRouter as Router } from 'react-router-dom';
import Inicio from './pages/inicio';
import Conocenos from './pages/conocenos';
import Lanzamientos from './pages/lanzamientos';
import Navbar from './components/navbar';
import Footbar from './components/footbar';
import Sauce from './pages/proyectos/antioquia/Sauces'; 
import Piamonte from './pages/proyectos/cartagena/Piamonte'; 
import Acacias from './pages/proyectos/cartagena/Acacias';
import SantaClara from './pages/proyectos/cartagena/SantaClara';
import Alameda from './pages/proyectos/sincelejo/Alameda';
import Constructor from './pages/constructor';
import Vivienda from './pages/vivienda';
import PQR from './pages/pqr';
import ScrollToTop from "./pages/ScrollToTop";

const CURRENT_VERSION = '1.1.5'; 


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
      console.log(response)
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
  const isSaucesPage = location.pathname === '/proyectos/antioquia/Sauces';
  const isPiamontePage = location.pathname === '/proyectos/cartagena/Piamonte';
  const isAlamedaPage = location.pathname === '/proyectos/sincelejo/Alameda';
  const isAcaciasPage = location.pathname === '/proyectos/cartagena/Acacias';
  const isSantaClaraPage = location.pathname === '/proyectos/cartagena/SantaClara';
  const isConstructorPage = location.pathname === '/constructor';
  const isViviendaPage = location.pathname === '/vivienda';
  const isPQRPage = location.pathname === '/pqr';

  return (
    
      <div className={isMenuOpen ? 'navbar active' : ''}>
        <Navbar onMenuToggle={handleMenuToggle} />
        <div className={isMenuOpen ? 'hide-footer' : ''}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/conocenos" element={<Conocenos />} />
            <Route path="/proyectos/antioquia/Sauces" element={<Sauce />} />
            <Route path="/proyectos/cartagena/Piamonte" element={<Piamonte />} />
            <Route path="/proyectos/cartagena/Acacias" element={<Acacias />} />
            <Route path="/proyectos/cartagena/SantaClara" element={<SantaClara />} />
            <Route path="/proyectos/sincelejo/Alameda" element={<Alameda />} />
            <Route path="/constructor" element={<Constructor />} />
            <Route path="/vivienda" element={<Vivienda />} />
            <Route path="/pqr" element={<PQR />} />
            
            <Route path="/lanzamientos" element={<Lanzamientos />} />
          </Routes>
        </div>
        {/* Pasamos el isConocenosPage al Footbar */}
        <Footbar isConocenosPage={isConocenosPage} 
         isSaucesPage={isSaucesPage} 
         isPiamontePage={isPiamontePage}
         isAlamedaPage={isAlamedaPage}
         isAcaciasPage={isAcaciasPage}
         isSantaClaraPage={isSantaClaraPage}
         isConstructorPage={isConstructorPage}
         isViviendaPage={isViviendaPage}
         isPQRPage={isPQRPage}
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
