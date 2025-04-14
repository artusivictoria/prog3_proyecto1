import React, { Component } from 'react'
import "./styles.css"

class Resultados extends Component {
    constructor(props) {
        super(props)
        this.state = {
            busqueda: props.match.params.busqueda,
            resultados: []
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.busqueda}&api_key=9ed45d655a81dcc3d8732fddd5bc0588`)
            .then(resp => resp.json())
            .then(data => this.setState({ resultados: data.results }))
            .catch(err => console.log(err))
    }

    render() {
        return (

            <div className="resultados-container">
                <h1 className="resultados-titulo">Resultados de: {this.state.busqueda}</h1>
                <section className="resultados-lista">
                    {this.state.resultados.map(elm => <h2 className="resultado-item">{elm.original_title}</h2>)}
                </section>

            </div>
        )
    }
}



export default Resultados;
