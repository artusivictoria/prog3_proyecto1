import React from "react";
import PeliculaEnCartel from "../PeliculaEnCartel/PeliculaEnCartel";

let urlMoviesEnCartel= 'https://api.themoviedb.org/3/movie/upcoming'

fetch(urlMoviesEnCartel)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data); //Mostrame por consola. //Array de datos que vino de la API
        function PeliculasEnCartel(){
            let ArrayPelicaulasEnCartel = [];
            for(let i=0; i<data.length; i++){
                ArrayPelicaulasEnCartel += {id: data[i].results.id, imagen: data[i].results.poster_path, nombre: data[i].results.title , descripcion: data[i].results.overview}
            }
            return(PeliculasEnCartel.map((elm, idx) => <PeliculaEnCartel data={elm} /> ))
        }
        
           
    })
    .catch(function(error){
        console.log(error);
    })

export default PeliculasEnCartel;
         


