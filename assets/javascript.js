var array=["-10 Millones", "-20 Millones", "-5 Millones", "-15 Millones", "- 25 Millones"];
var oculto = document.getElementById("atacar");
var loader = document.getElementById("1");
var loader2 = document.getElementById("2");
var loader3 = document.getElementById("3");
var loader4 = document.getElementById("4");
var fondo = document.getElementById("body");


function Loader(){
    oculto.setAttribute("class", "noShow");
    loader.setAttribute("class", "");
    fondo.setAttribute("class", "fondocambiante");
    setTimeout(Loader2, 2000);
}

function Loader2(){
    loader.setAttribute("class", "noShow");
    loader2.setAttribute("class", "");
    setTimeout(Loader3, 2000);
}

function Loader3(){
    loader2.setAttribute("class", "noShow");
    loader3.setAttribute("class", "");
    setTimeout(Loader4, 2000);
}

function Loader4(){
    loader3.setAttribute("class", "noShow");
    loader4.setAttribute("class", "");
    setTimeout(Atacar, 2000);
}

function Atacar(){
var oculto = document.getElementById("atacar");
oculto.setAttribute("class", "noShow");
    loader4.setAttribute("class", "noShow");
    fondo.setAttribute("class", "");
var mostrar = document.getElementById("atacado");
mostrar.setAttribute("class", "");
var random = array[Math.floor(Math.random() * array.length)];
console.log(random);

document.getElementById("random").innerHTML = random;
}

function Testigo(){
    var sound = document.getElementById("audio");
    sound.play();
    setTimeout(sound.duration * 2000);
    Cambiar();
}

function Cambiar (){
    location.replace('pag2.html');
}