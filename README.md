## 📖 İçindekiler

- [Proje Hakkında](#-proje-hakkında)
- [Özellikler](#-özellikler)
- [Kullanılan Teknolojiler](#-kullanılan-teknolojiler)
- [Kurulum ve Kullanım](#-kurulum-ve-kullanım)
- [Dosya Yapısı](#-dosya-yapısı)



## 💡 Proje Hakkında

Web sitesimiz adı TeknoGündem dir  bu site genel olarak  kullanıcıların teknoloji dünyasında aradıklarını kolayca bulabilecekleri şekilde bölümlere ayrılmıştır. "Donanım" ve "Yazılım" olmak üzere iki ana kategoriye odaklanırken, ziyaretçileri dinamik bir slider ile karşılar  genel olarak kullanıcıların yazılım ve donanım alacakları bilgileri edinmek için yapılmış sade ve anlaşılır web sitedir.

### Sayfa İçerikleri:
* **Anasayfa:** Sade arayüz, öne çıkan içeriklerin bulunduğu slider ve hızlı erişim menüsü.
* **Donanım:**
    * *Haberler:* Güncel donanım gelişmeleri.
    * *İncelemeler:* Detaylı ürün analizleri.
* **Yazılım:** Bilgilendirici makaleler ve rehberler içeren bir sayfa.
* **Hakkımızda:** Proje vizyonu ve kurucu/geliştirici bilgiler hakkında bilgiler ile verildiği yerdir .

## ✨ Özellikler

* **Responsive Tasarım:** Farklı ekran boyutlarına uyumlu sade arayüz.
* **Özel Slider Modülü:** JavaScript ile oluşturulmuş, kendi stil ve script dosyalarına sahip bağımsız slider yapısı.
* **Kolay Navigasyon:** Sayfalar arası geçişi hızlandıran kullanıcı dostu menü yapısı.
* **Semantik HTML5:** SEO ve okunabilirlik standartlarına uygun kodlama.

## 🛠 Kullanılan Teknolojiler

Proje herhangi bir hazır kütüphane (Bootstrap vb.) kullanılmadan, tamamen "Native" (Saf) kodlarla yazılmıştır.

* **HTML5:** Sayfa iskeleti ve semantik yapı.
* **CSS3:** Stil, düzen ve responsive tasarım.
* **JavaScript (ES6):** Slider fonksiyonları ve interaktif öğeler.

  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

🚀 Kurulum ve Kullanım
Bu proje statik bir web sitesi olduğu için herhangi bir sunucu kurulumuna veya veritabanı bağlantısına ihtiyaç duymaz.

Projeyi bilgisayarınıza indirin (Download ZIP veya git clone).

Klasör içerisindeki index.html dosyasına çift tıklayın.

Proje varsayılan tarayıcınızda açılacaktır.

## 🔮 Gelecek Planları (To-Do)
- [ ] Haberler için JSON tabanlı veri çekme sistemi.
- [ ] İncelemeler sayfasına yorum yapma özelliği.


## 📂 Dosya Yapısı

Proje dosyaları, sürdürülebilirlik ve düzen açısından aşağıdaki hiyerarşide organize edilmiştir:

```text

/ [Proje Ana Dizini]
│
├── index.html          # Anasayfa
├── donanim.html        # Donanım Sayfası (Örnektir)
├── yazilim.html        # Yazılım Sayfası (Örnektir)
├── hakkimizda.html     # Hakkımızda Sayfası
│
├── css/                # Genel Stil Dosyaları
│   └── style.css
│
├── js/                 # Genel Script Dosyaları
│   └── style.js
│
├── img/                # Site genelindeki görseller
│   ├── Site İçerisinde Kullanılan fotoğraflar (genel)

│
└── slider/             # Slider Modülü (Bağımsız)
        # Slider geçiş kodları
    └── [Slider Resimleri]
│ slide .cs  #Ana sayfad ve yazılım sayfalarında kullanılan sliderın  css dosyası
│ slide .js  #Ana sayfad ve yazılım sayfalarında kullanılan sliderın  javascript  dosyası
