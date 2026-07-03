/* GOOD LIFE COMMERCIAL AGENCIES V2.0 */

/* 1. ANNOUNCEMENT BAR SCROLL */
.announcement-track {
    animation: scroll-left 35s linear infinite;
}
@keyframes scroll-left {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}
.announcement-content span {
    margin-right: 3rem;
    font-size: 0.9rem;
    white-space: nowrap;
}

/* 2. HOVER EFFECTS */
.hover-card {
    transition: all 0.3s ease;
}
.hover-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.12);
}

/* 3. CATEGORY BUTTONS */
.category-btn {
    transition: all 0.3s ease;
    white-space: nowrap;
    flex-shrink: 0;
}
.category-btn.active {
    background-color: #D4AF37 !important;
    color: #081426 !important;
}

/* 4. HIDE SCROLLBAR */
#marketSlider::-webkit-scrollbar {
    display: none;
}
#marketSlider, .flex.gap-5.overflow-x-auto {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

/* 5. MODAL ANIMATION */
#quickViewModal {
    transition: opacity 0.3s ease;
}
#quickViewModal:not(.hidden) {
    display: flex;
    opacity: 1;
}

/* 6. BACK TO TOP */
#backToTop.show {
    display: flex !important;
    align-items: center;
    justify-content: center;
}
