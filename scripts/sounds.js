var playButtons = document.getElementsByClassName("audio");

for ( var i = 0; i < playButtons.length; i++) {
	playButtons[i].addEventListener("click", playTrack);
}

var currentlyPlaying = false;

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
	console.log("test")
}

// select all of the play buttons
// loop through them and attach an event listener to each one