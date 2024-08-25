const message = "Happy Birthday to Bharath!";
const typedMessage = document.getElementById('typed-message');

let index = 0;

function typeWriter() {
    if (index < message.length) {
        typedMessage.innerHTML += message.charAt(index);
        index++;
        setTimeout(typeWriter, 100); 
    }
}

window.addEventListener('load', () => {
    const photo = document.getElementById('photo');
    const messageElement = document.getElementById('message');
   
    
    photo.classList.add('fade-in');

    
    setTimeout(() => {
        messageElement.classList.add('fade-in');
        typeWriter();
      
    }, 2000); 
});
function song() {
    const audio = document.getElementById('audio');
    audio.play();
}
