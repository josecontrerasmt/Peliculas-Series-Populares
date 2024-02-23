import cargarPeliculas from "./cargarPeliculas.js";
import fetchBusqueda from "./fetchBusqueda.js";

const botonesContainer = document.querySelector('.aside__botones');

const aside = document.querySelector('.aside');
const botonMostrar = document.querySelector('.bi-list');
const basura = document.querySelector('.contenedor__borrar');

botonesContainer.addEventListener('click',async(e)=>{
    e.preventDefault();
    if(e.target.matches('button')){
        botonesContainer.querySelector('.aside__btn--active')?.classList.remove('aside__btn--active');
        e.target.classList.add('aside__btn--active');

        document.querySelector('.contenedor__input').value='';

        document.querySelector('.peliculas').dataset.nombre='total';

        window.scrollTo(0,0);
        basura.classList.add('contenedor__borrar--active');        

        botonMostrar.classList.remove('bi-list--active');
        aside.classList.remove('aside--active');

        document.querySelector('.contenedor__filtro').innerHTML=`
        ${document.querySelector('.aside__botones .aside__btn--active').textContent}
        `;

        document.querySelector('.peliculas').innerHTML=`
        <img class="cargando-pagina" src="imgs/palomitas.png" alt="cargando">
        `;

        document.querySelector('.peliculas').dataset.pagina=1;
        
        const datos = await fetchBusqueda();
        document.querySelector('.peliculas').dataset.total=datos.total_pages;
        cargarPeliculas(datos);
    }
});