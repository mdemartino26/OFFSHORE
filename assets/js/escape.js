var audioPlayed = 0;
var audio = document.getElementById("audio");
var array=["Pase libre, felicitaciones", 
"Pase libre, felicitaciones", 
"Pase libre, felicitaciones", 
"Pase libre, felicitaciones", 
"Pase libre, felicitaciones", 
"Escapaste, se investida al jugador de la derecha, pierde 10 millones", 
"Escapaste, se investida al jugador de la derecha, pierde 5 millones", 
"Escapaste, se investida al jugador de la derecha, pierde 15 millones", 
"El jugador que te dio la carta pierde 20 millones", 
"El jugador que te dio la carta pierde 15 millones", 
"El jugador que te dio la carta pierde 5 millones", 
"Pagás los documentos falsos, perdés 5 millones", 
"El jugador de la izquierda es culpable ahora, pierde 15 millones",
"El jugador de la izquierda es culpable ahora, pierde 20 millones",
"El jugador de la izquierda es culpable ahora, pierde 10 millones"];

function DefensaEscape(){
    var random = array[Math.floor(Math.random() * array.length)];
    console.log(random);
    document.getElementById("random").innerHTML = random;
    }


function Escape(){
    audio.play();
    audioPlayed = 1;
    console.log("Aca estoy")
    setTimeout(() => {Cambiar();}, 5000)
}

console.log(audioPlayed);


function Cambiar (){
    
    location.replace('escape2.html');
}

function DefensaEscape(){
    var random = array[Math.floor(Math.random() * array.length)];
    console.log(random);
    document.getElementById("random").innerHTML = random;
    }