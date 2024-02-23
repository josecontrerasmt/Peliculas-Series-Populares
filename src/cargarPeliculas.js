
const cargarPeliculas= async(datos)=>{
    document.querySelector('.peliculas').innerHTML='';
    const resultados = datos.results;
    resultados.forEach(resultado => {
        const portada = resultado.poster_path != null
        ?`https://image.tmdb.org/t/p/w500/${resultado.poster_path}`
        : './imgs/pop.gif';

        document.querySelector('.peliculas').innerHTML+=`
        <article class="pelicula" id=${resultado.id} data-genero=${resultado.genre_ids[0]}>
            <img src="${portada}" alt="Pelicula__Poster" class="pelicula__portada">
            <div class="pelicula__info">
                <h3 class="pelicula__titulo">${resultado.title}</h3>
                <span class="pelicula__genero">${resultado.genero_name}</span>
            </div>
            <button class="pelicula__mas" id="ver-mas">Ver mas <i class="bi bi-hand-index-thumb-fill"></i></button>
        </article>
        `;
    });
}
export default cargarPeliculas;