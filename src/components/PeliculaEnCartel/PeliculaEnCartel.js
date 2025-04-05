import React, { Component } from 'react';
import "./styles.css"

class PeliculaEnCartel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            mostrarContenido: true,
            textoBoton: 'OCULTAR'
        }
    }

    }
    render() {
        console.log('props de la peliculaEnCartel', this.props)
        return (
            <div>
                <img src={this.state.data.imagen} alt="imagen de peliculaEnCartel" />
                <h4>{this.state.data.nombre}</h4>
                {
                this.state.mostrarContenido === true ?       
                <p>{this.state.data.descripcion}</p>
                : ''
                }
                <button onClick={() => this.ocultar()}>
                   {
                    this.state.textoBoton
                   }
                </button>

            </div>

        );
    }


}

export default PeliculaEnCartel;