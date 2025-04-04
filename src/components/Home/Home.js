import React, { Component } from 'react';
import "./styles.css"
import PeliculasMasPop from "../PeliculasMasPop/PeliculasMasPop";
import PeliculasEnCartel from "../PeliculasEnCartel/PeliculasEnCartel";


function Home(){
    return (    
        <>
            <PeliculasMasPop/>
            <PeliculasEnCartel/>
        </>
 //preguntar a los profes si prefieren que usemos react fragment o la abreviacion    
        )
}

export default Home;