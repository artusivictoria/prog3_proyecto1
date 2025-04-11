import React, { Component } from 'react'


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

            <div>
                <h1>Resultados de: {this.state.busqueda}</h1>
                <section>
                    {this.state.resultados.map(elm => <h2>{elm.original_title}</h2>)}
                </section>

            </div>
        )
    }
}



export default Resultados;
