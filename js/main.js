/* ============================================
   main.js — All interactivity
============================================ */

/* --- Scroll reveal --- */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => {
  revealObserver.observe(el);
});


/* --- Contact form --- */
const sendBtn = document.getElementById('sendBtn');

if (sendBtn) {
  sendBtn.addEventListener('click', () => {
    const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    let valid = true;

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        input.style.borderColor = '#f472b6';
        valid = false;
      } else {
        input.style.borderColor = '';
      }
    });

    if (!valid) return;

    sendBtn.textContent = 'Message Sent ✓';
    sendBtn.style.background = '#34d399';
    sendBtn.disabled = true;

    setTimeout(() => {
      sendBtn.textContent = 'Send Message ↗';
      sendBtn.style.background = '';
      sendBtn.disabled = false;
      inputs.forEach((input) => (input.value = ''));
    }, 3000);
  });
}


/* --- Navbar hide/show on scroll --- */
let lastScrollY = window.scrollY;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY && window.scrollY > 80) {
    navbar.style.transform = 'translateY(-100%)';
    navbar.style.transition = 'transform 0.3s ease';
  } else {
    navbar.style.transform = 'translateY(0)';
  }
  lastScrollY = window.scrollY;
});
