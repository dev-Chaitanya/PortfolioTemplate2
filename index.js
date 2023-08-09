let HomeContainer = document.querySelector('.Home');
let HomeTitle=document.querySelector('.home-title')
let Homebtn=document.querySelector('.Homebtn')
let menuBtn=document.querySelector('.menubtn ')
let closeBtn=document.querySelector('.closebtn ')
let Header=document.querySelector('header')

let slideRight=document.querySelector('.slideright')

let timer;
let count = 0;

HomeContainer.style.transitionDuration = "500ms";
HomeContainer.style.transitionTimingFunction = "ease-in-out";

$(document).ready(function() {

menuBtn.addEventListener('click',()=>{
Header.classList.toggle('slide-right');
if(menuBtn.innerText==="Menu"){
    menuBtn.innerText="Close"
}
else{
    menuBtn.innerText="Menu"
}
})


function func() {
    HomeTitle.innerHTML="i am <br>a Designer "
    bgAnimation();
} 
function bgAnimation() {
    timer = setInterval(() => {
        count++;
        if (count === 1) {
    HomeTitle.innerHTML="i am <br>a Designer ";
    Homebtn.innerHTML="VIEW PORTFOLIO";
    $('.text-slider').slideDown('slow','linear');
 HomeContainer.style.backgroundImage = "url('./images/home-bg.jpg')"
            HomeContainer.style.backgroundRepeat = "no-repeat";
            HomeContainer.style.backgroundPosition = "cover";
            HomeContainer.style.backgroundSize = "cover";
            HomeContainer.style.transition = "background-image";
            HomeContainer.style.transitionDuration = "1s";
            HomeContainer.style.transitionTimingFunction = "ease-in-out";
          
            
        }
       if(count===9){
        $('.text-slider').slideUp('slow','linear');
       }
        if (count === 10) {
            HomeTitle.innerHTML="Hi! <br>I'm JackSon ";
            Homebtn.innerHTML="DOWNLOAD CV";
            $('.text-slider').slideDown('slow','linear');
            HomeContainer.style.backgroundImage = "url('./images/home-bg2.jpg')"
            HomeContainer.style.backgroundRepeat = "no-repeat";
            HomeContainer.style.backgroundPosition = "cover";
            HomeContainer.style.backgroundSize = "cover";
            HomeContainer.style.transition = "background-image";
            HomeContainer.style.transitionDuration = "1s";
            HomeContainer.style.transitionTimingFunction = "ease-in-out";
        }
        if (count === 15) {
        $('.text-slider').slideUp('slow','linear');
            bgAnimation();
            clearInterval(timer);
            count = 0;
        }
    }, 1000)
}
func();

});