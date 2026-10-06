// Mobile menu
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('open');
  burger.classList.remove('open');
  burger.setAttribute('aria-expanded', false);
}));

// Navbar border on scroll + active link
const nav = document.getElementById('nav');
const links = [...menu.querySelectorAll('a')];
const sections = links.map(a => document.querySelector(a.getAttribute('href')));
function onScroll() {
  nav.classList.toggle('scrolled', window.scrollY > 10);
  const y = window.scrollY + 120;
  let current = 0;
  sections.forEach((s, i) => { if (s.offsetTop <= y) current = i; });
  links.forEach((a, i) => a.classList.toggle('active', i === current));
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Typing effect
const words = ['Developer', 'Designer', 'Developer & Designer'];
const typed = document.getElementById('typed');
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reduce) {
  typed.textContent = words[2];
} else {
  let w = 0, c = 0, del = false;
  (function tick() {
    const word = words[w];
    typed.textContent = word.slice(0, c);
    if (!del && c === word.length) { del = w < words.length - 1; if (!del) return; setTimeout(tick, 1100); return; }
    if (del && c === 0) { del = false; w++; }
    c += del ? -1 : 1;
    setTimeout(tick, del ? 45 : 90);
  })();
}

// Contact form -> submits directly to Formspree, sends email automatically
// (no code needed here: the form's action="https://formspree.io/f/xeaonrgj" handles it)

document.getElementById('year').textContent = new Date().getFullYear();