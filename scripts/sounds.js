//click a player button to begin playing
//play the click sound file once through
//play the drum sound file
//loop the drum sound file
//end the playback on click of player button
//when clicked again, begin process from playing the click sound

var audioPlayer = function() {
    
}

var table = document.getElementById("exercise-table");

var addBorder = function() {
    console.log("test");
    
    table.style.border = 4px solid red;
}


document.getElementById("hero").addEventListener("click", addBorder);


