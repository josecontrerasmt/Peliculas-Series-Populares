import cargarPeliculas from "./cargarPeliculas.js";
import fetchBusquedaNombre from "./fecthBusquedaNombre.js";
import fetchGeneros from "./fetchGeneros.js";
import obtenerGenero from "./obtenerGenero.js";

const buscarPeli = document.querySelector('.contenedor__buscar');
const aside = document.querySelector('.aside');
const botonMostrar = document.querySelector('.bi-list');
const basura = document.querySelector('.contenedor__borrar');
const botonesContainer = document.querySelector('.aside__botones');


buscarPeli.addEventListener('click', async(e)=>{
    e.preventDefault();
    const inputText = document.querySelector('.contenedor__input').value;

    if(inputText!=''){
        botonesContainer.querySelector('.aside__btn--active')?.classList.remove('aside__btn--active');

        document.querySelector('.peliculas').dataset.pagina=1;

        basura.classList.add('contenedor__borrar--active');   

        botonMostrar.classList.remove('bi-list--active');
        aside.classList.remove('aside--active');

        document.querySelector('.peliculas').innerHTML=`
        <img class="cargando-pagina" src="imgs/palomitas.png" alt="cargando">
        `;

        const datos = await fetchBusquedaNombre(inputText);
        if(datos.results.length!=0){
            const genero = await fetchGeneros();
            datos.results.forEach(dato => {
                if(!('genre_ids' in dato)){
                    dato.genre_ids='Sin Genero';
                }
                if(dato.genre_ids.length>0){
                    dato.genero_name = obtenerGenero(dato.genre_ids[0],genero);
                }
            });

            document.querySelector('.peliculas').dataset.nombre=inputText;
            document.querySelector('.contenedor__input').value='';
            document.querySelector('.contenedor__filtro').innerHTML=datos.results[0].title;
            cargarPeliculas(datos);
        }else{
            document.querySelector('.contenedor__filtro').innerHTML='';
            document.querySelector('.peliculas').innerHTML=`
            <h1>No hay resultados</h1>
            `;
        }
    }
});