// Funcionalidades para la página de detalle de coche
document.addEventListener('DOMContentLoaded', function() {
    // Galería de imágenes
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.gallery-thumbs .thumb');
    
    // Cambiar imagen principal al hacer clic en miniaturas
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            // Remover clase active de todas las miniaturas
            thumbnails.forEach(t => t.classList.remove('active'));
            // Añadir clase active a la miniatura clickeada
            this.classList.add('active');
            // Cambiar imagen principal
            const newImageSrc = this.getAttribute('data-image');
            mainImage.src = newImageSrc;
            // Actualizar también la imagen en el modal si está abierto
            if (modalImage) {
                modalImage.src = newImageSrc;
            }
        });
    });

    // Modal para zoom de imágenes
    let modal = null;
    let modalImage = null;
    let currentImageIndex = 0;
    let imagesArray = [];

    // Crear modal dinámicamente
    function createModal() {
        modal = document.createElement('div');
        modal.className = 'image-modal';
        modal.innerHTML = `
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                <button class="modal-nav modal-prev">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button class="modal-nav modal-next">
                    <i class="fas fa-chevron-right"></i>
                </button>
                <div class="modal-image-container">
                    <img src="" alt="" class="modal-image">
                </div>
                <div class="modal-counter">
                    <span class="current-index">1</span> / <span class="total-images">4</span>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        // Elementos del modal
        modalImage = modal.querySelector('.modal-image');
        const modalClose = modal.querySelector('.modal-close');
        const modalPrev = modal.querySelector('.modal-prev');
        const modalNext = modal.querySelector('.modal-next');
        const modalOverlay = modal.querySelector('.modal-overlay');
        const currentIndexSpan = modal.querySelector('.current-index');
        const totalImagesSpan = modal.querySelector('.total-images');

        // Recoger todas las imágenes de la galería
        imagesArray = Array.from(thumbnails).map(thumb => 
            thumb.getAttribute('data-image')
        );
        totalImagesSpan.textContent = imagesArray.length;

        // Función para mostrar imagen en el modal
        function showModalImage(index) {
            currentImageIndex = index;
            modalImage.src = imagesArray[index];
            currentIndexSpan.textContent = index + 1;
            
            // Actualizar estado de botones de navegación
            modalPrev.style.display = index === 0 ? 'none' : 'flex';
            modalNext.style.display = index === imagesArray.length - 1 ? 'none' : 'flex';
        }

        // Abrir modal al hacer clic en la imagen principal
        mainImage.addEventListener('click', function() {
            const activeIndex = Array.from(thumbnails).findIndex(thumb => 
                thumb.classList.contains('active')
            );
            showModalImage(activeIndex);
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevenir scroll
        });

        // Cerrar modal
        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Restaurar scroll
        }

        modalClose.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', closeModal);

        // Navegación entre imágenes
        modalPrev.addEventListener('click', function(e) {
            e.stopPropagation();
            if (currentImageIndex > 0) {
                showModalImage(currentImageIndex - 1);
            }
        });

        modalNext.addEventListener('click', function(e) {
            e.stopPropagation();
            if (currentImageIndex < imagesArray.length - 1) {
                showModalImage(currentImageIndex + 1);
            }
        });

        // Navegación con teclado
        document.addEventListener('keydown', function(e) {
            if (!modal.classList.contains('active')) return;
            
            switch(e.key) {
                case 'Escape':
                    closeModal();
                    break;
                case 'ArrowLeft':
                    if (currentImageIndex > 0) {
                        showModalImage(currentImageIndex - 1);
                    }
                    break;
                case 'ArrowRight':
                    if (currentImageIndex < imagesArray.length - 1) {
                        showModalImage(currentImageIndex + 1);
                    }
                    break;
            }
        });

        // Navegación con gestos táctiles (swipe)
        let touchStartX = 0;
        let touchEndX = 0;

        modalImage.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        });

        modalImage.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0 && currentImageIndex < imagesArray.length - 1) {
                    // Swipe izquierda - siguiente imagen
                    showModalImage(currentImageIndex + 1);
                } else if (diff < 0 && currentImageIndex > 0) {
                    // Swipe derecha - imagen anterior
                    showModalImage(currentImageIndex - 1);
                }
            }
        }
    }

    // Inicializar modal cuando la página cargue
    createModal();

    // Smooth scroll para enlaces internos
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

    // Animación de aparición para secciones
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar secciones para animación
    document.querySelectorAll('.specs-section, .equipment-section, .warranty-section, .cta-detalle').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Efecto hover mejorado para botones de acción
    const actionButtons = document.querySelectorAll('.action-buttons a, .cta-buttons a');
    actionButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Contador de visitas para el coche (opcional - para analytics)
    function trackCarView() {
        const carModel = document.querySelector('h1').textContent;
        console.log(`Vista de coche: ${carModel}`);
        // Aquí podrías integrar con Google Analytics o similar
    }

    trackCarView();
});