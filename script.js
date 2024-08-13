document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });

    const heroSection = document.getElementById('hero');
    const originalBackground = heroSection.style.background;

    heroSection.addEventListener('mouseenter', () => {
        heroSection.style.background = 'linear-gradient(135deg, #1f1c2c, #928dab)';
    });

    heroSection.addEventListener('mouseleave', () => {
        heroSection.style.background = originalBackground;
    });
});
