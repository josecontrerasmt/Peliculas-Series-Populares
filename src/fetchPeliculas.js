import fetchGeneros from "./fetchGeneros.js";
import obtenerGenero from "./obtenerGenero.js";

const fetchPeliculas= async(pagina = 1 )=>{
    try {
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=423c825bc153ef4c544a421c89289ede&language=es-MX&page=${pagina}`);
        if(respuesta){
            const datos = await respuesta.json();

            if(datos.page<=datos.total_pages){
                const genero = await fetchGeneros();
                datos.results.forEach(dato => {
                    dato.genero_name = obtenerGenero(dato.genre_ids[0],genero);
                });
                return datos;
            }
            return false;
        }
    } catch (error) {
        console.log(error);
    }
}
export default fetchPeliculas;