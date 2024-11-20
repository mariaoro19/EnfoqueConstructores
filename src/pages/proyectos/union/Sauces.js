import React, { useState } from 'react';
import logoSauces from '../../../utils/sauces/Logo.webp';
import ubicacionNaranja from '../../../utils/sauces/UbicacionNaranja.webp';
import metros from '../../../utils/sauces/Metros-cuadrados.webp';
import habitacion from '../../../utils/sauces/Habitaciones.webp';
import bano from '../../../utils/sauces/Bano.webp';
import parqueadero from '../../../utils/sauces/Parqueadero.webp';
import otros from '../../../utils/sauces/Casa.webp';
import planta from '../../../utils/sauces/Planta.webp';
import arbol from '../../../utils/sauces/Arbol.webp';
import ubicacion from '../../../utils/sauces/Ubicacion.webp';
import acceso from '../../../utils/sauces/Figura1.webp';
import independencia from '../../../utils/sauces/Figura2.webp';
import ambiente from '../../../utils/sauces/Figura3.webp';
import Imagen1 from '../../../utils/sauces/Imagen1.webp';
import Imagen2 from '../../../utils/sauces/Imagen2.webp';
import Imagen3 from '../../../utils/sauces/Imagen3.webp';
import Imagen4 from '../../../utils/sauces/Imagen4.webp';
import Mapa from '../../../utils/sauces/mapaSauces.webp';
import emailjs from 'emailjs-com';




