// llave de cifrado
let cifrado = ["ai","enter","imes","ober","ufat"];
let deCifrado = ["a","e","i","o","u"];
let cifrarFrase = prompt('Ingrese la frase para cifrar: ');
let decifrarFrase = prompt('Ingrese la frase para decifrar: ');

//"fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!";

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
        return fraseResultado.join('');
}

alert(decifrar(cifrado,deCifrado,cifrarFrase));
alert(decifrar(deCifrado,cifrado,decifrarFrase));