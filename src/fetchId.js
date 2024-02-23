const fetchId=async(id)=>{

    try {
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=423c825bc153ef4c544a421c89289ede&language=es-MX`);
        if(respuesta.ok){
            const datos = await respuesta.json();
            return datos;
        }
    } catch (error) {
        console.log(error);
    }
}
export default fetchId;