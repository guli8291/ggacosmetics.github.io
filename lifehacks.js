var audio = document.getElementById("myAudio");
var isPlaying = false;

function toggleAudio() {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
  isPlaying = !isPlaying;
}

$(document).ready(function(){
    function animateText() {
      $("p").fadeOut(1000, function() {
        $(this).fadeIn(1000, animateText);
      });
    }
  
    animateText();
  });

  function playAudio() {
    var audio = document.getElementById("myAudio");
    audio.play();
  }