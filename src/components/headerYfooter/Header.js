import React from 'react';
import { Link} from 'react-router-dom'
import './header.css'
import Detalle from '../../screens/DetallePelicula/Detalle'
function Header() {
    return (

      <div className='nav-hom'>
     
        
        <h1>NETFLIX</h1>
        <ul>
        <li><Link to="/">Home</Link></li><br/>
        <li><Link to="/favoritos">favoritos</Link></li><br/>
        <li><Link to = '/PeliculasMasPop'>Peliculas Populares</Link> </li><br/>
        <li><Link to = '/PeliculasEnCartel'>Peliculas en cartelera</Link> </li><br/>

        </ul>
      </div>
    );
  }

export default Header;


//<li><Link to={`/detalle/12`}>detalle</Link></li> 