console.log('Welcome to Music portal')

// Initialize the variables

let songIndex = 0;
let audioElement  = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterplay');
let ProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName :'Kabir Cafe - Kya Leke Aaya Jagat Mai',filepath:'song/1.mp3',coverPath:'cover/1.jpg'},
    {songName :'The Local Train - Choo Lo',filepath:'song/2.mp3',coverPath:'cover/2.jpg'},
    {songName :'Silk Route - Sab se peeche hum khade',filepath:'song/3.mp3',coverPath:'cover/3.jpg'},
    {songName :'The Local Train - Khudi',filepath:'song/4.mp3',coverPath:'cover/4.jpg'},
    {songName :'Bharat Chauhan - Tu Hoti Toh',filepath:'song/5.mp3',coverPath:'cover/5.jpg'},
    {songName :'Masaan - Tu Kisi Rail Si' ,filepath:'song/6.mp3',coverPath:'cover/6.jpg'},
    {songName :'OSHO - SANSAR',filepath:'song/7.mp3',coverPath:'cover/7.jpg'},
    {songName :'Hansraj Raghuwanshi - Shamshaan',filepath:'song/8.mp3',coverPath:'cover/8.jpg'},

];

songItems.forEach((element,i) => {
    console.log(element,i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
});
// Handle play /pause


masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

ProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = ProgressBar.value * audioElement.duration/100;
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle'); 
        audioElement.src = `song/${songIndex+1}.mp3`;
        masterSongName.innerHTML = songs[songIndex].songName; 
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('prevButton').addEventListener('click',()=>{
    if(songIndex <=0){
        songIndex = 0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName; 
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('nextButton').addEventListener('click',()=>{
    if(songIndex >=7){
        songIndex = 0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName; 
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterSongName.innerHTML = songs[songIndex].songName; 
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})