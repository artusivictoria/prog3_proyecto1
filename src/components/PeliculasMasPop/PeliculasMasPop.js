import React, { Component } from "react";
import PeliculaMasPop from "../PeliculaMasPop/PeliculaMasPop";

let urlMoviesMasPop = 'https://api.themoviedb.org/3/movie/popular?'; // desp tengo que poner lo de api key!! acordate soph q sino no veo la pag

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
        let peliculasArray = data.results.map(p => ({
          id: p.id,
          imagen: p.poster_path,
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
      <div>
        {this.state.peliculas.map((peli) => (
          <PeliculaMasPop key={peli.id} data={peli} />
        ))}
      </div>
    );
  }
}

export default PeliculasMasPop;



// import React from "react";
// import PeliculaMasPop from "../PeliculaMasPop/PeliculaMasPop";

// //me falta poner lo de api key!!!!
// let urlMoviesMasPop= 'https://api.themoviedb.org/3/movie/popular'

// fetch(urlMoviesMasPop)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(data){
//         console.log(data); //Mostrame por consola. //Array de datos que vino de la API
//         function PeliculasMasPop(){
//             let ArrayPelicaulasMasPop = [];
//             for(let i=0; i<data.length; i++){
//                 ArrayPelicaulasMasPop += {id: data[i].results.id, imagen: data[i].results.poster_path, nombre: data[i].results.title , descripcion: data[i].results.overview}
//             }
//             return(PeliculasMasPop.map((elm, idx) => <PeliculaMasPop data={elm} /> ))
//         }
        

//     })
//     .catch(function(error){
//         console.log(error);
//     })

// export default PeliculasMasPop;
         
