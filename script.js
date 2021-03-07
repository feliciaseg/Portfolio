window.onload = start;
//GLOBAL VARIABLES
const textArray = [
  "HTML5",
  "agila metoder",
  "React Native",
  "CSS",
  "Typescript",
  "Scrum",
  "Bootstrap",
  "Git",
  "Objekt-orienterad programmering",
  "Kanban",
  "Javascript",
  "React",
  "P5.js",
  "JSDoc",
];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 1000;
let textArrayIndex = 0;
let charIndex = 0;

function start() {
  typingEffectProject();
  fadeIn();
  let scroll = new SmoothScroll('a[href*="#"]');
}

function fadeIn() {
  const fade = document.getElementById("startSection");
  let opacity = 0;
  const intervalID = setInterval(function () {
    if (opacity < 1) {
      opacity = opacity + 0.2;
      fade.style.opacity = opacity;
    } else {
      clearInterval(intervalID);
    }
  }, 100);
}

function typingEffectProject() {
  const typedTextSpan = document.getElementById("typed-text");
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typingEffectProject, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  const typedTextSpan = document.getElementById("typed-text");
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(typingEffectProject, typingDelay + 1100);
  }
}
