const LIST = [];
let id = 0;

const lista = document.querySelector('#lista');
const input = document.querySelector('#input');
const botonEnter = document.querySelector('#boton-enter');
const check='fa-check-circle'

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
  LIST.push(tarea); // Agrega la tarea al array LIST
  console.log(LIST); // Muestra el array LIST en la consola
}

botonEnter.addEventListener('click', () => {
  const tarea = input.value;
  if (tarea) {
    agregarTarea(tarea);
    input.value = '';
  }
});

document.addEventListener('keyup', function(event){
  if(event.key=='Enter'){
    const tarea= input.value
    if (tarea) {
      agregarTarea(tarea);
      input.value = '';
    }
  }
})
