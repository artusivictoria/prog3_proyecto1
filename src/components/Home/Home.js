import React, { Component } from 'react';
import "./styles.css"
import FivePeliculasMasPop from "../FivePeliculasMasPop/FivePeliculasMasPop";
import FivePeliculasEnCartel from "../FivePeliculasEnCartel/FivePeliculasEnCartel";


function Home(){
    return (    
        <>
            <h2>Películas más populares!!</h2>
            <FivePeliculasMasPop/>

            <h2>Películas en cartel</h2>
            <FivePeliculasEnCartel/>
        </>
            
        )
}

export default Home;