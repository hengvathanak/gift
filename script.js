function revealLuck() {
    const luckMessages = [
        "You will have great wealth!",
        "Happiness and health are on your way!",
        "Success will follow your efforts!",
        "A wonderful surprise awaits you!",
        "Good fortune is coming soon!"
    ];

    const randomIndex = Math.floor(Math.random() * luckMessages.length);
    const luckMessage = luckMessages[randomIndex];

    document.getElementById('luckMessage').textContent = luckMessage;
}