// 1 - pedra
// 2 - papel
// 3 - tesoura


let pedra = function(){
    let machine = Math.round(Math.random() * (3 - 1) + 1)
    if(machine == 1){
        document.getElementById('result').innerHTML = "Pedra X Pedra = EMPATOU"
    }
    else if(machine == 2){
        document.getElementById('result').innerHTML = "Pedra X Papel = DERROTA"
    }
    else{
        document.getElementById('result').innerHTML = "Pedra X Tesoura = VENCEU"
    }
}

let papel = function(){
    let machine = Math.round(Math.random() * (3 - 1) + 1)
    if(machine == 1){
        document.getElementById('result').innerHTML = "Papel X Pedra = VENCEU"
    }
    else if(machine == 2){
        document.getElementById('result').innerHTML = "Papel X Papel = EMPATOU"
    }
    else{
        document.getElementById('result').innerHTML = "Papel X Tesoura = DERROTA"
    }
}

let tesoura = function(){
    let machine = Math.round(Math.random() * (3 - 1) + 1)
    if(machine == 1){
        document.getElementById('result').innerHTML = "Tesoura X Pedra = DERROTA"
    }
    else if(machine == 2){
        document.getElementById('result').innerHTML = "Tesoura X Papel = VENCEU"
    }
    else{
        document.getElementById('result').innerHTML = "Tesoura X Tesoura = EMPATOU"
    }
}