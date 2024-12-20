
const targetDate = new Date("2024-12-02T00:00:00").getTime();

const timerElement = document.getElementById("timer");

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft < 0) {
        timerElement.textContent = "🎉 It's Your BirthDay! 🎉";
        clearInterval(interval); 
        startConfetti(); 
        return;
    }

    
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

   
    timerElement.textContent = `${days} Days : ${hours} Hours : ${minutes} Minutes : ${seconds}s`;
}


let confettiInterval;

function createConfetti() {
    const colors = ['#ff0', '#ff6347', '#00f', '#0f0', '#ff1493', '#8a2be2'];
    const confettiPiece = document.createElement('div');
    confettiPiece.style.position = 'absolute';
    confettiPiece.style.width = '10px';
    confettiPiece.style.height = '10px';
    confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confettiPiece.style.left = `${Math.random() * window.innerWidth}px`;
    confettiPiece.style.top = `${-Math.random() * 100}px`; 
    confettiPiece.style.animation = `fall ${Math.random() * 2 + 3}s linear infinite`;

    document.getElementById('confetti').appendChild(confettiPiece);
}

function startConfetti() {
    confettiInterval = setInterval(createConfetti, 100); 
}

function stopConfetti() {
    clearInterval(confettiInterval);
    document.getElementById('confetti').innerHTML = ''; 
}


const interval = setInterval(updateCountdown, 1000);
