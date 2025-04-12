import React, {Component} from "react";
import '../peliContainer.css'

class Filtro extends Component{

     constructor(props) {
         super(props);
         this.state = {

             valorInput : '',
         };
       }

       manejarSubmit(evento){
         evento.preventDefault()
       }

       controlarInput(evento){
         console.log('esto llega con el evento', evento)
         this.setState(
             {valorInput: evento.target.value},
             ()=>this.props.filtro(this.state.valorInput)

         )
       }

     render(){
         return(


             <form  className='nav' onSubmit={(evento)=> this.manejarSubmit(evento)}>

                 <input className='input' placeholder='Busca una pelicula!'  onChange={(evento)=>this.controlarInput(evento)} value={this.state.valorInput}/>
             </form>
         )
     }


 }

 export default Filtro