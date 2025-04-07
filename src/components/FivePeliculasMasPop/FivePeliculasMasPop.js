import React, { Component } from "react";
import PeliculaMasPop from '../PeliculaMasPop/PeliculaMasPop';

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
        let peliculasArray = [];
        for (let i = 0; i < 5; i++) {
          let p = data.results[i];
          peliculasArray.push({
            id: p.id,
            imagen: `https://image.tmdb.org/t/p/w500${p.poster_path}`,
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
