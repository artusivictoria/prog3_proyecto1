import logo from './logo.svg';
import React from "react";
import Header from './components/headerYfooter/Header'
import Home from "./screens/Home/Home"
import PeliculasMasPop from './screens/PeliculasMasPop/PeliculasMasPop'
import PeliculasEnCartel from './screens/PeliculasEnCartel/PeliculasEnCartel'
import './App.css';
import {Switch , Route, BrowserRouter} from 'react-router-dom';


function App() {
  
   

  return (



    <BrowserRouter>
      <Header />
        
    <Switch> 
    <Route exact path="/" component={Home} />
    <Route path="/PeliculasMasPop" component={PeliculasMasPop} />
    <Route path="/PeliculasEnCartel" component={PeliculasEnCartel} />

    </Switch> 

    </BrowserRouter>

  );
}

export default App;
