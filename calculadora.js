const LIST = []; // constante LIST (array vacío)
const lista = document.querySelector('#lista'); // busca el id lista y lo mete en la variable
const input = document.querySelector('#input'); // busca el id input y lo mete en la variable
const botonEnter = document.querySelector('#boton-enter'); // busca el id boton-enter y lo mete en la variable

let id = 0;

function agregarTarea(tarea) {
  const elemento =
    `<div class="flex items-center" style="width: 50%; padding-right: 40px;background: #888">
      <li class="tarea flex justify-between items-center" style="list-style: none; display: flex; justify-content: flex-end;   justify-content: space-between; margin: 5%;">
        <p class="text">${tarea}</p>
        <div style="display: flex;">
          <i class="far fa-circle co" data-realizado="false" style="margin:5%;"></i>
          <i class="fas fa-trash de" data-eliminado="false" style="margin:5%;"></i>
        </div>
      </li>
    </div>`;
  
  lista.insertAdjacentHTML("afterend", elemento);
  LIST.push({ tarea: tarea, realizado: false, id: id }); // agrega tarea nueva al array con su id y estado realizado en false
  console.log(LIST); // se ve el array en la consola
  
  id++;
}

botonEnter.addEventListener('click', () => {
  const tarea = input.value;
  if (tarea) {
    agregarTarea(tarea);
    input.value = '';
  }
});

document.addEventListener('keyup', function (event) {
  if (event.key == 'Enter') {
    const tarea = input.value;
    if (tarea) {
      agregarTarea(tarea);
      input.value = '';
    }
  }
});

// Agrega un evento click al icono de confirmación
document.addEventListener('click', function (event) {
  if (event.target && event.target.classList.contains('co')) {
    const index = LIST.findIndex(item => item.id === parseInt(event.target.parentElement.parentElement.getAttribute('id')));
    LIST[index].realizado = true; // cambia el valor booleano de realizado a true
    event.target.classList.add('fa-check-circle');
    event.target.classList.remove('fa-circle');
    event.target.setAttribute('data-realizado', 'true');
    console.log(LIST[index].realizado); // imprime el valor booleano actualizado en consola
  }
});

// Agrega un evento click al icono de eliminación
document.addEventListener('click', function (event) {
  if (event.target && event.target.classList.contains('de')) {
    const index = LIST.findIndex(item => item.id === parseInt(event.target.parentElement.parentElement.getAttribute('id')));
    LIST.splice(index, 1); // elimina la tarea del array
    event.target.parentElement.parentElement.remove(); // elimina el elemento HTML correspondiente
    console.log(LIST);
  }
});
