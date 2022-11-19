function playaudio(value) {
    value.currentTime = 0;
    value.play();
}

const el = document.querySelectorAll(`.key`)
el.forEach(element => {
    element.addEventListener('click', () => {
        const a = element.getAttribute('data-key')
        const value = document.querySelector(`audio[data-key="${a}"]`)
        playaudio(value)

    })
});


window.addEventListener('keydown', function (e) {
    const value = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if (!value) return;
    else {
        playaudio(value);
    }

})
