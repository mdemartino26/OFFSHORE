var array=["-10 Millones", "-20 Millones", "-5 Millones", "-15 Millones", "- 25 Millones"];

function Loader(){
    setTimeout(Atacar, 3000);
    var oculto = document.getElementById("atacar");
    oculto.setAttribute("class", "noShow");
    var loader = document.getElementById("loader");
    loader.setAttribute("class", "loader");
}

function Atacar(){
var oculto = document.getElementById("atacar");
oculto.setAttribute("class", "noShow");
var loader = document.getElementById("loader");
    loader.setAttribute("class", "noShow");
var mostrar = document.getElementById("atacado");
mostrar.setAttribute("class", "");
var random = array[Math.floor(Math.random() * array.length)];
console.log(random);

document.getElementById("random").innerHTML = random;
}