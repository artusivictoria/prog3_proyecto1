import React from "react";
import PeliculaMasPop from "../PeliculaMasPop/PeliculaMasPop";

let urlMoviesMasPop= 'https://api.themoviedb.org/3/movie/popular'

fetch(urlMoviesMasPop)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data); //Mostrame por consola. //Array de datos que vino de la API
        function PeliculasMasPop(){
            let ArrayPelicaulasMasPop = [];
            for(let i=0; i<data.length; i++){
                ArrayPelicaulasMasPop += {id: data[i].results.id, imagen: data[i].results.poster_path, nombre: data[i].results.title , descripcion: data[i].results.overview}
            }
            return(PeliculasMasPop.map((elm, idx) => <PeliculaMasPop data={elm} /> ))
        }
        

    })
    .catch(function(error){
        console.log(error);
    })

export default PeliculasMasPop;
         
