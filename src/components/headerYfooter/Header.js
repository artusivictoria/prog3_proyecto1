import React from 'react';
import { Link , Switch , Route, BrowserRouter} from 'react-router-dom';
import Home from '../Home/Home'
import PeliculasMasPop from '../PeliculasMasPop/PeliculasMasPop';
import PeliculasEnCartel from '../PeliculasEnCartel/PeliculasEnCartel';


function Header() {
    return (
      <BrowserRouter>
        
        <h1>Mi App de Películas</h1>

        <Link to="/">Home</Link> <br/>
        <Link to="/favoritos">favoritos</Link><br/>
        <Link to = '/PeliculasMasPop'>Peliculas Populares</Link> <br/>
        <Link to = '/PeliculasEnCartel'>Peliculas en cartelera</Link> <br/>

        <Switch> 
        <Route exact path="/" component={Home} />
        <Route path="/PeliculasMasPop" component={PeliculasMasPop} />
        <Route path="/PeliculasEnCartel" component={PeliculasEnCartel} />
        
        </Switch> 

        </BrowserRouter>


    );
  }

export default Header;