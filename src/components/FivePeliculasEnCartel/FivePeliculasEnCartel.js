import React, { Component } from "react";

//import PeliculaEnCartel from "../FivePeliculaEnCartel/FivePeliculaEnCartel";
import PeliculaEnCartel from '../PeliculaEnCartel/PeliculaEnCartel'

//let urlPeliculasEnCartel = 'https://api.themoviedb.org/3/movie/upcoming';
let urlPeliculasEnCartel = 'https://api.themoviedb.org/3/movie/upcoming?api_key=9ed45d655a81dcc3d8732fddd5bc0588';

class FivePeliculasEnCartel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: []
    };
  }

  componentDidMount() {
    fetch(urlPeliculasEnCartel)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let peliculasArray = [];
        for (let i = 0; i < 5; i++) {
          let p = data.results[i];
          peliculasArray.push({
            id: p.id,
            imagen: `https://image.tmdb.org/t/p/w342${p.poster_path}`,
            nombre: p.title,
            descripcion: p.overview
          });
        }
        this.setState({ peliculas: peliculasArray });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {this.state.peliculas.map((peli) => (
          <PeliculaEnCartel key={peli.id} data={peli} />
        ))}
      </div>
    );
  }
}


export default FivePeliculasEnCartel;

