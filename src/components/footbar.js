import React from 'react';
import instagram from '../utils/inicio/Instagram.webp';
import CorreoElectronico from '../utils/inicio/Correo-electronico.webp';
import Ubicacion from '../utils/inicio/Ubicacion.webp';
import '../App.css';

const footbar = ({ isConocenosPage,isSaucesPage,isPiamontePage,isAlamedaPage,isAcaciasPage }) => {
  return (
    
    
    <footer className={`footbar ${isConocenosPage || isSaucesPage || isPiamontePage || isAlamedaPage || isAcaciasPage  ? 'footer-hidden' : ''}`}>

      <div className="footbar-info">
        <a href="https://www.instagram.com/enfoque.constructores/" target="_blank" rel="noopener noreferrer" className='instagram'>
          <div className='instagram'>
              <img className='instagram-icon' src={instagram} alt="instagram" />
              <p>enfoque.constructores</p>
          </div>
        </a>
        <a href="mailto:servicioalcliente@enfoqueconstructores.com" target="_blank" rel="noopener noreferrer" className='email'>
          <div className='email'>
              <img className='email-icon' src={CorreoElectronico} alt="Email" />
              <p>servicioalcliente@enfoqueconstructores.com</p>
          </div>
        </a>
        <a href="https://maps.app.goo.gl/mPaxgYZB3rY8r9Bg6" target="_blank" rel="noopener noreferrer" className='address'>
            <div className='ubicacion'>
                <img className='ubicacion-icon' src={Ubicacion} alt="Dirección" />
                <p>Transv. 54 #21A - 104 Cartagena Ed. Bosque Ejecutivo (Oficina 7-10) 
                  Ed. Bosque Ejecutivo (Oficina 7-10)
                </p>
                
            </div>
        </a>

        
      </div>
      <div className='lineaVerticalFootbar'></div>
      <div className='contactanos'>
        <p>Recibe más información aquí</p>
        <div className='btnNaranjaFootbar'>
          <a href="https://wa.link/sjwok3" target="_blank" rel="noopener noreferrer">Contáctanos</a>
        </div>

      </div>
      
    </footer>
  );
};

export default footbar;
