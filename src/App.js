import React from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Inicio from './pages/inicio';
import Proyectos from './pages/proyectos';
import Conocenos from './pages/conocenos';
import Lanzamientos from './pages/lanzamientos';
import Navbar from './components/navbar';
import Footbar from './components/footbar';

function App() {
  return ( 
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/conocenos" element={<Conocenos />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/lanzamientos" element={<Lanzamientos />} />
        </Routes>
        <Footbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
