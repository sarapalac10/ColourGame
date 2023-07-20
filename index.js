let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4)
    //console.log(randomNumber)

    var randomChosenColour= buttonColours[randomNumber]
    console.log('el color es: ',randomChosenColour)

    gamePattern.push(randomChosenColour)
    console.log(gamePattern);

    $('#' + randomChosenColour).delay(50).fadeIn(100).fadeOut(100).fadeIn(100);
    //$('#' + randomChosenColour).delay(100).fadeOut().fadeIn('slow')

    return;
}

//setInterval(nextSequence, 1500);

//nextSequence();



