import React, { Component } from 'react';
import "./styles.css"
import PeliculasMasPop from "./PeliculasMasPop";
import PeliculasEnCartel from "./PeliculasEnCartel";



function Home(){
        return (
            
        <React.Fragment>
            <PeliculasMasPop/>
            <PeliculasEnCartel/>
        </React.Fragment>
               
            
        )
}

export default Home;