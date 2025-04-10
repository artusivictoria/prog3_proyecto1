import "./styles.css"
import FivePeliculasMasPop from "../../components/FivePeliculasMasPop/FivePeliculasMasPop";
import FivePeliculasEnCartel from "../../components/FivePeliculasEnCartel/FivePeliculasEnCartel";
import Filtro from '../../components/FiltroPeli/Filtro'


function Home(){
    return (    
        <>
            <Filtro/>
            <h2 className='seccion'>Películas Populares</h2>
            <FivePeliculasMasPop/>

            <h2 className='seccion'>Películas en cartelera</h2>
            <FivePeliculasEnCartel/>
        </>
            
        )
}

export default Home;