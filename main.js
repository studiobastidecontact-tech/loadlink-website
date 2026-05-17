// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Subtle parallax on hero mockup
const mockup = document.querySelector(".hero-mockup");
if (mockup) {
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        if (scrolled < 800) {
          mockup.style.transform = `translateY(${scrolled * 0.08}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  });
}
