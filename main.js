const lista= document.querySelector('#lista');

const input= document.querySelector('#input');

const botonEnter= document.querySelector('#boton-enter');


function agregarTarea(tarea){
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

botonEnter.addEventListener('click', ()=> {
  const tarea = input.value
  if(tarea){
      agregarTarea(tarea,id,false,false)
      LIST.push({
          nombre : tarea,
          id : id,
          realizado : false,
          eliminado : false
      })
      localStorage.setItem('TODO',JSON.stringify(LIST))
      id++
      input.value = ''
  }

})