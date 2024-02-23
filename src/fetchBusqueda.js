import fetchGeneros from "./fetchGeneros.js";
import obtenerGenero from "./obtenerGenero.js";

const fetchBusqueda=async(pagina = 1)=>{
    const genero = document.querySelector('.aside__botones .aside__btn--active')?.id || '';
    try {
        const respuesta = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=423c825bc153ef4c544a421c89289ede&sort_by=popularity.desc&language=es-MX&page=${pagina}&with_genres=${genero}`);

        if(respuesta.ok){
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
export default fetchBusqueda;