import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
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
        {/* <li><Link to={`/detalle/${peli.id}`}>detalle</Link></li> */}
        </ul>
      </div>
    );
  }

export default Header;


