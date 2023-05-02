
const LIST = [];
let id = 0;

const lista = document.querySelector('#lista');
const input = document.querySelector('#input');
const botonEnter = document.querySelector('#boton-enter');

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



botonEnter.addEventListener('click', () => {
  const tarea = input.value;
  if (tarea) {
    agregarTarea(tarea)
    input.value = '';
  }
});
 