function playaudio(value) {
    
    value.currentTime = 0;
    value.play();
}


function borderstyle(el,duration)
{
    el.classList.add('playing')
    setTimeout(() => {
       el.classList.remove('playing')
    }, duration*900);
 
}



const el = document.querySelectorAll(`.key`)
el.forEach(element => {
    element.addEventListener('click', () => {
        const a = element.getAttribute('data-key')
        const value = document.querySelector(`audio[data-key="${a}"]`);
        playaudio(value);
        borderstyle(element,value.duration)
    })
});





function findel(e,duration)
{
     const value = document.querySelectorAll('.key')
     
    value.forEach(el=>{
        let a = el.getAttribute('data-key')
        
        if(a==e)
        {
           borderstyle(el,duration)
           
        }
    })
   
}

window.addEventListener('keydown', function (e) {
    const value = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if (!value) return;
    else {
        playaudio(value);
        console.log("duration= ",value.duration)
        findel(e.keyCode,value.duration)
    }

})
