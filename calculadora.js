const LIST = []; // constante LIST (array vacío)
const lista = document.querySelector('#lista'); // busca el id lista y lo mete en la variable
const input = document.querySelector('#input'); // busca el id input y lo mete en la variable
const botonEnter = document.querySelector('#boton-enter'); // busca el id boton-enter y lo mete en la variable
let id = 0;

function agregarTarea(tarea) {
  const elemento =
    `<div class="flex items-center" style="; padding-right: 40px; flex: 1; margin-right: 16px;padding-right: 8px; font-size: 16px;border: none; ;">
      <li class="tarea flex justify-between items-center" style="list-style: none; display: flex; justify-content: flex-end;   justify-content: space-between; margin: 5%;">
        <p class="text">${tarea}</p>
        <div style="display: flex;margin-top: 20px; " ><button class="comfirmacion co" data-realizado="false" style="margin-right:10;">Confirmar</button>
          <i class="fas fa-trash de" data-eliminado="false";style="margin-right:10;" ></i>
          
        </div>
      </li>
    </div>
    `;
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
if (event.target && event.target.classList.contains('co')) {
  const index = LIST.findIndex(item => item.id === parseInt(event.target.parentElement.parentElement.getAttribute('id')));
  LIST[index].realizado = true; // cambi BOOLEANO A  TRUE
  event.target.setAttribute('data-realizado', 'true'); // Se actualiza "data-realizado"
  console.log(LIST);
}

// escucha el boton de eliminación y elimina el array y el elemento html
document.addEventListener('click', function (event) {
  if (event.target && event.target.classList.contains('de')) {
    const index = LIST.findIndex(item => item.id === parseInt(event.target.parentElement.parentElement.getAttribute('id')));
    LIST.splice(index, 1); // elimina la tarea del array
    event.target.parentElement.parentElement.remove(); // elimina el elemento HTML correspondiente
    console.log(LIST);
  }
})
  