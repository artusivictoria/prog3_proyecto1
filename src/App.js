import React from "react";
import Header from './components/headerYfooter/Header'
import Home from "./screens/Home/Home"
import PeliculasMasPop from './screens/PeliculasMasPop/PeliculasMasPop'
import PeliculasEnCartel from './screens/PeliculasEnCartel/PeliculasEnCartel'
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Detalle from './screens/DetallePelicula/Detalle'
import Fav from './screens/Fav/Fav'
import Resultados from './screens/Resultados/Resultados';
import NotFound from './screens/NotFound/NotFound';

function App() {

  return (
    <BrowserRouter>
     
      <Header />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/PeliculasMasPop" component={PeliculasMasPop} />
        <Route path={'/detalle/:id'} component={Detalle} />
        <Route path="/PeliculasEnCartel" component={PeliculasEnCartel} />
        <Route path={'/favoritos'} component={Fav} />
        <Route path="/resultados/:busqueda" component={Resultados} />
        <Route path="" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
