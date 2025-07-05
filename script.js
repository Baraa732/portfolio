// Navbar Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
   navLinks.classList.toggle('active');
   menuToggle.classList.toggle('fa-times');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
   link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.classList.remove('fa-times');
   });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
         window.scrollTo({
            top: targetElement.offsetTop - 90,
            behavior: 'smooth'
         });
      }
   });
});

// Scroll animation
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {
   fadeElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight - 100) {
         element.style.opacity = '1';
         element.style.transform = 'translateY(0)';
      }
   });
};

// Initialize elements as invisible
fadeElements.forEach(element => {
   element.style.opacity = '0';
   element.style.transform = 'translateY(30px)';
   element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
});

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

// Navbar scroll effect
window.addEventListener('scroll', () => {
   if (window.scrollY > 50) {
      document.querySelector('header').style.boxShadow = '0 10px 40px rgba(10, 92, 54, 0.7)';
   } else {
      document.querySelector('header').style.boxShadow = '0 5px 30px rgba(10, 92, 54, 0.5)';
   }
});