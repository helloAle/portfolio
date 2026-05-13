/* ???????????????????????????????????????????
   TYPEWRITER ? hero title cycling
??????????????????????????????????????????? */

const phrases = [
  "SOFTWARE ENGINEER",
  "FRONT END DEVELOPER",
];

const leftWords  = ["SOFTWARE",   "FRONT END"];
const rightWords = ["ENGINEER",   "DEVELOPER"];

const leftEl  = document.querySelector(".word-left-a")  || document.querySelector(".word-left-b");
const rightEl = document.querySelector(".word-right-a") || document.querySelector(".word-right-b");

// Seleciona os elementos das duas rows
const leftA  = document.querySelector(".word-left-a");
const rightA = document.querySelector(".word-right-a");
const leftB  = document.querySelector(".word-left-b");
const rightB = document.querySelector(".word-right-b");

// Remove as anima??es CSS existentes
[leftA, rightA, leftB, rightB].forEach(el => {
  if (el) el.style.animation = "none";
});

// Mostra s? a row A no in?cio, esconde a row B
if (leftB)  leftB.style.opacity  = "0";
if (rightB) rightB.style.opacity = "0";
if (leftA)  leftA.style.opacity  = "1";
if (rightA) rightA.style.opacity = "1";

// Pipe fica vis?vel fixo (sem piscar do CSS)
const pipe = document.querySelector(".hero-pipe");
if (pipe) pipe.style.display = "none";

let phraseIndex = 0;

const TYPING_SPEED   = 80;   // ms por caractere digitando
const DELETING_SPEED = 45;   // ms por caractere apagando
const PAUSE_AFTER    = 2000; // ms de pausa ap?s digitar tudo
const PAUSE_BEFORE   = 300;  // ms de pausa antes de come?ar a digitar

function setHeroText(left, right) {
  if (leftA)  leftA.textContent  = left;
  if (rightA) rightA.textContent = right;
}

function typeWriter() {
  const nextIndex = (phraseIndex + 1) % leftWords.length;

  const currentLeft  = leftWords[phraseIndex];
  const currentRight = rightWords[phraseIndex];
  const nextLeft     = leftWords[nextIndex];
  const nextRight    = rightWords[nextIndex];

  // ? Apaga a frase atual (da direita pra esquerda em ambas as palavras)
  function deletePhrase(callback) {
    let l = currentLeft.length;
    let r = currentRight.length;

    function step() {
      if (r > 0) {
        r--;
        setHeroText(currentLeft.slice(0, l), currentRight.slice(0, r));
        setTimeout(step, DELETING_SPEED);
      } else if (l > 0) {
        l--;
        setHeroText(currentLeft.slice(0, l), "");
        setTimeout(step, DELETING_SPEED);
      } else {
        callback();
      }
    }
    step();
  }

  // ? Digita a pr?xima frase
  function typePhrase(callback) {
    let l = 0;
    let r = 0;

    function step() {
      if (l < nextLeft.length) {
        l++;
        setHeroText(nextLeft.slice(0, l), "");
        setTimeout(step, TYPING_SPEED);
      } else if (r < nextRight.length) {
        r++;
        setHeroText(nextLeft, nextRight.slice(0, r));
        setTimeout(step, TYPING_SPEED);
      } else {
        callback();
      }
    }
    step();
  }

  // Sequ?ncia: pausa ? apaga ? pausa ? digita ? pausa ? repete
  setTimeout(() => {
    deletePhrase(() => {
      phraseIndex = nextIndex;
      setTimeout(() => {
        typePhrase(() => {
          setTimeout(typeWriter, PAUSE_AFTER);
        });
      }, PAUSE_BEFORE);
    });
  }, PAUSE_AFTER);
}

// Inicia ap?s a primeira exibi??o
setTimeout(typeWriter, PAUSE_AFTER);

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));



 // apagar isso:
    /* ===================== MAINTENANCE LOADING ===================== */

    const maintenanceText =
      document.getElementById("maintenance-text");

    const frames = [
      "Website under maintenance",
      "Website under maintenance.",
      "Website under maintenance..",
      "Website under maintenance...",
    ];

    let frameIndex = 0;

    setInterval(() => {

      maintenanceText.textContent =
        frames[frameIndex];

      frameIndex =
        (frameIndex + 1) % frames.length;

    }, 320);
    function closePopup() {

      document
        .getElementById("maintenance-overlay")
        .style.display = "none";
    }
// apagar
