import React, { Component } from "react";
import PeliculaMasPop from "../FivePeliculaMasPop/FivePeliculaMasPop";

let urlMoviesMasPop = 'https://api.themoviedb.org/3/movie/popular';

class PeliculasMasPop extends Component {
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
          <PeliculaMasPop key={peli.id} data={peli} />
        ))}
      </div>
    );
  }
}

export default FivePeliculasMasPop;
