// Smooth Scroll for Navbar Links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Dynamic Button Hover and Click Animations
const buttons = document.querySelectorAll('.cta');

buttons.forEach(button => {
  // Add hover effect
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'scale(1.1)';
    button.style.boxShadow = '0 10px 20px rgba(0, 166, 214, 0.3)';
  });

  // Remove hover effect
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'scale(1)';
    button.style.boxShadow = 'none';
  });

  // Add click effect
  button.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default action
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
      button.style.transform = 'scale(1.1)';
    }, 150);
  });
});
