var array=["Pase libre, nadie sabe nada", 
"Pase libre, nadie sabe nada", 
"Pase libre, nadie sabe nada", 
"Pase libre, nadie sabe nada", 
"Pase libre, nadie sabe nada", 
"Hablaste y el jugador de la derecha es culpable, pierde 10 millones", 
"Hablaste y el jugador de la derecha es culpable, pierde 5 millones", 
"Hablaste y el jugador de la derecha es culpable, pierde 15 millones", 
"El jugador que te dio la carta pierde 20 millones", 
"El jugador que te dio la carta pierde 15 millones", 
"El jugador que te dio la carta pierde 5 millones", 
"El juez duda, perdes 5 millones", 
"El jugador de la izquierda es culpable ahora, pierde 15 millones",
"El jugador de la izquierda es culpable ahora, pierde 20 millones",
"El jugador de la izquierda es culpable ahora, pierde 10 millones"];

function DefensaTestigo(){
    var random = array[Math.floor(Math.random() * array.length)];
    console.log(random);
    document.getElementById("random").innerHTML = random;
    }