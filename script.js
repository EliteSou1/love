const tracks = [
  {
    title: "Si Supieras",
    artist: "Kevin Kaarl",
    src: "Si Supieras.mp3",
    cover: "61522e0914296b702a7c7f96da6d0224.jpg"
  },
  {
    title: "Otra canción",
    artist: "Artista X",
    src: "Music/otra.mp3",
    cover: "Album/otra.jpg"
  }
];

let current = 0;
const audio = new Audio(tracks[current].src);
audio.volume = 0.5;

const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const title = document.getElementById("track-title");
const artist = document.getElementById("track-artist");
const cover = document.querySelector(".cover-art");

function loadTrack(index) {
  const track = tracks[index];
  audio.src = track.src;
  title.textContent = track.title;
  artist.textContent = track.artist;
  cover.src = track.cover;
  audio.load();
}

function play() {
  audio.play().catch(error => {
    console.log("Error playing audio:", error);
  });
  playBtn.textContent = "⏸️";
}

function pause() {
  audio.pause();
  playBtn.textContent = "▶️";
}

playBtn.addEventListener("click", () => {
  audio.paused ? play() : pause();
});

nextBtn.addEventListener("click", () => {
  current = (current + 1) % tracks.length;
  loadTrack(current);
});

prevBtn.addEventListener("click", () => {
  current = (current - 1 + tracks.length) % tracks.length;
  loadTrack(current);
});

audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100 || 0;
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

volume.addEventListener("input", () => {
  audio.volume = volume.value / 100;
});


audio.addEventListener("ended", () => {
  current = (current + 1) % tracks.length;
  loadTrack(current);
  play();
});


loadTrack(current);

const galleryImages = document.querySelectorAll('.gallery img');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close-modal');


galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    modalImage.src = img.src;       
    modal.classList.add('active');  
  });
});


closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});


modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});
const easterBtn = document.getElementById("easter-egg");

easterBtn.addEventListener("click", () => {
  
  document.body.innerHTML = '';

 
  const messageContainer = document.createElement("div");
  messageContainer.style.position = "fixed";
  messageContainer.style.top = "0";
  messageContainer.style.left = "0";
  messageContainer.style.width = "100vw";
  messageContainer.style.height = "100vh";
  messageContainer.style.display = "flex";
  messageContainer.style.alignItems = "center";
  messageContainer.style.justifyContent = "center";
  messageContainer.style.textAlign = "center";
  messageContainer.style.background = "url('Images/fondo-romantico.jpg') center center / cover no-repeat fixed";
  messageContainer.style.fontFamily = "'Minecraft', monospace";
  messageContainer.style.color = "white";
  messageContainer.style.fontSize = "2rem";
  messageContainer.style.padding = "2rem";
  messageContainer.style.backdropFilter = "blur(10px)";

 
  messageContainer.textContent = "Estoy seguro que, te amare por siempre, Mor.";


  document.body.appendChild(messageContainer);

});
