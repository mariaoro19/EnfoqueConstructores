import React, { useState } from 'react';
//import { BrowserRouter,Route, Routes,useLocation } from 'react-router-dom';
import { Routes, Route, useLocation, BrowserRouter as Router } from 'react-router-dom';
import Inicio from './pages/inicio';
import Conocenos from './pages/conocenos';
import Lanzamientos from './pages/lanzamientos';
import Navbar from './components/navbar';
import Footbar from './components/footbar';
import Sauce from './pages/proyectos/union/Sauces'; // Detalle proyecto Sauce
import Alamos from './pages/proyectos/santander/Alamos'; // Detalle proyecto Álamos


function App() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función que se ejecuta cuando se hace clic en "Proyectos"
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Aplica 'conocenos-bg' a Footbar si la ruta es '/conocenos'
  const isConocenosPage = location.pathname === '/conocenos';
  const isSaucesPage = location.pathname === '/proyectos/union/Sauces';

  return (
    
      <div className={isMenuOpen ? 'navbar active' : ''}>
        <Navbar onMenuToggle={handleMenuToggle} />
        <div className={isMenuOpen ? 'hide-footer' : ''}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/conocenos" element={<Conocenos />} />
            <Route path="/proyectos/union/Sauces" element={<Sauce />} />
            <Route path="/proyectos/santander/Alamos" element={<Alamos />} />
            <Route path="/lanzamientos" element={<Lanzamientos />} />
          </Routes>
        </div>
        {/* Pasamos el isConocenosPage al Footbar */}
        <Footbar isConocenosPage={isConocenosPage}  isSaucesPage={isSaucesPage}/>
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
