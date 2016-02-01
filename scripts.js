// Jukebox.play()

// OO JavaScript Jukebox

// You've had a bit of time to get familiar with object oriented 
// vaScript. Time to use that knowledge to make the coolest juke 
// int in the place!

// Using any mp3 you can find online, create a simple web page 
// where you can play it. After this step, research which JavaScript
// functions can pause, play, and stop the Jukebox.

// Encapsulate all of this functionality in a JavaScript object so
// that starting a song is as simple as calling:

// `Jukebox.play()`

// Grading Criteria

// Your JavaScript Jukebox must:

// 1. Display at least one song on the page when the page loads

// 2. Give the user the ability to play that song, _without_ using 
// the "built-in" play button. This could be through a different 
// button, through clicking or mousing over an image on the page, 
// or any other device of your choosing.

// 3. Give the user the ability to stop that song _without_ using 
// the "built-in" stop button. Once again, this could be through a 
// different button, through clicking or mousing over an image on 
// the page, or any other device of your choosing.

// 3. Give the user the ability to load at least one different song 
// into the Jukebox besides the one that is loaded when the page 
// initially renders

// 4. The whole Jukebox should be backed by an object called Jukebox 
// with methods to play, stop, and load songs.

var 

	songs: ['song1', 'song2', 'song3', 'song4']

// function Jukebox() {
	playSong: function(){

		document.getElementById('ellie').play();
	}
// add an array in order to allow for a few songs to choose from
	$(document).ready(function(){
		$('#go').mousemove("click", function(){
			playSong();
			});
		});

	pauseSong: function(){
		document.getElementById('ellie').pause();
	}

	$(document).ready(function(){
		$('#peace').mouseover("click", function(){
			pauseSong();
		});
	});

	stopSong: function() {
		document.getElementById('ellie').pause();
		document.getElementById('ellie').currentTime = 0;
	}

	$(document).ready(function(){
		$('#stop').click("click", function(){
			stopSong();
		});
	});
// };
// var Jukebox = {
// 	songs: ["song1", "song2"]
// 	// loadsongs: function(newSong){
// 		// document.getElementById(this.songs[newSong].play());
// 	};

// function Jukebox(){
// 	this.songs = [];
// 	this.play = function(){

// 	}
// 	this.chooseSong = function(songName){

// 	}
// }