import { Link } from 'react-router-dom';
function MedellinProyectos() {
    return (
      <div>
        <h1>Proyectos en Medellín</h1>
        <ul>
          <li><Link to="/proyectos/medellin/sauce">Sauce</Link></li>
        </ul>
      </div>
    );
  }
  export default MedellinProyectos;