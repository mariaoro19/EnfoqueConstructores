import React from 'react';
import { BrowserRouter,Route, Routes,useLocation } from 'react-router-dom';
import Inicio from './pages/inicio';
import Proyectos from './pages/proyectos';
import Conocenos from './pages/conocenos';
import Lanzamientos from './pages/lanzamientos';
import Navbar from './components/navbar';
import Footbar from './components/footbar';


function App() {
  const location = useLocation();

  // Aplica 'conocenos-bg' a Footbar si la ruta es '/conocenos'
  const isConocenosPage = location.pathname === '/conocenos';
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/conocenos" element={<Conocenos />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/lanzamientos" element={<Lanzamientos />} />
      </Routes>
      <Footbar isConocenosPage={isConocenosPage} />
    </div>
  );
}

export default function RootApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
