function moveMeme() {
    const memeImage = document.getElementById('memeImage');
    const maxX = window.innerWidth - memeImage.width;
    const maxY = window.innerHeight - memeImage.height;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    memeImage.style.left = randomX + 'px';
    memeImage.style.top = randomY + 'px';
}