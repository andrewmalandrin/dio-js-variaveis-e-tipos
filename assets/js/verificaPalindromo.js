function verificaPalindromo(){
    let stringInicial = receberString();
    let stringInvertida;
    let elementoResposta = document.getElementById("resposta-palindromo")

    if(stringInicial.length != 0){
        if(stringInicial.includes(" ")){
            stringInicial = removerEspacos(stringInicial)
        }
        stringInvertida = inverterString(stringInicial)
        resultado = testarString(stringInicial, stringInvertida)
        if(resultado){
            elementoResposta.innerHTML = "É um Palindromo"
        }else{
            elementoResposta.innerHTML = "Não é um Palindromo"
        }
    }else{
        alert("Insira uma string no campo!")
    }

}

function receberString(){
    let stringInicial = document.getElementById("teste-palindromo-input").value.toLowerCase();
    return stringInicial
}

function inverterString(string){
    let stringInvertida = string.split("").reverse().join("")
    console.log("String invertida: ", stringInvertida.split(), "String inicial: ", string)
    return stringInvertida
}

function testarString(stringInicial, stringInvertida){
    if(stringInicial == stringInvertida){
        console.log(stringInicial, stringInvertida)
        return true;
    }else{
        return false;
    }
}

function removerEspacos(string){
    return string.split(" ").join("")
}