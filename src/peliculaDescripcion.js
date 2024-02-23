import fetchId from "./fetchId.js";
import peliculaInfo from "./peliculaInfo.js";

const peliculas = document.querySelector('.peliculas');
const descripcion = document.querySelector('.descripcion');
const contenedor = document.querySelector('.descripcion__contenedor');

peliculas.addEventListener('click',async(e)=>{
    e.preventDefault();
    const pelicula = e.target.closest('.pelicula');
    if(pelicula){
        descripcion.classList.add('ocultar');
        document.querySelector('.descripcion__contenedor').innerHTML=`<img class="descripcion__fondo" src="./imgs/pop.gif">`;
        const peliculaDesc = await fetchId(pelicula.id);
        peliculaInfo(peliculaDesc);
        document.body.style.overflow = 'hidden';
    }
});


contenedor.addEventListener('click',(e)=>{
    const cancelar = e.target.closest('.bi-x-circle-fill');
    if(cancelar){
        document.body.style.overflow = '';
        descripcion.classList.remove('ocultar');
    }
});