import React, { useState } from 'react';
import '../App.css';
import Constructor from '../utils/inicio/constructor.webp';
import emailjs from '@emailjs/browser';

const Inicio = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    celular: '',
    autorizacion: false,
  });
  /*
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization", // O "LocalBusiness" si tienes ubicación física
    "name": "Enfoque constructores",
    "url": "https://www.enfoqueconstructores.com",
    "logo": "https://sandiamercadeo.com/logoSC.png",
    "description": "Somos una agencia especializada en estrategias de marketing digital, gestión de redes sociales, publicidad digital, SEO y SEM, y diseño de landing pages.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+57 320 619 2322",
      "contactType": "CEO",
      "areaServed": "Colombia",
      "availableLanguage": "Spanish"
    },
    "sameAs": [
      "https://www.instagram.com/sandiacreativemarketing?igsh=cTV1cDYxM2x4czBv"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Marketing",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "serviceType": "Estrategias de Marketing Digital",
            "description": "Creamos estrategias personalizadas para hacer crecer tu negocio en línea."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "serviceType": "Gestión de Redes Sociales",
            "description": "Administramos tus redes sociales para maximizar el alcance y engagement de tu marca."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "serviceType": "Publicidad Digital",
            "description": "Campañas publicitarias en Google Ads, Facebook Ads, y otras plataformas."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "serviceType": "SEO y SEM",
            "description": "Mejora tu posicionamiento en los motores de búsqueda y aumenta tu visibilidad."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "serviceType": "Diseño y Desarrollo de Landing Pages",
            "description": "Diseñamos y desarrollamos landing pages efectivas con dominio propio."
          }
        }
      ]
    }
  };*/
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
      tipo:  "Construcción",
      autorizacion: formData.autorizacion ? 'Sí' : 'No',
      to_email: 'servicioalcliente@enfoqueconstructores.com' // Define el destinatario aquí,
      
    };

    console.log(templateParams)

    emailjs
      .send(
        'service_25ja9cm', // Reemplaza con tu Service ID
        'template_w4dndmd', // Reemplaza con tu Template ID
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
            tipo:'',
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
    <div className='constructor-page'>
      <div className='constructor-page-title'>
        <img id="elementoC1" src={Constructor} alt="Constructor" />
        <h2 id="elementoC2">Amigo <strong>constructor</strong></h2>

      </div>
      <div className='constructor-form'>
        <div className='mensaje-constructor'>
          <h2>Gestionamos, desarrollamos y comercializamos por ti.</h2>
          <p>En Enfoque Constructores <strong>nos encargamos de la estructuración,
             gestión y desarrollo de proyectos inmobiliarios,</strong> optimizando 
             cada fase para que puedas construir con seguridad y rentabilidad.
              Te apoyamos en planificación, gestión administrativa, jurídica y financiera, 
              optimizamos tiempos y recursos para que tu proyecto avance sin contratiempos 
              y nos encargamos de la comercialización, conectando tu desarrollo con los compradores ideales.</p>
        </div>

        
        <div id='contacto' className='form-inicio'>
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
              <div className='autorizo-checkbox-inicio'>
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
              <button className='btnNaranjaAcacias' type="submit">Enviar información</button>
            </form>
          </div>
        </div>  
    
    </div>
  );
};

export default Inicio;
