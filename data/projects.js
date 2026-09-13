/**
 * Portfolio Data: Bayu Adi Rahayu
 * Inspired by Loop Agency Framer Design System
 * Structured 4-Pillar Case Studies: Overview, Challenge, Approach, Outcome
 */

const portfolioData = {
  profile: {
    name: "Bayu Adi Rahayu",
    monogram: "BAY",
    roles: [
      "Visual & Graphic Designer",
      "Full-Stack Designer & Developer",
      "AI-Integrated Creative",
      "Brand Identity Specialist"
    ],
    location: "Bandung Barat, Jawa Barat, Indonesia",
    timezone: "Asia/Jakarta",
    availability: "Available for freelance & collaborative projects",
    email: "bay.fine04@gmail.com",
    whatsapp: "https://wa.me/6285155321739",
    whatsappDisplay: "+62 851-5532-1739",
    linkedin: "https://www.linkedin.com/in/bayu-adi-rahayu",
    behance: "https://www.behance.net/Dopxmine",
    instagram: "https://www.instagram.com/bayuadirahayu?stkn=Y2hxaXhheDZqcXk5",
    tiktok: "https://www.tiktok.com/@dopxmine__",
    resumePdf: "/Bayu adi rahayu-resume .pdf",
    bio: "Mahasiswa Desain Komunikasi Visual (IWU Bandung) dengan latar belakang Rekayasa Perangkat Lunak. Menggabungkan ketajaman estetika grafis, komposisi editorial modern, dan alur kerja berbasis kecerdasan buatan (AI-driven workflow) untuk merancang identitas visual, kemasan premium, serta antarmuka digital yang berdampak kuat.",
    stats: [
      { number: "04+", label: "Tahun Eksplorasi Visual" },
      { number: "25+", label: "Aset & Proyek Selesai" },
      { number: "100%", label: "Desain Orisinil & Presisi" },
      { number: "07", label: "Disiplin Kreatif Terintegrasi" }
    ],
    skills: {
      design: ["Brand Identity", "UI/UX Ecosystem", "Packaging Design", "Motion Graphics", "Typography Design", "Editorial & Posters", "Photography"],
      software: ["Adobe Photoshop", "Adobe After Effects", "Adobe Premiere Pro", "Figma", "CorelDRAW", "Canva", "OBS Studio"],
      technical: ["AI-Integrated Prototyping", "Design-to-Code", "Responsive Web Development", "Design Systems"]
    },
    education: [
      {
        institution: "International Women University (IWU)",
        degree: "Bachelor of Desain Komunikasi Visual (DKV)",
        period: "2022 - Sekarang",
        location: "Bandung, Jawa Barat",
        description: "Fokus pada pembuatan Brand Guidelines, UI/UX Aplikasi, Iklan Motion, dan Ilustrasi Informatif."
      },
      {
        institution: "SMK Negeri 1 Rongga",
        degree: "Rekayasa Perangkat Lunak (RPL)",
        period: "2016 - 2019",
        location: "Bandung Barat",
        description: "Dasar arsitektur perangkat lunak, pemrograman web, dan manajemen basis data."
      }
    ]
  },

  categories: [
    { id: "all", name: "All Projects", count: 11 },
    { id: "ui-ux", name: "UI/UX & Web", count: 2 },
    { id: "packaging", name: "Packaging", count: 1 },
    { id: "branding", name: "Brand Identity", count: 3 },
    { id: "social", name: "Social Media", count: 1 },
    { id: "motion", name: "Motion Graphic", count: 1 },
    { id: "editorial", name: "Editorial & Posters", count: 1 },
    { id: "typography", name: "Custom Type", count: 1 },
    { id: "photography", name: "Photography", count: 1 }
  ],

  projects: [
    {
      id: "izygo",
      title: "IzyGo SuperApp",
      category: "UI/UX & Digital Ecosystem",
      categorySlug: "ui-ux",
      year: "2026",
      client: "Fintech Platform",
      role: "Lead UI/UX & Design System",
      timeline: "6 Minggu",
      tagline: "Sistem ekosistem transaksi digital all-in-one dengan alur checkout instan dan keamanan idempotensi.",
      heroImage: "/assets/projects/izygo/hero.webp",
      overview: "IzyGo adalah platform solusi transaksi digital mandiri terintegrasi yang dirancang untuk memfasilitasi kebutuhan pembayaran elektronik, pengisian pulsa, paket data semua operator, voucher game, token listrik, hingga transfer saldo peer-to-peer (P2P). Proyek ini lahir dari transformasi ritel konvensional menjadi agensi produk digital mandiri yang memberdayakan mitra bisnis (reseller).",
      challenge: "Ketergantungan pada platform pihak ketiga membatasi kontrol margin dan integrasi alur kerja. Selain itu, pada sistem pembayaran mobile rawan terjadi kendala double-charge saat jaringan tidak stabil serta beban kognitif pengguna akibat alur transaksi yang berbelit-belit. Diperlukan antarmuka yang bersih, cepat (one-click flow), dan sistem keamanan idempotensi yang terpercaya.",
      approach: "Pengembangan dimulai dari pemetaan Persona Canvas (Pelajar/Mahasiswa & Mitra Bisnis), Use Case Diagram, hingga Activity Diagram lengkap. Arsitektur visual mengadopsi tema dark mode kontemporer dengan palet biru dinamis (#0F2027) dan aksen amber (#F7B731) untuk hierarki tombol. Mengimplementasikan layer Idempotency Key di level backend/edge function serta desain respons visual instan dengan indikator mikro-interaksi jelas.",
      outcome: "Buku panduan desain UI/UX komprehensif sebanyak 27 halaman mencakup Low-Fidelity, Medium-Fidelity, High-Fidelity Wireframes, prototipe alur transaksi frictionless, modul KYC Liveness Verification, sistem proteksi idempotensi, dan komponen UI kit yang konsisten.",
      deliverables: [
        "27-Halaman UI/UX Specification Book",
        "Hi-Fi Mobile App Screens (15+ Layar Utama)",
        "Use Case & Activity Flowchart Diagram",
        "Liveness Verification & KYC System Flow",
        "Design System & Component Kit"
      ],
      quote: "Antarmuka yang tenang dan terarah memangkas kebingungan bertransaksi menjadi pengalaman yang mulus dan memuaskan.",
      quoteAuthor: "IzyGo Product Vision",
      gallery: [
        "/assets/projects/izygo/hero.webp",
        "/assets/projects/izygo/izygo_page_5.webp",
        "/assets/projects/izygo/izygo_page_6.webp",
        "/assets/projects/izygo/izygo_page_13.webp",
        "/assets/projects/izygo/izygo_page_14.webp",
        "/assets/projects/izygo/izygo_page_19.webp",
        "/assets/projects/izygo/izygo_page_20.webp",
        "/assets/projects/izygo/izygo_page_21.webp"
      ],
      videoFiles: [
        { title: "IzyGo Feature & Interaction Promo", file: "/Portofolio/Portofolio/Motion graphic/Mograph IzyGo.mp4" }
      ]
    },

    {
      id: "hasle",
      title: "Haslé Packaging & Brand",
      category: "Product Packaging & Identity",
      categorySlug: "packaging",
      year: "2024",
      client: "Haslé Artisan Goods",
      role: "Packaging & Brand Identity Designer",
      timeline: "4 Minggu",
      tagline: "Desain kemasan pangan artisan minimalis dengan eksplorasi filosofi logo geometris yang elegan.",
      heroImage: "/assets/projects/hasle/1.webp",
      overview: "Haslé adalah jenama kuliner dan pangan artisan lokal yang menghadirkan produk dengan bahan pilihan berkualitas tinggi. Proyek ini mencakup perancangan identitas visual, filosofi logo, dan rangkaian kemasan produk (pouch & box) yang memancarkan kesan premium, organik, dan modern di etalase ritel maupun pasar digital.",
      challenge: "Pasar makanan artisan dipenuhi desain yang ramai dan seragam. Tantangannya adalah merumuskan visual language yang bersih, restrained, namun memiliki focal point yang kuat sehingga langsung menarik perhatian konsumen tanpa mengorbankan kesan hangat dan otentik.",
      approach: "Menerapkan pendekatan Swiss Design dengan komposisi grid simetris, tipografi display modern, dan ruang negatif yang lapang. Logo dirancang dengan dasar geometris yang menyimpan filosofi keterhubungan dan keaslian rasa. Kemasan mengombinasikan palet warna monokromatik dengan sentuhan earthy tones untuk membedakan varian rasa.",
      outcome: "Rangkaian 9 desain kemasan produk siap produksi lengkap dengan mockup 3D visualisasi nyata serta dokumen panduan filosofi logo. Menghasilkan peningkatan daya saing visual jenama secara signifikan.",
      deliverables: [
        "9 Varian Desain Kemasan Produk (Haslé 1 - 9)",
        "Buku Filosofi & Konstruksi Logo Haslé",
        "3D Realistic Product Mockups",
        "Palet Warna & Panduan Tipografi Kemasan"
      ],
      quote: "Kesederhanaan garis dan kekuatan ruang kosong justru menonjolkan mutu produk yang ada di dalamnya.",
      quoteAuthor: "Haslé Creative Direction",
      gallery: [
        "/assets/projects/hasle/1.webp",
        "/assets/projects/hasle/2.webp",
        "/assets/projects/hasle/3.webp",
        "/assets/projects/hasle/4.webp",
        "/assets/projects/hasle/5.webp",
        "/assets/projects/hasle/6.webp",
        "/assets/projects/hasle/7.webp",
        "/assets/projects/hasle/8.webp",
        "/assets/projects/hasle/9.webp",
        "/assets/projects/hasle/hasle_filosofi_page_1.webp",
        "/assets/projects/hasle/hasle_filosofi_page_2.webp"
      ]
    },

    {
      id: "blumora",
      title: "Blumora Creative Ecosystem",
      category: "Brand Identity & Digital Platform",
      categorySlug: "branding",
      year: "2025",
      client: "Blumora Agency",
      role: "Full-Stack Visual Designer & Developer",
      timeline: "Ongoing",
      tagline: "Identitas visual modern dan platform digital kreatif berbasis integrasi alur kerja kecerdasan buatan.",
      heroImage: "/assets/projects/branding/blumora_logo.webp",
      overview: "Perancangan ekosistem visual dan identitas menyeluruh untuk Blumora, sebuah entitas agensi kreatif modern yang berfokus pada efisiensi produksi menggunakan AI-driven workflow. Proyek ini mencakup perancangan logo utama, monogram, panduan identitas brand, hingga arsitektur antarmuka digital.",
      challenge: "Menghadirkan bahasa visual yang merefleksikan kecanggihan teknologi dan kecerdasan buatan, tanpa terlihat kaku atau generik. Identitas harus mudah diadaptasi ke berbagai materi agensi mulai dari media sosial, kop surat, hingga antarmuka perangkat lunak.",
      approach: "Mengeksplorasi bentuk geometris fluid yang merepresentasikan kontinuitas inovasi, dipadukan dengan tipografi sans-serif berdaya baca tinggi. Alur kerja mengintegrasikan AI generatif untuk eksplorasi wireframe awal, yang kemudian dipoles dan dikodekan secara presisi menggunakan prinsip responsive design.",
      outcome: "Identitas visual agensi yang kokoh dengan aset logo lengkap (varian dark, light, dan transparan), sistem warna terukur, serta panduan branding yang diaplikasikan ke seluruh lini komunikasi digital agensi.",
      deliverables: [
        "Varian Logo Utama, Monogram, & Icon System",
        "Dokumentasi Brand Guidelines Digital",
        "Social Media Kit & Template Promosi",
        "Komponen UI Antarmuka Web Agensi"
      ],
      quote: "Menyatukan intuisi desainer dan kecepatan komputasi cerdas menghasilkan karya yang cepat dan presisi.",
      quoteAuthor: "Blumora Studio Manifesto",
      gallery: [
        "/assets/projects/branding/blumora_logo.webp",
        "/assets/projects/branding/blumora_draft.webp",
        "/assets/projects/branding/blumora_white.webp",
        "/assets/projects/branding/brandbook_page_1.webp",
        "/assets/projects/branding/brandbook_page_2.webp",
        "/assets/projects/branding/brandbook_page_3.webp"
      ]
    },

    {
      id: "motion-showcase",
      title: "Motion Graphics & Kinetic Reel",
      category: "Motion Design & Video Production",
      categorySlug: "motion",
      year: "2023 - 2024",
      client: "Multi-Project Showcase",
      role: "Motion Designer & Animator",
      timeline: "Eksplorasi Berkelanjutan",
      tagline: "Animasi kinetik After Effects, puppet character rigging, dan video promosi dinamis.",
      heroImage: "/assets/projects/social/feed_35.webp",
      overview: "Koleksi karya animasi gerak (motion graphics) yang menggabungkan ilustrasi karakter, tipografi kinetik, dan ritme audio. Karya mencakup promosi aplikasi IzyGo, animasi komik digital, tugas karya kreatif 'Call of Void', dan puppet rigging karakter di Adobe After Effects.",
      challenge: "Mengatur tempo dan kurva percepatan gerak (easing) agar animasi terasa alami, dinamis, dan menarik perhatian audiens digital dalam beberapa detik pertama pemutaran.",
      approach: "Penerapan 12 prinsip dasar animasi (anticipation, squash and stretch, follow through), perancangan storyboard rinci, pemotongan layer vektor di Illustrator, serta rigging puppet pin dan integrasi sound effects di After Effects dan Premiere Pro.",
      outcome: "5 karya video motion graphics beresolusi tinggi dengan engagement visual yang kuat, siap pakai untuk kampanye digital, presentasi klien, dan portfolio video.",
      deliverables: [
        "IzyGo Product Motion Graphic Video",
        "Mograph Comic Story Animation",
        "KAIT UAS Video 'Call of Void'",
        "Puppet Character Animation Reel"
      ],
      quote: "Gerak memberikan jiwa pada bentuk statis, mentransformasikan pesan menjadi pengalaman emosional.",
      quoteAuthor: "Motion Design Philosophy",
      videoFiles: [
        { title: "IzyGo Promo Motion", file: "/Portofolio/Portofolio/Motion graphic/Mograph IzyGo.mp4" },
        { title: "Motion Comic Story", file: "/Portofolio/Portofolio/Motion graphic/Mograph comic.mp4" },
        { title: "Call of Void (KAIT)", file: "/Portofolio/Portofolio/Motion graphic/KAIT UAS video Call of Void Kel Nut Think KBB.mp4" },
        { title: "Kinetic Showcase Reel", file: "/Portofolio/Portofolio/Motion graphic/Mographh 2.mp4" }
      ],
      gallery: [
        "/assets/projects/social/feed_35.webp",
        "/assets/projects/social/feed_36.webp",
        "/assets/projects/social/feed_39.webp"
      ]
    },

    {
      id: "traditional-typography",
      title: "Traditional Weapon Typeface",
      category: "Custom Typeface Design",
      categorySlug: "typography",
      year: "2024",
      client: "Type Design Project",
      role: "Typeface Designer",
      timeline: "3 Minggu",
      tagline: "Perancangan font display orisinil yang terinspirasi oleh siluet senjata tradisional nusantara.",
      heroImage: "/assets/projects/posters/poster_informatif.webp",
      overview: "Eksplorasi tipografi vernakular Indonesia dengan mentransformasikan lekukan, bilah tajam, dan karakter pusaka tradisional (keris & kujang) menjadi set glif huruf alfabet digital (TrueType Font).",
      challenge: "Menjaga keseimbangan antara unsur ekspresi etnik yang dramatis dengan keterbacaan (readability) saat teks digunakan pada judul utama, poster, atau judul media interaktif.",
      approach: "Riset visual terhadap morfologi senjata tradisional Sunda dan Jawa, pembuatan sketsa manual, digitalisasi vektor presisi menggunakan kurva Bézier, dan pengujian kerning serta proporsi x-height di perangkat lunak font editor.",
      outcome: "Tersedianya dua font instalasi komputer: 'Tradisionalfontbay-Regular.ttf' dan 'Traditionalwaeponfont-Regular.ttf' yang siap digunakan secara bebas dalam proyek grafis bertema lokal dan futuristik.",
      deliverables: [
        "Tradisionalfontbay-Regular.ttf (Full Glyph Set)",
        "Traditionalwaeponfont-Regular.ttf (Display Edition)",
        "Type Specimen Poster & Visual Application",
        "Panduan Lisensi & Pemasangan Font"
      ],
      quote: "Warisan budaya tidak hanya disimpan di museum, tetapi dihidupkan kembali dalam setiap guratan huruf modern.",
      quoteAuthor: "Typeface Notes",
      fontFiles: [
        "/Portofolio/Portofolio/Font/Tradisionalfontbay-Regular.ttf",
        "/Portofolio/Portofolio/Font/Traditionalwaeponfont-Regular - Copy.ttf"
      ],
      gallery: [
        "/assets/projects/posters/poster_informatif.webp",
        "/assets/projects/posters/ilustrasi_informatif.webp"
      ]
    },

    {
      id: "posters-editorial",
      title: "Editorial Posters & Illustrations",
      category: "Editorial & Information Graphics",
      categorySlug: "editorial",
      year: "2023 - 2024",
      client: "Institusi & Komunitas",
      role: "Graphic Designer & Illustrator",
      timeline: "Reguler",
      tagline: "Poster acara resmi, media penerimaan mahasiswa baru (PMB IWU), dan poster informatif edukatif.",
      heroImage: "/assets/projects/posters/hari_santri.webp",
      overview: "Kumpulan karya desain poster, flyer, dan ilustrasi komunikasi publik. Proyek mencakup poster Selamat Hari Santri Nasional, brosur Penerimaan Mahasiswa Baru (PMB) International Women University, dan poster informatif edukasi publik.",
      challenge: "Menata informasi verbal yang padat agar dapat dicerna dalam sekilas pandang oleh target pembaca di berbagai media cetak dan media sosial.",
      approach: "Penerapan hierarki tipografi tegas (Headline, Sub-headline, Body), grid terstruktur, pemilihan warna tematik yang berani, dan integrasi elemen ilustrasi vektor pendukung yang komunikatif.",
      outcome: "Desain poster yang informatif, harmonis, dan berhasil meningkatkan efektivitas penyampaian pesan kampanye publik.",
      deliverables: [
        "Poster Resmi Hari Santri Nasional",
        "Flyer Brosur PMB IWU Multi-Format",
        "Poster Ilustrasi Informatif Publik",
        "Aset Banner Media Sosial Pendukung"
      ],
      quote: "Poster yang baik tidak sekadar menghias dinding, melainkan memandu pemikiran dan menggerakkan tindakan.",
      quoteAuthor: "Editorial Philosophy",
      gallery: [
        "/assets/projects/posters/hari_santri.webp",
        "/assets/projects/posters/pmb_flyer.webp",
        "/assets/projects/posters/pmb_full.webp",
        "/assets/projects/posters/ilustrasi_informatif.webp",
        "/assets/projects/posters/poster_informatif.webp"
      ]
    },

    {
      id: "photography-series",
      title: "Visual Optics: Still Life & Wildlife",
      category: "Macro & Fine Art Photography",
      categorySlug: "photography",
      year: "2023 - 2024",
      client: "DKV Photography Study",
      role: "Photographer & Retoucher",
      timeline: "Karya Akademik & Personal",
      tagline: "Studi komposisi puitis makro, pengamatan satwa liar, dan dokumentasi jalanan.",
      heroImage: "/assets/projects/photography/still_life.webp",
      overview: "Koleksi fotografi eksploratif yang menyelidiki interaksi cahaya, tekstur benda mati (Still Life), dan keindahan organik satwa liar (Wildlife). Salah satu karya terkenal adalah 'Dua Kacang Yang Romantis' dan 'Belalang Sembah di Pohon'.",
      challenge: "Membangun atmosfer emosional dan narasi cerita dari objek sehari-hari yang sederhana hanya melalui pencahayaan dan penempatan sudut pandang kamera.",
      approach: "Pemanfaatan pencahayaan samping terarah (directional side lighting), depth of field dangkal dengan bukaan lensa lebar, serta color grading yang mempertahankan nuansa organik alami.",
      outcome: "Portofolio fotografi yang membuktikan pemahaman mendalam tentang tata cahaya, ruang visual, rasio kontras, dan kepekaan rasa estetika.",
      deliverables: [
        "Still Life Series: 'Dua Kacang Yang Romantis'",
        "Wildlife Series: 'Belalang Sembah di Pohon'",
        "Fujifilm X Documentary Series (DSCF 6145 - 6183)",
        "Fine-Art Color Grading & Retouching"
      ],
      quote: "Fotografi adalah seni melihat hal yang luar biasa di dalam hal-hal yang biasa.",
      quoteAuthor: "Photography Perspective",
      gallery: [
        "/assets/projects/photography/still_life.webp",
        "/assets/projects/photography/wild_life.webp",
        "/assets/projects/photography/fujifilm_6145.webp",
        "/assets/projects/photography/fujifilm_6167.webp",
        "/assets/projects/photography/fujifilm_6183.webp"
      ]
    },

    {
      id: "logo-identity-suite",
      title: "Logo Archive & Visual Marks",
      category: "Corporate & Community Marks",
      categorySlug: "branding",
      year: "2023 - 2024",
      client: "Berbagai Brand & Organisasi",
      role: "Identity Designer",
      timeline: "Koleksi Terpilih",
      tagline: "Koleksi logo geometris, lambang institusi, dan tanda visual berkekuatan tinggi.",
      heroImage: "/assets/projects/logos/ar_studio.webp",
      overview: "Koleksi tanda visual (brandmarks) untuk berbagai sektor: AR Studio, Satgas, Unit Pengumpul Zakat (UPZ), Useed, Gacii, dan entitas komunitas lainnya.",
      challenge: "Merancang simbol yang mudah diingat, berfungsi sempurna pada ukuran sekecil favicon 16px hingga sebesar baliho gedung, serta membawa makna filosofis klien.",
      approach: "Eksplorasi sketsa berbasis grid geometris dasar (lingkaran, segitiga, persegi), pengujian skalabilitas hitam-putih sebelum pewarnaan, dan pemilihan tipografi pelengkap yang harmonis.",
      outcome: "Ragam identitas logo yang diaplikasikan pada stationery resmi, cap instansi, seragam, kop surat, dan platform digital.",
      deliverables: [
        "AR Studio Identity Mark",
        "Satgas Emblem & Symbol",
        "UPZ Bottom Typegram Logo",
        "Useed Brand Mark & Typographic Lockup",
        "Gacii Brand Identity Suite"
      ],
      quote: "Logo yang kuat adalah tanda tangan visual yang berbicara bahkan sebelum kata-kata dibaca.",
      quoteAuthor: "Identity Standard",
      gallery: [
        "/assets/projects/logos/ar_studio.webp",
        "/assets/projects/logos/gacii.webp",
        "/assets/projects/logos/satgas.webp",
        "/assets/projects/logos/useed.webp",
        "/assets/projects/logos/upz.webp"
      ]
    },

    {
      id: "comic-narrative",
      title: "Pangeran Katak & Bola Emas",
      category: "Comic & Children Storytelling",
      categorySlug: "editorial",
      year: "2026",
      client: "Cerita Bergambar Anak",
      role: "Comic Artist & Layout Artist",
      timeline: "Karya Buku Ilustrasi",
      tagline: "Buku cerita bergambar anak dengan ilustrasi dongeng klasik pangeran katak.",
      heroImage: "/assets/projects/comic/comic_page_1.webp",
      overview: "Proyek perancangan komik naratif dan buku cerita anak bergambar yang mengangkat kisah klasik Pangeran Katak dan Bola Emas dengan visual kontemporer yang ramah anak.",
      challenge: "Menyusun tata letak panel komik yang dinamis serta pewarnaan ceria yang merangsang imajinasi pembaca usia dini.",
      approach: "Perancangan sketsa karakter katak dan putri, tata letak panel cerita berurutan, tipografi dialog yang mudah dibaca, serta pewarnaan digital berlapis.",
      outcome: "Buku cerita anak lengkap 13 halaman dengan cerita yang mengalir dan ilustrasi visual yang memikat.",
      deliverables: [
        "Buku Cerita Bergambar Anak 13 Halaman",
        "Character Design Sheet",
        "Digital Coloring & Layout Book"
      ],
      quote: "Cerita yang baik menanamkan nilai luhur melalui keajaiban visual dan imajinasi.",
      quoteAuthor: "Children Story Vision",
      gallery: [
        "/assets/projects/comic/comic_page_1.webp",
        "/assets/projects/comic/comic_page_2.webp",
        "/assets/projects/comic/comic_page_3.webp"
      ]
    },

    {
      id: "paksa-brandbook",
      title: "PAKSA — Brand Identity & Merchandise",
      category: "Brand Identity & Guideline",
      categorySlug: "branding",
      year: "2026",
      client: "PAKSA Apparel & Goods",
      role: "Lead Brand Identity & Art Direction",
      timeline: "4 Minggu",
      tagline: "Buku panduan identitas merek terstruktur, standarisasi elemen visual, dan sistem aplikasi merchandise apparel.",
      heroImage: "/assets/projects/branding/brandbook_page_1.webp",
      overview: "PAKSA adalah perancangan identitas merek menyeluruh yang menggabungkan buku panduan gaya (Brand Guidelines Book) dengan ekosistem merchandise fisik. Proyek ini memetakan karakter brand yang berani, utilitarian, dan modern melalui standarisasi tipografi, rasio logo, serta implementasi nyata pada produk apparel dan kemasan merchandise.",
      challenge: "Membangun sistem identitas merek yang fleksibel namun ketat dalam menjaga konsistensi visual saat diaplikasikan ke berbagai medium cetak, bordir tekstil, label pakaian, hingga kemasan merchandise tanpa kehilangan esensi visualnya.",
      approach: "Menyusun grid geometri logo dengan pedoman clear space presisi, kurasi palet warna monokromatik dengan aksen kontras, penentuan hierarki tipografi editorial, serta pembuatan mockup aplikasi merchandise berkualitas tinggi yang siap diproduksi massal.",
      outcome: "Brandbook komprehensif setebal 12 halaman, file master vektor siap cetak, standarisasi merchandise t-shirt, tote bag, hang tag, dan sistem kemasan premium siap edar.",
      deliverables: [
        "12-Halaman Brand Identity Guidelines Book",
        "Master Logo Grid & Clearance Rules",
        "Apparel Merchandise Mockup & Tech Pack",
        "Packaging & Labeling Design System"
      ],
      quote: "Identitas merek yang kuat tidak hanya terlihat bagus di layar, tetapi berkarakter saat disentuh dan dikenakan.",
      quoteAuthor: "PAKSA Brand Manifesto",
      gallery: [
        "/assets/projects/branding/brandbook_page_1.webp",
        "/assets/projects/branding/paksa/1.png",
        "/assets/projects/branding/paksa/2.png",
        "/assets/projects/branding/paksa/3.png",
        "/assets/projects/branding/paksa/4.png",
        "/assets/projects/branding/paksa/5.png",
        "/assets/projects/branding/brandbook_page_2.webp",
        "/assets/projects/branding/brandbook_page_4.webp"
      ]
    },

    {
      id: "social-media-curation",
      title: "Social Media Editorial & Visual Suite",
      category: "Social Media & Visual Campaign",
      categorySlug: "social",
      year: "2026",
      client: "Multi-Brand Digital Campaigns",
      role: "Visual Content Designer & Art Director",
      timeline: "Koleksi Konten Berkelanjutan",
      tagline: "Koleksi kurasi desain feed Instagram modular, tipografi ekspresif, dan strategi layout visual berdaya tarik tinggi.",
      heroImage: "/assets/projects/social/feed_39.webp",
      overview: "Rangkaian eksplorasi desain konten media sosial berfokus pada feed Instagram editorial, carousel informatif, dan layout promosi visual. Setiap desain dirancang untuk memecah kejenuhan linimasa dengan komposisi tipografi yang kuat, tata letak asimetris dinamis, serta palet warna yang memikat audiens modern.",
      challenge: "Menciptakan konsistensi visual di feed media sosial sembari memastikan tiap postingan memiliki daya pikat visual (stopping power) dan hierarki pesan yang cepat terbaca dalam hitungan detik pertama saat pengguna menggulir layar.",
      approach: "Menerapkan sistem modular berbasis rasio 1:1 dan 4:5, memadukan mikro-tipografi dengan judul berukuran masif, serta mengoptimalkan aset grafis menggunakan format WebP untuk performa rendering tajam tanpa artefak kompresi.",
      outcome: "Seri template feed sosial media siap pakai yang meningkatkan retensi pandangan audiens, keterbacaan pesan promosi, dan citra visual brand yang modern dan profesional.",
      deliverables: [
        "10+ Aset Desain Social Media Feed Beresolusi Tinggi",
        "Sistem Grid & Tipografi Feed Modular",
        "Template Carousel Edukasi & Promosi",
        "Aset Grafis Teroptimasi WebP & Mobile"
      ],
      quote: "Di media sosial, visual adalah pintu masuk pertama. Jika desainnya tidak berbicara dalam 2 detik, pesan Anda terlewat.",
      quoteAuthor: "Digital Content Strategy",
      gallery: [
        "/assets/projects/social/feed_39.webp",
        "/assets/projects/social/feed_18.webp",
        "/assets/projects/social/feed_2.webp",
        "/assets/projects/social/feed_4.webp",
        "/assets/projects/social/feed_36.webp",
        "/assets/projects/social/feed_35.webp",
        "/assets/projects/social/feed_7.webp",
        "/assets/projects/social/25.webp",
        "/assets/projects/social/3.webp"
      ]
    }
  ]
};

// Global attachment for universal browser compatibility
if (typeof window !== 'undefined') {
  window.portfolioData = portfolioData;
}
export { portfolioData };
