var playButtons = document.getElementsByClassName("audio");

for ( var i = 0; i < playButtons.length; i++) {
	playButtons[i].addEventListener("click", playTrack);
}

var currentlyPlaying = null;

function playTrack() {
    
    var countPath = "../assets/audio/clicks/";
    var countName = this.dataset.countName;
    var trackPath = "../assets/audio/drums/";
    var trackName = this.dataset.trackName;

    countPath = countPath + countName;

    trackPath = trackPath + trackName;

    var count = new Audio(countPath);
    var track = new Audio(trackPath);
    count.preload = "auto";
    count.volume = 0.5;
    track.preload = "auto";
    track.volume = 1.0;
    track.loop = true;
    
//    if count.isPlaying
    
    count.addEventListener("ended", () => track.play());
    count.play();
    
}

//if nothing is playing and a button is clicked, play the sounds for that button
//if a sound file is playing and the button for that sound file is clicked, stop the sound file
//if a sound file is playing and a button not corresponding to that button is clicked, stop the previous sound file and play the sound file for the clicked button