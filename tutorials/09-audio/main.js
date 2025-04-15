const song = document.getElementById('song');
const playB = document.getElementById('playB');
const pauseB = document.getElementById('pauseB');
const volume = document.getElementById('volume');

playB.addEventListener('click', () => {
    song.play()
})


pauseB.addEventListener('click', () => {
    song.pause()
})


volume.addEventListener('input', () => {
    song.volume = volume.value;
});