/* ???????????????????????????????????????????
   SWAP TEXT ? hero subtitle cycling
??????????????????????????????????????????? */

const swaps = [
  "building interfaces that feel alive",
  "frontend engineer & creative coder",
  "turning sketches into products"
];

let i = 0;
const swapText = document.getElementById("swap-text");

setInterval(() => {
  // Fade out
  swapText.style.opacity = "0";
  swapText.style.transform = "translateY(6px)";

  setTimeout(() => {
    i = (i + 1) % swaps.length;
    swapText.textContent = swaps[i];

    // Fade in
    swapText.style.opacity = "1";
    swapText.style.transform = "translateY(0)";
  }, 350);

}, 4000);

// Initialise transition on the swap span
if (swapText) {
  swapText.style.display = "inline-block";
  swapText.style.transition = "opacity 0.35s ease, transform 0.35s ease";
}

/* ???????????????????????????????????????????
   SCROLL REVEAL ? IntersectionObserver
??????????????????????????????????????????? */

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, idx) => {
    if (entry.isIntersecting) {
      // Stagger siblings slightly
      const delay = idx * 80;
      setTimeout(() => {
        entry.target.classList.add("visible");
      }, delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: "0px 0px -40px 0px"
});

document.querySelectorAll(".reveal").forEach(el => {
  revealObserver.observe(el);
});

/* ???????????????????????????????????????????
   NAVBAR ? shrink on scroll + active link
??????????????????????????????????????????? */

const nav = document.getElementById("mainNav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
}, { passive: true });

// Highlight active nav link based on scroll position
const sections  = document.querySelectorAll("section[id]");
const navLinks  = document.querySelectorAll(".alle-nav .nav-link");

const activateLink = () => {
  let current = "";

  sections.forEach(section => {
    const top = section.offsetTop - 100;
    if (window.scrollY >= top) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
};

window.addEventListener("scroll", activateLink, { passive: true });


 // apagar isso:
    /* ===================== MAINTENANCE LOADING ===================== */

    const maintenanceText =
      document.getElementById("maintenance-text");

    const frames = [

      "Site em reforma.",
      "Site em reforma..",
      "Site em reforma...",
    ];

    let frameIndex = 0;

    setInterval(() => {

      maintenanceText.textContent =
        frames[frameIndex];

      frameIndex =
        (frameIndex + 1) % frames.length;

    }, 320);
// apagar