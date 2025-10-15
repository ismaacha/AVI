// Improved Main JavaScript - CORRECTED VERSION
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    if (header) {
        let lastScrollY = window.scrollY;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(10, 26, 53, 0.98)';
                header.style.backdropFilter = 'blur(20px)';
            } else {
                header.style.background = 'rgba(10, 26, 53, 0.95)';
                header.style.backdropFilter = 'blur(20px)';
            }

            lastScrollY = window.scrollY;
        });
    }

    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchInput && searchBtn) {
        const performSearch = () => {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                window.location.href = `pages/catalogo.html?search=${encodeURIComponent(searchTerm)}`;
            } else {
                // Add shake animation to indicate empty search
                searchInput.style.animation = 'shake 0.5s ease-in-out';
                setTimeout(() => {
                    searchInput.style.animation = '';
                }, 500);
            }
        };

        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    // Brand tags functionality
    const brandTags = document.querySelectorAll('.brand-tag');
    brandTags.forEach(tag => {
        tag.addEventListener('click', function(e) {
            e.preventDefault();
            const brand = this.textContent.trim();
            window.location.href = `pages/catalogo.html?brand=${encodeURIComponent(brand)}`;
        });
    });

    // Quick view functionality for car cards
    const quickViewButtons = document.querySelectorAll('.quick-view');
    quickViewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const carCard = this.closest('.car-card');
            const carTitle = carCard.querySelector('.car-title').textContent;
            const carPrice = carCard.querySelector('.car-price').textContent;
            
            // Show quick view modal or redirect to detail page
            const carLink = carCard.querySelector('.btn-primary').href;
            window.location.href = carLink;
        });
    });

    // Add loading animation to images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.style.opacity = '0.8';
            img.style.transition = 'opacity 0.5s ease';
        }
    });

    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'all 0.6s ease';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.feature-card, .car-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        observer.observe(el);
    });

    // Smooth scrolling for anchor links
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

    // Add shake animation for empty search
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
    `;
    document.head.appendChild(style);

    console.log('🚀 Auto Vilaseca Ismael website loaded successfully!');
});