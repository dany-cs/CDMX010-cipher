/*
import cipher from './cipher.js';
//Aqui se manipula el DOM
console.log(cipher);
*/

//La siguiente linea accede al DOM
let nodo=document.querySelector(".cesitar") //Esta no es la unica forma de acceder al dom
//La siguiente linea es una variable con el texto a insertar en la linea 12
let nombre="Holaaaaa Chavas me llamo DANNY"
//La siguiente linea inserta HTML al DOM
nodo.innerHTML=`<h1>${nombre}</h1>`
