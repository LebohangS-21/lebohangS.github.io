// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.nav').offsetHeight;
            window.scrollTo({ top: target.offsetTop - navHeight, behavior: 'smooth' });
        }
    });
});

// Navbar Scroll Effect
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.pageYOffset > 100);
});

// Fade-in Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.skill-category, .project-card, .credential-item').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Thank you for your message! I'll get back to you soon.");
        contactForm.reset();
    });
}

// Animated Counter
function animateCounter(element, target, duration = 1500) {
    let current = 0;
    const increment = target / (duration / 16);
    const isDecimal = target.toString().includes('.');
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) { current = target; clearInterval(timer); }
        element.textContent = isDecimal ? current.toFixed(1) : Math.floor(current);
    }, 16);
}

const statsSection = document.querySelector('.hero-stats');
if (statsSection) {
    new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.stat-number').forEach(stat => {
                    const text = stat.textContent;
                    const value = parseFloat(text.replace(/[^\d.]/g, ''));
                    const suffix = text.replace(/[\d.]/g, '');
                    animateCounter(stat, value, 1500);
                    setTimeout(() => { stat.textContent = stat.textContent + suffix; }, 1500);
                });
            }
        });
    }, { threshold: 0.5 }).observe(statsSection);
}

// Active Nav Highlighting
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + 100;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionId = section.getAttribute('id');
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + section.offsetHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + sectionId) link.classList.add('active');
            });
        }
    });
});

// Parallax
const heroBackground = document.querySelector('.hero-background');
if (heroBackground) {
    window.addEventListener('scroll', () => {
        heroBackground.style.transform = 'translateY(' + (window.pageYOffset * 0.5) + 'px)';
    });
}

// Card tilt effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const rotateX = (e.clientY - rect.top - rect.height / 2) / 20;
        const rotateY = (rect.width / 2 - (e.clientX - rect.left)) / 20;
        card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-8px)';
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});

// Skill icon hover
document.querySelectorAll('.skill-category').forEach(category => {
    const icon = category.querySelector('.skill-icon');
    category.addEventListener('mouseenter', () => { if (icon) icon.style.transform = 'scale(1.2) rotate(5deg)'; });
    category.addEventListener('mouseleave', () => { if (icon) icon.style.transform = ''; });
});

// Loading
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// Copy to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const n = document.createElement('div');
        n.textContent = 'Copied to clipboard!';
        n.style.cssText = 'position:fixed;bottom:20px;right:20px;background:linear-gradient(135deg,#D4AF37,#FFD700);color:#000;padding:1rem 2rem;border-radius:8px;font-family:Space Mono,monospace;font-size:.875rem;font-weight:700;z-index:10000;box-shadow:0 4px 20px rgba(212,175,55,.4)';
        document.body.appendChild(n);
        setTimeout(() => { n.style.opacity = '0'; n.style.transition = 'opacity .3s'; setTimeout(() => n.remove(), 300); }, 2000);
    });
}

document.querySelectorAll('.contact-method').forEach(method => {
    method.addEventListener('click', (e) => {
        if (e.target.classList.contains('contact-value')) { e.preventDefault(); copyToClipboard(e.target.textContent); }
    });
});

// Console message
console.log('%c👋 Hey there!', 'font-size:20px;font-weight:bold;color:#D4AF37;');
console.log('%cThanks for checking out the code! Feel free to reach out.', 'font-size:14px;color:#b8b8b8;');
console.log('%c🚀 Built with HTML, CSS, and vanilla JavaScript', 'font-size:12px;color:#888;');