// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeText = document.getElementById('theme-text');
const html = document.documentElement;

// Check for saved theme preference or default to 'light' mode
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

// Update button based on current theme
if (currentTheme === 'dark') {
    themeIcon.textContent = '☀️';
    themeText.textContent = 'Modo Claro';
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const theme = html.getAttribute('data-theme');
        const newTheme = theme === 'light' ? 'dark' : 'light';

        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        if (newTheme === 'dark') {
            themeIcon.textContent = '☀️';
            themeText.textContent = html.lang === 'en' ? 'Light Mode' : 'Modo Claro';
        } else {
            themeIcon.textContent = '🌙';
            themeText.textContent = html.lang === 'en' ? 'Dark Mode' : 'Modo Oscuro';
        }
    });
}

// PDF Download
const downloadPdfBtn = document.getElementById('download-pdf');
if (downloadPdfBtn) {
    downloadPdfBtn.addEventListener('click', () => {
        // Hide buttons before printing
        const headerActions = document.querySelector('.header-actions');
        const quickLinks = document.querySelector('.quick-links');
        if (headerActions) headerActions.style.display = 'none';
        if (quickLinks) quickLinks.style.display = 'none';

        // Print
        window.print();

        // Restore buttons after printing
        setTimeout(() => {
            if (headerActions) headerActions.style.display = 'flex';
            if (quickLinks) quickLinks.style.display = 'flex';
        }, 100);
    });
}

// Smooth scrolling para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Highlight active section in navigation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-sidebar a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.backgroundColor = '';
        link.style.color = '';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.backgroundColor = 'var(--nav-hover-bg)';
            link.style.color = 'var(--primary)';
        }
    });
});
