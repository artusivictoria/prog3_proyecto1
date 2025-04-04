import logo from './logo.svg';
import React from "react";
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import PeliculasMasPop from './components/PeliculasMasPop/PeliculasMasPop'
import PeliculasEnCartel from './components/PeliculasEnCartel/PeliculasEnCartel'
import './App.css';

function App() {
  
   

  return (
    <React.Fragment>
      
      <h1>My App in React del proeycto de prog 3!!</h1>
      <main>
          <Home />
      </main>
      
    </React.Fragment>
  );
}

export default App;
