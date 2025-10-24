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




/* ana sayfa */ 

if (document.body.classList.contains('index')) {
    const canvas = document.getElementById('bg-animation');
    const ctx = canvas.getContext('2d');

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    let nodes = [];
    const nodeCount = 70;
    const maxDistance = 140;

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    for (let i = 0; i < nodeCount; i++) {
        nodes.push({
            x: random(0, canvas.width),
            y: random(0, canvas.height),
            vx: random(-0.5, 0.5),
            vy: random(-0.5, 0.5),
            radius: random(1.5, 3),
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const gradient = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 0, canvas.width/2, canvas.height/2, canvas.width);
        gradient.addColorStop(0, "#0c0c0c");
        gradient.addColorStop(1, "#000");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < nodeCount; i++) {
            let n1 = nodes[i];
            n1.x += n1.vx;
            n1.y += n1.vy;

            if (n1.x < 0 || n1.x > canvas.width) n1.vx *= -1;
            if (n1.y < 0 || n1.y > canvas.height) n1.vy *= -1;

            ctx.beginPath();
            ctx.arc(n1.x, n1.y, n1.radius, 0, Math.PI * 2);
            ctx.fillStyle = "#00bfff";
            ctx.shadowBlur = 10;
            ctx.shadowColor = "#8a2be2";
            ctx.fill();

            for (let j = i + 1; j < nodeCount; j++) {
                let n2 = nodes[j];
                const dx = n1.x - n2.x;
                const dy = n1.y - n2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < maxDistance) {
                    ctx.beginPath();
                    ctx.moveTo(n1.x, n1.y);
                    ctx.lineTo(n2.x, n2.y);
                    ctx.strokeStyle = `rgba(0,191,255, ${1 - dist / maxDistance})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(draw);
    }

    draw();

    window.addEventListener('resize', () => {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
    });
}




