const toggleBtn = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

toggleBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  // Toggle hamburger/close icon
  if(navMenu.classList.contains('active')) {
    toggleBtn.innerHTML = '&times;';
  } else {
    toggleBtn.innerHTML = '&#9776;';
  }
});

// Close menu when clicking any link (on mobile)
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if(window.innerWidth <= 768 && navMenu.classList.contains('active')){
      navMenu.classList.remove('active');
      toggleBtn.innerHTML = '&#9776;';
    }
  });
});
