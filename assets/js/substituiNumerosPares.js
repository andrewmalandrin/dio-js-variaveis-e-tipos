var lista = []

function substituiNumerosPares(){
    let novaLista = lista.map(item => {
        if  (item % 2 == 0 ){
            return 0
        }else{
            return item
        }
    })
    
    lista = novaLista

    if(lista.length != 0){
        exibirNovaLista(novaLista)
    }else{
        exibirNovaLista(-1)
    }
    
}

function adicionarNumero(){
    let numero = receberNumero()
    lista.push(numero)
    limparInput()
    exibirLista()


}

function receberNumero(){
    let numero = document.getElementById("substitui-pares-input").value
    return numero
}

function exibirLista(){
    document.getElementById("array").innerHTML = lista
}

function limparInput(){
    document.getElementById("substitui-pares-input").value = ""
}

function exibirNovaLista(novaLista){
    document.getElementById("resposta-substitui-pares").innerHTML = novaLista
}