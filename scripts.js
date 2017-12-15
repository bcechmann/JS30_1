function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // To zatrzymuje funkcję / Stop the function form running all together
    audio.currentTime = 0; // To przewija dźwięk na początek / Rewind to the start
    audio.play();
    console.log(key);
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // Pomiń jeśli nie jest to transform / Skip it if it's not a transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
