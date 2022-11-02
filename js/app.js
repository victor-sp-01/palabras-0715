const formulario = document.getElementById('formulario')
const validar = document.getElementById('validar')

const mostrar = document.getElementById('mostrar')

const validarDatos =(e)=>{
    e.preventDefault() 

    if(formulario.fecha.value !== '2022-07-15') return

    formulario.classList.add('off')
    mostrar.classList.add('on')
}


validar.addEventListener('click', validarDatos)