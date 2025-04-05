import React from "react";

function OpcionesMenu(props){
 
    return(
        
        <nav>
            <ul className="main-nav">
                {props.titulosHeader.map((titulo, idx) => <li key={titulo + idx}>{titulo}</li>)}
            </ul>
            <ul className="user">
                <li key={props.usuario}>{props.usuario} <img src="./img/user.jpg" alt="User" /></li>
            </ul>
        </nav>
    )
}

export default OpcionesMenu
