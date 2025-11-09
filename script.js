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

  const themeToggle = document.getElementById('theme-toggle');

  if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
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
  const GITHUB_USERNAME = 'MahmoudAbade';

  async function fetchAndDisplayProjects() {
    const projectsContainer = document.getElementById('projects-container');
    if (!projectsContainer) return;

    try {
      const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc`);
      if (!response.ok) {
        throw new Error(`GitHub API returned ${response.status}`);
      }
      const repos = await response.json();

      projectsContainer.innerHTML = ''; // Clear existing projects

      repos.slice(0, 6).forEach(repo => { // Display latest 6 projects
        const projectCard = `
          <div class="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div class="flex flex-col lg:flex-row gap-8">
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">${repo.name}</h3>
                <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">${repo.description || 'No description available.'}</p>
                <div class="flex flex-wrap gap-2 mb-6">
                  ${repo.language ? `<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">${repo.language}</span>` : ''}
                  <span class="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Stars: ${repo.stargazers_count}</span>
                  <span class="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Forks: ${repo.forks_count}</span>
                </div>
                <div class="flex gap-4">
                  <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">(GitHub) <span>Code</span></a>
                  ${repo.homepage ? `<a href="${repo.homepage}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors">(ExternalLink) <span>Live Demo</span></a>` : ''}
                </div>
              </div>
            </div>
          </div>
        `;
        projectsContainer.innerHTML += projectCard;
      });
    } catch (error) {
      console.error("Failed to fetch projects:", error);
      projectsContainer.innerHTML = '<p class="text-center text-red-500">Failed to load projects. Please try again later.</p>';
    }
  }

  async function fetchAndDisplayProfile() {
    try {
      const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
      if (!response.ok) {
        throw new Error(`GitHub API returned ${response.status}`);
      }
      const user = await response.json();

      document.getElementById('user-name').textContent = user.name;
      document.getElementById('user-name-nav').textContent = user.name;
      document.getElementById('user-bio').textContent = user.bio;
      document.getElementById('user-location').textContent = user.location;
      document.getElementById('user-email').href = `mailto:${user.email}`;
      document.getElementById('user-github').href = user.html_url;
      document.getElementById('user-linkedin').href = `https://linkedin.com/in/${user.login}`; // This is a guess, update if you have a different linkedin
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
    }
  }

  fetchAndDisplayProjects();
  fetchAndDisplayProfile();
});