const Sauce = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    celular: '',
    autorizacion: false,
  });
  const fotos = [Imagen1, Imagen2, Imagen3, Imagen4];
  const lat = 5.970917; // Latitud en formato decimal
  const lng = -75.354806; // Longitud en formato decimal
  const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}&hl=es`;


  const [indiceActual, setIndiceActual] = useState(0);

  const siguienteFoto = () => {
    setIndiceActual((prev) => (prev + 1) % fotos.length);
  };

  const anteriorFoto = () => {
    setIndiceActual((prev) => (prev - 1 + fotos.length) % fotos.length);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.autorizacion) {
      alert('Debes aceptar el tratamiento de datos.');
      return;
    }

    emailjs
      .send(
        'service_ojyr97f', // Reemplaza con tu ID de servicio de EmailJS
        'TU_TEMPLATE_ID', // Reemplaza con tu ID de plantilla de EmailJS
        formData,
        'TU_USER_ID' // Reemplaza con tu clave pública de EmailJS
      )
      .then(
        (result) => {
          alert('Información enviada correctamente.');
        },
        (error) => {
          alert('Hubo un error al enviar la información: ' + error.text);
        }
      );
  };
  return (
    <div className='sauces'>
      <div className='banner-sauces'>
        <div className='banner-sauces-info'>
          <img src={logoSauces} alt="BannerHome" />
          <h1>Casas <br></br>VIS</h1>
          <div className='banner-ubicacion-sauces'>
            <img src={ubicacionNaranja} alt="ubicacionNaranja" />
            <h2>La Unión <br></br>Antioquia</h2>
          </div>
          <h3>*|Casas con posibilidad de <br></br> ampliación a segundo piso</h3>
        </div>
        <div className='form-sauces'>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Nombre</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Apellido</label>
              <input
                type="text"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Celular</label>
              <input
                type="text"
                name="celular"
                value={formData.celular}
                onChange={handleChange}
                required
              />
            </div>
            <div className='autorizo-checkbox'>
              <label className='autorizo'>
                <input
                  type="checkbox"
                  name="autorizacion"
                  checked={formData.autorizacion}
                  onChange={handleChange}
                  required
                />
                Autorizo el tratamiento de mis datos personales y <br></br> políticas de privacidad
              </label>
            </div>
            <button className='btnGris' type="submit">Solicitar Información</button>
            <div className='btnGris2'>
              <a href="https://wa.link/np8w02" target="_blank" rel="noopener noreferrer">Contactar un asesor</a>
            </div>
          </form>
        </div>
      </div>
      <div className='proyecto-sauces'>
        <h1>Proyecto de casas <br></br> desde 135 SMMLV</h1>
      </div>
      <div className='descubre-sacuces'>
        <p><strong>Descubre nuestro proyecto Los Sauces, </strong>
          un lugar donde la independencia y la tranquilidad se encuentran. 
          <strong>Este proyecto de 402 casas en La Unión - Antioquia,</strong> ofrece más que viviendas: 
          te invita a formar parte de una comunidad segura y privilegiada. 
          Imagina un hogar con patio y antejardín, perfecto para disfrutar con tu familia. 
          <strong>¿Te animas a ser parte de Los Sauces?</strong> </p>
        <div className="galerias-fotos-sauces">
         <button className="btn-flecha izquierda" onClick={anteriorFoto}>
            &#8249;
          </button>
          <div className="contenedor-foto">
            <img src={fotos[indiceActual]} alt={`Foto ${indiceActual + 1}`} />
          </div>
          <button className="btn-flecha derecha" onClick={siguienteFoto}>
            &#8250;
          </button>
        </div>

      </div>
      <div className='espacios-sacuces'>
        <h1>Espacios<br></br> amplios y <br></br>  cómodos</h1>
        <div className='lineaVerticalVerde'></div>
        <p>Casas de 48 m2 en lotes de 68 m2 y con placa para construir segundo<br></br> piso.</p>
        <div className='lineaVerticalVerde'></div>
        <div className='info-sauces'>
          <div className='info-sauces-img'>
          <img src={metros} alt="metros" />
          <img src={habitacion} alt="habitaciones" />
          <img src={bano} alt="banos" />
          <img src={parqueadero} alt="parqueadero" />
          <img src={otros} alt="otros" />

          </div>
          <div className='info-sauces-texto'>
            <p>48 m2.</p>
            <p>2 habitaciones.</p>
            <p>1 baño.</p>
            <p>1 parqueadero.</p>
            <p>Patio, cocina, sala-comedor y antejardín.</p>
          </div>
        </div>
      </div>
      <div className='planta-sauces'>
        <h1>Planta arquitectónica</h1>
        <img src={planta} alt="planta" />
      </div>
      <div className='comodidades'>
        <h1>Excelentes comodidades de la urbanización para compartir en familia</h1>
        <div className='lineaVerticalVerde'></div>
        <div className='comodidades-lista'>
          <div className='salon'>
            <img src={arbol} alt="arlbol" />
            <p>Salón social.</p>
          </div>
          <div className='juegos'>
            <img src={arbol} alt="arlbol" />
            <p>Juegos infantiles.</p>
          </div>
          <div className='sendero'>
            <img src={arbol} alt="arlbol" />
            <p>Sendero.</p>
          </div>
          <div className='cancha'>
            <img src={arbol} alt="arlbol" />
            <p>Cancha múltiple.</p>
          </div>
          <div className='parqueadero'>
            <img src={arbol} alt="arlbol" />
            <p>Parqueadero visitantes.</p>
          </div>
        </div>
      </div>
      <div className='ubicacion-sauces'>
        <div className='ubicacion-sauces-info'>
          <img src={ubicacion} alt="ubicacion" />
          <h1>Fácil acceso <br></br> por la vía principal</h1>
          <h2> La Unión - Sonsón</h2>
        </div>
        <div className='ubicacion-sauces-maps'>
          <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
            <img src={Mapa} alt="Mapa" />
          </a>
        </div>


      </div>
      <div className='sauces-eleccion'>
        <h1>Vivir en casa sí es posible y </h1>
        <h2>Los Sauces es tu mejor elección.</h2>
      </div>
      <div className='sauces-info'>
        <div className='acceso'>
          <img src={acceso} alt="acceso" />
          <p>Fácil acceso y excelente ubicación</p>
        </div>
        <div className='independencia'>
          <img src={independencia} alt="independencia" />
          <p>Independencia y tranquilidad</p>
        </div>
        <div className='ambiente'>
          <img src={ambiente} alt="ambiente" />
          <p>Ambiente tranquilo y natural</p>
        </div>
      </div>
      <div className='contactenos-sauces'>
        <div className='contactenos-sauces-info'>
          <h1>Contáctanos y recibe asesoría personalizada </h1>
          <div className='btnGris'>
            <a href="https://wa.link/np8w02" target="_blank" rel="noopener noreferrer">¡Hablemos aquí!</a>  
          </div>
          <p>O diligencia nuestro formulario <br></br>para ser contactado(a) por uno de <br></br>
          nuestros asesores.</p>
        </div>
        <div className='form-sauces'>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Nombre</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Apellido</label>
              <input
                type="text"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Celular</label>
              <input
                type="text"
                name="celular"
                value={formData.celular}
                onChange={handleChange}
                required
              />
            </div>
            <div className='autorizo-checkbox'>
              <label className='autorizo'>
                <input
                  type="checkbox"
                  name="autorizacion"
                  checked={formData.autorizacion}
                  onChange={handleChange}
                  required
                />
                Autorizo el tratamiento de mis datos personales y <br></br> políticas de privacidad
              </label>
            </div>
            <button className='btnGris' type="submit">Solicitar Información</button>
            <div className='btnGris2'>
              <a href="https://wa.link/np8w02" target="_blank" rel="noopener noreferrer">Contactar un asesor</a>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Sauce;