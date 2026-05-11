const swaps = [
  "building interfaces that feel alive",
  "frontend engineer & creative coder",
  "turning sketches into products"
];

let i = 0;

const swapText = document.getElementById("swap-text");

setInterval(() => {
  i = (i + 1) % swaps.length;
  swapText.textContent = swaps[i];
}, 4000);

// scroll reveal

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";

    }

  });

}, {
  threshold: 0.1
});

document
  .querySelectorAll(".exp-item, .project-card")
  .forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition =
      "opacity 0.5s ease, transform 0.5s ease";

    observer.observe(el);
  });

  
    // apagar isso:
    /* ===================== MAINTENANCE LOADING ===================== */

    const maintenanceText =
      document.getElementById("maintenance-text");

    const frames = [

      "Site em reforma  91%.",
      "Site em reforma  91%..",
      "Site em reforma  91%...",

      "Site em reforma  92%.",
      "Site em reforma  92%..",
      "Site em reforma  92%...",

      "Site em reforma  93%.",
      "Site em reforma  93%..",
      "Site em reforma  93%...",

      "Site em reforma  92%...",
      "Site em reforma  92%..",
      "Site em reforma  92%.",

      "Site em reforma  91%...",
      "Site em reforma  91%..",
      "Site em reforma  91%.",

    ];

    let frameIndex = 0;

    setInterval(() => {

      maintenanceText.textContent =
        frames[frameIndex];

      frameIndex =
        (frameIndex + 1) % frames.length;

    }, 320);
// apagar