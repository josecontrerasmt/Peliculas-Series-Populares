import fetchGeneros from "./fetchGeneros.js";
import obtenerGenero from "./obtenerGenero.js";

const fetchPeliculas= async(pagina = 1 )=>{
    const categoria=document.querySelector('.contenedor__categorias').dataset.categoria;
    try {
        const respuesta = await fetch(`https://api.themoviedb.org/3/${categoria}/popular?api_key=423c825bc153ef4c544a421c89289ede&language=es-MX&page=${pagina}`);
        if(respuesta){
            const datos = await respuesta.json();
            if(datos.page<=datos.total_pages){
                const genero = await fetchGeneros(categoria);
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