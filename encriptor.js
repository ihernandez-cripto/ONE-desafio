// llave de cifrado
let cifrado = ["ai","enter","imes","ober","ufat"];
let deCifrado = ["a","e","i","o","u"];
//selecciona el boton cuando da click
let botonCifrar = document.querySelector("#btn-cifrar");
let botonDecifrar = document.querySelector("#btn-decifrar");
let botonCopiar = document.querySelector("#btn-copy");
let nombreBoton;

resultado(botonCifrar,cifrado,deCifrado);
resultado(botonDecifrar,deCifrado,cifrado);

function resultado(nombreBoton,cifrado,deCifrado){
    // Evento click
    nombreBoton.addEventListener("click", function(event){

        //desabilita lo que  viene  por  defecto en este caso la accion del  boton
        event.preventDefault(); 
    
        // trae el formulario
        let form = document.querySelector('.formulario');  
    
        // trae  el mensaje del formulario
        let cifrarFrase = form.texto.value;
     
        //  let inputnputEncriptado= document.querySelector('.input-2'); 
        document.querySelector('.input-2').value=decifrar(cifrado,deCifrado,cifrarFrase);
    })    
}

botonCopiar.addEventListener("click", copy);

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

function copy() {
    let copyText = document.querySelector(".input-2");
    copyText.select();
    document.execCommand("copy");
}

    









