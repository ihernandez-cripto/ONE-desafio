// llave de cifrado
let cifrado = ["ai","enter","imes","ober","ufat"];
let deCifrado = ["a","e","i","o","u"];

document.querySelector("#btn-copy").addEventListener("click", copy);


// Función para validar el contenido ingresado por el usuario 
function validarEntradaTexto(){
        const valor = document.querySelector('.inCifrar').value.trim();
        if(valor === "") {
            asignarTextoElemento('p2', 'Ningún mensaje fue encontrado');
            return;
        }else{
            asignarTextoElemento('p2', '');
        }
}

// Función para cifrar y decifrar la frase
function resultado(pk, pke, pki) {
    let frase = document.querySelector('.inCifrar').value;
    let fraseResultado = [];
    let contador = 0;
    let arrCifrarFrase = Object.assign([], frase);
    let indice = 0;
    validarEntradaTexto();
    validarEstadoBotones();
    while (contador < frase.length) {
        indice = pk.indexOf(arrCifrarFrase[contador]);
        if (pk.includes(arrCifrarFrase[contador])) {
            fraseResultado.push(pke[indice]);
            contador = contador + String(pki[indice]).length;
          } else {
            fraseResultado.push(String(frase[contador]));
            contador += 1;
          }
    }
    document.querySelector('.inCopy').value = fraseResultado.join('');
}

// Función para enviar contenido a los elementos HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// Función para copiar frase cifrada ctrl + v
function copy() {
    let copyText = document.querySelector(".inCopy");
    copyText.select();
    document.execCommand("copy");
}

// Función para activar y desactivar los botones Cifrar, Descifrar y Copiar
function validarEstadoBotones() {
    const elementoCifrar = document.getElementById('cifrar');
    const elementoDecifrar = document.getElementById('decifrar');
    const elementoCopiar = document.getElementById('btn-copy');
    const valor = document.querySelector('.inCifrar').value.trim();
    if (valor && elementoCopiar.disabled) {
        elementoCopiar.disabled=false;
        elementoCifrar.disabled=true;  
        elementoDecifrar.disabled=false; 
    }else if (valor && elementoDecifrar.disabled == false){
        elementoCifrar.disabled=false;
        elementoDecifrar.disabled=true;
        elementoCopiar.disabled=true;
    }   
}


    









