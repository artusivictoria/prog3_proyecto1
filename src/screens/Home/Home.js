import "./styles.css"
import FivePeliculasMasPop from "../../components/FivePeliculasMasPop/FivePeliculasMasPop";
import FivePeliculasEnCartel from "../../components/FivePeliculasEnCartel/FivePeliculasEnCartel";


function Home(){
    return (    
        <>
            <h2 className='seccion'>Películas Populares</h2>
            <FivePeliculasMasPop/>

            <h2 className='seccion'>Películas en cartelera</h2>
            <FivePeliculasEnCartel/>
        </>
            
        )
}

export default Home;