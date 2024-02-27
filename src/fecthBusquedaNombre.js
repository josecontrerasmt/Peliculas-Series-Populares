
const fetchBusquedaNombre=async(nombre,pagina=1)=>{
    const categoria=document.querySelector('.contenedor__categorias').dataset.categoria;
    try {
        const respuesta = await fetch(`https://api.themoviedb.org/3/search/${categoria}?api_key=423c825bc153ef4c544a421c89289ede&query=${nombre}&include_adult=false&language=es-MX&page=${pagina}`);
        if(respuesta.ok){
            const datos = await respuesta.json();
            if(datos.page<=datos.total_pages){
                return datos;
            }
            return false;
        }
    } catch (error) {
        console.log(error);
    }
}
export default fetchBusquedaNombre;