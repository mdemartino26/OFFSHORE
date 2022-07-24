var audioPlayed = 0;
var audio = document.getElementById("audio");
var array=["Pase libre, felicitaciones", 
"Pase libre, felicitaciones", 
"Pase libre, felicitaciones", 
"Pase libre, felicitaciones", 
"Pase libre, felicitaciones", 
"El juez es tu amigo entonces el jugador de la derecha, pierde 10 millones", 
"El juez es tu amigo entonces el jugador de la derecha, pierde 5 millones", 
"El juez es tu amigo entonces el jugador de la derecha, pierde 15 millones", 
"El jugador que te dio la carta pierde 20 millones", 
"El jugador que te dio la carta pierde 15 millones", 
"El jugador que te dio la carta pierde 5 millones", 
"Cada soborno tiene un precio, perdés 5 millones", 
"El jugador de la izquierda es culpable ahora, pierde 15 millones",
"El jugador de la izquierda es culpable ahora, pierde 20 millones",
"El jugador de la izquierda es culpable ahora, pierde 10 millones"];

function DefensaSoborno(){
    var random = array[Math.floor(Math.random() * array.length)];
    console.log(random);
    document.getElementById("random").innerHTML = random;
    }


function Soborno(){
    audio.play();
    
    console.log("Aca estoy")
    setTimeout(() => {Cambiar();}, 5000)
}

console.log(audioPlayed);


function Cambiar (){
    
    location.replace('soborno2.html');
}

function DefensaEscape(){
    audioPlayed = 1;
    var random = array[Math.floor(Math.random() * array.length)];
    console.log(random);
    document.getElementById("random").innerHTML = random;
    }