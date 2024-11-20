import { Link } from 'react-router-dom';

function SantanderProyectos() {
    return (
      <div>
        <h1>Proyectos en Santander</h1>
        <ul>
          <li><Link to="/proyectos/santander/alamos">Álamos</Link></li>
        </ul>
      </div>
    );
  }

  export default SantanderProyectos;