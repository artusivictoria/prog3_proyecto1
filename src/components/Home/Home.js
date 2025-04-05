import React, { Component } from 'react';
import "./styles.css"
import FivePeliculasMasPop from "../FivePeliculasMasPop/FivePeliculasMasPop";
import FivePeliculasEnCartel from "../FivePeliculasEnCartel/FivePeliculasEnCartel";


function Home(){
    return (    
        <>
            <FivePeliculasMasPop/>
            <FivePeliculasEnCartel/>
        </>
            
        )
}

export default Home;