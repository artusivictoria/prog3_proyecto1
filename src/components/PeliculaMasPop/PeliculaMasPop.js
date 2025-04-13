
import React, { Component } from 'react';
import "./PeliculaMasPop.css";
import {Link} from 'react-router-dom'


class PeliculaMasPop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      favorito: false,
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


  componentDidMount() {
    let storage = localStorage.getItem('fav')
    if (storage !== null) {
      let storageParseado = JSON.parse(storage)
      let estaMiId = storageParseado.includes(this.state.data.id)

      if (estaMiId) {
        this.setState({ favorito: true })
      }
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


  sacarDeFav(id) {
    const storage = localStorage.getItem('fav')
    const storageParseado = JSON.parse(storage)
    const filtrarStorage = storageParseado.filter((elm) => elm !== id)
    const storageStringificado = JSON.stringify(filtrarStorage)
    localStorage.setItem('fav', storageStringificado)

    this.setState({
      favorito: false
    })
//obs. es borrarDeFav pq asi lo puse en el return de Fav
    if(this.props.borrarDeFav !== undefined){
      this.props.borrarDeFav(id)
    }

  }

  


  render() {
    console.log('propsprops', this.props)
    return (
      
      <div className='article' >
            
       
        <img className='imagenP' src={`https://image.tmdb.org/t/p/w342${this.state.data.poster_path}`} alt="imagen de peliculaMasPop" />
       

        <h4>{this.state.data.original_title}</h4>
        {this.state.mostrarContenido === true ?
          <p>{this.state.data.overview}</p>
          : ''
        }
        <button className='links' onClick={() => this.ocultar()}>
          {this.state.textoBoton}
        </button>

        {
          this.state.favorito ?
            <button className='links' onClick={() => this.sacarDeFav(this.state.data.id)}>Sacar de favoritos</button>
            :
            <button className='links' onClick={() => this.agregarAFav(this.state.data.id)}>Agregar a favoritos</button>
        }

        <Link className='links' to={`/detalle/${this.props.data.id}`}>    
        Ir a detalle
        </Link>


      </div>
    );
  }
}

export default PeliculaMasPop;
