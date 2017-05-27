var playButtons = document.getElementsByClassName("audio");

for ( var i = 0; i < playButtons.length; i++) {
	playButtons[i].addEventListener("click", playTrack);
}

var currentlyPlaying = null;

function playTrack() {
    var clickPath = "../assets/audio/clicks/";
    var clickName = this.dataset.clickName;
    var trackPath = "../assets/audio/drums/";
    var trackName = this.dataset.trackName;

    clickPath = clickPath + clickName;

    trackPath = trackPath + trackName;

    var click = new Audio(clickPath);
    var track = new Audio(trackPath);

    click.play();

    if (click.played.end == click.duration) {
        console.log(click.duration);
    }
    
    //check click duration
    //check click current time
    //if click currentTime == duation, play track
    //check track duration
    //check track current time
    //if track currentTime == duration, play track
    track.play();
    console.log("test");	
}

//if nothing is playing and a button is clicked, play the sounds for that button
//if a sound file is playing and the button for that sound file is clicked, stop the sound file
//if a sound file is playing and a button not corresponding to that button is clicked, stop the previous sound file and play the sound file for the clicked button