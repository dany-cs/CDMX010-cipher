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
