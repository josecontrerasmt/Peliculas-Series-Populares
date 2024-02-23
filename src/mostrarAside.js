const aside = document.querySelector('.aside');
const botonMostrar = document.querySelector('.bi-list');

botonMostrar.addEventListener('click',(e)=>{
    e.preventDefault();
    botonMostrar.classList.toggle('bi-list--active');
    aside.classList.toggle('aside--active');
});