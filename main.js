setInterval(createHeart, 300);
var music = document.getElementById("music");
var playButton = document.getElementById("play");
var pauseButton = document.getElementById("pause");
var playhead = document.getElementById("elapsed");
var timeline = document.getElementById("slider");
var timer = document.getElementById("timer");
var duration;
pauseButton.style.visibility = "hidden";

var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
music.addEventListener("timeupdate", timeUpdate, false);

function timeUpdate() {
  var playPercent = timelineWidth * (music.currentTime / duration);
  playhead.style.width = playPercent + "px";

  var secondsIn = Math.floor((music.currentTime / duration / 2.3) * 100);
  if (secondsIn <= 9) {
    timer.innerHTML = "0:0" + secondsIn;
  } else {
    timer.innerHTML = "0:" + secondsIn;
  }
}

playButton.addEventListener("click", playMusic, false);
pauseButton.addEventListener("click", pauseMusic, false);

function playMusic() {
  music.play();
  playButton.style.visibility = "hidden";
  pauseButton.style.visibility = "visible";
  duration = music.duration;
}

function pauseMusic() {
  music.pause();
  pauseButton.style.visibility = "hidden";
  playButton.style.visibility = "visible";
}


playButton.onclick = function () {
  music.play();
  playButton.style.visibility = "hidden";
  pause.style.visibility = "visible";
};

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    
    heart.innerText = '💗';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
                heart.remove();
                }, 5000);
  }
  
