import React, { Component } from 'react';
import { Link } from 'react-router-dom';///desp uso link, q es lo mismo q si hubiese puesto <a href="">

import '../DetallePelicula/styles.css'
import '../../components/headerYfooter/Footer2'
import Footer2 from '../../components/headerYfooter/Footer2';

const apiKey = '9ed45d655a81dcc3d8732fddd5bc0588';


class Detalle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detalle: null,
      favorito: false

    }
  }

  //esto pongo null (y fav false) pq todavía no tengo los datos de la película, pq el fetch a la API aún no se hizo, osea detalle va a ser  un objeto completo con la info de la peli pero todavía no lo tengo. Entonces uso null como valor inicial
  //obs. no puse null en por ej FivePelliculasMasPOp pq ahi use en vez un array vacio para iniciar el estado con lo de this.state, y luego cn lo de this.state.peliculas.map(...) no puse null pq estaba esperando un array de pelis, y react puede iterar sobre un array vacío sin romperse. Pero en la página de detalle, el estado detalle es un objeto, y no podés hacer cosas como detalle.title si detalle es undefined, entonces pongo detalle null para luego hacer lo del cargando en el return

  //Después, en componentDidMount con lo de this.setState({ detalle: data.results }); , el detalle deja de ser null y pasa a tener todos los datos de la peli
  componentDidMount() {
    const id = this.props.match.params.id
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ detalle: data }) //tener en cuenta q aca no pones data.results pq el response del endpoint url cuando es solo detalles, es distinto el array con diccionario, no tiene results va directo a la data q yo quiero

        let storage = localStorage.getItem('fav');
        if (storage != null) {
          let parseado = JSON.parse(storage)
          if (parseado.includes(data.id)) {
            this.setState({ favorito: true })
          }
        }

      })
      .catch(err => console.log('el error en el fetch es: ', err))
  }


  agregarAFav(id) {
    let storage = localStorage.getItem('fav');
    if (storage !== null) {
      let arr = JSON.parse(storage);
      arr.push(id);
      localStorage.setItem('fav', JSON.stringify(arr));
    } else {
      localStorage.setItem('fav', JSON.stringify([id]));
    }
    this.setState({ favorito: true });
  }

  sacarDeFav(id) {
    let storage = JSON.parse(localStorage.getItem('fav'));
    //obs. con esta funcion arrow estoy sacando el ID de la película de la lista de favoritos
    //Bsicamente estoy diciendo traeme el array de favoritos, saca esta peli, y guardá el nuevo array
    let filtrado = storage.filter(elm => elm !== id);
    localStorage.setItem('fav', JSON.stringify(filtrado));
    this.setState({ favorito: false });
  }

  render() {
    const peli = this.state.detalle;

    return (
      <div className='detalle-container'>
        {/* Cn esto de evito q me de error la local host por querer leer .title o otras cosas de algo que todavía no existe*/}
        {/* tener esto en cuenta para cuando me dice lo de "Cannot read properties of null (reading 'title')" */}
        {
          peli === null ? <h2>Cargando...</h2> :

            <div className='detalle-info'>
              <img src={`https://image.tmdb.org/t/p/w500${peli.poster_path}`} alt={peli.title} />
              <h1>{peli.title}</h1>
              <p>Rating: {peli.vote_average}</p>
              <p>Duracion: {peli.runtime}</p>
              <p>Géneros: {
                peli.genres.map(g => g.name + ' ')
              }</p>
              <p>Sinopsis: {peli.overview}</p>
              {/*Uso vote_average para indicar el rating*/}


              {
                this.state.favorito ?
                  <button className='links' onClick={() => this.sacarDeFav(peli.id)}>Quitar de favoritos</button>
                  :
                  <button className='links' onClick={() => this.agregarAFav(peli.id)}>Agregar a favoritos</button>
              }
              <br />

              <Link to="/" className='links'>Volver al Home</Link>

            </div>

        }
      <Footer2/>
      </div>
    );
  }
}
export default Detalle;