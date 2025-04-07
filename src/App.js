import logo from './logo.svg';
import React from "react";
import Header from './components/headerYfooter/Header'
import Home from "./components/Home/Home"
//import PeliculasMasPop from './components/PeliculasMasPop/PeliculasMasPop'
//import PeliculasEnCartel from './components/PeliculasEnCartel/PeliculasEnCartel'
import './App.css';

function App() {
  
   

  return (

    <React.Fragment>

      <main>
      <Header/>
      <Home />

      </main>

      
    </React.Fragment>
  );
}

export default App;
