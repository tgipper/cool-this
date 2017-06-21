var playButtons = document.getElementsByClassName("audio");

for ( var i = 0; i < playButtons.length; i++) {
	playButtons[i].addEventListener("click", playLoop);
}

var currentlyPlaying = null;
var loop;
var loopPath = "../assets/audio/drums/";

var songPlayer = {
	play: function(loopName) {
		var fullPath = loopPath + loopName;
		loop = new buzz.sound(fullPath, { volume: 50 });
		currentlyPlaying = loopName;
		loop.play();
		console.log(currentlyPlaying);
		
    // only checks once, need to check for a stop event or check every time the playback changes
		if (loop.isEnded()) {
			currentlyPlaying = null;
			console.log(currentlyPlaying);
		}
	},
	pause: function() {
		currentlyPlaying = null;
		loop.stop();	
	}
}

function toggleIcon(id) {
	var icon = document.getElementById(id);
	icon.classList.toggle("ion-play");
	icon.classList.toggle("ion-stop");
}

function playLoop() {
	toggleIcon(this.dataset.target);
		
	var loopName = this.dataset.loopName;
	
	
	//if nothing is playing
	if (currentlyPlaying == null) {
		songPlayer.play(loopName);
	}
	
	//if the currently playing track is clicked
	else if (currentlyPlaying == loopName) {
		songPlayer.pause();
	}

	//if a track other than the currently playing track is clicked
	else if (currentlyPlaying != null && currentlyPlaying != loopName) {
		var el = document.querySelector("[data-loop-name='" + currentlyPlaying + "']");
		toggleIcon(el.dataset.target);
		songPlayer.pause();

		songPlayer.play(loopName);
		
		
	}
	
}

// toggling play and pause must be dependent on a track playing; when a track is finished playing the pause button needs to revert to a play button.

// frontend scripting – we've already done this, but frontend scripting is fragile
// Jekyll (plain text data files + templates) – simple, reliable, but new technology and limitations on adding new platforms/features later
// full custom backend with database – extremely flexible and full featured, but very difficult to learn everything we'll need to build it