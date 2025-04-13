import React from 'react';
import "./styles.css"

function NotFound() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">¡Uy! No encontramos esa página.</p>
      {/* obs. podria haber importado link y haber hecho con link en vez de href como hice en otras paginas*/
      <a href="/" className="not-found-link">Volver al inicio</a>  }
    </div>
  );
}

export default NotFound;


//HACERLO LINDO!!
// function NotFound() {
//     return (

//       <div>
//         <h1>404 Not Found </h1>
//       </div>
//     );
//   }

// export default NotFound;