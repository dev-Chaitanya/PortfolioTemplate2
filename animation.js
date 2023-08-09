
// event listeners selection
let elluBtn=document.querySelector('#Ellustration')
let workBtn=document.querySelector('#Work')
let designBtn=document.querySelector('#Design')
let workCards=document.querySelectorAll('.workCards > .card')
let setInt;
let setCount=0;

// scrolling animation seection elements
let contetBody=document.querySelector('.content-body')


let Home=document.querySelector('.Home');
let About=document.querySelector('.About');
let Services=document.querySelector('.Services')
let Skills=document.querySelector('.Skills')
let Education=document.querySelector('.Education')
let Experience =document.querySelector('.Experience')
let Work =document.querySelector('.Work')
let Blog =document.querySelector('.Blog')
let Contact=document.querySelector('.Contact');

let childnodes_about=About.childNodes;
let aboutChilds=childnodes_about[3].childNodes;

let childnodes_services=Services.childNodes;
let servicesChild=childnodes_services[3].childNodes;

let childnodes_skils=Skills.childNodes;

let childnodes_education=Education.childNodes;

let childnodes_experience=Experience.childNodes;

let childExperience=childnodes_experience[3];
let subChild=childExperience.childNodes

let childnodes_work=Work.childNodes

let childnodes_blog=Blog.childNodes

let childnodes_contact=Contact.childNodes


// dark mode 
let mode=document.querySelector('#modeBtn');

// Get a reference to the element you want to modify
const element = document.querySelector(".timeline");

// Get the computed style of the element

const computedStyle = window.getComputedStyle(element, "::after");

// Get the current height of the ::after pseudo-element
const currentHeight = parseInt(computedStyle.getPropertyValue("height"));

var bodyrect=document.body.getBoundingClientRect();

let rectHome=Home.getBoundingClientRect().top - bodyrect.top;
let rectAbout=About.getBoundingClientRect().top - bodyrect.top;
let rectServices=Services.getBoundingClientRect().top - bodyrect.top;
let rectSkills=Skills.getBoundingClientRect().top - bodyrect.top;
let rectEducation=Education.getBoundingClientRect().top - bodyrect.top;
let rectExperience=Experience.getBoundingClientRect().top - bodyrect.top;
let rectWork=Work.getBoundingClientRect().top - bodyrect.top;
let rectBlog=Blog.getBoundingClientRect().top - bodyrect.top;
let rectContact=Contact.getBoundingClientRect().top - bodyrect.top;



let navLinks=document.querySelectorAll('.nav-link');



