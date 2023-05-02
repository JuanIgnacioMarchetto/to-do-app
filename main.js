
const LIST = [];
let id = 0;

const lista = document.querySelector('#lista');
const input = document.querySelector('#input');
const botonEnter = document.querySelector('#boton-enter');
const check='fa-check-circle'
//funcion para generar la li correspondiente a cada tarea nueva//aplicar hover hiden a los botones
function agregarTarea(tarea){
  const elemento =
  `
    <li id="elemento">
      <i class="far fa-circle co" data="realizado" id="0"></i>
      <p class="text ">${tarea}</p>
      <i class="fas fa-trash de" data="eliminado" id="0"></i>
    </li>
  `
  lista.insertAdjacentHTML("afterend",elemento)
}

//boton para escuchar evento click que chequea si terea existe y si existe envia el imput con valor facio modificado con el nuevo valor ingresado//
botonEnter.addEventListener('click', () => {
  const tarea = input.value;
  if (tarea) {
    agregarTarea(tarea)
    input.value = '';
  }
});

//evento para escuchar el boton enter//
document.addEventListener('keyup', function(event){
  if(event.key=='Enter'){
    const tarea= input.value
    if (tarea) {
      agregarTarea(tarea)
      input.value = '';
    }
  }
})


///agregar funciones de los botones de eliminar y confirmar

//boton confimar

