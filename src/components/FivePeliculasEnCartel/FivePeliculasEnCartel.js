import React, { Component } from "react";
import PeliculaEnCartel from "../FivePeliculaEnCartel/FivePeliculaEnCartel";

let urlPeliculasEnCartel = 'https://api.themoviedb.org/3/movie/upcoming';

class PeliculasEnCartel extends Component {
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
            imagen: p.poster_path,
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