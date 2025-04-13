import React, { Component } from "react";
import PeliculaMasPop from "../../components/PeliculaMasPop/PeliculaMasPop";
import Filtro from '../../components/FiltroPeli/Filtro'
import '../PeliculasMasPop/PeliculasMasPop.css'
let urlMoviesMasPop = 'https://api.themoviedb.org/3/movie/popular?api_key=9ed45d655a81dcc3d8732fddd5bc0588'; 


class PeliculasMasPop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      backupPeliculas: [],
      paginaActual:0
    }
  }

  
  componentDidMount() {
    fetch(urlMoviesMasPop)
      .then((response) => response.json())
      .then((data) => {
        console.log('datadata de screens moviespop ver todas ',data)
        this.setState({ 
          peliculas: data.results,
          backupPeliculas: data.results, 
          paginaActual: 1
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  filtrarPeliculas(busquedaUsuario){
    const personajesFiltrados = this.state.backupPeliculas.filter((elm)=>elm.original_title.toLowerCase().includes(busquedaUsuario.toLowerCase()))
    this.setState({peliculas : personajesFiltrados})

  }

  cargarMas(){
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=9ed45d655a81dcc3d8732fddd5bc0588&page=${this.state.paginaActual + 1}`)
    .then(resp => resp.json())
    .then(data => this.setState({
        peliculas: this.state.backupPeliculas.concat(data.results),
        backupPeliculas: this.state.backupPeliculas.concat(data.results),
        paginaActual: this.state.paginaActual + 1
    }))
}

  render() {
    return (
      <div className='peliculas-container'>
      <Filtro clasfiltro={(busqueda)=>this.filtrarPeliculas(busqueda)}/> 
       {
       this.state.peliculas.length === 0?
        <h1>Cargando peliculas</h1>
        :
        this.state.peliculas.map((peli) => (
          <PeliculaMasPop key={peli.id} data={peli} />
        ))}
        <button className='links'onClick={()=> this.cargarMas()}>
          Cargar mas Peliculas Populares
        </button>
        
      </div>
    );
  }
}

export default PeliculasMasPop;

