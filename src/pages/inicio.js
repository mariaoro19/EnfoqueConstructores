import React from 'react';
import '../App.css';
import BannerHome from '../utils/inicio/Banner-Home.webp';
import HomeCircle from '../utils/inicio/Image-circle.webp';
import LogosProyectos from '../utils/inicio/Logos-proyectos.webp';
import Grua from '../utils/inicio/Grua.webp';

const inicio = () => {
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
  
  return (
    <div className='inicio'>
       {/*<Helmet>
          <title>Enfoque construtores</title>
          <meta name="description" content="Agencia de marketing digital especializada en SEO, SEM, y gestión de redes sociales." />
          <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>*/}
      <img className="BannerHome" src={BannerHome} alt="BannerHome" />
      <div className='aliados'>
        <div className='aliadosInfo'>
          <h1>Somos el aliado que necesitas para hacer realidad tus proyectos de construcción.</h1>
          <p>Brindamos outsourcing especializado en todo Colombia para constructoras,
          gestionando tareas clave como procesos jurídicos, cartera y administración, para que
          puedas enfocarte en construir.</p>
        </div>
        <img className='HomeCircle' src={HomeCircle} alt="HomeCircle" />
      </div>
      <div className='proyectos-list'>
        <div className='proyectos-list-info'>
          <div className='lineaVertical'></div>
          <div className='proyectos-list-info-text'>
            <h1 style={{color: 'var(--naranja)'}}>Más de 16</h1>
            <h1 style={{color: '#fff'}}>proyectos</h1>
            <h1 style={{color: '#fff'}}>desarrollados</h1>
          </div>
        </div>
        <img className='LogosProyectos' src={LogosProyectos} alt="LogosProyectos" />
      </div>
      <div className='clientes'>
        <div className='clientes-logo'>
          <h1>Conoce algunos de nuestros clientes</h1>
          <div className="ovalGrey">
            <div className="circleDarkGrey"></div>
          </div>
          <img className='grua' src={Grua} alt="Grua" />
        </div>
        <dvi className='clientes-info'>
          <ul>
            <li>Promotora Altos de Plan Parejo S.A.S.</li>
            <li>Promotora Mirador de Plan Parejo S.A.S.</li>
            <li>Promotora las Heliconias S.A.S.</li>
            <li>Promotora Karakolí S.A.S.</li>
            <li>Palo Santo Construcciones .S.A.S.</li>
            <li>Promotora Piamonte S.A.S</li>
            <li>Promotora Oro Blanco S.A.S.</li>
            <li>Promotora Mandala S.A.S.</li>
            <li>Promotora Los Nogales S.A.S.</li>
            <li>Promotora Arboleda S.A.S.</li>
            <li>Virente Construcciones S.A.S.</li>
            <li>Promotoa Navio S.A.S.</li>
            <li>Promotora Andalucía S.A.S.</li>
          </ul>
        </dvi>

      </div>
     
      
      
    
    </div>
  );
};

export default inicio;
