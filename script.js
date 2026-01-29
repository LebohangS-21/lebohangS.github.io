// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Scroll Effect
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for Fade-in Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements and observe them
const fadeElements = document.querySelectorAll('.skill-category, .project-card, .credential-item');
fadeElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        // Here you would typically send the data to a backend service
        // For now, we'll just show an alert and log the data
        console.log('Form submitted:', formData);
        
        // Show success message
        alert('Thank you for your message! I\'ll get back to you soon.');
        
        // Reset form
        contactForm.reset();
        
        // In a real implementation, you might use:
        // - EmailJS for client-side email sending
        // - Formspree for form handling
        // - Your own backend API
        // - Netlify Forms if hosted on Netlify
        // - GitHub Issues API if hosted on GitHub Pages
    });
}

// Animated Counter for Stats
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16); // 60 FPS
    const isDecimal = target.toString().includes('.');
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        if (isDecimal) {
            element.textContent = current.toFixed(1);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Trigger counter animation when stats section is visible
const statsSection = document.querySelector('.hero-stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const text = stat.textContent;
                    const value = parseFloat(text.replace(/[^\d.]/g, ''));
                    const suffix = text.replace(/[\d.]/g, '');
                    
                    animateCounter(stat, value, 1500);
                    
                    // Add suffix back after animation
                    setTimeout(() => {
                        stat.textContent = stat.textContent + suffix;
                    }, 1500);
                });
                
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
}

// Active Navigation Link Highlighting
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// Parallax Effect for Hero Background
const heroBackground = document.querySelector('.hero-background');

if (heroBackground) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    });
}

// Project Card Hover Effect - Add subtle tilt
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// Skill Category Hover Animation
const skillCategories = document.querySelectorAll('.skill-category');

skillCategories.forEach(category => {
    const icon = category.querySelector('.skill-icon');
    
    category.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.2) rotate(5deg)';
    });
    
    category.addEventListener('mouseleave', () => {
        icon.style.transform = '';
    });
});

// Loading Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// Copy to Clipboard Function (useful for contact info)
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Show a temporary notification
        const notification = document.createElement('div');
        notification.textContent = 'Copied to clipboard!';
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: linear-gradient(135deg, #D4AF37 0%, #FFD700 100%);
            color: #000000;
            padding: 1rem 2rem;
            border-radius: 8px;
            font-family: 'Space Mono', monospace;
            font-size: 0.875rem;
            font-weight: 700;
            z-index: 10000;
            animation: fadeIn 0.3s ease-in;
            box-shadow: 0 4px 20px rgba(212, 175, 55, 0.4);
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transition = 'opacity 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    });
}

// Add click-to-copy functionality to contact methods
const contactMethods = document.querySelectorAll('.contact-method');
contactMethods.forEach(method => {
    method.addEventListener('click', (e) => {
        // Only copy if it's not a link navigation
        if (e.target.classList.contains('contact-value')) {
            e.preventDefault();
            copyToClipboard(e.target.textContent);
        }
    });
});

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        document.body.style.transform = 'rotate(360deg)';
        document.body.style.transition = 'transform 2s ease-in-out';
        setTimeout(() => {
            document.body.style.transform = '';
        }, 2000);
        console.log('🎉 You found the secret! Data analysts are detail-oriented! 🎉');
    }
});

// Print console message
console.log('%c👋 Hey there!', 'font-size: 20px; font-weight: bold; color: #D4AF37;');
console.log('%cThanks for checking out the code! If you\'re interested in working together, feel free to reach out.', 'font-size: 14px; color: #b8b8b8;');
console.log('%c🚀 Built with HTML, CSS, and vanilla JavaScript', 'font-size: 12px; color: #888;');