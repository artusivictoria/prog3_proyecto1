import React from 'react';
import { Link , Switch , Route, BrowserRouter} from 'react-router-dom';
import Home from '../Home/Home'
import PeliculasMasPop from '../PeliculasMasPop/PeliculasMasPop';
import PeliculasEnCartel from '../PeliculasEnCartel/PeliculasEnCartel';
import './header.css'

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