import React, { useState } from 'react';
import logoSantaClara from '../../../utils/santaclara/Logo.webp';
import ubicacion1 from '../../../utils/santaclara/Ubicacion1.webp';
import ubicacion2 from '../../../utils/santaclara/Ubicacion2.webp';
import metros from '../../../utils/santaclara/Metros-cuadrados.webp';
import habitacion from '../../../utils/santaclara/Habitaciones.webp';
import bano from '../../../utils/santaclara/Bano.webp';
import otros from '../../../utils/santaclara/Casa.webp';
import planta from '../../../utils/santaclara/Planta.webp';
import logoSolo from '../../../utils/santaclara/LogoSolo.webp';
import acceso from '../../../utils/santaclara/Figura1.webp';
import independencia from '../../../utils/santaclara/Figura2.webp';
import ambiente from '../../../utils/santaclara/Figura3.webp';
import Imagen1 from '../../../utils/santaclara/Imagen1.webp';
import Imagen2 from '../../../utils/santaclara/Imagen2.webp';
import Mapa from '../../../utils/santaclara/mapa.webp';
import emailjs from '@emailjs/browser';




const Sauce = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    celular: '',
    autorizacion: false,
  });
  const fotos = [Imagen1, Imagen2];
  const googleMapsUrl = `https://www.google.com/maps/place/10%C2%B020'43.1%22N+75%C2%B024'13.1%22W/@10.345293,-75.40365,15z/data=!4m4!3m3!8m2!3d10.345293!4d-75.40365?entry=ttu&g_ep=EgoyMDI1MDIwMi4wIKXMDSoASAFQAw%3D%3D`;


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

 

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log("handleOnSubmit")

    const templateParams = {
      nombre: formData.nombre,
      apellido: formData.apellido,
      email: formData.email,
      celular: formData.celular,
      autorizacion: formData.autorizacion ? 'Sí' : 'No',
      to_email: 'iyoung@enfoqueconstructores.com', // Define el destinatario aquí,
      proyecto:"Santa Clara"
    };

    console.log(templateParams)

    emailjs
      .send(
        'service_25ja9cm', // Reemplaza con tu Service ID
        'template_ulhn4x8', // Reemplaza con tu Template ID
        templateParams,
        'KZxSEnh7Eaym3oClF' // Reemplaza con tu Public Key
      )
      .then(
        (response) => {
          alert('Formulario enviado correctamente. ¡Pronto te contactaremos!');
          console.log('SUCCESS!', response.status, response.text);
          setFormData({
            nombre: '',
            apellido: '',
            email: '',
            celular: '',
            autorizacion: false,
          });
        },
        (error) => {
          alert('Hubo un error al enviar el formulario');
          console.error('FAILED...', error);
        }
      );
  };
  return (
    <div className='santaclara'>
      <div className='banner-santaclara'>
        <div className='banner-santaclara-info'>
          <img src={logoSantaClara} alt="logoSantaClara" />
          <h1>Proyecto de casas</h1>
          <div className='banner-ubicacion-santaclara'>
            <img src={ubicacion1} alt="ubicacionNaranja" />
            <h2>Turbaco<br></br>Bolivar</h2>
          </div>
          
        </div>
        <div className='form-santaclara'>
          <form onSubmit={handleOnSubmit}>
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
                Autorizo el tratamiento de mis datos personales y políticas de privacidad
              </label>
            </div>
            <button className='btnVerdeSantaClara' type="submit">Solicitar Información</button>
            <div className='btnVerdeSantaClara2'>
              <a href="https://wa.link/f3f9g0" target="_blank" rel="noopener noreferrer">Contactar un asesor</a>
            </div>
          </form>
        </div>
      </div>
      <div className='proyecto-santaclara'>
        <h1>Proyecto de casas <br></br> desde 113 SMMLV</h1>
      </div>
      <div className='descubre-santaclara'>
      <div className='info-y-avance-santaclara'>
          <p>Vive la tranquilidad y el confort en un espacio diseñado para ti y tu familia. 
          <strong>Con 206 casas independientes</strong>, este proyecto en <strong>Túrbaco, Bolívar,</strong> 
          te ofrece la combinación perfecta entre naturaleza y modernidad. 
          <strong>¡Tu nuevo hogar te espera en Santa Clara!</strong></p>
          <div className='btnVerdeSantaClaraContacto'>
            <a href="https://drive.google.com/drive/u/4/folders/1Fjm5bHGXnTKuoF68ZOlEcfpvVpiWH7zL" target="_blank" rel="noopener noreferrer">Avance de la obra</a>  
          </div>

        </div>
        
        <div className="galerias-fotos-santaclara">
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
      <div className='espacios-santaclara'>
        <h1>Espacios<br></br> amplios y <br></br>  cómodos</h1>
        <div className='lineaVerticalVerde'></div>
        <p>Casas de 50.5 m2 en lotes de 72 m2 y con placa para construir segundo piso.</p>
        <div className='lineaVerticalVerde'></div>
        <div className='info-santaclara'>
          <div className='info-santaclara-img'>
          <img src={metros} alt="metros" />
          <img src={habitacion} alt="habitaciones" />
          <img src={bano} alt="banos" />
          <img src={otros} alt="otros" />

          </div>
          <div className='info-santaclara-texto'>
            <p>50.5 m2.</p>
            <p>2 habitaciones.</p>
            <p>1 baño.</p>
            <p>Patio, cocina, sala-comedor y antejardín.</p>
          </div>
        </div>
      </div>
      <div className='planta-santaclara'>
        <h1>Planta arquitectónica</h1>
        <img src={planta} alt="planta" />
      </div>
      <div className='comodidades-santaclara'>
        <h1>Excelentes comodidades de la urbanización para compartir en familia</h1>
        <div className='lineaVerticalVerdeOscuro'></div>
        <div className='comodidades-santaclara-lista'>
          <div className='salon'>
            <img src={logoSolo} alt="logoSolo" />
            <p>Zonas de entretenimiento</p>
          </div>
          <div className='juegos'>
            <img src={logoSolo} alt="logoSolo" />
            <p>Juegos infantiles.</p>
          </div>
          <div className='sendero'>
            <img src={logoSolo} alt="logoSolo" />
            <p>Sendero.</p>
          </div>
          <div className='cancha'>
            <img src={logoSolo} alt="logoSolo" />
            <p>Elemento de lista.</p>
          </div>
          <div className='cancha'>
            <img src={logoSolo} alt="logoSolo" />
            <p>Lago.</p>
          </div>
        </div>
      </div>
      <div className='ubicacion-santaclara'>
        <div className='ubicacion-santaclara-info'>
          <img src={ubicacion2} alt="ubicacion" />
          <h1>Fácil acceso</h1>
          <h2>Turbaco - Bolivar</h2>
          <h3>A tan solo 30 minutos de Cartagena</h3>
        </div>
        <div className='ubicacion-santaclara-maps'>
          <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
            <img src={Mapa} alt="Mapa" />
          </a>
        </div>


      </div>
      <div className='santaclara-eleccion'>
        <h1>Si buscas un lugar que lo tenga todo, <strong>Santa Clara te abre las puertas de tu nuevo hogar.</strong>  </h1>
        
      </div>
      <div className='santaclara-info'>
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
      <div className='contactenos-santaclara'>
        <div className='contactenos-santaclara-info'>
          <h1>Contáctanos y recibe asesoría personalizada </h1>
          <div className='btnVerdeSantaClaraContacto'>
            <a href="https://wa.link/f3f9g0" target="_blank" rel="noopener noreferrer">¡Hablemos aquí!</a>  
          </div>
          <p>O diligencia nuestro formulario <br></br>para ser contactado(a) por uno de
          nuestros asesores.</p>
        </div>
        <div className='form-santaclara'>
          <form onSubmit={handleOnSubmit}>
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
                Autorizo el tratamiento de mis datos personales y políticas de privacidad
              </label>
            </div>
            <button className='btnVerdeSantaClara' type="submit">Solicitar Información</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Sauce;