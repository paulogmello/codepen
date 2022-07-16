let show = function(){
// VARIÁVEIS
let PerAno = document.querySelector("#periodo").value;
let MatPer = document.querySelector("#materias").value;
let MatTotal = document.querySelector("#mattotal").value;
// CÁLCULOS
let TotalMatperAno = MatPer * PerAno;
let TotalAnos = Math.round(MatTotal / TotalMatperAno);

document.querySelector('#result').innerHTML = 
"Você fará " + TotalMatperAno + " matérias por ano, e com " + MatTotal + 
" matérias, você completará a faculdade em " + TotalAnos + " anos. Boa sorte! 😆"

}