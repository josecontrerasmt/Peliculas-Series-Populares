import cargarPeliculas from "./cargarPeliculas.js";
import fetchBusquedaNombre from "./fecthBusquedaNombre.js";
import fetchBusqueda from "./fetchBusqueda.js";

const siguiente = document.getElementById('siguiente');
const anterior = document.getElementById('anterior');

siguiente.addEventListener('click',async(e)=>{
    e.preventDefault();
    const paginaActualNombre = document.querySelector('.peliculas').dataset.nombre;
    const paginaActual = parseInt(document.querySelector('.peliculas').dataset.pagina);
    const paginaSiguiente = paginaActual+1;

    document.querySelector('.peliculas').innerHTML=`
    <img class="cargando-pagina" src="imgs/palomitas.png" alt="cargando">
    `;

    if(paginaActualNombre==='total'){
        try {       
            window.scrollTo(0,0);
            const datos = await fetchBusqueda(paginaSiguiente);
            document.querySelector('.peliculas').dataset.pagina=paginaSiguiente;
            cargarPeliculas(datos);
        } catch (error) {
            console.log(error);
        }
    }else{
        try {       
            window.scrollTo(0,0);
            const datos = await fetchBusquedaNombre(paginaActualNombre,paginaSiguiente);
            if(datos!=false){
                document.querySelector('.peliculas').dataset.pagina=paginaSiguiente;
                cargarPeliculas(datos);
            }else{
                document.querySelector('.peliculas').innerHTML=`
                <h1>No hay mas resultados</h1>
                `;
            }
        } catch (error) {
            console.log(error);
        }
    }
});
anterior.addEventListener('click',async(e)=>{
    e.preventDefault();
    const paginaActualNombre = document.querySelector('.peliculas').dataset.nombre;
    const paginaActual = parseInt(document.querySelector('.peliculas').dataset.pagina);
    const paginaAnterior= paginaActual-1;

    
    if(paginaActual>1){
        document.querySelector('.peliculas').innerHTML=`
        <img class="cargando-pagina" src="imgs/palomitas.png" alt="cargando">
        `;
        if(paginaActualNombre==='total'){
            try {       
                window.scrollTo(0,0);
                const datos = await fetchBusqueda(paginaAnterior);
                document.querySelector('.peliculas').dataset.pagina=paginaAnterior;
                cargarPeliculas(datos);
            } catch (error) {
                console.log(error);
            }
        }else{
            try {       
                window.scrollTo(0,0);
                const datos = await fetchBusquedaNombre(paginaActualNombre,paginaAnterior);
                document.querySelector('.peliculas').dataset.pagina=paginaAnterior;
                cargarPeliculas(datos);
            } catch (error) {
                console.log(error);
            }
        }
    }
    
});