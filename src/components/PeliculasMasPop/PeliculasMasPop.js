import React, { Component } from "react";
import PeliculaMasPop from "../PeliculaMasPop/PeliculaMasPop";
import '../peliContainer.css'
//ApiA= "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDQzNTM3YzM5MmJjNDVjNGRmN2I0MDkyOWE4MTJiNyIsIm5iZiI6MTc0MzUxMjY4Mi4zMzQsInN1YiI6IjY3ZWJlNDZhYjZkYzllMGE4NzdhYWIwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PhaJvVgmH_NphauTqiij87nCZFdP7sXLe6q-y3aiG4w"
//ApiB="8d43537c392bc45c4df7b40929a812b7"
let urlMoviesMasPop = 'https://api.themoviedb.org/3/movie/popular?api_key=9ed45d655a81dcc3d8732fddd5bc0588'; // desp tengo que poner lo de api key!! acordate soph q sino no veo la pag

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
        console.log(data)
        let peliculasArray = data.results
        console.log('datos de peliculas array: ', peliculasArray)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className='peliculas-container'>
        {this.state.peliculas.map((peli) => (
          <PeliculaMasPop key={peli.id} data={peli} />
        ))}
      </div>
    );
  }
}

export default PeliculasMasPop;


/**  componentDidMount() {
    fetch(urlMoviesMasPop)
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
  } */