document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Smooth Scrolling for internal links
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.getElementById(targetId.substring(1));

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });

        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
        }
      }
    });
  });

  // Theme Toggle
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle ? themeToggle.querySelector('span') : null;

  function updateThemeIcon() {
    if (themeIcon) {
      if (document.documentElement.classList.contains('dark')) {
        themeIcon.textContent = 'light_mode'; // Icon to switch to light
      } else {
        themeIcon.textContent = 'dark_mode'; // Icon to switch to dark
      }
    }
  }

  // Initialize Theme
  if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  updateThemeIcon();

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
      updateThemeIcon();
    });
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
          <div class="group relative rounded-xl overflow-hidden shadow-lg aspect-video cursor-pointer bg-gradient-to-br from-gray-100 to-gray-200 dark:from-surface-dark dark:to-background-dark border border-gray-200 dark:border-gray-700">
              <div class="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <span class="material-symbols-outlined text-4xl text-primary mb-2">code</span>
                  <h4 class="text-xl font-bold text-gray-800 dark:text-white">${repo.name}</h4>
                  <p class="text-sm text-gray-500 mt-2">${repo.language || 'Code'}</p>
              </div>
              <div class="absolute inset-0 bg-background-dark/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div class="text-center p-4">
                      <h4 class="text-xl font-bold text-white mb-2">${repo.name}</h4>
                      <p class="text-gray-300 text-sm mb-4 line-clamp-3">${repo.description || 'No description available.'}</p>
                      <div class="flex justify-center gap-2">
                          <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 px-4 py-2 bg-primary text-white rounded hover:bg-primary-hover transition-colors text-sm">
                            <span class="material-symbols-outlined text-sm">code</span> Code
                          </a>
                          ${repo.homepage ? `<a href="${repo.homepage}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 px-4 py-2 bg-transparent border border-white text-white rounded hover:bg-white hover:text-background-dark transition-colors text-sm"><span class="material-symbols-outlined text-sm">open_in_new</span> Demo</a>` : ''}
                      </div>
                  </div>
              </div>
          </div>
        `;
        projectsContainer.innerHTML += projectCard;
      });
    } catch (error) {
      console.error("Failed to fetch projects:", error);
      projectsContainer.innerHTML = '<p class="text-center text-red-500 col-span-full">Failed to load projects. Please try again later.</p>';
    }
  }

  async function fetchAndDisplayProfile() {
    try {
      const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
      if (!response.ok) {
        throw new Error(`GitHub API returned ${response.status}`);
      }
      const user = await response.json();

      const updateText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
      };

      const updateHref = (id, href) => {
        const el = document.getElementById(id);
        if (el) el.href = href;
      };

      updateText('user-name', user.name || user.login);
      updateText('user-name-nav', user.name || user.login);
      updateText('footer-user-name', user.name || user.login);

      if (user.bio) {
        updateText('user-bio', user.bio);
      }

      const imgEl = document.getElementById('profile-image');
      if (imgEl && user.avatar_url) {
        imgEl.src = user.avatar_url;
      }

      updateHref('user-email', `mailto:${user.email || ''}`);
      updateHref('user-github', user.html_url);

      // Basic guess for LinkedIn or other links if provided in blog/bio
      // Ideally this would come from a config or parsed from bio, but standardizing:
      // We leave 'user-linkedin' as placeholder or update if user has it in 'blog' field and it's a linkedin url
      if (user.blog && user.blog.includes('linkedin.com')) {
          updateHref('user-linkedin', user.blog);
      } else {
        // Keep default or hide? Keeping default template link for now.
      }

    } catch (error) {
      console.error("Failed to fetch user profile:", error);
    }
  }

  fetchAndDisplayProjects();
  fetchAndDisplayProfile();
});
