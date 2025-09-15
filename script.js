// JavaScript for interactive functionality

document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    const searchInput = document.querySelector('.navbar__search-input');
    const searchHint = document.querySelector('.navbar__search-hint');

    // Handle search input focus
    if (searchInput) {
        searchInput.addEventListener('focus', function() {
            searchHint.style.opacity = '0.5';
        });

        searchInput.addEventListener('blur', function() {
            searchHint.style.opacity = '1';
        });

        // Handle Ctrl+K shortcut for search
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.key === 'k') {
                e.preventDefault();
                searchInput.focus();
            }
        });

        // Handle search functionality
        searchInput.addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase();
            // Add search logic here
            console.log('Searching for:', query);
        });
    }

    // Sidebar menu expansion/collapse
    const menuLinks = document.querySelectorAll('.menu__link--sublist');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const parentItem = this.closest('.menu__list-item');
            const submenu = parentItem.querySelector('.menu__list');

            if (submenu) {
                const isExpanded = submenu.style.display !== 'none';
                submenu.style.display = isExpanded ? 'none' : 'block';

                // Add/remove expanded class for styling
                parentItem.classList.toggle('expanded', !isExpanded);
            }
        });
    });

    // Ask AI button functionality
    const askAiButton = document.querySelector('.ask-ai__button');
    if (askAiButton) {
        askAiButton.addEventListener('click', function() {
            // Simulate AI interaction
            const currentText = this.textContent;
            this.textContent = '🤖 Thinking...';
            this.disabled = true;

            setTimeout(() => {
                this.textContent = currentText;
                this.disabled = false;
                // Here you would typically open an AI chat interface
                alert('AI assistant would open here!');
            }, 1000);
        });
    }

    // Feedback buttons
    const feedbackButtons = document.querySelectorAll('.feedback__button');
    feedbackButtons.forEach(button => {
        button.addEventListener('click', function() {
            const isPositive = this.textContent.includes('Yes');
            const message = isPositive ? 'Thanks for your feedback!' : 'Sorry this page wasn\'t helpful. We\'ll work to improve it.';

            // Temporarily change button text
            const originalText = this.textContent;
            this.textContent = isPositive ? '✓ Thanks!' : '✓ Noted';
            this.style.background = isPositive ? '#10b981' : '#f59e0b';
            this.style.color = 'white';
            this.style.borderColor = 'transparent';

            // Reset after 2 seconds
            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = '';
                this.style.color = '';
                this.style.borderColor = '';
            }, 2000);

            console.log('Feedback:', isPositive ? 'Positive' : 'Negative');
        });
    });

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add hover effects for navigation items
    const navLinks = document.querySelectorAll('.navbar__link, .menu__link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(2px)';
        });

        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // Table of contents scroll spy (simplified)
    const tocLinks = document.querySelectorAll('.table-of-contents a');
    const sections = document.querySelectorAll('h1, h2, h3');

    function updateActiveSection() {
        let currentSection = '';
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100) {
                currentSection = section.id;
            }
        });

        tocLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    }

    // Throttled scroll listener
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(updateActiveSection, 100);
    });

    // Initialize any expanded menu items
    const activeMenuItem = document.querySelector('.menu__list-item--active');
    if (activeMenuItem) {
        // Ensure parent menus are expanded
        let parent = activeMenuItem.parentElement;
        while (parent) {
            if (parent.classList.contains('menu__list')) {
                parent.style.display = 'block';
                const parentItem = parent.closest('.menu__list-item');
                if (parentItem) {
                    parentItem.classList.add('expanded');
                }
            }
            parent = parent.parentElement;
        }
    }

    // Add loading state for external links
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function() {
            this.style.opacity = '0.7';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 200);
        });
    });

    console.log('Notion-style documentation page initialized');
});