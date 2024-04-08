
 var x = document.querySelectorAll('.drum').length;

 for(var i=0; i<x;i++)
 {
    document.querySelectorAll('.drum')[i].addEventListener('click',handleclick);
 
 }
 document.addEventListener("keypress",function(e){
   Mouseclick(e.key)
 })
 function Mouseclick(key){
    //var buttonInnerHTML = this.innerHTML;
  switch (key) {
             case 'w': var audio = new Audio("sounds/crash.mp3");
             audio.play();
             break;
  
             case 'a': var audio = new Audio("sounds/tom-2.mp3");
             audio.play();
             break;
             case 's': var audio = new Audio("sounds/tom-3.mp3");
             audio.play();
             break;
             case 'd': var audio = new Audio("sounds/tom-4.mp3");
             audio.play();
             break;
             case 'j': var audio = new Audio("sounds/tom-1.mp3");
             audio.play();
             break;
             case 'k': var audio = new Audio("sounds/kick-bass.mp3");
             audio.play();
             break;
             case 'l': var audio = new Audio("sounds/snare.mp3");
             audio.play();
             break;
  }
  }
  
  function Mouseclick(key){
    //var buttonInnerHTML = this.innerHTML;
  switch (key) {
             case 'w': var audio = new Audio("sounds/crash.mp3");
             audio.play();
             break;
  
             case 'a': var audio = new Audio("sounds/tom-2.mp3");
             audio.play();
             break;
             case 's': var audio = new Audio("sounds/tom-3.mp3");
             audio.play();
             break;
             case 'd': var audio = new Audio("sounds/tom-4.mp3");
             audio.play();
             break;
             case 'j': var audio = new Audio("sounds/tom-1.mp3");
             audio.play();
             break;
             case 'k': var audio = new Audio("sounds/kick-bass.mp3");
             audio.play();
             break;
             case 'l': var audio = new Audio("sounds/snare.mp3");
             audio.play();
             break;
  }
  }
  function handleclick(){
    var buttonInnerHTML = this.innerHTML;
  switch (buttonInnerHTML) {
             case 'w': var audio = new Audio("sounds/crash.mp3");
             audio.play();
             break;
  
             case 'a': var audio = new Audio("sounds/tom-2.mp3");
             audio.play();
             break;
             case 's': var audio = new Audio("sounds/tom-3.mp3");
             audio.play();
             break;
             case 'd': var audio = new Audio("sounds/tom-4.mp3");
             audio.play();
             break;
             case 'j': var audio = new Audio("sounds/tom-1.mp3");
             audio.play();
             break;
             case 'k': var audio = new Audio("sounds/kick-bass.mp3");
             audio.play();
             break;
             case 'l': var audio = new Audio("sounds/snare.mp3");
             audio.play();
             break;
  }
  }
  
  
 
 