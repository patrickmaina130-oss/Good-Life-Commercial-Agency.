document.addEventListener('DOMContentLoaded', () => {

    const slider = document.getElementById('marketSlider');
    const categoryBtns = document.querySelectorAll('.category-btn');
    const searchInput = document.getElementById('marketSearch');
    const slideLeft = document.getElementById('slideLeft');
    const slideRight = document.getElementById('slideRight');
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const backToTop = document.getElementById('backToTop');

    // MODAL ELEMENTS
    const modal = document.getElementById('quickViewModal');
    const closeModal = document.getElementById('closeModal');
    const modalImage = document.getElementById('modalImage');
    const modalBadge = document.getElementById('modalBadge');
    const modalTitle = document.getElementById('modalTitle');
    const modalLocation = document.getElementById('modalLocation');
    const modalRating = document.getElementById('modalRating');
    const modalPrice = document.getElementById('modalPrice');
    const modalKes = document.getElementById('modalKes');

    let currentCategory = 'tours'; // Default active

    // 1. RENDER MARKETPLACE CARDS
    function renderMarketplace(items) {
        slider.innerHTML = '';
        if(items.length === 0) {
            slider.innerHTML = `<p class="text-center w-full py-20 text-gray-500 text-lg">No services found in this category.</p>`;
            return;
        }

        items.forEach(item => {
            const card = document.createElement('div');
            card.className = `min-w-[320px] snap-start bg-white rounded-3xl shadow-lg overflow-hidden hover-card cursor-pointer`;
            card.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="w-full h-52 object-cover">
                <div class="p-6">
                    <span class="inline-block bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">${item.badge}</span>
                    <h3 class="text-xl font-bold text-primary mb-2 line-clamp-2">${item.title}</h3>
                    <p class="text-sm text-gray-500 mb-1">${item.location}</p>
                    <p class="text-sm text-yellow-600 mb-4">${item.rating}</p>
                    <div class="flex items-end justify-between">
                        <div>
                            <h4 class="text-2xl font-extrabold text-amber-600">${item.priceUSD}</h4>
                            <p class="text-sm text-gray-500">${item.priceKES}</p>
                        </div>
                        <button class="quickViewBtn bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold">View</button>
                    </div>
                </div>
            `;
            // QUICK VIEW CLICK
            card.querySelector('.quickViewBtn').onclick = () => openModal(item);
            slider.appendChild(card);
        });
    }

    // 2. FILTER BY CATEGORY
    function filterCategory(category) {
        currentCategory = category;
        const filtered = category === 'all' 
            ? marketplaceData 
            : marketplaceData.filter(item => item.category === category);
        renderMarketplace(filtered);
    }

    // 3. CATEGORY BUTTON CLICKS
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active', 'bg-amber-500', 'text-white'));
            categoryBtns.forEach(b => b.classList.add('bg-white', 'text-slate-700'));
            btn.classList.add('active', 'bg-amber-500', 'text-white');
            btn.classList.remove('bg-white', 'text-slate-700');
            filterCategory(btn.dataset.category);
        });
    });

    // 4. LIVE SEARCH
    searchInput.addEventListener('input', () => {
        const term = searchInput.value.toLowerCase();
        const filtered = marketplaceData.filter(item => 
            item.title.toLowerCase().includes(term) || 
            item.location.toLowerCase().includes(term) ||
            item.category.toLowerCase().includes(term)
        );
        renderMarketplace(filtered);
    });

    // 5. SLIDER ARROWS
    slideLeft.addEventListener('click', () => slider.scrollBy({left: -340, behavior: 'smooth'}));
    slideRight.addEventListener('click', () => slider.scrollBy({left: 340, behavior: 'smooth'}));

    // 6. MOBILE MENU TOGGLE
    menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

    // 7. QUICK VIEW MODAL
    function openModal(item) {
        modalImage.src = item.image;
        modalBadge.textContent = item.badge;
        modalTitle.textContent = item.title;
        modalLocation.textContent = `📍 ${item.location}`;
        modalRating.textContent = item.rating;
        modalPrice.textContent = item.priceUSD;
        modalKes.textContent = item.priceKES;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    }
    function closeModalFunc() {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = 'auto';
    }
    closeModal.addEventListener('click', closeModalFunc);
    modal.addEventListener('click', (e) => { if(e.target === modal) closeModalFunc(); });

    // 8. BACK TO TOP
    window.addEventListener('scroll', () => {
        if(window.scrollY > 400) backToTop.classList.add('show');
        else backToTop.classList.remove('show');
    });
    backToTop.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));

    // 9. QUICK SEARCH FORM
    document.getElementById('serviceSelect').addEventListener('change', (e) => {
        const cat = e.target.value;
        if(cat !== 'all') {
            document.querySelector(`.category-btn[data-category="${cat}"]`).click();
            document.getElementById('marketplace').scrollIntoView({behavior: 'smooth'});
        }
    });

    // INIT: LOAD DEFAULT CATEGORY
    filterCategory(currentCategory);
});
