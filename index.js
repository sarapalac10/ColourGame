let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];
let userClickedPattern = [];

//Levels
let started = false;
let level = 0;

function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4)
    //console.log(randomNumber)

    var randomChosenColour= buttonColours[randomNumber]
    console.log('el color random es: ',randomChosenColour)

    gamePattern.push(randomChosenColour)
    console.log(gamePattern);

    $('#' + randomChosenColour).delay(50).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);


    return;
}

//Check Which Button is Pressed//
$('.btn').on('click', function(){
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    console.log('el color del usuario es:',userChosenColour);
    console.log(userClickedPattern)
    animatePress(userChosenColour) //Revisar acá
    playSound(userChosenColour)

    return
} )

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

playSound()
animatePress()

//setInterval(nextSequence, 1500);

//Start the game


$(document).on( "keydown", function() {
    alert( "Handler for `keydown` called." );

    if (!started) {
        $("#level-title").text("level " + level);
        $('p').remove();
        $('h1').text("Level 0");
        nextSequence();
        started = true 
    }
    nextSequence();

} );
