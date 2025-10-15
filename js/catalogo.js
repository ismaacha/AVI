// Catalog Page Functionality - HTML Version
document.addEventListener('DOMContentLoaded', function() {
    const vehiclesGrid = document.getElementById('vehicles-grid');
    const sortSelect = document.getElementById('sort-select');
    const clearFiltersBtn = document.getElementById('clear-filters');
    const loadMoreBtn = document.getElementById('load-more-btn');

    // Filter elements
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

    let displayedVehicles = 8;
    let allVehicleCards = Array.from(vehiclesGrid.querySelectorAll('.vehicle-card'));

    // Function to show/hide vehicles based on filters
    function filterVehicles() {
        const marcaValue = filterMarca.value;
        const priceMinValue = priceMin.value ? parseInt(priceMin.value) : null;
        const priceMaxValue = priceMax.value ? parseInt(priceMax.value) : null;
        const yearMinValue = yearMin.value ? parseInt(yearMin.value) : null;
        const yearMaxValue = yearMax.value ? parseInt(yearMax.value) : null;
        const kmMinValue = kmMin.value ? parseInt(kmMin.value) : null;
        const kmMaxValue = kmMax.value ? parseInt(kmMax.value) : null;
        const combustibleValue = filterCombustible.value;
        const certificadoChecked = filterCertificado.checked;
        const destacadoChecked = filterDestacado.checked;

        let visibleCount = 0;

        allVehicleCards.forEach(card => {
            const marca = card.getAttribute('data-marca');
            const year = parseInt(card.getAttribute('data-year'));
            const km = parseInt(card.getAttribute('data-km'));
            const price = parseInt(card.getAttribute('data-price'));
            const combustible = card.getAttribute('data-combustible');
            const certificado = card.getAttribute('data-certificado') === 'true';
            const destacado = card.getAttribute('data-destacado') === 'true';

            let shouldShow = true;

            // Apply filters
            if (marcaValue && marca !== marcaValue) shouldShow = false;
            if (priceMinValue && price < priceMinValue) shouldShow = false;
            if (priceMaxValue && price > priceMaxValue) shouldShow = false;
            if (yearMinValue && year < yearMinValue) shouldShow = false;
            if (yearMaxValue && year > yearMaxValue) shouldShow = false;
            if (kmMinValue && km < kmMinValue) shouldShow = false;
            if (kmMaxValue && km > kmMaxValue) shouldShow = false;
            if (combustibleValue && combustible !== combustibleValue) shouldShow = false;
            if (certificadoChecked && !certificado) shouldShow = false;
            if (destacadoChecked && !destacado) shouldShow = false;

            if (shouldShow) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Update vehicles count
        document.querySelector('.vehicles-count').textContent = `${visibleCount} vehículos disponibles`;

        // Show/hide load more button
        if (loadMoreBtn) {
            loadMoreBtn.style.display = visibleCount > displayedVehicles ? 'block' : 'none';
        }

        // Sort the visible vehicles
        sortVisibleVehicles();
    }

    // Function to sort visible vehicles
    function sortVisibleVehicles() {
        const visibleCards = allVehicleCards.filter(card => card.style.display !== 'none');
        
        const sortedCards = visibleCards.sort((a, b) => {
            const sortBy = sortSelect.value;
            
            switch(sortBy) {
                case 'price-low':
                    return parseInt(a.getAttribute('data-price')) - parseInt(b.getAttribute('data-price'));
                case 'price-high':
                    return parseInt(b.getAttribute('data-price')) - parseInt(a.getAttribute('data-price'));
                case 'km-low':
                    return parseInt(a.getAttribute('data-km')) - parseInt(b.getAttribute('data-km'));
                default: // recent
                    return parseInt(b.getAttribute('data-year')) - parseInt(a.getAttribute('data-year'));
            }
        });

        // Reorder the grid
        sortedCards.forEach(card => {
            vehiclesGrid.appendChild(card);
        });
    }

    // Function to handle load more
    function handleLoadMore() {
        const visibleCards = allVehicleCards.filter(card => card.style.display !== 'none');
        
        // Show more cards
        displayedVehicles += 4;
        
        // Reset all to hidden first
        allVehicleCards.forEach(card => card.style.display = 'none');
        
        // Show up to displayedVehicles
        visibleCards.slice(0, displayedVehicles).forEach(card => {
            card.style.display = 'block';
        });

        // Update load more button visibility
        if (loadMoreBtn) {
            loadMoreBtn.style.display = visibleCards.length > displayedVehicles ? 'block' : 'none';
        }
    }

    // Function to clear all filters
    function clearAllFilters() {
        filterMarca.value = '';
        priceMin.value = '';
        priceMax.value = '';
        yearMin.value = '';
        yearMax.value = '';
        kmMin.value = '';
        kmMax.value = '';
        filterCombustible.value = '';
        filterCertificado.checked = false;
        filterDestacado.checked = false;
        sortSelect.value = 'recent';
        
        displayedVehicles = 8;
        allVehicleCards.forEach(card => card.style.display = 'block');
        filterVehicles();
    }

    // Event listeners
    if (sortSelect) {
        sortSelect.addEventListener('change', sortVisibleVehicles);
    }

    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearAllFilters);
    }

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', handleLoadMore);
    }

    // Add event listeners to all filter inputs
    const filterInputs = [
        filterMarca, priceMin, priceMax, yearMin, yearMax, 
        kmMin, kmMax, filterCombustible, filterCertificado, filterDestacado
    ];

    filterInputs.forEach(input => {
        if (input.type === 'checkbox') {
            input.addEventListener('change', filterVehicles);
        } else {
            input.addEventListener('input', filterVehicles);
        }
    });

    // Initial setup - show first 8 vehicles
    allVehicleCards.forEach((card, index) => {
        card.style.display = index < displayedVehicles ? 'block' : 'none';
    });

    // Initial filter and sort
    filterVehicles();

    console.log('Catalog page loaded successfully!');
});