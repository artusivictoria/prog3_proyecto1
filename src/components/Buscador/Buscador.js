import React, { Component } from 'react'
import './styles.css'

class Buscador extends Component {
    constructor(props){
        super(props)
        this.state = {
            input:''
        }
    }

    controlarForm(evento){
        evento.preventDefault()
        this.props.history.push('/resultados/'+ this.state.input)
    }

    controlarInput(evento){
        this.setState({input: evento.target.value})
    }

  render() {


    return (
      <form onSubmit={(evento) => this.controlarForm(evento)} className="buscador-form">
        <input 
          placeholder='Buscador' 
          value={this.state.input} 
          onChange={(evento) => this.controlarInput(evento)} 
          className="buscador-input"
        />

        <button type='submit' className="buscador-boton">Buscar</button>

      </form>
    )
  }
}

export default Buscador;