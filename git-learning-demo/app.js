document.getElementById('clickMe').addEventListener('click', function () {
    window.open('https://github.com/roshini831', '_blank');
    const messageElement = document.getElementById('message');
    messageElement.textContent = "Opening GitHub profile...";
});
