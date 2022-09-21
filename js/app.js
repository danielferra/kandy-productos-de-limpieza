const hamburguesa = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const enlaces = document.querySelectorAll('.navegacion a');
const fecha = document.querySelector('.fecha');

document.addEventListener('DOMcontentLoaded',()=>{
    mostrarMenu();
    cerrarMenu();
    fechaActual();
});
function mostrarMenu() {
   hamburguesa.addEventListener('click',()=>{
    navegacion.classList.toggle('ocultar');
   });
}
function cerrarMenu(){
    enlaces.forEach(enlace =>{
       enlace.addEventListener('click',(e)=>{
         console.log(e.target.tagName);
       });
    });
}
function fechaActual(){
    let fechaHoy = new Date().getFullYear();
    console.log(fechaHoy);
}