window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return; // stop function from running if no associated key code found
    
    // set current audio time to 0 so it doesn't wait until end of audio file to be able to be triggered again by key press
    audio.currentTime = 0;
    audio.play();
});
