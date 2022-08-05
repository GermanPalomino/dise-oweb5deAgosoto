'use strict';
const btn = document.getElementById('boton2');

btn.addEventListener('click',(event)=>{//2do parametro funcion tipo flecha anónima
    event.preventDefault();
    const form = document.getElementById('formulario');
    console.log(form[0]. value);
});