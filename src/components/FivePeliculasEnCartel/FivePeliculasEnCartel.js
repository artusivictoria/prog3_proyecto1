import React, { Component } from "react";
//import PeliculaEnCartel from "../FivePeliculaEnCartel/FivePeliculaEnCartel";
import '../peliContainer.css'
//let urlPeliculasEnCartel = 'https://api.themoviedb.org/3/movie/upcoming';
import PeliculaMasPop from "../PeliculaMasPop/PeliculaMasPop";
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
      
        this.setState({ 
          peliculas: data.results.slice(0,5)  }
          );
      })
      .catch((error) => {
        console.log(error);
      });
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


export default FivePeliculasEnCartel;