$(window).scroll(()=>{
  var scrollPosition = $(window).scrollTop();
   
    if(scrollPosition>=3681&&scrollPosition<=3690){
      $(childnodes_skils[1]).addClass('animateLeft')
    }
    if(scrollPosition>=3923&&scrollPosition<=4000){
     
      $(childnodes_skils[5]).addClass('animateRight')
    }
    if(scrollPosition>=4077&&scrollPosition<=4300){
      $(childnodes_skils[11]).addClass('animateRight')
    }
    if(scrollPosition>=4319&&scrollPosition<=4400){
      $(childnodes_education[1]).addClass('animateRight')
    }
    if(scrollPosition>=4468&&scrollPosition<=4500){
      $(childnodes_education[3]).addClass('animateUp');
    }
    if(scrollPosition>=4896&&scrollPosition<=4910){
      $(childnodes_experience[1]).addClass('animateLeft');
    }
    if(scrollPosition>=5066&&scrollPosition<=5140){
      $(subChild[1]).addClass('animateLeft')
    }
    if(scrollPosition>=5411&&scrollPosition<=5590){
      $(subChild[3]).addClass('animateRight')
    }
    if(scrollPosition>=5662&&scrollPosition<=5790){
      $(subChild[5]).addClass('animateLeft')
    }
    if(scrollPosition>=5932&&scrollPosition<=6000){
      $(subChild[7]).addClass('animateLeft')
    }
    if(scrollPosition>=6164&&scrollPosition<=6200){
      $(subChild[9]).addClass('animateRight')
    }
    if(scrollPosition>=6359&&scrollPosition<=6517){
$(childnodes_work[1]).addClass('animateUp')
    }
    if(scrollPosition>=6579&&scrollPosition<=6600){
$(childnodes_work[3]).addClass('animateBottom')
    }
    if(scrollPosition>=6700&&scrollPosition<=6780){
$(childnodes_work[5]).addClass('animateLeft')
    }
    if(scrollPosition>=7352&&scrollPosition<=7500){
$(childnodes_blog[1]).addClass('animateBottom')
    }
    if(scrollPosition>=7540&&scrollPosition<=7590){
$(childnodes_blog[3]).addClass('animateUp')
    }
    if(scrollPosition>=8064&&scrollPosition<=8150){
      $(childnodes_contact[1]).addClass('animateBottom')
    }
    if(scrollPosition>=8292&&scrollPosition<=8500){
      $(childnodes_contact[3]).addClass('animateLeft')
    }

    // --------------------------------

    if(scrollPosition>=rectHome-300){
      navLinks[0].classList.add('linkHighlight')
      navLinks[1].classList.remove('linkHighlight')
    }
  
    if(scrollPosition>=rectAbout-100){
      
      $(childnodes_about[1]).addClass('animateRight') ;
      $(aboutChilds[1]).addClass('animateRight')
      $(aboutChilds[5]).addClass('animateRight')
      $(aboutChilds[3]).addClass('animateUp')
      $(aboutChilds[7]).addClass('animateUp')
      $(childnodes_about[3]).addClass('animateRight') ;
      $(childnodes_about[5]).addClass('animateRight') ;


      navLinks[0].classList.remove('linkHighlight')
      navLinks[2].classList.remove('linkHighlight')
      navLinks[1].classList.add('linkHighlight')
    }
    if(scrollPosition>=rectServices-100){
      $(childnodes_services[1]).addClass('animateRight')
      $(servicesChild[1]).addClass('animateUp')
      $(servicesChild[3]).addClass('animateBottom')
      $(servicesChild[5]).addClass('animateRight')
      $(servicesChild[7]).addClass('animateLeft')
      $(childnodes_services[5]).addClass('animateRight');



      navLinks[1].classList.remove('linkHighlight')
      navLinks[3].classList.remove('linkHighlight')
      navLinks[2].classList.add('linkHighlight')
    }
    if(scrollPosition>=rectSkills-100){
      navLinks[2].classList.remove('linkHighlight')
      navLinks[4].classList.remove('linkHighlight')
      navLinks[3].classList.add('linkHighlight')
    }
    if(scrollPosition>=rectEducation-100){
      navLinks[3].classList.remove('linkHighlight')
      navLinks[5].classList.remove('linkHighlight')
      navLinks[6].classList.remove('linkHighlight')
      navLinks[4].classList.add('linkHighlight')
    }
    if(scrollPosition>=rectExperience-100){
      navLinks[4].classList.remove('linkHighlight')
      navLinks[6].classList.remove('linkHighlight')
      navLinks[5].classList.add('linkHighlight')
    }
    if(scrollPosition>=rectWork-100){
      navLinks[5].classList.remove('linkHighlight')
      navLinks[7].classList.remove('linkHighlight')
      navLinks[8].classList.remove('linkHighlight')
      navLinks[6].classList.add('linkHighlight')
    }
    if(scrollPosition>=rectBlog-100){
      navLinks[6].classList.remove('linkHighlight')
      navLinks[8].classList.remove('linkHighlight')
      navLinks[7].classList.add('linkHighlight')
    }
    if(scrollPosition>=rectContact-100){
      navLinks[7].classList.remove('linkHighlight')
      navLinks[8].classList.add('linkHighlight')
    }

})

let bodyMode=document.querySelector('body')
let shortTitle=document.querySelectorAll('.short-title')
let textHighlight=document.querySelectorAll('.text-highlight-2')
let card=document.querySelectorAll('.card')
let experience=document.querySelectorAll('.experience')
let cardDesign2=document.querySelectorAll('.card-Design2')
let h4=document.querySelectorAll('h4')
let header=document.querySelector('header')
let navText=document.querySelector('.nav-text')
mode.addEventListener('click',()=>{
  if(mode.innerHTML==="Dark-Mode"){
    mode.innerHTML="Light-Mode";
    mode.classList.add('bg-light','text-dark')
    bodyMode.classList.add('bg-dark');
    bodyMode.classList.add('text-white');
    navText.classList.add('text-white');
    header.classList.add('bg-dark','text-white','border');

for(let i=0;i<shortTitle.length;i++){
  shortTitle[i].classList.add('text-white');
}
for(let i=0;i<textHighlight.length;i++){
  textHighlight[i].classList.add('text-white');
}
for(let i=0;i<h4.length;i++){
  h4[i].classList.add('text-white');
}
for(let i=0;i<experience.length;i++){
  experience[i].classList.add('bg-dark','border');
}
for(let i=0;i<cardDesign2.length;i++){
  cardDesign2[i].classList.add('bg-dark','border');
}
for(let i=0;i<navLinks.length;i++){
  navLinks[i].classList.add('text-white');
}
  }
  else{
    mode.innerHTML="Dark-Mode";
    mode.classList.remove('bg-light','text-dark')
    bodyMode.classList.remove('bg-dark');
    bodyMode.classList.remove('text-white');
    navText.classList.remove('text-white');
    header.classList.remove('bg-dark','text-white','border');

for(let i=0;i<shortTitle.length;i++){
  shortTitle[i].classList.remove('text-white');
}
for(let i=0;i<textHighlight.length;i++){
  textHighlight[i].classList.remove('text-white');
}
for(let i=0;i<h4.length;i++){
  h4[i].classList.remove('text-white');
}
for(let i=0;i<experience.length;i++){
  experience[i].classList.remove('bg-dark','border');
}
for(let i=0;i<cardDesign2.length;i++){
  cardDesign2[i].classList.remove('bg-dark','border');
}
for(let i=0;i<navLinks.length;i++){
  navLinks[i].classList.remove('text-white');
}
  }
})




