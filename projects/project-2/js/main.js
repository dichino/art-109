function pressedButton(){
    const button = event.target;
    const sound = document.getElementById("button-sound");  
    sound.play(); 

    event.target.style.animation = 'none'; // once more
    event.target.offsetHeight; //  starting again

    
    setTimeout(() => {
        button.style.animation = 'expand-button 10s forwards ease-in-out';
        button.style.animationDelay = `${Math.random() * 10}s`;
    }, 1); // Kort pause for å sikre at animasjonen starter på nytt
}

function setRandomAnimationDelay(){
    document.querySelectorAll(".button").forEach(button => { 
        button.style.animationDelay = `${Math.random() * 2}s`;
    })
}

function setRandomAnimationDuration(){
    document.querySelectorAll(".button").forEach(button => { 
        button.style.animationDuration = `${Math.random() * 4 +2}s`;
    })
}

document.addEventListener("DOMContentLoaded", setRandomAnimationDuration)

document.addEventListener("DOMContentLoaded", setRandomAnimationDelay)

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("background-audio-1").volume = 0.03;    
    document.getElementById("background-audio-2").volume = 0.04;
});
