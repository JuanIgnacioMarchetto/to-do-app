const lista= document.querySelector('#lista');

const input= document.querySelector('#input');

const botonEnter= document.querySelector('#boton-enter');


funtion agregarTarea(tarea){
  const elemento = 
  `
                        <li id="elemento">
                        <i class="far ${REALIZADO}" data="realizado" id="${id}"></i>
                        <p class="text ${LINE}">${tarea}</p>
                        <i class="fas fa-trash de" data="eliminado" id="${id}"></i> 
                        </li>
  `
  lista.insertAdjacentHTML("beforeend",elemento)
}