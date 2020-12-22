<<<<<<< HEAD
/**
 * @param {numero} offset 
 * @param {string} mensaje
 * esta funcion recibe un numero que servira para el cifrado y la palanta a cofrar
 * regresa una palabra cifrada  
 */
function encode(offset, mensaje) {
  const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "w", "X", "Y", "Z"];
  /**
   * arreglos cuentan con la venaja de que te van a regresar el valor 
   */
  let nuevoAlfabeto = [];//arreglo vacio
  //console.log(alfabet
  //console.log(offset)
  //console.log(mensaje)
  let i;
  let nuevomensaje;
  for (i = offset; i < alfabeto.length; i = i + 1) {
    nuevoAlfabeto.push(alfabeto[i])
  }
  for (i = 0; i < offset; i = i + 1) {
    nuevoAlfabeto.push(alfabeto[i])
  }
  /**for (inicio,condicion,incremento) inicia en cero* mientras i sea menor que la longitud del mensaje  sumara a i (incrementara mientras entre en la longitud del mensaje)*/
  for (i = 0; i < mensaje.length; i = i + 1) {
    console.log(mensaje[i])
    nuevoAlfabeto.push(alfabeto[i])
  }
  console.log(mensaje);
 // console.log(nuevomensaje)
}

function principal() {
  console.log("")
  encode(5), ("HOLA");
}


principal();

//funcion Decipher
/*
//tratando de invertir la function cipher
function decipher(text) {
  //para guardar las letras de la letra a descifrar
  var textDecipher = "";
  //
  for (var i = 0; i < text.length; i++) {
    var textChar = (String.fromCharCode(text(i)) + 33) % 26;
    textDecipher = textDecipher + textChar;
    var newText = newText.charCodeAt(textDecipher);
  }
  return newText;
  c
}
  //export default cipher;
  //formula (x-65+n)%26+65

  //return resultado//

 // const cipher = {
    // ...


  //export default cipher*/
=======
function encode(offset,mensaje){
const alfabeto= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","w","X","Y","Z"];
let nuevoAlfabeto = [];
//console.log(alfabet
//console.log(offset)
//console.log(mensaje)
let i;
let nuevomensaje;

for(i=offset; i<alfabeto.length; i=i+1){//for=contador i=variable for contiene 3 elementos 1:un inicio(contador), 2:condicion de ejecucion, 3:incremento//
 //console.log=poder visualizar todo en la consola(lo que existe detras de todo lo que queremos que realice el programa)//
  nuevoAlfabeto.push(alfabeto[i])
}
for(i=0; i<offset; i=i+1){
  nuevoAlfabeto.push(alfabeto[i])
}
for(i=0; i<mensaje.length; i=i+1){
  console.log(mensaje[i])
  nuevoAlfabeto.push(alfabeto[i])
}
//console.log(nuevoAlfabeto)

}



function principal() {
  console.log("")
  encode(3,"HOLA");
}


principal();
//function decode(offset, mensaje) {

  //formula (x-65+n)%26+65

  //return resultado;
>>>>>>> eafc74c0a86539d4aa6bd5b4fe7a42ce10c3e295
