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




/* Donanım Sayfası */
// Haber detayları (Gerçek bir veritabanı veya API'den gelmesi gereken veriyi burada tutuyoruz)
const newsDetails = {
    "intel-arrow-lake": {
        title: "Intel Arrow Lake İşlemciler Sızdırıldı: Yeni Çekirdek Yapısı ve Detaylı Analiz",
        body: `
            <p>Intel'in 15. Nesil Core serisi olarak beklenen Arrow Lake mimarisi hakkında çıkan son sızıntılar, işlemcinin tasarım felsefesinde büyük bir değişime işaret ediyor. Yeni nesil işlemcilerde, yüksek performanslı P-çekirdekleri (P-Cores) ve verimliliğe odaklanmış E-çekirdekleri (E-Cores) arasındaki denge yeniden kuruluyor. Sızıntılara göre amiral gemisi model, önceki nesle kıyasla tek çekirdek performansında %15, çoklu çekirdek performansında ise %25'e varan iyileştirmeler sunacak.</p>
            <p><strong>Teknik Detaylar:</strong> Arrow Lake, Intel 20A üretim teknolojisini kullanacak ve entegre yapay zeka hızlandırıcıları (NPU) ile geleceği kesinleşti. Bu NPU'lar, Windows 12 ve diğer yazılımların gerektirdiği yerel AI yüklerini hızlandırmak için kritik öneme sahip olacak. İşlemcinin TDP değerleri ise beklentilerin aksine, verimlilik odaklı E-çekirdeklerinin katkısıyla makul seviyelerde tutulacak.</p>
            <p>Oyun dünyası için ise L2 önbellek boyutlarında yapılan ciddi artışlar, özellikle rekabetçi oyunlarda kare hızlarının daha stabil kalmasına yardımcı olacak.</p>
        `
    },
    "samsung-ram": {
        title: "Samsung'dan 5nm Süreciyle Üretilmiş Devrim Niteliğinde DDR5 RAM Modülleri",
        body: `
            <p>Samsung'un duyurduğu yeni nesil 5nm üretim teknolojisine sahip DDR5 bellek modülleri, sadece hızda değil, aynı zamanda güç verimliliğinde de çıtayı yükseltiyor. Bu modüller, mevcut 10nm sınıfı DRAM'lere göre %20 daha az güç tüketirken, hızları 8000 MT/s seviyesini aşabiliyor. Bu durum, özellikle mobil cihazlar ve kompakt iş istasyonları için batarya ömrü ve termal yönetim açısından büyük avantaj sağlıyor.</p>
            <p><strong>Overclock Potansiyeli:</strong> İlk testler, bu modüllerin XMP profillerinin ötesinde de stabil çalışabildiğini gösteriyor. Gelişmiş üretim süreci sayesinde voltaj toleransı artırılmış, bu da profesyonel hız aşırtmacılar için yeni rekor denemelerine olanak tanımıştır. Bu teknolojinin 2026'nın başlarında tüketici pazarına sunulması bekleniyor.</p>
        `
    },
    "pcie-6-ssd": {
        title: "PCIe 6.0 SSD Teknolojisinin İlk Prototip Testleri: Hız Sınırları Yeniden Çiziliyor",
        body: `
            <p>PCIe 5.0 henüz yaygınlaşmamışken, sektör PCIe 6.0'a geçiş için hazırlık yapıyor. İlk prototip 6.0 NVMe SSD'ler, teorik olarak 28 GB/s'ye (PCIe 5.0'ın iki katı) ulaşabilen okuma ve yazma hızlarını göstermiştir. Bu inanılmaz hızlar, özellikle yapay zeka eğitimi, büyük veri analizi ve 8K video düzenleme gibi profesyonel iş yüklerinde büyük bir darboğazı ortadan kaldıracaktır.</p>
            <p><strong>Termal Yönetim Sorunu:</strong> Ancak bu yüksek hızlar, sürücülerde ciddi ısı üretimine yol açıyor. Üreticiler bu sorunu çözmek için daha büyük pasif soğutucular veya hatta aktif (fanlı) soğutma çözümlerini entegre etmek zorunda kalacaklar. Tüketiciye yönelik modellerin yaygınlaşması 2027'yi bulabilir.</p>
        `
    }
};

// Modal (Açılır Pencere) DOM Elementleri
const modal = document.getElementById("modal");
const closeButton = document.querySelector(".close-button");
const newsButtons = document.querySelectorAll(".news-link-btn");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");

// Haber butonlarına tıklama olay dinleyicilerini ekle
newsButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Tıklanan butonun data-news-id değerini al
        const newsId = this.getAttribute('data-news-id');
        const detail = newsDetails[newsId];

        if (detail) {
            // Modal içeriğini doldur
            modalTitle.textContent = detail.title;
            modalBody.innerHTML = detail.body;
            
            // Modalı göster
            modal.style.display = "block";
        }
    });
});

// Kapatma butonuna tıklama olayı
closeButton.addEventListener('click', function() {
    modal.style.display = "none";
});

// Modal dışına tıklayınca kapatma olayı
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

















