import React from "react";
import OpcionesMenu from "./OpcionesMenu";
import "./Styles.css"

function Header(){
    const titulos = [
        { "Home": "/Home" },
        { "Favoritos": "/Favoritos" },
        { "PeliculasMasPop": "/PeliculasMasPop" },
        { "PeliculasEnCartel": "/PeliculasEnCartel" }
        ];
    let nombreUsuario="Personaaa"
    
        return (
            <OpcionesMenu titulosHeader={titulos} usuario={nombreUsuario} />
            
        )
}

export default Header