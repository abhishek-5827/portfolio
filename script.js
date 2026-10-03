document.getElementById('yr').textContent = new Date().getFullYear();

// Typing effect
const roles = ['Full Stack Developer', 'Java Developer', 'Cloud & DevOps Learner'];
let r = 0, c = 0, del = false;
const typed = document.getElementById('typed');
(function type() {
  const word = roles[r];
  typed.textContent = word.slice(0, del ? c-- : c++);
  let delay = del ? 50 : 100;
  if (!del && c > word.length) { del = true; delay = 1400; }
  else if (del && c < 0) { del = false; r = (r + 1) % roles.length; c = 0; delay = 400; }
  setTimeout(type, delay);
})();

// Scroll reveal
const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add('visible')), { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Theme toggle
const root = document.documentElement;
try { const t = localStorage.getItem('theme'); if (t) root.dataset.theme = t; } catch (e) {}
document.getElementById('theme').onclick = () => {
  const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme:dark)').matches;
  root.dataset.theme = dark ? 'light' : 'dark';
  try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
};

// Contact form -> opens email app (change the address below)
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const body = encodeURIComponent(msg.value + '\n\nFrom: ' + email.value);
  location.href = 'mailto:abhishekpatil0260@gmail.com?subject=' + encodeURIComponent('Portfolio message from ' + name.value) + '&body=' + body;
  status.textContent = 'Opening your email app…';
});
