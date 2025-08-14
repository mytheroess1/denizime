const heart = document.getElementById('heart');
const title = document.getElementById('title');
const message = document.getElementById('message');

// Uçan kalpler container
const heartFlyContainer = document.createElement('div');
heartFlyContainer.classList.add('heart-fly');
document.body.appendChild(heartFlyContainer);

// Kalp tıklama olayı
heart.addEventListener('click', () => {
    heart.style.transform = 'scale(3)';
    heart.style.opacity = '0';
    title.style.opacity = '0';

    message.style.visibility = 'visible';
    setTimeout(() => {
        message.classList.add('show');
    }, 300);

    // Uçan kalpler oluştur
    createFlyingHearts(30);
});

// Uçan kalpler fonksiyonu
function createFlyingHearts(count) {
    for(let i=0; i<count; i++) {
        const heartEl = document.createElement('div');
        heartEl.classList.add('fly-heart');
        heartEl.innerText = '❤️';
        heartEl.style.left = Math.random() * 100 + '%';
        heartEl.style.fontSize = (Math.random() * 20 + 20) + 'px';
        heartEl.style.animationDuration = (Math.random() * 3 + 2) + 's';
        heartFlyContainer.appendChild(heartEl);

        setTimeout(() => {
            heartEl.remove();
        }, 4000);
    }
}
