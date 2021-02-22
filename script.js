

window.onload = start;

function start() {
    fadeIn();

}

function fadeIn() {
    const fade = document.getElementById("startSection");
     let opacity = 0;
     const intervalID = setInterval (function() {
         if (opacity < 1) {
             opacity = opacity + 0.2
             fade.style.opacity = opacity;
         } else {
             clearInterval (intervalID);
         }
     }, 100); 
 }
