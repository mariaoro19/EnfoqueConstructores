import React, { useState } from 'react';
import BannerConocenos from '../utils/conocenos/Imagen-banner.webp';
import ImagenSomos from '../utils/conocenos/Imagen_Somos.webp';
import ImagenCohete from '../utils/conocenos/Imagen_Cohete.webp';
import ImagenBombillo from '../utils/conocenos/Imagen_Bombillo.webp';
import emailjs from '@emailjs/browser';

const Conocenos = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    celular: '',
    autorizacion: false,
  });
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
      to_email: 'mariao.1994@gmail.com', // Define el destinatario aquí,
      tipo: formData.tipoUsuario === "Soy constructor" ? "Construcción" : "Vivienda"
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
    <div className='conocenos'>
      <img className="BannerHome" src={BannerConocenos} alt="BannerHome" />
      <div className='somos'>
        <img className="ImagenSomos" src={ImagenSomos} alt="ImagenSomos" />
        <div className='lineaVerticalGris'></div>
        <p>Nuestra historia comenzó con la visión de crear un aliado confiable y eficiente para
          constructoras de todo el país, comprometidos a brindar servicios que agilicen la
          gestión jurídica, administrativa y financiera de sus proyectos.
          <br></br><br></br>Desde nuestros inicios, hemos trabajado mano a mano con el sector de la
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

      </div>
      <div className='constructor-vivienda-form-conocenos'>
        <div className='mensaje-constructor-vivienda-conocenos'>
          <h2>¿Eres constructor o buscas vivienda?</h2>
          <h3>Diligencia nuestro formulario para ser contactado(a)
            en el menor tiempo posible y brindarte toda la información.</h3>
        </div>

        
        <div className='form-conocenos'>
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
                <label>¿Eres constructor o buscas vivienda?</label>
                <select
                 className="custom-select"
                  name="tipoUsuario"
                  value={formData.tipoUsuario}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="constructor">Soy constructor</option>
                  <option value="busco-vivienda">Busco vivienda</option>
                </select>
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
              <div className='autorizo-checkbox-conocenos'>
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
              <button className='btnNaranjaAcacias' type="submit">Enviar información</button>
            </form>
          </div>
        </div>  

      
      
    </div>
  );
};

export default Conocenos;
