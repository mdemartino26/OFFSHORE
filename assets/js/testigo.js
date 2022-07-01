var audioPlayed = 0;
var audio = document.getElementById("audio");


function Testigo(){
    audio.play();
    audioPlayed = 1;
    console.log("Aca estoy")
    setTimeout(() => {Cambiar();}, 5000)
}

console.log(audioPlayed);


function Cambiar (){
    
    location.replace('testigo2.html');
}

