const LIST = [];// constante LIST  (array vacío)
const lista = document.querySelector('#lista');// busca el id lista y lo mete en la variable
const input = document.querySelector('#input');// busca el id input y lo mete en la variable
const botonEnter = document.querySelector('#boton-enter');// busca el id boton-enter y lo mete en la variable
const check = 'fa-check-circle'// 
// "check" = "fa-check-circle" (circulo de confirmacion)
let id = 0;


function agregarTarea(tarea) {//funcion para crear el html necesario para ver la tarjeta de tarea creada
  const elemento =
  `<div class="flex items-center" style="width: 50%; padding-right: 40px;background: #888">
  <li id="elemento" class="tarea flex justify-between items-center fixed bottom-0 right-0" style="list-style: none; display: flex; justify-content: flex-end;   justify-content: space-between; margin: 5%;">
    <p class="text">${tarea}</p>
    <div style="display: flex;">
      <i class="far fa-circle co" data="realizado" style="magin:5%;"></i>
      <i class="fas fa-trash de" data="eliminado" style="magin:5% ; "></i>
    </div>
  </li>
</div>
  `
  lista.insertAdjacentHTML("afterend", elemento)
  LIST.push(tarea); // agrega  tarea nueva al array 
  console.log(LIST); // se ve el array en la consola
  /*agregar el boolean del circulo de confirmacion en false y que cambie a true cuando se oprime el boton
  y que sea visible desde la consola*/
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

/* //agregar funcion a boton eliminar y a boton confirmar
const botonesEliminar = document.querySelectorAll('.de');
botonesEliminar.forEach((boton) => {
  boton.addEventListener('click', eliminarTarea);
});

console.log(LIST);

function eliminarTarea(event) {
  const elemento = event.target.parentElement.parentElement; // obtener el elemento 'li'
  const tarea = elemento.querySelector('.text').textContent;
  const index = LIST.indexOf(tarea);
  LIST.splice(index, 1);
  elemento.remove(); 
  console.log(LIST);} */


  