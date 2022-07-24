var audioPlayed = 0;
var audio = document.getElementById("audio");
var array=["Pase libre, felicitaciones", 
"Pase libre, felicitaciones", 
"Pase libre, felicitaciones", 
"Pase libre, felicitaciones", 
"Pase libre, felicitaciones", 
"Los papeles desaparecieron, se investiga al jugador de la derecha, pierde 10 millones", 
"Los papeles desaparecieron, se investiga al jugador de la derecha, pierde 5 millones", 
"Los papeles desaparecieron, se investiga al jugador de la derecha, pierde 15 millones", 
"El jugador que te dio la carta pierde 20 millones", 
"El jugador que te dio la carta pierde 15 millones", 
"El jugador que te dio la carta pierde 5 millones", 
"Falto un papel por destruir, perdés 5 millones", 
"El jugador de la izquierda es culpable ahora, pierde 15 millones",
"El jugador de la izquierda es culpable ahora, pierde 20 millones",
"El jugador de la izquierda es culpable ahora, pierde 10 millones"];

function DefensaTriturar(){
    var random = array[Math.floor(Math.random() * array.length)];
    console.log(random);
    document.getElementById("random").innerHTML = random;
    }


function Triturar(){
    audio.play();
    console.log("Aca estoy")
    setTimeout(() => {Cambiar();}, 5000)
}

console.log(audioPlayed);


function Cambiar (){
    
    location.replace('quema2.html');
}

function DefensaAbogado(){

    audioPlayed = 1;
    var random = array[Math.floor(Math.random() * array.length)];
    console.log(random);
    document.getElementById("random").innerHTML = random;
    }