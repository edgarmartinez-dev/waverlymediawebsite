// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal-on-scroll for cards and feature tiles
const revealEls = document.querySelectorAll('.card, .feat__item, .quote');
if ('IntersectionObserver' in window) {
  revealEls.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  const reveal = (el) => {
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        reveal(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach((el) => io.observe(el));
  // Safety net: never leave content hidden if the observer hasn't fired.
  setTimeout(() => revealEls.forEach(reveal), 1600);
}
