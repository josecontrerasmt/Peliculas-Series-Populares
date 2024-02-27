import cargarGeneros from "./cargarGeneros.js";
import cargarPeliculas from "./cargarPeliculas.js";
import fetchPeliculas from "./fetchPeliculas.js";

const peliculas = document.querySelector('.contenedor__pelicula');
const series = document.querySelector('.contenedor__serie');
const borrar = document.getElementById('btn-borrar');

const botonesContainer = document.querySelector('.aside__botones');
const aside = document.querySelector('.aside');
const botonMostrar = document.querySelector('.bi-list');


peliculas.addEventListener('click',async(e)=>{
    e.preventDefault();
    document.querySelector('.peliculas').innerHTML=`
    <img class="cargando-pagina" src="imgs/palomitas.png" alt="cargando">
    `;
    peliculas.classList.add('contenedor__categorias--active');
    series.classList.remove('contenedor__categorias--active');
    document.querySelector('.contenedor__categorias').dataset.categoria='movie';



    window.scrollTo(0,0);
    document.querySelector('.contenedor__input').value='';

    document.querySelector('.peliculas').dataset.nombre='total';

    borrar.classList.remove('contenedor__borrar--active');

    botonMostrar.classList.remove('bi-list--active');
    aside.classList.remove('aside--active');

    document.querySelector('.contenedor__filtro').textContent='';

    document.querySelector('.peliculas').dataset.pagina=1;
    
    botonesContainer.querySelector('.aside__btn--active')?.classList.remove('aside__btn--active');

    const datos =await fetchPeliculas();
    cargarGeneros();
    cargarPeliculas(datos);
});
series.addEventListener('click',async(e)=>{
    e.preventDefault();
    document.querySelector('.peliculas').innerHTML=`
    <img class="cargando-pagina" src="imgs/palomitas.png" alt="cargando">
    `;
    peliculas.classList.remove('contenedor__categorias--active');
    series.classList.add('contenedor__categorias--active');
    document.querySelector('.contenedor__categorias').dataset.categoria='tv';

    window.scrollTo(0,0);
    document.querySelector('.contenedor__input').value='';

    document.querySelector('.peliculas').dataset.nombre='total';

    borrar.classList.remove('contenedor__borrar--active');

    botonMostrar.classList.remove('bi-list--active');
    aside.classList.remove('aside--active');

    document.querySelector('.contenedor__filtro').textContent='';
    
    document.querySelector('.peliculas').dataset.pagina=1;
    
    botonesContainer.querySelector('.aside__btn--active')?.classList.remove('aside__btn--active');

    const datos =await fetchPeliculas();
    cargarGeneros();
    cargarPeliculas(datos);
});