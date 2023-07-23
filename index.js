let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

//Levels
let started = false;
let level = 0;

//Start the game
$(document).on( "keydown", function() {
    alert( "Handler for `keydown` called." );
    if (!started) {
        $("#level-title").text("level " + level);
        $('p').remove();
        $('h1').text("Level 0");
        nextSequence();
        started = true;
    }
});

//Check Which Button is Pressed
$('.btn').on('click', function(){
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    //console.log('el color presionado del usuario es:',userChosenColour);
    //console.log('el patron del usuario fue: ',userClickedPattern)
    animatePress(userChosenColour) //Revisar acá
    playSound(userChosenColour);

    checkAnswer(userClickedPattern);
    return
} )

//Check the answers
// function checkAnswer() {
//     if(userClickedPattern.length > 0){
//         if(userClickedPattern.length === gamePattern.length && JSON.stringify(userClickedPattern) === JSON.stringify(gamePattern)){
//             alert('sucessssss :) ')
//             setTimeout( function(){
//                 nextSequence()
//             }, 1000)
//             userClickedPattern = [];
//         }
//         else{
//             alert('wrong! :( ')
//         }
//     }
// }

function checkAnswer() {
    if(userClickedPattern.length > 0){
        if(userClickedPattern.length === gamePattern.length){
            if(JSON.stringify(userClickedPattern) === JSON.stringify(gamePattern)){
                console.log("Success ✨✔️ !");
                //alert('sucessssss :) ')
                setTimeout( function(){
                    nextSequence()
                }, 1000)
            }
            else{
                console.log('wrong! :( ')
                playSound('wrong');

                $("#level-title").text("Game over. Press Any Key To Restart");
                $('body').addClass("game-over");
                setTimeout(function() {
                    $('body').removeClass("game-over");
                }, 200);

                startOver()
            }
        }
    }
}

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random()*4)
    var randomChosenColour= buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    console.log('el color random del juego es: ',randomChosenColour)
    console.log('patron del juego:',gamePattern);

    $('#' + randomChosenColour).delay(50).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

    checkAnswer(gamePattern);
    return;
}

//Restart the game
function startOver(){
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    started = false;
}

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

//setInterval(nextSequence, 1500);