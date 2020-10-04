/*-------------------------------- 
            menu js
--------------------------------*/
let menuBar = document.querySelector('.menu-bar');
let mainNav = document.querySelector('.main-nav');

menuBar.addEventListener('click', ()=>{
  mainNav.classList.toggle('show');
});

window.onscroll = ()=> {
  let header = document.querySelector('.header-area');
  if (window.pageYOffset > 200) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

window.onload = ()=> {
  let w = window.outerWidth;
  console.log(w);
}


/*-------------------------------- 
            video player js
--------------------------------*/
let video = document.querySelector('.ca-video-player');
let playPauseBtn = document.querySelector('.playpausebtn');
let seekSlider = document.querySelector('.seek-slider');
let volumeSlider = document.querySelector('.volume-slider');
let fullScreen = document.querySelector('.fullscreen');
let videoOverlay = document.querySelector('.video-overlay');

video.controls = false;
// init play pause button js
playPauseBtn.addEventListener('click', ()=> {
  if (video.paused) {
    video.play();
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    video.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
  videoOverlay.style.display = 'none';
});

// init seek slider
seekSlider.addEventListener('change', ()=>{
  let seekto = video.duration * ( seekSlider.value / 100 );
  video.currentTime = seekto;
});

// updating seek sliser with video
video.addEventListener('timeupdate', ()=> {
  let newTime = video.currentTime * ( 100 / video.duration );
  seekSlider.value = newTime;
});

// updating volume slider
volumeSlider.addEventListener('change', ()=>{
  video.volume = volumeSlider.value / 100;
});

// full screen mode
fullScreen.addEventListener( 'click', ()=>{
  if (video.requestFullscreen) {
    video.requestFullscreen();
    video.controls = false;
    video.load();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    video.mozRequestFullScreen();
    video.controls = false;
    video.load();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    video.webkitRequestFullscreen();
    video.controls = false;
    video.load();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    video.msRequestFullscreen();
    video.controls = false;
    video.load();
  }
} );

/*-------------------------------- 
            owl carousel js
--------------------------------*/
const nextIcon = '<i class="fas fa-arrow-right"></i>';
const prevIcon = '<i class="fas fa-arrow-left"></i>';

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	loop: true,
  	items: 2,
  	loop: true,
  	margin: 30,
  	nav: true,
  	navText: [prevIcon, nextIcon],
  	responsive: {
  		
  		0: {
  			items:1
  		},
  		769: {
  			items:2
  		},


  	}
  });
});