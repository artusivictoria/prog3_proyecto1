// // obs. en 5PeliculaMasPop tengo exactamente el mismo codigo que en PeliculaMasPop

// import React, { Component } from 'react';
// //import "./styles.css";
// import '../peliContainer.css'

// class FivePeliculaMasPop extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: props.data,
//       favorito: false,
//       mostrarContenido: true,
//       textoBoton: 'VER MAS'
//     };
//   }

//   ocultar() {
//     if (this.state.mostrarContenido === true) {
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

  
//   componentDidMount(){
//     let storage= localStorage.getItem('fav')
//     if(storage !== null){
//       let storageParseado = JSON.parse(storage)
//       let estaMiId = storageParseado.includes(this.state.data.id)

//       if(estaMiId){
//         this.setState({favorito: true})
//       }
//     }
//   }

//   agregarAFav(id) {
//     let storage = localStorage.getItem('fav')
//     if (storage !== null) {
//       let arrParseado = JSON.parse(storage)
//       arrParseado.push(id)
//       let arrStringificado = JSON.stringify(arrParseado)
//       localStorage.setItem('fav', arrStringificado)
//     } else {
//       let primerID = [id]
//       let arrStringificado = JSON.stringify(primerID)
//       localStorage.setItem('fav', arrStringificado)
//     }

//     this.setState({
//       favorito: true
//     })
//   }

//   sacarDeFav(id){
//     const storage = localStorage.getItem('fav')
//     const storageParseado = JSON.parse(storage)
//     const filtrarStorage = storageParseado.filter((elm) => elm !== id )
//     const storageStringificado = JSON.stringify(filtrarStorage)
//     localStorage.setItem('fav', storageStringificado)

//     this.setState({
//       favorito: false
//     })
//   }

//   render() {

//     return (

//       <div className='article'>
//         <img className='imagenP' src={this.state.data.imagen} alt="imagen de peliculaMasPop" />
//         <h4>{this.state.data.nombre}</h4>
//         {this.state.mostrarContenido === true ?
//           <p>{this.state.data.descripcion}</p>
//           : ''
//         }
//         <button onClick={() => this.ocultar()}>
//           {this.state.textoBoton}
//         </button>

//         {
//           this.state.favorito ?
//           <button onClick={()=> this.sacarDeFav(this.state.data.id) }>Sacar de favoritos</button>
//           :
//           <button onClick={() => this.agregarAFav(this.state.data.id)}>Agregar a favoritos</button>
//         }

//       </div>
//     );
//   }
// }

// export default FivePeliculaMasPop;
