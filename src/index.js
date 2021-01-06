import { encode, decode } from './cipher.js'

//funcion para cerrar la primera ventana he ir ala siguiente//
 function inicialb() {
    document.getElementById("ctexto").style.display = "block";
    document.getElementById("inicial").style.display = "none";
}
window.inicialb=inicialb;

//llamamos la funcion de encode para codificar el mensaje escrito//
function textoa() {
    document.getElementById("msfin").style.display = "block";//abre nueva ventana//
    document.getElementById("ctexto").style.display = "none";//cierra ventana actual//

    let mensaje = document.getElementById("texto").value.toUpperCase();
    let offset = document.getElementById("offset").value;
    const offsetParseado = parseInt(offset)
    const resultado = encode(offsetParseado, mensaje)
    console.log('MI RESULTADO', resultado)
    document.getElementById('texresult').innerText = resultado
}

function textob() {
    document.getElementById("msfin").style.display = "block";
    document.getElementById("ctexto").style.display = "none";

    let mensaje = document.getElementById("texto").value.toUpperCase();
    let offset = document.getElementById("offset").value;
    const offsetParseado = parseInt(offset);
    const resultadodecode = decode(offsetParseado, mensaje)
    console.log("mi resultadodos", resultadodecode)
    document.getElementById('texdecode').innerText = resultadodecode
}
//se esta realizando el retorno a la ventana principal//
 function principal() {
    document.getElementById("msfin").style.display = "none";
    document.getElementById("inicial").style.display = "block";
}
window.principal=principal//

//funcion para hacer mayusculas el texto ingresado//
const mayusculastex = document.getElementById('texto');
mayusculastex.addEventListener('keydown', function (evt){
  mayusculastex.value = evt.target.value.toUpperCase();
})

    //funcion para hacer en mayusculas al devolver texto//
const mayusculas = document.getElementById('texresult');
mayusculas.addEventListener('keydown', function (evt){
  mayusculas.value = evt.target.value.toUpperCase();
})
// evento que realiza click en los  botones para hacer realizar la funcion 
document.getElementById('medioa').addEventListener('click', textoa)
document.getElementById("mediob").addEventListener('click', textob)
