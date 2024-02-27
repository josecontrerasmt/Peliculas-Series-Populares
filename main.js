import cargarGeneros from "./src/cargarGeneros.js";
import cargarPeliculas from "./src/cargarPeliculas.js";
import fetchPeliculas from "./src/fetchPeliculas.js";
import './src/botonesEvent.js';
import './src/borrarFiltro.js'
import './src/paginacion.js';
import './src/peliculaDescripcion.js';
import './src/mostrarAside.js';
import './src/busquedaNombre.js';
import './src/cambiarCategoria.js'
const cargar=async()=>{
    const datos = await fetchPeliculas();
    cargarPeliculas(datos);
    cargarGeneros();
}
cargar();