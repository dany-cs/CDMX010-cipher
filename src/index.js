/*
import cipher from './cipher.js';
//Aqui se manipula el DOM
console.log(cipher);
*/

//La siguiente linea accede al DOM
/**let nodo=document.querySelector(".cesitar"); //Esta no es la unica forma de acceder al dom
//La siguiente linea es una variable con el texto a insertar en la linea 12
let nombre="Holaaaaa Chavas me llamo DANNY";
//La siguiente linea inserta HTML al DOM
nodo.innerHTML=`<h1>${nombre}</h1>`;
alert("hola");*/
function inicialb() {
    document.getElementById("ctexto").style.display = "block";
    document.getElementById("inicial").style.display = "none";

}

function textoa() {
    document.getElementById("msfin").style.display="block";
    document.getElementById("ctexto").style.display="none";
    
}

function principal() {
    document.getElementById("inicial").style.display="block";
    document.getElementById("msfin").style,display="none";
    
}
//function clickfunction(){
   // let cajauno=document.getElementById("texcifrar");
    //let offset=document.getElementById(offset);//
    //console.log=(offset.value);
    //alert (cajauno.value);
    //let cajatres= cajauno.value


