// Reveal-on-scroll: fade elements in as they enter the viewport.
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Scroll-spy: highlight the nav link for the section currently in view.
// Scroll progress: thin royal bar at the top reflects page position.
const navAs = document.querySelectorAll('.nav__links a');
const secs = [...document.querySelectorAll('section[id]')];
const progress = document.getElementById('scrollProgress');

window.addEventListener('scroll', () => {
  let cur = '';
  secs.forEach(s => { if (pageYOffset >= s.offsetTop - 160) cur = s.id; });
  navAs.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
  });

  if (progress) {
    const h = document.documentElement;
    const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    progress.style.width = pct + '%';
  }
});
