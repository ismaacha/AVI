// ubicacion.js - Funcionalidades avanzadas para la página de ubicación
class UbicacionPage {
    constructor() {
        this.init();
    }

    init() {
        this.setupParticles();
        this.setupBusinessStatus();
        this.setupCopyAddress();
        this.setupNavigation();
        this.setupTodayHighlight();
        
        // Actualizar estado cada minuto
        setInterval(() => this.updateBusinessStatus(), 60000);
    }

    // Configurar partículas en el hero
    setupParticles() {
        const container = document.getElementById('heroParticles');
        if (!container) return;

        for (let i = 0; i < 30; i++) {
            this.createParticle(container);
        }
    }

    createParticle(container) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
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
            animation: floatParticle ${duration}s ease-in-out ${delay}s infinite;
            pointer-events: none;
        `;
        
        container.appendChild(particle);
    }

    // Configurar estado del negocio
    setupBusinessStatus() {
        this.updateBusinessStatus();
    }

    updateBusinessStatus() {
        const now = new Date();
        const day = now.getDay();
        const hour = now.getHours();
        const minutes = now.getMinutes();
        const currentTime = hour + minutes / 60;

        let isOpen = false;
        let statusText = '';

        // Horarios según los datos proporcionados
        if (day === 0) { // Domingo
            isOpen = currentTime >= 11.5 && currentTime < 18;
            statusText = isOpen ? 'Abierto ahora' : 'Cerrado';
        } else if (day === 6) { // Sábado
            isOpen = currentTime >= 11.5 && currentTime < 20;
            statusText = isOpen ? 'Abierto ahora' : 'Cerrado';
        } else { // Lunes a Viernes
            isOpen = currentTime >= 11 && currentTime < 20;
            statusText = isOpen ? 'Abierto ahora' : 'Cerrado';
        }

        // Actualizar badge de estado
        const statusBadge = document.getElementById('statusBadge');
        if (statusBadge) {
            statusBadge.className = `status-badge ${isOpen ? 'status-open' : ''}`;
            statusBadge.querySelector('span').textContent = statusText;
            statusBadge.querySelector('.status-dot').style.background = isOpen ? '#00C851' : '#ff4444';
        }

        // Actualizar estado de hoy
        const todayStatus = document.getElementById('todayStatus');
        if (todayStatus) {
            todayStatus.textContent = statusText;
            todayStatus.className = `status ${isOpen ? 'open' : 'closed'}`;
        }
    }

    // Configurar copia de dirección
    setupCopyAddress() {
        // La función copyAddress se define globalmente para el onclick
    }

    // Configurar navegación
    setupNavigation() {
        // Las funciones de navegación se definen globalmente para los onclick
    }

    // Destacar el día actual
    setupTodayHighlight() {
        const today = new Date();
        const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const todayName = dayNames[today.getDay()];
        
        // Actualizar texto "Hoy"
        const todayElement = document.querySelector('.current-day .day');
        if (todayElement) {
            todayElement.textContent = todayName;
        }
    }
}

// Funciones globales para los botones
function copyAddress() {
    const address = "Auto Vilaseca Ismael, Carrer de Masricard, 14, 43480 Vilaseca, Tarragona";
    
    navigator.clipboard.writeText(address).then(() => {
        // Mostrar notificación de éxito
        showNotification('✓ Dirección copiada al portapapeles', 'success');
    }).catch(() => {
        // Fallback para navegadores antiguos
        const textArea = document.createElement('textarea');
        textArea.value = address;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('✓ Dirección copiada al portapapeles', 'success');
    });
}

function openNavigation(type) {
    const address = "Auto+Vilaseca+Ismael+Carrer+de+Masricard+14+43480+Vilaseca+Tarragona";
    let url = '';

    switch(type) {
        case 'car':
            url = `https://www.google.com/maps/dir/?api=1&destination=${address}&travelmode=driving`;
            break;
        case 'public':
            url = `https://www.google.com/maps/dir/?api=1&destination=${address}&travelmode=transit`;
            break;
        case 'taxi':
            url = `https://www.google.com/maps/dir/?api=1&destination=${address}&travelmode=driving`;
            // En un caso real, aquí podrías integrar con APIs de Uber/Cabify
            break;
    }

    if (url) {
        window.open(url, '_blank');
    }
}

function showNotification(message, type = 'info') {
    // Crear notificación
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#00C851' : '#ff4444'};
        color: white;
        border-radius: 8px;
        font-weight: 600;
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.4s ease;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Animación de entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Auto-remover después de 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 400);
    }, 3000);
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new UbicacionPage();
});

// Añadir estilos para las partículas
const particleStyles = document.createElement('style');
particleStyles.textContent = `
    @keyframes floatParticle {
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
`;
document.head.appendChild(particleStyles);