import React, { Component } from "react";
import '../../components/peliContainer.css'
import PeliculaMasPop from "../../components/PeliculaMasPop/PeliculaMasPop";
import Filtro from '../../components/FiltroPeli/Filtro'
let urlMoviesEnCartel= 'https://api.themoviedb.org/3/movie/upcoming?api_key=9ed45d655a81dcc3d8732fddd5bc0588'

class PeliculasEnCartel extends Component {
    constructor(props) {
      super(props);
      this.state = {
        peliculas: []
      };
    }
  
    componentDidMount() {
      fetch(urlMoviesEnCartel)
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
        
          this.setState({ 
            peliculas: data.results,
            backupPeliculas: data.results
          
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }

    filtrarPersonajes(busquedaUsuario){
      const personajesFiltrados = this.state.backupPeliculas.filter((elm)=>elm.original_title.toLowerCase().includes(busquedaUsuario.toLowerCase()))
      this.setState({
        peliculas : personajesFiltrados})
  
    }
    
  
    render() {
      return (
        <div className='peliculas-container'>
          <Filtro filtro={(busqueda)=>this.filtrarPersonajes(busqueda)}/>
          {
          
          this.state.length === 0?
          <h1>Cargando peliculas</h1>
          :
          this.state.peliculas.map((peli) => (
            <PeliculaMasPop data={peli} />
          ))}
        </div>
      );
    }
  }
  
  export default PeliculasEnCartel;

