// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Form Handling
document.querySelector('form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message received! We will contact you at 0705365075.');
});

console.log("Good Life 12-Section Portal: Systems Nominal.");
