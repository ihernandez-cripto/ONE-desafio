// llave de cifrado
let cifrado = ["ai","enter","imes","ober","ufat"]
let vocala = String(cifrado[0]).length;
let vocale = String(cifrado[1]).length;
let vocali = String(cifrado[2]).length;
let vocalo = String(cifrado[3]).length;
let vocalu = String(cifrado[4]).length;
let cifrarFrase = "roberkentert enters ufatn penterrrober lobercober";
let fraseResultado = [];
let contador = 0;
let arrCifrarFrase = Object.assign([], cifrarFrase);

while (contador < cifrarFrase.length) {
    if (arrCifrarFrase[contador] == "a"){
        fraseResultado.push("a");
        contador = contador + vocala;
    }
    else if (arrCifrarFrase[contador] == "e"){
        fraseResultado.push("e");
        contador = contador + vocale;
    }
    else if (arrCifrarFrase[contador] == "i"){
        fraseResultado.push("i");
        contador = contador + vocali;
    }
    else if (arrCifrarFrase[contador] == "o"){
        fraseResultado.push("o");
        contador = contador + vocalo;
    }
    else if (arrCifrarFrase[contador] == "u"){
        fraseResultado.push("u");
        contador = contador + vocalu;
    }
    else {
        fraseResultado.push(String(cifrarFrase[contador]));
        contador = contador + 1;
    }
}
console.log(fraseResultado.join(''));



