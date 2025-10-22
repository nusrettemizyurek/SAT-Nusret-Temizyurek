document.addEventListener('DOMContentLoaded', () => {
    console.log("TeknoGündem sitesi yüklendi. Veritabanı yok, sadece saf teknoloji!");
    
    // Örnek: Kartlara hover efekti eklemek
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.transition = 'transform 0.2s ease-out';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});