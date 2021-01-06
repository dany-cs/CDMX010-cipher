//funcion que codifica el mensaje//
export function encode (offset, mensaje){
  let textofinal= "";

  for (let i=0; i < mensaje.length; i++) {
    let charCode = mensaje.charCodeAt(i);
    let charCodeOffset = ((charCode - 65 + offset) % 26 + 65);
    textofinal += String.fromCharCode(charCodeOffset);
  }

  return textofinal;
}

//funcion paara decodificar el mensaje//
export function decode (offset,mensaje){
  let textofinal= "";

  for (let i=0; i < mensaje.length; i++) {
    let charCode = mensaje.charCodeAt(i);
    let charCodeOffset = ((charCode + 65 - offset) % 26 + 65);
    textofinal += String.fromCharCode(charCodeOffset);
  }

  return textofinal;
  
}

