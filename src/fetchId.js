const fetchId=async(id)=>{
    const categoria=document.querySelector('.contenedor__categorias').dataset.categoria;
    try {
        const respuesta = await fetch(`https://api.themoviedb.org/3/${categoria}/${id}?api_key=423c825bc153ef4c544a421c89289ede&language=es-MX`);
        if(respuesta.ok){
            const datos = await respuesta.json();
            return datos;
        }
    } catch (error) {
        console.log(error);
    }
}
export default fetchId;