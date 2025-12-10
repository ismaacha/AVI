// Catalog JavaScript - UPDATED WITH REAL VEHICLE DATA
document.addEventListener('DOMContentLoaded', function() {
    // Sample vehicle data - REAL 14 CARS
    const vehicles = [
        {
            id: 1,
            marca: 'audi',
            title: 'Audi SQ5',
            subtitle: '3.0 TDI 313 quattro 5p tip',
            year: 2014,
            km: 172000,
            combustible: 'diesel',
            transmision: 'Automático',
            price: 23500,
            image: '../imagenes/coches/audi-sq5/1.jpeg',
            link: '../coches/audi-sq5.html'
        },
        {
            id: 2,
            marca: 'volkswagen',
            title: 'Volkswagen Tiguan',
            subtitle: '2.0 TDI R-Line 4MOTION DSG',
            year: 2018,
            km: 155000,
            combustible: 'diesel',
            transmision: 'Automático',
            price: 25500,
            image: '../imagenes/coches/volkswagen-tiguan/1.png',
            link: '../coches/volkswagen-tiguan.html'
        },
        {
            id: 3,
            marca: 'volkswagen',
            title: 'Volkswagen T-Roc',
            subtitle: '2.0 TDI 150 Sport DSG7',
            year: 2020,
            km: 190000,
            combustible: 'diesel',
            transmision: 'Automático',
            price: 20500,
            image: '../imagenes/coches/volkswagen-troc/1.jpeg',
            link: '../coches/volkswagen-troc.html'
        },
        {
            id: 4,
            marca: 'opel',
            title: 'Opel Mokka X',
            subtitle: '1.6 CDTI 136 Excellence',
            year: 2017,
            km: 129000,
            combustible: 'diesel',
            transmision: 'Automático',
            price: 13000,
            image: '../imagenes/coches/opel-mokka/1.webp',
            link: '../coches/opel-mokka.html'
        },
        {
            id: 5,
            marca: 'audi',
            title: 'Audi A3',
            subtitle: '2.0 TDI 184 S Line Quattro S tronic',
            year: 2015,
            km: 215000,
            combustible: 'diesel',
            transmision: 'Automático',
            price: 17250,
            image: '../imagenes/coches/audi-a3-sline/1.jpeg',
            link: '../coches/audi-a3-sline.html'
        },
        {
            id: 6,
            marca: 'audi',
            title: 'Audi A3',
            subtitle: '2.0 TDI 150 Sport',
            year: 2016,
            km: 198000,
            combustible: 'diesel',
            transmision: 'Manual',
            price: 12900,
            image: '../imagenes/coches/audi-a3-2016/1.jpeg',
            link: '../coches/audi-a3-2016.html'
        },
        {
            id: 7,
            marca: 'seat',
            title: 'Seat León',
            subtitle: '2.0 TDI 150 FR DSG6',
            year: 2013,
            km: 195000,
            combustible: 'diesel',
            transmision: 'Automático',
            price: 10500,
            image: '../imagenes/coches/seat-leon/1.webp',
            link: '../coches/seat-leon.html'
        },
        {
            id: 8,
            marca: 'fiat',
            title: 'Fiat Freemont',
            subtitle: '2.0 16V 140 Urban 7 plazas',
            year: 2012,
            km: 167000,
            combustible: 'diesel',
            transmision: 'Manual',
            price: 10000,
            image: '../imagenes/coches/fiat-freemont/1.jpeg',
            link: '../coches/fiat-freemont.html'
        },
        {
            id: 9,
            marca: 'peugeot',
            title: 'Peugeot 308',
            subtitle: '1.5 BlueHDI 130 Allure EAT8',
            year: 2019,
            km: 198000,
            combustible: 'diesel',
            transmision: 'Automático',
            price: 8200,
            image: '../imagenes/coches/peugeot-308/1.jpeg',
            link: '../coches/peugeot-308.html'
        },
        {
            id: 10,
            marca: 'citroen',
            title: 'Citroën C3',
            subtitle: '1.4 HDi 70 Premier SensoDrive',
            year: 2004,
            km: 245000,
            combustible: 'diesel',
            transmision: 'Automático',
            price: 2250,
            image: '../imagenes/coches/citroen-c3-2004/1.jpeg',
            link: '../coches/citroen-c3.html',
            sold: true
        },
        {
            id: 11,
            marca: 'opel',
            title: 'Opel Movano',
            subtitle: '2.3 Turbo D 180 Furgón L3H3',
            year: 2020,
            km: 213000,
            combustible: 'diesel',
            transmision: 'Manual',
            price: 14000,
            image: '../imagenes/coches/opel-movano/1.jpeg',
            link: '../coches/opel-movano.html',
            sold: true
        },
        {
            id: 12,
            marca: 'renault',
            title: 'Renault Master',
            subtitle: '2.3 dCi 165 Blue Energy L3H2',
            year: 2021,
            km: 184000,
            combustible: 'diesel',
            transmision: 'Manual',
            price: 15500,
            image: '../imagenes/coches/renault-master/1.jpeg',
            link: '../coches/renault-master.html'
        },
        {
            id: 13,
            marca: 'fiat',
            title: 'Fiat Ducato',
            subtitle: '2.3 Multijet 150 Furgón 4p E5',
            year: 2015,
            km: 247000,
            combustible: 'diesel',
            transmision: 'Manual',
            price: 11500,
            image: '../imagenes/coches/fiat-ducato/1.jpeg',
            link: '../coches/fiat-ducato.html',
            sold: true

        },
        {
            id: 14,
            marca: 'volkswagen',
            title: 'Volkswagen Touran',
            subtitle: '2.0 TDI 140 Advance',
            year: 2012,
            km: 278000,
            combustible: 'diesel',
            transmision: 'Manual',
            price: 10000,
            image: '../imagenes/coches/volkswagen-touran/1.jpeg',
            link: '../coches/volkswagen-touran.html',
            sold: true
        }
    ];

    // [EL RESTO DEL CÓDIGO PERMANECE IGUAL PERO SIN BADGES...]
    // DOM Elements
    const vehiclesGrid = document.getElementById('vehicles-grid');
    const resultsCount = document.getElementById('results-count');
    const loadingState = document.getElementById('loading-state');
    const emptyState = document.getElementById('empty-state');
    const loadMoreSection = document.getElementById('load-more-section');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const resetFiltersLink = document.getElementById('reset-filters-link');

    // Filter Elements
    const quickSearch = document.getElementById('quick-search');
    const filterMarca = document.getElementById('filter-marca');
    const priceMin = document.getElementById('price-min');
    const priceMax = document.getElementById('price-max');
    const yearMin = document.getElementById('year-min');
    const yearMax = document.getElementById('year-max');
    const kmMin = document.getElementById('km-min');
    const kmMax = document.getElementById('km-max');
    const filterCombustible = document.getElementById('filter-combustible');
    const filterCertificado = document.getElementById('filter-certificado');
    const filterDestacado = document.getElementById('filter-destacado');
    const filterGarantia = document.getElementById('filter-garantia');
    const clearFiltersBtn = document.getElementById('clear-filters');
    const applyFiltersBtn = document.querySelector('.apply-filters');
    const sortSelect = document.getElementById('sort-select');

    // View Options
    const viewOptions = document.querySelectorAll('.view-option');

    // State
    let currentPage = 1;
    const vehiclesPerPage = 12;
    let filteredVehicles = [...vehicles];
    let currentSort = 'recent';

    // Initialize
    function init() {
        renderVehicles();
        setupEventListeners();
        updateResultsCount();
    }

    // Setup event listeners
    function setupEventListeners() {
        // Filter events
        if (quickSearch) quickSearch.addEventListener('input', handleFilterChange);
        if (filterMarca) filterMarca.addEventListener('change', handleFilterChange);
        if (priceMin) priceMin.addEventListener('input', handleFilterChange);
        if (priceMax) priceMax.addEventListener('input', handleFilterChange);
        if (yearMin) yearMin.addEventListener('input', handleFilterChange);
        if (yearMax) yearMax.addEventListener('input', handleFilterChange);
        if (kmMin) kmMin.addEventListener('input', handleFilterChange);
        if (kmMax) kmMax.addEventListener('input', handleFilterChange);
        if (filterCombustible) filterCombustible.addEventListener('change', handleFilterChange);
        if (filterCertificado) filterCertificado.addEventListener('change', handleFilterChange);
        if (filterDestacado) filterDestacado.addEventListener('change', handleFilterChange);
        if (filterGarantia) filterGarantia.addEventListener('change', handleFilterChange);

        // Price presets
        document.querySelectorAll('.price-preset').forEach(preset => {
            preset.addEventListener('click', function() {
                const min = this.dataset.min;
                const max = this.dataset.max;
                if (priceMin) priceMin.value = min;
                if (priceMax) priceMax.value = max;
                handleFilterChange();
            });
        });

        // Clear filters
        if (clearFiltersBtn) {
            clearFiltersBtn.addEventListener('click', clearFilters);
        }

        if (resetFiltersLink) {
            resetFiltersLink.addEventListener('click', function(e) {
                e.preventDefault();
                clearFilters();
            });
        }

        // Apply filters (mobile)
        if (applyFiltersBtn) {
            applyFiltersBtn.addEventListener('click', handleFilterChange);
        }

        // Sort
        if (sortSelect) {
            sortSelect.addEventListener('change', function() {
                currentSort = this.value;
                sortVehicles();
                renderVehicles();
            });
        }

        // View options
        viewOptions.forEach(option => {
            option.addEventListener('click', function() {
                const view = this.dataset.view;
                setViewMode(view);
            });
        });

        // Load more
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', loadMoreVehicles);
        }
    }

    // Handle filter changes
    function handleFilterChange() {
        filterVehicles();
        sortVehicles();
        currentPage = 1;
        renderVehicles();
        updateResultsCount();
    }

    // Filter vehicles based on current filters
    function filterVehicles() {
        filteredVehicles = vehicles.filter(vehicle => {
            // Quick search
            const searchTerm = quickSearch ? quickSearch.value.toLowerCase() : '';
            if (searchTerm && !vehicle.title.toLowerCase().includes(searchTerm) && 
                !vehicle.subtitle.toLowerCase().includes(searchTerm)) {
                return false;
            }

            // Marca filter
            const marcaValue = filterMarca ? filterMarca.value : '';
            if (marcaValue && vehicle.marca !== marcaValue) {
                return false;
            }

            // Price filter
            const minPrice = priceMin ? parseInt(priceMin.value) || 0 : 0;
            const maxPrice = priceMax ? parseInt(priceMax.value) || Infinity : Infinity;
            if (vehicle.price < minPrice || vehicle.price > maxPrice) {
                return false;
            }

            // Year filter
            const minYear = yearMin ? parseInt(yearMin.value) || 0 : 0;
            const maxYear = yearMax ? parseInt(yearMax.value) || Infinity : Infinity;
            if (vehicle.year < minYear || vehicle.year > maxYear) {
                return false;
            }

            // KM filter
            const minKm = kmMin ? parseInt(kmMin.value) || 0 : 0;
            const maxKm = kmMax ? parseInt(kmMax.value) || Infinity : Infinity;
            if (vehicle.km < minKm || vehicle.km > maxKm) {
                return false;
            }

            // Combustible filter
            const combustibleValue = filterCombustible ? filterCombustible.value : '';
            if (combustibleValue && vehicle.combustible !== combustibleValue) {
                return false;
            }

            // Certificado filter (removed)
            if (filterCertificado && filterCertificado.checked) {
                // All vehicles are considered certified now
                return true;
            }

            // Destacado filter (removed)
            if (filterDestacado && filterDestacado.checked) {
                // All vehicles can be considered featured now
                return true;
            }

            // Garantia filter (all vehicles have warranty)
            if (filterGarantia && filterGarantia.checked) {
                // All vehicles have warranty
                return true;
            }

            return true;
        });
    }

    // Sort vehicles
    function sortVehicles() {
        switch (currentSort) {
            case 'price-low':
                filteredVehicles.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filteredVehicles.sort((a, b) => b.price - a.price);
                break;
            case 'km-low':
                filteredVehicles.sort((a, b) => a.km - b.km);
                break;
            case 'year-high':
                filteredVehicles.sort((a, b) => b.year - a.year);
                break;
            case 'recent':
            default:
                // Keep original order (most recent first based on ID)
                filteredVehicles.sort((a, b) => b.id - a.id);
                break;
        }
    }

    // Render vehicles to the grid (SIN BADGES)
    function renderVehicles() {
        if (!vehiclesGrid) return;

        const startIndex = 0;
        const endIndex = currentPage * vehiclesPerPage;
        const vehiclesToShow = filteredVehicles.slice(startIndex, endIndex);

        if (vehiclesToShow.length === 0) {
            vehiclesGrid.style.display = 'none';
            loadingState.style.display = 'none';
            emptyState.style.display = 'flex';
            loadMoreSection.style.display = 'none';
            return;
        }

        vehiclesGrid.style.display = 'grid';
        loadingState.style.display = 'none';
        emptyState.style.display = 'none';

        vehiclesGrid.innerHTML = vehiclesToShow.map(vehicle => `
            <div class="car-card" data-id="${vehicle.id}">
                ${vehicle.sold ? '<div class="sold-badge">Vendido</div>' : ''}
                
                <div class="car-image-container">
                    <img src="${vehicle.image}" alt="${vehicle.title}" class="car-image" onerror="this.src='../imagenes/placeholder-car.jpg'">
                    <div class="car-overlay">
                        <button class="quick-view">
                            <i class="fas fa-eye"></i>
                            Vista rápida
                        </button>
                    </div>
                </div>
                
                <div class="car-info">
                    <h3 class="car-title">${vehicle.title}</h3>
                    <p class="car-subtitle">${vehicle.subtitle}</p>
                    
                    <div class="car-details">
                        <div class="car-detail">
                            <i class="fas fa-calendar"></i>
                            <span>${vehicle.year}</span>
                        </div>
                        <div class="car-detail">
                            <i class="fas fa-tachometer-alt"></i>
                            <span>${vehicle.km.toLocaleString()} km</span>
                        </div>
                        <div class="car-detail">
                            <i class="fas fa-gas-pump"></i>
                            <span>${vehicle.combustible === 'diesel' ? 'Diésel' : 'Gasolina'}</span>
                        </div>
                        <div class="car-detail">
                            <i class="fas fa-cog"></i>
                            <span>${vehicle.transmision}</span>
                        </div>
                    </div>
                    
                    <div class="car-price-section">
                        <div class="car-price">${vehicle.price.toLocaleString()} €</div>
                        <div class="price-includes">Incluye garantía + cambio nombre</div>
                    </div>
                    
                    <div class="car-actions">
                        <a href="${vehicle.link}" class="btn-primary">
                            <i class="fas fa-info-circle"></i>
                            Ver detalles
                        </a>
                        <a href="https://wa.me/34624334958?text=Hola, estoy interesado en el ${vehicle.title} ${vehicle.subtitle} de ${vehicle.price.toLocaleString()}€" class="btn-secondary" target="_blank">
                            <i class="fab fa-whatsapp"></i>
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        `).join('');

        // Update load more button
        const remainingVehicles = filteredVehicles.length - endIndex;
        if (loadMoreBtn && loadMoreSection) {
            if (remainingVehicles > 0) {
                loadMoreSection.style.display = 'block';
                loadMoreBtn.querySelector('.load-count').textContent = `(${remainingVehicles} restantes)`;
            } else {
                loadMoreSection.style.display = 'none';
            }
        }

        // Add event listeners to quick view buttons
        document.querySelectorAll('.quick-view').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const carCard = this.closest('.car-card');
                const carId = carCard.dataset.id;
                const vehicle = vehicles.find(v => v.id == carId);
                if (vehicle) {
                    window.location.href = vehicle.link;
                }
            });
        });
    }

    // Load more vehicles
    function loadMoreVehicles() {
        currentPage++;
        renderVehicles();
    }

    // Clear all filters
    function clearFilters() {
        if (quickSearch) quickSearch.value = '';
        if (filterMarca) filterMarca.value = '';
        if (priceMin) priceMin.value = '';
        if (priceMax) priceMax.value = '';
        if (yearMin) yearMin.value = '';
        if (yearMax) yearMax.value = '';
        if (kmMin) kmMin.value = '';
        if (kmMax) kmMax.value = '';
        if (filterCombustible) filterCombustible.value = '';
        if (filterCertificado) filterCertificado.checked = false;
        if (filterDestacado) filterDestacado.checked = false;
        if (filterGarantia) filterGarantia.checked = false;
        
        handleFilterChange();
    }

    // Set view mode (grid/list)
    function setViewMode(view) {
        viewOptions.forEach(option => {
            option.classList.toggle('active', option.dataset.view === view);
        });
        
        if (vehiclesGrid) {
            vehiclesGrid.classList.toggle('list-view', view === 'list');
        }
    }

    // Update results count
    function updateResultsCount() {
        if (resultsCount) {
            resultsCount.textContent = filteredVehicles.length;
        }
    }

    // Simulate loading delay
    function simulateLoading() {
        if (loadingState) {
            loadingState.style.display = 'flex';
            vehiclesGrid.style.display = 'none';
            emptyState.style.display = 'none';
            
            setTimeout(() => {
                init();
            }, 1000);
        } else {
            init();
        }
    }

    // Start the application
    simulateLoading();

    console.log('🚀 Catalog page loaded successfully with 14 REAL vehicles!');
});