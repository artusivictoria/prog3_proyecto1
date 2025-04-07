import React, { Component } from "react";
import PeliculaEnCartel from "../PeliculaEnCartel/PeliculaEnCartel";
import '../peliContainer.css'
let urlMoviesEnCartel= 'https://api.themoviedb.org/3/movie/upcoming?api_key=9ed45d655a81dcc3d8732fddd5bc0588'//sophh falta la api propiedad y valor acordate!!!!!


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
          let peliculasArray = data.results.map(p => ({
            id: p.id,
            imagen: `https://image.tmdb.org/t/p/w342${p.poster_path}`,
            nombre: p.title,
            descripcion: p.overview
          }));
          this.setState({ peliculas: peliculasArray });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    render() {
      return (
        <div className='peliculas-container'>
          {this.state.peliculas.map((peli) => (
            <PeliculaEnCartel key={peli.id} data={peli} />
          ))}
        </div>
      );
    }
  }
  
  export default PeliculasEnCartel;

