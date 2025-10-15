// Car Detail Page Functionality - CORRECTED VERSION
document.addEventListener('DOMContentLoaded', function() {
    // Image Gallery with Modal
    const mainImage = document.getElementById('main-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeModal = document.querySelector('.close');
    
    // Thumbnail click functionality
    if (thumbnails.length > 0 && mainImage) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                // Remove active class from all thumbnails
                thumbnails.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked thumbnail
                this.classList.add('active');
                
                // Update main image with smooth transition
                const newSrc = this.getAttribute('data-full');
                if (newSrc) {
                    mainImage.style.opacity = '0.7';
                    
                    setTimeout(() => {
                        mainImage.src = newSrc;
                        mainImage.alt = this.querySelector('img').alt;
                        
                        setTimeout(() => {
                            mainImage.style.opacity = '1';
                        }, 150);
                    }, 200);
                }
            });
        });

        // Set first thumbnail as active on load
        thumbnails[0].classList.add('active');
    }
    
    // Modal functionality for image zoom
    if (mainImage) {
        mainImage.addEventListener('click', function() {
            if (modal && modalImg) {
                modal.style.display = 'block';
                modalImg.src = this.src;
                modalImg.alt = this.alt;
                document.body.style.overflow = 'hidden';
            }
        });
    }
    
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            if (modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Close modal when clicking outside the image
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // WhatsApp Integration
    const whatsappBtn = document.querySelector('.btn-whatsapp');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const carModel = document.querySelector('.car-title')?.textContent || 'Vehículo';
            const carSubtitle = document.querySelector('.car-subtitle')?.textContent || '';
            const carPrice = document.querySelector('.car-price')?.textContent || '';
            
            const message = `¡Hola! Estoy interesado en el vehículo:\n\n` +
                          `*${carModel} - ${carSubtitle}*\n` +
                          `Precio: ${carPrice}\n\n` +
                          `Me gustaría recibir más información y concertar una cita para verlo.`;
            
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/34624334958?text=${encodedMessage}`;
            
            window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        });
    }

    // Call Functionality
    const callBtn = document.querySelector('.btn-call');
    if (callBtn) {
        callBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'tel:+34624334958';
        });
    }

    // Share Functionality
    const shareBtn = document.querySelector('.btn-share');
    if (shareBtn) {
        shareBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const shareData = {
                title: `Mira este ${document.querySelector('.car-title')?.textContent || 'vehículo'}`,
                text: `${document.querySelector('.car-title')?.textContent || ''} - ${document.querySelector('.car-subtitle')?.textContent || ''}`,
                url: window.location.href
            };
            
            if (navigator.share) {
                navigator.share(shareData)
                    .then(() => showMessage('¡Contenido compartido! 👍', 'success'))
                    .catch(() => showMessage('Compartición cancelada', 'info'));
            } else {
                // Fallback: copy to clipboard
                navigator.clipboard.writeText(window.location.href)
                    .then(() => showMessage('📋 ¡Enlace copiado al portapapeles!', 'success'))
                    .catch(() => showMessage('❌ Error al copiar el enlace', 'error'));
            }
        });
    }

    // Message System
    function showMessage(message, type = 'info') {
        // Remove existing messages
        const existingMessage = document.querySelector('.message-toast');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create message element
        const messageDiv = document.createElement('div');
        messageDiv.className = `message-toast message-${type}`;
        messageDiv.textContent = message;
        
        // Add styles
        messageDiv.style.cssText = `
            position: fixed;
            top: 100px;
            left: 50%;
            transform: translateX(-50%);
            padding: 1rem 2rem;
            border-radius: 12px;
            font-weight: 600;
            text-align: center;
            background: ${type === 'success' ? '#10b981' : 
                        type === 'error' ? '#ef4444' : 
                        type === 'warning' ? '#f59e0b' : '#3b82f6'};
            color: white;
            z-index: 10000;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
            max-width: 90%;
            opacity: 0;
            transition: all 0.4s ease;
        `;

        // Insert message
        document.body.appendChild(messageDiv);

        // Animate in
        setTimeout(() => {
            messageDiv.style.opacity = '1';
        }, 100);

        // Auto remove after 4 seconds
        setTimeout(() => {
            messageDiv.style.opacity = '0';
            setTimeout(() => {
                if (messageDiv.parentNode) {
                    messageDiv.parentNode.removeChild(messageDiv);
                }
            }, 400);
        }, 4000);
    }

    // Image loading optimization
    const carImages = document.querySelectorAll('.car-gallery img');
    carImages.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // If image is already cached
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.style.opacity = '0.8';
            img.style.transition = 'opacity 0.5s ease';
        }
    });

    // Add smooth scrolling for anchor links
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

    console.log('🚀 Car detail page loaded successfully!');
});