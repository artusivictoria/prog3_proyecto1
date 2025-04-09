import React, { Component } from 'react';
import "./styles.css";
import '../peliContainer.css'

class PeliculaMasPop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      mostrarContenido: false,
      textoBoton: 'VER MAS'
    };
  }

  ocultar() {
    if (this.state.mostrarContenido === false) {
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
  console.log('propsprops', this.props)
return (
  <div className='article' >
    <img className='imagenP'src={`https://image.tmdb.org/t/p/w342${this.state.data.poster_path}`} alt="imagen de peliculaMasPop" />
    <h4>{this.state.data.original_title}</h4>
    {this.state.mostrarContenido === true ?       
      <p>{this.state.data.overview}</p>
      : ''
    }
    <button onClick={() => this.ocultar()}>
      {this.state.textoBoton}
    </button>
  </div>
);
}
}

export default PeliculaMasPop;
