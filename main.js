const LIST = [];
let id = 0;

const lista = document.querySelector('#lista');
const input = document.querySelector('#input');
const botonEnter = document.querySelector('#boton-enter');

function agregarTarea(nombre, id, realizado, eliminado) {
  const REALIZADO = realizado ? 'fa-check-circle' : 'fa-circle-thin';
  const LINE = realizado ? 'lineThrough' : '';
  const elemento = `
    <li id="${id}">
      <i class="far ${REALIZADO}" data="realizado" id="${id}"></i>
      <p class="text ${LINE}">${nombre}</p>
      <i class="fas fa-trash de" data="eliminado" id="${id}"></i>
    </li>
  `;
  lista.insertAdjacentHTML('beforeend', elemento);
}

botonEnter.addEventListener('click', () => {
  const tarea = input.value;
  if (tarea) {
    agregarTarea(tarea, id, false, false);
    LIST.push({
      nombre: tarea,
      id: id,
      realizado: false,
      eliminado: false,
    });
    localStorage.setItem('TODO', JSON.stringify(LIST));
    id++;
    input.value = '';
  }
});
