const windowHeight = window.innerHeight || document.documentElement.clientHeight;
const video = document.getElementById('Landscape-Video');

video.style.height = windowHeight;
video.style.minWidth = '100%';
video.muted = true;
video.loop = true;
video.play();