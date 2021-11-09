const video = document.getElementById('Landscape-Video');
const header = document.getElementsByTagName('header')[0];

video.style.height = windowHeight;
video.style.minWidth = '100%';
video.muted = true;
video.loop = true;
video.play();

header.style.height = (windowHeight - menu.clientHeight).toString() + 'px';