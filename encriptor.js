// llave de cifrado
let cifrado = ["ai","enter","imes","ober","ufat"];
let deCifrado = ["a","e","i","o","u"];

document.querySelector("#btn-copy").addEventListener("click", copy);

// Función para traer el contenido de la página y 
// publicar el resultado
function resultado(cifrado,deCifrado){
        let cifrarFrase = document.querySelector('.inCifrar').value
        if(document.querySelector('#texto').value==''){
            asignarTextoElemento('p2', 'Ningun mensaje fue encontrado');
        }else{
            asignarTextoElemento('p2', '');
        }
        document.querySelector('.inCopy').value=decifrar(cifrado,deCifrado,cifrarFrase);
}

// Función para cifrar y decifrar la frase
function decifrar(pke, pki, frase){
    let fraseResultado = [];
    let contador = 0;
    let arrCifrarFrase = Object.assign([], frase);
        while (contador < frase.length) {
            if (arrCifrarFrase[contador] == "a"){
                fraseResultado.push(pke[0]);
                contador = contador + String(pki[0]).length;
            }
            else if (arrCifrarFrase[contador] == "e"){
                fraseResultado.push(pke[1]);
                contador = contador + String(pki[1]).length;
            }
            else if (arrCifrarFrase[contador] == "i"){
                fraseResultado.push(pke[2]);
                contador = contador + String(pki[2]).length;
            }
            else if (arrCifrarFrase[contador] == "o"){
                fraseResultado.push(pke[3]);
                contador = contador + String(pki[3]).length;
            }
            else if (arrCifrarFrase[contador] == "u"){
                fraseResultado.push(pke[4]);
                contador = contador + String(pki[4]).length;
            }
            else {
                fraseResultado.push(String(frase[contador]));
                contador = contador + 1;
            }
        }
        return(fraseResultado.join(''));
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
    if(document.getElementById('decifrar').disabled == true){
       document.getElementById('decifrar').removeAttribute('disabled');
       document.getElementById('cifrar').setAttribute('disabled','true');
    }else{
       document.getElementById('cifrar').removeAttribute('disabled');
       document.getElementById('decifrar').setAttribute('disabled','true'); 
    }
}

    









