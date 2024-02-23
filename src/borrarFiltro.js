import cargarPeliculas from "./cargarPeliculas.js";
import fetchBusqueda from "./fetchBusqueda.js";

const borrar = document.getElementById('btn-borrar');

const botonesContainer = document.querySelector('.aside__botones');
const aside = document.querySelector('.aside');
const botonMostrar = document.querySelector('.bi-list');

borrar.addEventListener('click', async(e)=>{
    e.preventDefault();
    window.scrollTo(0,0);
    document.querySelector('.contenedor__input').value='';

    document.querySelector('.peliculas').dataset.nombre='total';

    borrar.classList.remove('contenedor__borrar--active');

    botonMostrar.classList.remove('bi-list--active');
    aside.classList.remove('aside--active');

    document.querySelector('.contenedor__filtro').textContent='';

    document.querySelector('.peliculas').innerHTML=`
    <img class="cargando-pagina" src="imgs/palomitas.png" alt="cargando">
    `;
    document.querySelector('.peliculas').dataset.pagina=1;
    
    botonesContainer.querySelector('.aside__btn--active')?.classList.remove('aside__btn--active');
    
    const datos = await fetchBusqueda();
    document.querySelector('.peliculas').dataset.total='';
    cargarPeliculas(datos);
});