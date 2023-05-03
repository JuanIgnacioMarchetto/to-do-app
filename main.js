const LIST = [];// constante LIST  (array vacío)
const lista = document.querySelector('#lista');// busca el id lista y lo mete en la variable
const input = document.querySelector('#input');// busca el id input y lo mete en la variable
const botonEnter = document.querySelector('#boton-enter');// busca el id boton-enter y lo mete en la variable
const check = 'fa-check-circle'// 
// "check" = "fa-check-circle" (circulo de confirmacion)
let id = 0;


function agregarTarea(tarea) {//funcion para crear el html necesario para ver la tarjeta de tarea creada
  const elemento =
    `
    <li id="elemento">
      <i class="far fa-circle co" data="realizado" id="0"></i>
      <p class="text ">${tarea}</p>
      <i class="fas fa-trash de" data="eliminado" id="0"></i>
    </li>
  `
  lista.insertAdjacentHTML("afterend", elemento)
  LIST.push(tarea); // agrega  tarea nueva al array 
  console.log(LIST); // se ve el array en la consola
}

botonEnter.addEventListener('click', () => {//escucha el clicl del mouse y envia la nueva tarea a la funcion
  const tarea = input.value;
  if (tarea) {
    agregarTarea(tarea);
    input.value = '';
  }
});

document.addEventListener('keyup', function (event) {//escucha cuando se oprime enter y envia la nueva tarea a la funcion
  if (event.key == 'Enter') {
    const tarea = input.value
    if (tarea) {
      agregarTarea(tarea);
      input.value = '';
    }
  }
})
