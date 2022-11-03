const formulario = document.getElementById('formulario')
const validar = document.getElementById('validar')

const mostrar = document.getElementById('mostrar')

const validarDatos =(e)=>{
    e.preventDefault() 

    if(formulario.fecha.value === '2022-07-15') return

    formulario.classList.add('off')
    mostrar.classList.add('on')
}


validar.addEventListener('click', validarDatos)




const acciones = document.getElementById('acciones')

const realizaracciones =(e)=> {
    const elemento = e.target
    const clase = e.target.classList.value  

    if(clase !== 'contenedor-letra-1' && clase !== 'contenedor-letra-1 on') return 

    elemento.classList.toggle('on')
} 

acciones.addEventListener('click', realizaracciones)