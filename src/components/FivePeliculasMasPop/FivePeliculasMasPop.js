import React, { Component } from "react";
import PeliculaMasPop from '../PeliculaMasPop/PeliculaMasPop';
import '../peliContainer.css'
//let urlMoviesMasPop = 'https://api.themoviedb.org/3/movie/popular';

//agregar APIKEY
let urlMoviesMasPop = 'https://api.themoviedb.org/3/movie/popular?api_key=9ed45d655a81dcc3d8732fddd5bc0588';

class FivePeliculasMasPop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: []
    };
  }

  componentDidMount() {
    fetch(urlMoviesMasPop)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        this.setState({ peliculas: data.results.slice(0,5) });
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
        {
        this.state.length === 0?
        <h1>Cargando peliculas</h1>
        :
        this.state.peliculas.map((peli) => (
          <PeliculaMasPop key={peli.id} data={peli} />
        ))}
      </div>
    );
  }
}

export default FivePeliculasMasPop;


