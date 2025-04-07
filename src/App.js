import logo from './logo.svg';
import React from "react";
import Header from './components/headerYfooter/Header'
import Home from "./components/Home/Home"
import PeliculasMasPop from './components/PeliculasMasPop/PeliculasMasPop'
import PeliculasEnCartel from './components/PeliculasEnCartel/PeliculasEnCartel'
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
