import React, { Component } from 'react';
//import "./styles.css";
import '../peliContainer.css'

class FivePeliculaEnCartel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      mostrarContenido: true,
      textoBoton: 'OCULTAR'
    };
  }

  ocultar() {
    if (this.state.mostrarContenido === true) {
      this.setState({
        mostrarContenido: false,
        textoBoton: 'VER MAS'
      });
    } else {
      this.setState({
        mostrarContenido: true,
        textoBoton: 'OCULTAR'
      });
    }
  }

  render() {
    return (
      <div className='article' >
        <img className='imagenP'src={this.state.data.imagen} alt="imagen de peliculaEnCartel" />
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

export default FivePeliculaEnCartel;