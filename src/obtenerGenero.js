
const obtenerGenero=(id, generos)=>{
    let nombre;
    generos.forEach(genero => {
        if(genero.id === id){
            nombre= genero.name;
        }
    });
    return nombre;
}
export default obtenerGenero;