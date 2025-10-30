// ===========================
// Navigation & Mobile Menu
// ===========================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('.navbar');

// Toggle mobile menu
hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger?.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===========================
// Navbar Scroll Effect
// ===========================
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow on scroll
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===========================
// Active Navigation Link
// ===========================
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive);

// ===========================
// Smooth Scroll for Anchor Links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Scroll to Top Button
// ===========================
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn?.classList.add('active');
    } else {
        scrollTopBtn?.classList.remove('active');
    }
});

scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===========================
// Intersection Observer for Animations
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});

// Observe skill categories
document.querySelectorAll('.skill-category').forEach(item => {
    observer.observe(item);
});

// Observe award cards
document.querySelectorAll('.award-card').forEach(item => {
    observer.observe(item);
});

// Observe education cards
document.querySelectorAll('.education-card').forEach(item => {
    observer.observe(item);
});

// ===========================
// Typing Effect for Hero Title
// ===========================
const heroSubtitle = document.querySelector('.hero-subtitle');

if (heroSubtitle) {
    const text = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            heroSubtitle.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        }
    }

    // Start typing effect after page loads
    setTimeout(typeWriter, 500);
}

// ===========================
// Counter Animation for Stats (Optional)
// ===========================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ===========================
// Skill Progress Bars Animation (Optional Enhancement)
// ===========================
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillItems = entry.target.querySelectorAll('.skill-list li');
            skillItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateX(-20px)';
                    
                    setTimeout(() => {
                        item.style.transition = 'all 0.5s ease';
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }, 50);
                }, index * 100);
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-category').forEach(category => {
    skillObserver.observe(category);
});

// ===========================
// Timeline Animation Enhancement
// ===========================
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateX(-50px)';
            
            setTimeout(() => {
                entry.target.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, 100);
            
            timelineObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.timeline-item').forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
    timelineObserver.observe(item);
});

// ===========================
// Parallax Effect for Hero Section
// ===========================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / 700);
    }
});

// ===========================
// Soft Skills Hover Effect Enhancement
// ===========================
const softSkillItems = document.querySelectorAll('.soft-skill-item');

softSkillItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.05)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===========================
// Award Cards Animation
// ===========================
const awardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'scale(0.8)';
            
            setTimeout(() => {
                entry.target.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1)';
            }, 100);
            
            awardObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.award-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
    awardObserver.observe(card);
});

// ===========================
// Contact Items Stagger Animation
// ===========================
const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const contactItems = entry.target.querySelectorAll('.contact-item');
            contactItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateX(-30px)';
                    
                    setTimeout(() => {
                        item.style.transition = 'all 0.6s ease';
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }, 50);
                }, index * 150);
            });
            contactObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const contactInfo = document.querySelector('.contact-info');
if (contactInfo) {
    contactObserver.observe(contactInfo);
}

// ===========================
// Form Validation (if contact form is added)
// ===========================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Add your form validation and submission logic here
        const formData = new FormData(contactForm);
        
        // Example: Display success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// ===========================
// Preloader (Optional)
// ===========================
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// ===========================
// Dynamic Year in Footer
// ===========================
const yearElement = document.querySelector('.footer-content p');
if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = yearElement.textContent.replace('2025', currentYear);
}

// ===========================
// Print/Download Resume Button (Optional)
// ===========================
function printResume() {
    window.print();
}

// Add event listener if you have a print button
const printBtn = document.getElementById('printBtn');
if (printBtn) {
    printBtn.addEventListener('click', printResume);
}

// ===========================
// Dark Mode Toggle (Optional Feature)
// ===========================
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

if (darkModeToggle) {
    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Save theme preference
        const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });
}

// ===========================
// Cursor Trail Effect (Optional)
// ===========================
const createCursorTrail = () => {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    document.body.appendChild(trail);
    
    document.addEventListener('mousemove', (e) => {
        trail.style.left = e.pageX + 'px';
        trail.style.top = e.pageY + 'px';
    });
};

// Uncomment to enable cursor trail
// createCursorTrail();

// ===========================
// Lazy Loading Images (if you add images later)
// ===========================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img.lazy').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===========================
// Performance Optimization
// ===========================
// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(() => {
    // Your scroll event code here
}, 10));

// ===========================
// Console Message
// ===========================
console.log('%c👋 Welcome to Sher Muhammad\'s Portfolio!', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%cInterested in working together? Let\'s connect!', 'color: #6b7280; font-size: 14px;');
console.log('%c📧 Email: sm2212719@gmail.com', 'color: #2563eb; font-size: 12px;');
console.log('%c🔗 LinkedIn: https://www.linkedin.com/in/sher-muhammad-005588209/', 'color: #2563eb; font-size: 12px;');
