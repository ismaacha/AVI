// contacto.js - Interactive Contact Page
class ContactoPage {
    constructor() {
        this.init();
    }

    init() {
        this.setupParticles();
        this.setupSchedule();
        this.setupFAQ();
        this.setupContactCards();
        this.setupLiveStatus();
    }

    // Configurar partículas en el hero
    setupParticles() {
        // Simple particle effect without external library
        const container = document.getElementById('particles-js');
        if (!container) return;

        for (let i = 0; i < 50; i++) {
            this.createParticle(container);
        }
    }

    createParticle(container) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random properties
        const size = Math.random() * 4 + 1;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            left: ${posX}%;
            top: ${posY}%;
            animation: float ${duration}s ease-in-out ${delay}s infinite;
        `;
        
        container.appendChild(particle);
    }

    // Configurar horarios inteligentes
    setupSchedule() {
        this.updateTodayDate();
        this.updateBusinessStatus();
        
        // Actualizar cada minuto
        setInterval(() => {
            this.updateBusinessStatus();
        }, 60000);
    }

    updateTodayDate() {
        const today = new Date();
        const options = { weekday: 'long', day: 'numeric', month: 'long' };
        const dateString = today.toLocaleDateString('es-ES', options);
        document.getElementById('todayDate').textContent = dateString;
    }

    updateBusinessStatus() {
        const now = new Date();
        const day = now.getDay(); // 0 = Domingo, 1 = Lunes, ..., 6 = Sábado
        const hour = now.getHours();
        const minutes = now.getMinutes();
        const currentTime = hour + minutes / 60;

        let isOpen = false;
        let statusText = '';
        let statusClass = '';

        if (day === 0) {
            // Domingo - Cerrado
            isOpen = false;
            statusText = 'Cerrado hoy';
            statusClass = 'status-closed';
        } else if (day === 6) {
            // Sábado - 10:00 a 14:00
            isOpen = currentTime >= 10 && currentTime < 14;
            statusText = isOpen ? 'Abierto ahora' : 'Cerrado ahora';
            statusClass = isOpen ? 'status-open' : 'status-closed';
        } else {
            // Lunes a Viernes - 9:00 a 19:00
            isOpen = currentTime >= 9 && currentTime < 19;
            statusText = isOpen ? 'Abierto ahora' : 'Cerrado ahora';
            statusClass = isOpen ? 'status-open' : 'status-closed';
        }

        // Actualizar UI
        const statusIndicator = document.getElementById('statusIndicator');
        const currentStatus = document.getElementById('currentStatus');

        if (statusIndicator && currentStatus) {
            statusIndicator.className = `status-indicator ${statusClass}`;
            statusIndicator.querySelector('span').textContent = statusText;
            
            currentStatus.className = `current-status ${statusClass}`;
            currentStatus.innerHTML = `
                <i class="fas ${isOpen ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                <span>${statusText}</span>
            `;
        }
    }

    // Configurar FAQ interactiva
    setupFAQ() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                // Cerrar otros items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Alternar item actual
                item.classList.toggle('active');
            });
        });
    }

    // Configurar tarjetas de contacto interactivas
    setupContactCards() {
        const contactCards = document.querySelectorAll('.contact-card');
        
        contactCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    // Configurar estado en vivo
    setupLiveStatus() {
        // Simular estado del equipo (disponible/ocupado)
        this.updateTeamStatus();
        setInterval(() => this.updateTeamStatus(), 30000); // Actualizar cada 30 segundos
    }

    updateTeamStatus() {
        // En un caso real, esto se conectaría a una API
        const isAvailable = Math.random() > 0.3; // 70% de probabilidad de estar disponible
        
        const statusElements = document.querySelectorAll('.live-status');
        statusElements.forEach(element => {
            if (isAvailable) {
                element.classList.add('available');
                element.classList.remove('busy');
            } else {
                element.classList.add('busy');
                element.classList.remove('available');
            }
        });
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new ContactoPage();
});

// Añadir estilos para las partículas
const particleStyles = document.createElement('style');
particleStyles.textContent = `
    @keyframes float {
        0%, 100% { 
            transform: translateY(0) translateX(0); 
            opacity: 0;
        }
        10% { 
            opacity: 1; 
        }
        90% { 
            opacity: 1; 
        }
        50% { 
            transform: translateY(-20px) translateX(10px); 
        }
    }
    
    .particle {
        pointer-events: none;
    }
    
    .status-open .pulse {
        background: #00C851;
        animation: pulse 2s infinite;
    }
    
    .status-closed .pulse {
        background: #ff4444;
        animation: pulse 2s infinite;
    }
`;
document.head.appendChild(particleStyles);