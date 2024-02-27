import fetchGeneros from "./fetchGeneros.js";

const cargarGeneros=async()=>{
    document.querySelector('.aside__botones').innerHTML='';
    const datos= await fetchGeneros();
    datos.forEach(genero => {
        document.querySelector('.aside__botones').innerHTML+=`
        <button class="aside__btn" id=${genero.id}>${genero.name}</button>
        `
    });
} 

export default cargarGeneros;