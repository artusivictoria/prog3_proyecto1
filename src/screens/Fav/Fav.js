
import React, { Component } from 'react'
import PeliculaMasPop from '../../components/PeliculaMasPop/PeliculaMasPop'
import "./styles.css"

export default class Fav extends Component {
    constructor(props){
        super(props)
        this.state = {
            peliculasFav: [],
            hayElementosEnFav: false
        }
    }
    
    componentDidMount(){
        const storageFav = localStorage.getItem('fav')
        if(storageFav !== null){
            let favParseado = JSON.parse(storageFav)
            if(favParseado.length > 0){
                console.log( "favParseado Array essss", favParseado)
                //obs. antes de hacer el fetch filtro los nulls asi no me quedan en el local storge elementos con null cosa de q caudno haga el map no me quden asi el url https://api.themoviedb.org/3/movie/null (con null en vez del id)
                const favFiltrado = favParseado.filter(id => id !== null)
                Promise.all( //obs. promise.all no entra en el oral pero lo vimos en material pero si en colearning
                    favFiltrado.map((elm) => 
                        fetch(`https://api.themoviedb.org/3/movie/${elm}?api_key=9ed45d655a81dcc3d8732fddd5bc0588`)
                        .then((resp) => resp.json())
                        .catch(e => console.log(e))
                    )
                ) 
                .then((data) => this.setState({
                    peliculasFav: data,
                    hayElementosEnFav: true
                }))
                .catch(e => console.log(e))
            }
        }else {
            this.setState({ hayElementosEnFav: true });
        }
    }

    filtrarPeliculasFav(id){
        const peliculasFiltradas = this.state.peliculasFav.filter(
            elm => elm.id !== id
        )
        //obs. estas tres lieneas de abajo son para q cuando saques una película de favoriitos, tambien se borra del localStorage, y si recargás la pgina ya no vuelve a aparecer
        let storage = JSON.parse(localStorage.getItem('fav'));
        let actualizado = storage.filter(elm => elm !== id);
        localStorage.setItem('fav', JSON.stringify(actualizado));

        this.setState({peliculasFav: peliculasFiltradas})
    }

    render() {
        return (
            <div className="favoritos-container" >
                <h2 className="titulo-favoritos">Mis Películas Favoritas</h2>
                {
                this.state.peliculasFav.length > 0 
                ?
                this.state.peliculasFav.map((elm, idx)=> 
                    <PeliculaMasPop 
                    data={elm} 
                    key={idx + elm.name} 
                    borrarDeFav={(id)=> this.filtrarPeliculasFav(id)} 
                    />)
                :
                this.state.hayElementosEnFav === false 
                    ? <h1>Cargando Pagina de Peliculas Favoritas</h1>
                    : <h1>No hay peliculas selecionadas como Favoritas</h1>
                }

            </div>
        )
    }
}
