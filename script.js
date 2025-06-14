document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      // Optional: Toggle ARIA attributes for accessibility
      const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true' || false;
      mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.setAttribute('aria-hidden', isExpanded);
    });
  }

  // Smooth Scrolling for internal links
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      // Corrected: Use document.getElementById for IDs or document.querySelector for general selectors
      const targetElement = document.getElementById(targetId.substring(1)); // Remove # for getElementById

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });

        // If it's a mobile menu link, close the menu after clicking
        if (mobileMenu && !mobileMenu.classList.contains('hidden') && link.closest('#mobile-menu')) {
          mobileMenu.classList.add('hidden');
          if (mobileMenuButton) {
            mobileMenuButton.setAttribute('aria-expanded', 'false');
          }
          mobileMenu.setAttribute('aria-hidden', 'true');
        }
      }
    });
  });

  // Contact Form: Basic feedback (no actual submission)
  // Assuming the form in Contact section might look like: <form id="contact-form" ...>
  // Or get it by its structure if no ID is present.
  // For this example, let's assume the form is the only form in the #contact section.
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    const contactForm = contactSection.querySelector('form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // In a real scenario, you'd collect formData and send it.
        // For now, just give user feedback.
        alert('Message sent successfully! (This is a demo and does not actually send data.)');
        // Clear the form
        this.reset();
      });
    }
  }
});
