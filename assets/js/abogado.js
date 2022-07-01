var audioPlayed = 0;
var audio = document.getElementById("audio");
var array=["Pase libre, felicitaciones", 
"Pase libre, felicitaciones", 
"Pase libre, felicitaciones", 
"Pase libre, felicitaciones", 
"Pase libre, felicitaciones", 
"Tu abogado se encargó y el jugador de la derecha es culpable, pierde 10 millones", 
"Tu abogado se encargó y el jugador de la derecha es culpable, pierde 5 millones", 
"Tu abogado se encargó y el jugador de la derecha es culpable, pierde 15 millones", 
"El jugador que te dio la carta pierde 20 millones", 
"El jugador que te dio la carta pierde 15 millones", 
"El jugador que te dio la carta pierde 5 millones", 
"El jurado no te encuentra totalmente inocente, perdés 5 millones", 
"El jugador de la izquierda es culpable ahora, pierde 15 millones",
"El jugador de la izquierda es culpable ahora, pierde 20 millones",
"El jugador de la izquierda es culpable ahora, pierde 10 millones"];

function DefensaTestigo(){
    var random = array[Math.floor(Math.random() * array.length)];
    console.log(random);
    document.getElementById("random").innerHTML = random;
    }


function Abogado(){
    audio.play();
    audioPlayed = 1;
    console.log("Aca estoy")
    setTimeout(() => {Cambiar();}, 5000)
}

console.log(audioPlayed);


function Cambiar (){
    
    location.replace('abogado2.html');
}

function DefensaAbogado(){
    var random = array[Math.floor(Math.random() * array.length)];
    console.log(random);
    document.getElementById("random").innerHTML = random;
    }