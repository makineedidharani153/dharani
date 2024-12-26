const createConfetti = () => {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDelay = Math.random() * 3 + 's';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 3000);
};

// Generate confetti on page load
for (let i = 0; i < 100; i++) {
    createConfetti();
}

// Show modal on page load
window.addEventListener('load', () => {
    var myModal = new bootstrap.Modal(document.getElementById('announcementModal'), {
        keyboard: false
    });
    myModal.show();
});
