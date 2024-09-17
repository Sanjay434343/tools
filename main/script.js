// Random dark color generation
function getRandomDarkColor() {
    // Dark colors have low values for R, G, and B
    const r = Math.floor(Math.random() * 100); // Range from 0 to 100 for darker shades
    const g = Math.floor(Math.random() * 100); // Range from 0 to 100 for darker shades
    const b = Math.floor(Math.random() * 100); // Range from 0 to 100 for darker shades
    return `rgb(${r}, ${g}, ${b})`;
}

// Apply random dark background color to each card
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.style.backgroundColor = getRandomDarkColor();
});

// GSAP animations for the cards (without stagger)
gsap.from(".card", {
    opacity: 0,
    scale: 0.9,
    duration: 0.8,
    ease: "power3.out"
});

// Optional hover animation
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" });
    });
    card.addEventListener('mouseleave', () => {
        gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
    });
});
