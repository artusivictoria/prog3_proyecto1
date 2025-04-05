import React from "react";
import PeliculaMasPop from "../PeliculaMasPop/PeliculaMasPop";

// function Cards(){
    
//     let cardsArray= [
//         {imagen:"./img/characters/ahsoka.jpg", characterName:"Ashoka", characterDescription:"Descripcion de Ashoka. Tiene dos sables.Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, tempore voluptatum officia debitis fugit necessitatibus vero ad mollitia voluptatem quisquam nam praesentium voluptate ex aliquam eos repellat in nulla animi."},
//         {imagen:"./img/characters/anakin.jpg", characterName:"Anakin", characterDescription:"Descripcion de Anakin. Tiene un sable.Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, tempore voluptatum officia debitis fugit necessitatibus vero ad mollitia voluptatem quisquam nam praesentium voluptate ex aliquam eos repellat in nulla animi."},
//         {imagen:"./img/characters/batman.jpg", characterName:"Batman", characterDescription:"Descripcion de Ashoka. Es negro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, tempore voluptatum officia debitis fugit necessitatibus vero ad mollitia voluptatem quisquam nam praesentium voluptate ex aliquam eos repellat in nulla animi."},
//         {imagen:"./img/characters/hulkSmall.jpg", characterName:"Hulk", characterDescription:"Descripcion de Hulk.Es verde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, tempore voluptatum officia debitis fugit necessitatibus vero ad mollitia voluptatem quisquam nam praesentium voluptate ex aliquam eos repellat in nulla animi."}
//       ]
//     return(
        
//             cardsArray.map((elm, idx) => <Card data={elm} /> )
          
//     )
// }
// export default Cards





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
        
           
        
        //     `<article class="div-hom-elemento-accesorios">
        //                         <img class="imghom" src=${info[i].image} alt="${info[i].id}">
        //                         <p class="p_home" >Nombre: ${info[i].title}</p>
        //                         <p class="p_home" >Descripcion: ${info[i].description}</p>
        //                         <p>Precio: $ ${info[i].price}</p>
        //                         <a class="bot-hom-ver" href="producto.html?id=${info[i].id}">Ver mas</a>
        //                     </article>`
        // }
        // console.log(elementosJew);

    })
    .catch(function(error){
        console.log(error);
    })

export default PeliculasMasPop;
         
