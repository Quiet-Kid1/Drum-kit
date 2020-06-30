var allButton = document.querySelectorAll(".drum");

for (var i = 0; i < allButton.length; i++ ){
    allButton[i].addEventListener("click",  function ()
    {
        // document.querySelector("this").innerHTML.style.color = "white";  
        // console.log(this);
        var buttonDrum = this.innerHTML;

        soundDrum(buttonDrum);
        makeAnimation(buttonDrum);

        });
     
}

document.addEventListener("keypress", function(){

    soundDrum(event.key);
    makeAnimation(event.key);

});

function soundDrum(theDrum){

    switch (theDrum) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
             var tom4 = new Audio("sounds/tom-4.mp3");
             tom4.play();
             break;    
        case "j":
             var snare = new Audio("sounds/snare.mp3");
             snare.play();
             break; 
        case "k":
             var crash = new Audio("sounds/crash.mp3");
             crash.play();
             break;  
        case "l":
             var kick = new Audio("sounds/kick-bass.mp3");
             kick.play();
             break;         
        default:
            break;
    }
}


function makeAnimation(keyButton){
    document.querySelector("." + keyButton).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("." + keyButton).classList.remove("pressed");
    },100)
}