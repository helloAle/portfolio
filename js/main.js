/* ?? TYPEWRITER ??????????????????????????????????????? */
const phrases    = ["SOFTWARE ENGINEER", "FRONT END DEVELOPER", "UI/UX DESIGNER"];
const el         = document.getElementById('hero-text');

const TYPING_SPEED   = 80;
const DELETING_SPEED = 45;
const PAUSE_AFTER    = 2000;
const PAUSE_BEFORE   = 300;

let phraseIndex = 0;

function deletePhrase(callback) {
  let text = el.textContent;
  function step() {
    if (text.length > 0) {
      text = text.slice(0, -1);
      el.textContent = text;
      setTimeout(step, DELETING_SPEED);
    } else {
      callback();
    }
  }
  step();
}

function typePhrase(phrase, callback) {
  let i = 0;
  function step() {
    if (i < phrase.length) {
      el.textContent += phrase[i];
      i++;
      setTimeout(step, TYPING_SPEED);
    } else {
      callback();
    }
  }
  step();
}

function cycle() {
  setTimeout(() => {
    deletePhrase(() => {
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(() => {
        typePhrase(phrases[phraseIndex], () => {
          cycle();
        });
      }, PAUSE_BEFORE);
    });
  }, PAUSE_AFTER);
}

cycle();

/* ?? SCROLL REVEAL ???????????????????????????????????? */
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

/* ?? FORM ????????????????????????????????????????????? */
const form  = document.getElementById('message-mail');
const popup = document.getElementById('form-popup');

if (form && popup) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    await fetch('https://formsubmit.co/ajax/olidev.alexandre@gmail.com', {
      method: 'POST',
      body: data,
    });
    popup.classList.remove('hidden');
    setTimeout(() => popup.classList.add('hidden'), 3000);
    form.reset();
  });
}


 // apagar isso:
    /* ===================== MAINTENANCE LOADING ===================== */

    // const maintenanceText =
    //   document.getElementById("maintenance-text");

    // const frames = [
    //   "Website under maintenance",
    //   "Website under maintenance.",
    //   "Website under maintenance..",
    //   "Website under maintenance...",
    // ];

    // let frameIndex = 0;

    // setInterval(() => {

    //   maintenanceText.textContent =
    //     frames[frameIndex];

    //   frameIndex =
    //     (frameIndex + 1) % frames.length;

    // }, 320);
    // function closePopup() {

    //   document
    //     .getElementById("maintenance-overlay")
    //     .style.display = "none";
    // }
// apagar


//      ______                                                             __ 
//    _/      \_                                                          |  \
//   /   $$$$$$ \    _______  ________  __    __  ______   _______    ____| $$
//  /  $$$____$$$\  /       \|        \|  \  /  \|      \ |       \  /      $$
// |  $$/     \ $$\|  $$$$$$$ \$$$$$$$$ \$$\/  $$ \$$$$$$\| $$$$$$$\|  $$$$$$$
// | $$|  $$$$$| $$ \$$    \   /    $$   >$$  $$ /      $$| $$  | $$| $$  | $$
// | $$| $$| $$| $$ _\$$$$$$\ /  $$$$_  /  $$$$\|  $$$$$$$| $$  | $$| $$__| $$
// | $$ \$$  $$| $$|       $$|  $$    \|  $$ \$$\\$$    $$| $$  | $$ \$$    $$
//  \$$\ \$$$$$$$$  \$$$$$$$  \$$$$$$$$ \$$   \$$ \$$$$$$$ \$$   \$$  \$$$$$$$
//   \$$\ __/   \                                                             
//    \$$$    $$$                                                             
//      \$$$$$$   
