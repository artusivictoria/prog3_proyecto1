
import React, { Component } from 'react'
import PeliculaMasPop from '../../components/PeliculaMasPop/PeliculaMasPop'

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
                Promise.all(
                    favParseado.map((elm) => 
                        fetch("https://api.themoviedb.org/3/movie/" + elm)
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
        }
    }

    filtrarPeliculasFav(id){
        const peliculasFiltradas = this.state.peliculasFav.filter(
            elm => elm.id !== id
        )
        this.setState({peliculasFav: peliculasFiltradas})
    }

    render() {
        return (
        <div>
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
                this.state.hayElementosEnFav === false ? 
                    <h1>No hay peliculas selecionadas como Favoritas</h1>
                :
                <h1>
                    Cargando Pagina de Peliculas Favoritas
                </h1>
            }
        </div>
        )
    }
}
