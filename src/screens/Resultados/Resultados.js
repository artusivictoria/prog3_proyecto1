import React, { Component } from 'react'
import "./styles.css"
import PeliculaMasPop from '../../components/PeliculaMasPop/PeliculaMasPop'
import Footer2 from '../../components/headerYfooter/Footer2'
// import { Link } from 'react-router-dom'

class Resultados extends Component {
    constructor(props) {
        super(props)
        this.state = {
            busqueda: props.match.params.busqueda,
            resultados: [],
            //favorito: false,
            // mostrarContenido: false,
            // textoBoton: 'VER MAS'
        }
    }
    
//   ocultar() {
//     if (this.state.mostrarContenido === false) {
//       this.setState({
//         mostrarContenido: true,
//         textoBoton: 'OCULTAR'
//       });
//     } else {
//       this.setState({
//         mostrarContenido: false,
//         textoBoton: 'VER MAS'
//       });
//     }
//   }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.busqueda}&api_key=9ed45d655a81dcc3d8732fddd5bc0588`)
            .then(resp => resp.json())
            .then(data => {
                this.setState({ resultados: data.results }, () =>console.log("los resultados sonn:", this.state.resultados))
                
                // let storage = localStorage.getItem('fav');
                // if (storage != null) {
                //     let parseado = JSON.parse(storage)
                //     if (parseado.includes(data.id)) {
                //         this.setState({ favorito: true })
                //     }
               // }


            })
            .catch(err => console.log(err))
    }


    // agregarAFav(id) {
    //     let storage = localStorage.getItem('fav');
    //     if (storage !== null) {
    //         let arr = JSON.parse(storage);
    //         arr.push(id);
    //         localStorage.setItem('fav', JSON.stringify(arr));
    //     } else {
    //         localStorage.setItem('fav', JSON.stringify([id]));
    //     }
    //     this.setState({ favorito: true });
    // }

    // sacarDeFav(id) {
    //     let storage = JSON.parse(localStorage.getItem('fav'));
    //     //obs. con esta funcion arrow estoy sacando el ID de la película de la lista de favoritos
    //     //Bsicamente estoy diciendo traeme el array de favoritos, saca esta peli, y guardá el nuevo array
    //     let filtrado = storage.filter(elm => elm !== id);
    //     localStorage.setItem('fav', JSON.stringify(filtrado));
    //     this.setState({ favorito: false });
    // }

    render() {
        const pelis = this.state.resultados;
        console.log("props de resultados de busqueda es: ", this.props)
        return (
            pelis.length === 0 ? <h2>Cargando...</h2> :

                <div className="resultados-container">
                    <h1 className="resultados-titulo">Resultados de: {this.state.busqueda}</h1>
                    <section className="resultados-lista">
                        {this.state.resultados.map((elm, idx) =>
                            <PeliculaMasPop data={elm} key={idx + elm.original_title} />

                            // <div>
                            //     <img src={`https://image.tmdb.org/t/p/w500${elm.poster_path}`} alt={elm.title} />
                            //     <h1>{elm.title}</h1>
                            //     <p>Rating: {elm.vote_average}</p>
                            //     {/* <p>Duracion: {elm.runtime}</p>
                            //     <p>Géneros: {
                            //         elm.genres.map(g => g.name + ' ')
                            //     }</p> */}
                            //     <p>Sinopsis: {elm.overview}</p>
                            //     {/* <h2 className="resultado-item">{elm.original_title}</h2> */}

                            //     {
                            //         this.state.favorito ?
                            //             <button className='links' onClick={() => this.sacarDeFav(elm.id)}>Quitar de favoritos</button>
                            //             :
                            //             <button className='links' onClick={() => this.agregarAFav(elm.id)}>Agregar a favoritos</button>
                            //     }
                            // </div>


                        )}



                    </section>

                    <br />
                    {/* <Link to="/" className='links'>Volver al Home</Link> */}
                    <Footer2 />
                </div>
        )
    }
}

export default Resultados;
