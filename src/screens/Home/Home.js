import "./styles.css"
import FivePeliculasMasPop from "../../components/FivePeliculasMasPop/FivePeliculasMasPop";
import FivePeliculasEnCartel from "../../components/FivePeliculasEnCartel/FivePeliculasEnCartel";

import Buscador from '../../components/Buscador/Buscador'
import Footer2 from "../../components/headerYfooter/Footer2";


function Home(props){
    console.log('props home BB', props)
    return (    
        <>
            {/* <Filtro/> el filtro va en las 2 paginas de ver mas! */}
            <Buscador history={props.history} />
            <h2 className='seccion'>Películas Populares</h2>
            <FivePeliculasMasPop/>

            <h2 className='seccion'>Películas en cartelera</h2>
            <FivePeliculasEnCartel/>

            <Footer2/>
        </>
            
        )
}

export default Home;