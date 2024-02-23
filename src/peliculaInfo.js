const peliculaInfo= async(pelicula)=>{
    const voto = pelicula.vote_average;
    const numero = Math.floor(voto * 10) / 10;
    const puntuacion = agregarDecimal(numero);
    let color;
    if(numero<6){
        color='puntuacion--rojo';
    }else if(numero>=6 && numero <7.2){
        color = 'puntuacion--azul';
    }else if(numero>=7.2 & numero <=10){
        color ='puntuacion--verde';
    }
    const portada = pelicula.poster_path != null
        ?`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`
        : './imgs/pop.gif';

    const fondo = pelicula.backdrop_path!=null
        ?`https://image.tmdb.org/t/p/w500/${pelicula.backdrop_path}`
        :'./imgs/pop.gif';
        
    document.querySelector('.descripcion__contenedor').innerHTML='';
    
    document.querySelector('.descripcion__contenedor').innerHTML+=`
    <img class="descripcion__fondo" src="${fondo}" alt="Pelicula__Fondo">
    <div class="descripcion__info">
        <img class="descripcion__img" src="${portada}" alt="Pelicula__Poster">
        <div class="descripcion__texts">
            <h3 class="descripcion__titulo">${pelicula.title}</h3>
            <span class="descripcion__tagline">${pelicula.tagline}</span>
            <div class="descripcion__datos">
                <span class="descripcion__anio">${pelicula.release_date}</span>
                <span class="descripcioni__duracion">${pelicula.runtime} min</span>
            </div>
            <p class="descripcion__parrafo">${pelicula.overview}</p>
        </div>
        <i class="bi bi-x-circle-fill"></i>
        <span class="puntuacion ${color}">${puntuacion}</span>
    </div>
    `;
}
function agregarDecimal(numero) {
    if (numero % 1 !== 0) {
        return numero;
    } else {
        return numero.toFixed(1);
    }
}
export default peliculaInfo;