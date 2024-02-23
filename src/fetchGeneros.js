
const fetchGeneros=async()=>{
    try {
        const respuesta = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=423c825bc153ef4c544a421c89289ede&language=es-MX');
        if(respuesta.ok){
            const datos = await respuesta.json();
            return datos.genres;
        }
    } catch (error) {
        console.log(error);
    }
}
export default fetchGeneros;