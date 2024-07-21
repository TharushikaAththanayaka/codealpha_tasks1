const songs = [
    {
        title: 'Aisa - Main',
        artist: 'Raftaar, Amit Trivedi, Kumaar',
        cover: './img/aisa-main.jfif',
        audio: './songs/128-Aisa Main Shaitaan - Shaitaan 128 Kbps.mp3'
    },
    {
        title: 'Galti',
        artist: 'Vishal Mishra',
        cover: './img/galti.jfif',
        audio: './songs/128-Galti - Vishal Mishra 128 Kbps.mp3'
    },
    {
        title: 'Khudaya',
        artist: 'Sagar Bhatia, Neeti Mohan, Suhit Abhyankar',
        cover: './img/khudaya.jfif',
        audio: './songs/128-Khudaya - Sarfira 128 Kbps.mp3'
    },
    {
        title: 'Maar - Udi',
        artist: 'Yadu Krishnan, Sugandh Shekar, Haston Rodrigues, Abhijith Rao',
        cover: './img/maar.jfif',
        audio: './songs/128-Maar Udi - Sarfira 128 Kbps.mp3'
    },
    {
        title: 'Main - Yaad',
        artist: 'Stebin Ben',
        cover: './img/main-yaad.jfif',
        audio: './songs/128-Main Yaad Aaunga - Stebin Ben 128 Kbps.mp3'
    },
    {
        title: 'Mere - Metboob',
        artist: 'Alka Yagnik, Udit Narayan',
        cover: './img/mere.jfif',
        audio: './songs/128-Mere Mehboob Mere Sanam - Bad Newz 128 Kbps.mp3'
    },
    {
        title: 'Tauba - Tauba',
        artist: 'Karan Aujla X Badshah X Divine',
        cover: './img/tauba.jfif',
        audio: './songs/128-Tauba Tauba - Bad Newz 128 Kbps.mp3'
    }
];

let currentSongIndex = 0;

const audioPlayer = document.getElementById('audioPlayer');
const songTitle = document.getElementById('songTitle');
const songArtist = document.getElementById('songArtist');
const cover = document.getElementById('cover');
const playButton = document.getElementById('playButton');
const playIcon = document.getElementById('playIcon');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

function loadSong(songIndex) {
    const song = songs[songIndex];
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    cover.src = song.cover;
    audioPlayer.src = song.audio;
}

function playSong() {
    audioPlayer.play();
    playIcon.src = './img/symbols/pause11.jfif';
}

function pauseSong() {
    audioPlayer.pause();
    playIcon.src = './img/symbols/play11.jpg';
}

playButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        playSong();
    } else {
        pauseSong();
    }
});

prevButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playSong();
});

nextButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playSong();
});


loadSong(currentSongIndex);