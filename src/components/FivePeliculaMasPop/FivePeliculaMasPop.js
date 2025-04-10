// obs. en 5PeliculaMasPop tengo exactamente el mismo codigo que en PeliculaMasPop

import React, { Component } from 'react';
//import "./styles.css";
import '../peliContainer.css'

//aca hay q agregar export default antes de class????
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


  agregarAFav(id) {
    let storage = localStorage.getItem('fav')
    if (storage !== null) {
      let arrParseado = JSON.parse(storage)
      arrParseado.push(id)
      let arrStringificado = JSON.stringify(arrParseado)
      localStorage.setItem('fav', arrStringificado)
    } else {
      let primerID = [id]
      let arrStringificado = JSON.stringify(primerID)
      localStorage.setItem('fav', arrStringificado)
    }

    this.setState({
      favorito: true
    })
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
