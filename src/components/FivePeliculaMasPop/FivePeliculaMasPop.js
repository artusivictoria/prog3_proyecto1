// obs. en 5PeliculaMasPop tengo exactamente el mismo codigo que en PeliculaMasPop

import React, { Component } from 'react';
//import "./styles.css";
import '../peliContainer.css'

class FivePeliculaMasPop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      mostrarContenido: true,
      textoBoton: 'VER MAS'
    };
  }

  ocultar() {
    if (this.state.mostrarContenido === true) {
      this.setState({
        mostrarContenido: true,
        textoBoton: 'OCULTAR'
    });
} else {
  this.setState({
    mostrarContenido: false,
    textoBoton: 'VER MAS'
  });
}
}

render() {
return (
  <div className='article'>
    <img className='imagenP' src={this.state.data.imagen} alt="imagen de peliculaMasPop" />
    <h4>{this.state.data.nombre}</h4>
    {this.state.mostrarContenido === true ?       
      <p>{this.state.data.descripcion}</p>
      : ''
    }
    <button onClick={() => this.ocultar()}>
      {this.state.textoBoton}
    </button>
  </div>
);
}
}

export default FivePeliculaMasPop;
