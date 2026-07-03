// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const themeText = document.getElementById('theme-text');
const html = document.documentElement;

const LABELS = {
    es: { light: 'oscuro', dark: 'claro' }, // el botón muestra el tema al que se cambia
    en: { light: 'dark', dark: 'light' }
};

function themeLabel(theme) {
    const lang = html.lang === 'en' ? 'en' : 'es';
    return LABELS[lang][theme];
}

const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const currentTheme = localStorage.getItem('theme') || systemTheme;
html.setAttribute('data-theme', currentTheme);
if (themeText) themeText.textContent = themeLabel(currentTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const newTheme = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        if (themeText) themeText.textContent = themeLabel(newTheme);
    });
}

// PDF Download
const downloadPdfBtn = document.getElementById('download-pdf');
if (downloadPdfBtn) {
    downloadPdfBtn.addEventListener('click', () => {
        window.print();
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
        if (scrollY >= section.offsetTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href').slice(1) === current);
    });
});
