var array=["-10 Millones", "-20 Millones", "-5 Millones", "-15 Millones", "- 25 Millones"];



function Atacar(){
var oculto = document.getElementById("atacar");
oculto.setAttribute("class", "noShow");
var random = array[Math.floor(Math.random() * array.length)];
console.log(random);

document.getElementById("random").innerHTML = random;
}