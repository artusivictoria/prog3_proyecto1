import React, { Component } from "react";
import PeliculaEnCartel from "../PeliculaEnCartel/PeliculaEnCartel";

let urlMoviesEnCartel= 'https://api.themoviedb.org/3/movie/upcoming'//sophh falta la api propiedad y valor acordate!!!!!


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
            <PeliculaEnCartel key={peli.id} data={peli} />
          ))}
        </div>
      );
    }
  }
  
  export default PeliculasEnCartel;
  
//esto es como lo habia hecho antes de ver la clase asincronica
// import React from "react";
// import PeliculaEnCartel from "../PeliculaEnCartel/PeliculaEnCartel";

// let urlMoviesEnCartel= 'https://api.themoviedb.org/3/movie/upcoming'

// fetch(urlMoviesEnCartel)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(data){
//         console.log(data); //Mostrame por consola. //Array de datos que vino de la API
//         function PeliculasEnCartel(){
//             let ArrayPelicaulasEnCartel = [];
//             for(let i=0; i<data.length; i++){
//                 ArrayPelicaulasEnCartel += {id: data[i].results.id, imagen: data[i].results.poster_path, nombre: data[i].results.title , descripcion: data[i].results.overview}
//             }
//             return(PeliculasEnCartel.map((elm, idx) => <PeliculaEnCartel data={elm} /> ))
//         }
        
           
//     })
//     .catch(function(error){
//         console.log(error);
//     })

// export default PeliculasEnCartel;
         


