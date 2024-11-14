import React from 'react';
import BannerConocenos from '../utils/conocenos/Banner-Conocenos.webp';
import ImagenSomos from '../utils/conocenos/Imagen_Somos.webp';
import ImagenCohete from '../utils/conocenos/Imagen_Cohete.webp';
import ImagenBombillo from '../utils/conocenos/Imagen_Bombillo.webp';


const conocenos = () => {
  return (
    <div className='conocenos'>
      <img className="BannerHome" src={BannerConocenos} alt="BannerHome" />
      <div className='somos'>
        <img className="ImagenSomos" src={ImagenSomos} alt="ImagenSomos" />
        <div className='lineaVerticalGris'></div>
        <p>Nuestra historia comenzó con la visión de crear un aliado confiable y eficiente para
          constructoras de todo el país, comprometidos a brindar servicios que agilicen la
          gestión jurídica, administrativa y financiera de sus proyectos.
          Desde nuestros inicios, hemos trabajado mano a mano con el sector de la
          construcción, optimizando cada uno de los procesos clave que lo sustentan.</p>
      </div>
      <div className='valores'>
        <div className="ovalGreyConocenos">
          <h1>Nuestros valores</h1>
          <div className="circleOrange"></div>
        </div>
        <div className='valores-list'>
          <div className='valores-list-texto'>
            <div className='valores-list-texto-alt'>
              <div className="ovalGreyValores">
                <h1>Compromiso:</h1>
              </div>
              <p>Nos dedicamos a cada </p>
            </div>
            <p>proyecto con la responsabilidad de un verdadero
                socio estratégico.</p>
          </div>
          <div className='valores-list-texto'>
            <div className='valores-list-texto-alt'>
              <div className="ovalGreyValores">
                <h1>Transparencia:</h1>
              </div>
              <p>Valoramos la confianza</p>
            </div>
            <p>de nuestros clientes, por lo que nos
                esforzamos en cada detalle para mantener una relación honesta y clara.</p>
          </div>
          <div className='valores-list-texto'>
            <div className='valores-list-texto-alt'> 
              <div className="ovalGreyValores">
                <h1>Excelencia:</h1>
              </div>
              <p>Nos enfocamos en la</p>
            </div>
            <p>calidad y eficiencia para superar las expectativas y
                elevar los estándares en el sector.</p>
          </div>
          
        </div>
      </div>
      <div className='mision-vision'>
        <div className='mision-vision-detalle'>
          <div className='mision'>
            <div className='logo-mision'>
              <img className="ImagenCohete" src={ImagenCohete} alt="ImagenCohete" />
            </div>
            <div className='mision-texto'>
              <h1>Misión</h1>
              <p>Apoyar y facilitar el desarrollo de proyectos de construcción a través de una gestión
                integral de alta especialización en áreas críticas como procesos jurídicos, cartera y
                administración.</p>
            </div>
          </div>
          <div className='vision'>
            <div className='logo-vision'>
              <img className="ImagenBombillo" src={ImagenBombillo} alt="ImagenBombillo" />
            </div>
            <div className='vision-texto'>
              <h1>Visión</h1>
              <p>Ser el outsourcing de referencia en Colombia, reconocido por nuestra capacidad de
                gestionar los procesos claves de cada proyecto de construcción, permitiendo a
                nuestros clientes enfocarse en su crecimiento y en la creación de ciudades
                sostenibles.</p>
            </div>
          </div>
        </div>
        <div className='mision-vision-contactanos'>
          <h1>Confía en nosotros y enfócate en construir</h1>
          <div className='btnNaranja'>
            <a href="https://wa.me/3206192322" target="_blank" rel="noopener noreferrer">¡Contáctanos!</a>
          </div>
        </div>
      </div>

      
      
    </div>
  );
};

export default conocenos;
