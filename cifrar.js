// llave de cifrado
let cifrado = ["ai","enter","imes","ober","ufat"]
let cifrarFrase = prompt('Ingrese la frase para cifrar: ');
let fraseResultado = [];
// convertir el string en un arreglo
let arrCifrarFrase = Object.assign([], cifrarFrase);
// realizar el cifrado almacenandolo en 
// arreglo destino fraseResultado
for (contador = 0, n = cifrarFrase.length; contador < n; ++contador) {
    if (arrCifrarFrase[contador] == "a"){
        fraseResultado.push(cifrado[0]);
    }
    else if (arrCifrarFrase[contador] == "e"){
        fraseResultado.push(cifrado[1]);
    }
    else if (arrCifrarFrase[contador] == "i"){
        fraseResultado.push(cifrado[2]);
    }
    else if (arrCifrarFrase[contador] == "o"){
        fraseResultado.push(cifrado[3]);
    }
    else if (arrCifrarFrase[contador] == "u"){
        fraseResultado.push(cifrado[4]);
    }
    else {
        fraseResultado.push(String(cifrarFrase[contador]));
    }
}
// convertir el arreglo fraseResultdo, en el string cifrado
alert(`La frase cifrada es: ${fraseResultado.join('')}`);


