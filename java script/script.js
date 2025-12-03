
alert("hallo"); 


function unmuteVideo() {
  const video = document.getElementById('bg-video');
  if (video) {
    video.muted = false;
    // Optionally hide the unmute button after it's clicked
    // event.target.style.display = 'none'; 
  }
}


muteButton.addEventListener('click', () => {
  const video = document.getElementById('bg-video');
  if (video) {
    video.muted = true;
  }
});
