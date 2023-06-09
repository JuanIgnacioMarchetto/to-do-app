const LIST = [];//boolean:realizado=false;tarea=nombre de la tarea]; // constante LIST (array vacío)//
const lista = document.querySelector('#lista'); // busca el id lista y lo mete en la variable
const input = document.querySelector('#input'); // busca el id input y lo mete en la variable
const botonEnter = document.querySelector('#boton-enter'); // busca el id boton-enter y lo mete en la variable
let id = 0;

function agregarTarea(tarea) {
  const elemento =
    `<div class="flex items-center" style="; padding-right: 40px; flex: 1; margin-right: 38px;padding-right: 8px; font-size: 16px;border: none; ;">
      <li class="tarea flex justify-between items-center" id="${id}" style="list-style: none;background:#e6d9d9 ; display: flex; justify-content: flex-end;   justify-content: space-between; margin: 5%;">
        <p class="text"style="padding-right: 48px; padding-left: 48px">${tarea}</p>
        <div style="display: flex;margin-top: 20px; " >
          <button class="confirmacion" style="margin-right:20px ; margin-bottom: 8px;">Confirmar</button>
          <i class="fas fa-trash de" data-eliminado="false" style="margin-right:10px;"></i>
        </div>
      </li>
    </div>
    `;// agrega tarea nueva al array con id y estado realizado en false
  lista.insertAdjacentHTML("afterend", elemento);
  LIST.push({ tarea: tarea, realizado: false, id: id }); 
  console.log(LIST); // se ve el array en la consola  
  id++;
}

botonEnter.addEventListener('click', () => {//escucha el click del mouse y muestra la tarea
  const tarea = input.value;
  if (tarea) {
    agregarTarea(tarea);
    input.value = '';
  }
});

document.addEventListener('keyup', function (event) {//escucha el boton enter y muestra la tarea
  if (event.key == 'Enter') {
    const tarea = input.value;
    if (tarea) {
      agregarTarea(tarea);
      input.value = '';
    }
  }
});
// escucha el botón de confirmación y cambia el valor booleano en el array
document.addEventListener('click', function (event) {
  if (event.target && event.target.classList.contains('confirmacion')) {
    const index = LIST.findIndex(item => item.id === parseInt(event.target.parentElement.parentElement.getAttribute('id')));
    LIST[index].realizado = true; // cambia el valor booleano en el array a true
    console.log(LIST);
  }
  // escucha el botón y elimina el array y el elemento html
  if (event.target && event.target.classList.contains('de')) {
    const index = LIST.findIndex(item => item.id === parseInt(event.target.parentElement.parentElement.getAttribute('id')));
    LIST.splice(index, 1); // elimina la tarea del array
    event.target.parentElement.parentElement.remove(); // elimina el elemento HTML correspondiente
    console.log(LIST);
  }
})

  