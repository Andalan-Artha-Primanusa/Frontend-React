import React, { useEffect, useMemo } from "react";
import originalHtml from "../code.html?raw";
import logoUrl from "../logo-nexora.png";

const originalTextNodes = new WeakMap();

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function bilingual(id, en) {
  return `<span data-text-id="${escapeHtml(id)}" data-text-en="${escapeHtml(en)}">${escapeHtml(id)}</span>`;
}

const serviceDetails = [
  {
    icon: "code_blocks",
    titleId: "Custom Software & Web Development",
    titleEn: "Custom Software & Web Development",
    descId:
      "Pengembangan aplikasi web, mobile, dan platform digital yang disesuaikan dengan kebutuhan bisnis, mulai dari sistem internal perusahaan, portal layanan, aplikasi operasional, hingga solusi digital berbasis industri.",
    descEn:
      "Custom web, mobile, and digital platform development tailored to business requirements, including internal systems, service portals, operational apps, and industry-specific digital solutions.",
    items: [
      "Enterprise & Business Applications",
      "Web, Mobile & Cloud-Based Applications",
      "Corporate Website, Portal & Digital Platform",
      "Business Process Automation & Workflow System",
      "Management Information System / MIS",
      "SaaS, Marketplace & E-Commerce Platform",
      "Internal Management Systems",
      "API, Backend & System Foundation",
      "Dashboard, Reporting & Monitoring System",
      "Industry-Specific Applications",
    ],
  },
  {
    icon: "account_tree",
    titleId: "Enterprise System Integration & Governance",
    titleEn: "Enterprise System Integration & Governance",
    descId:
      "Implementasi dan integrasi sistem enterprise untuk meningkatkan efisiensi operasional, tata kelola organisasi, serta memastikan konsistensi data dan proses bisnis lintas fungsi.",
    descEn:
      "Enterprise system implementation and integration to improve operational efficiency, strengthen governance, and ensure data consistency across cross-functional processes.",
    items: [
      "ERP Implementation & Customization",
      "Enterprise System Integration",
      "API Development & Middleware",
      "Financial Governance Systems",
      "Procurement & Vendor Management Systems",
      "Asset Management Systems",
      "HR & Organizational Governance Systems",
      "Identity & Access Management",
      "Workflow & Approval Automation",
      "Document & Compliance Management",
      "Data Governance & Master Data Management",
      "Operational Governance Systems",
      "Audit Trail & Internal Control System",
      "Enterprise Reporting Integration",
    ],
  },
  {
    icon: "monitoring",
    titleId: "Data Analytics & Intelligent Automation",
    titleEn: "Data Analytics & Intelligent Automation",
    descId:
      "Pemanfaatan data dan teknologi otomatisasi untuk menghasilkan insight bisnis yang lebih akurat, meningkatkan produktivitas, serta mendukung pengambilan keputusan berbasis data.",
    descEn:
      "Data and automation capabilities that generate precise business insights, improve productivity, and support data-driven management decisions.",
    items: [
      "Business Intelligence Dashboards",
      "Data Warehousing",
      "Data Visualization",
      "Executive Reporting Systems",
      "Intelligent Workflow Automation",
      "AI-Enabled Business Solutions",
      "Predictive Analytics",
      "Data Integration & ETL Pipeline",
      "KPI & Performance Analytics",
      "Forecasting & Trend Analysis",
      "Automated Report Generation",
      "Data Quality & Validation",
      "Smart Notification & Alert System",
    ],
  },
  {
    icon: "support_agent",
    titleId: "Strategic IT Consulting & Managed Services",
    titleEn: "Strategic IT Consulting & Managed Services",
    descId:
      "Layanan konsultasi dan pendampingan strategis untuk membantu organisasi merancang, mengelola, dan mengoptimalkan investasi teknologi secara berkelanjutan.",
    descEn:
      "Advisory and strategic partnership services that help organizations plan, govern, and optimize technology investments for long-term growth.",
    items: [
      "IT Strategy & Roadmap Development",
      "Digital Transformation Advisory",
      "Business Process Assessment",
      "Technology Architecture Review",
      "Project Management Office / PMO",
      "Technology Governance & Compliance",
      "IT Audit & System Assessment",
      "Application Maintenance & Enhancement",
      "Managed Application Support",
      "System Monitoring & Performance Optimization",
      "Cloud & Infrastructure Advisory",
      "Cybersecurity Advisory & Risk Management",
      "Documentation, SOP & Knowledge Transfer",
      "Training & User Adoption Support",
      "Continuous Improvement & Technology Optimization",
    ],
  },
];

const leadershipDetails = [
  {
    name: "Syaifani Auliana Havid",
    role: "Chief Executive Officer",
    id:
      "Memimpin arah pertumbuhan, visi komersial, tata kelola organisasi, dan pengembangan kemitraan strategis Nexora. Ia menekankan bahwa teknologi harus memperkuat efektivitas bisnis, pengendalian internal, dan mitigasi risiko kebocoran finansial.",
    en:
      "Leads Nexora's growth direction, commercial vision, organizational governance, and strategic partnerships. She emphasizes that technology must strengthen business effectiveness, internal controls, and financial leakage risk mitigation.",
  },
  {
    name: "Raul Mahya Komaran",
    role: "Chief Technology Officer",
    id:
      "Sebagai Magister Teknologi Informasi, ia memimpin inovasi teknologi, keamanan siber, arsitektur sistem, dan standar engineering agar setiap produk digital aman, scalable, berkinerja tinggi, dan siap menghadapi tantangan masa depan.",
    en:
      "Holding a Master's Degree in Information Technology, he leads technology innovation, cybersecurity, system architecture, and engineering standards so every digital product is secure, scalable, high-performing, and future-ready.",
  },
  {
    name: "Rinaldi Gunawan",
    role: "Chief Operating Officer",
    id:
      "Mengawal arsitektur operasional, metodologi kerja agile, kolaborasi tim IT dan kreatif, kualitas delivery, serta ketepatan implementasi proyek dengan fokus pada kebutuhan bisnis klien.",
    en:
      "Oversees operational architecture, agile workflows, IT and creative team collaboration, delivery quality, and timely project implementation with clear alignment to client business needs.",
  },
  {
    name: "Muhammad Giffari Havid",
    role: "Head of Sales & Business Development",
    id:
      "Dengan pengalaman lebih dari 12 tahun di sales dan business development, ia memimpin penetrasi pasar, komersialisasi produk, analisis kelayakan investasi teknologi, dan relasi kemitraan jangka panjang berbasis nilai bisnis.",
    en:
      "With over 12 years in sales and business development, he leads market penetration, product commercialization, technology investment feasibility analysis, and long-term partnership relationships based on business value.",
  },
];

const whyDetails = [
  {
    titleId: "Business-Driven & Problem-Solving Approach",
    titleEn: "Business-Driven & Problem-Solving Approach",
    id:
      "Setiap inisiatif digital diawali dengan analisis tantangan manajemen, proses bisnis, dan tujuan strategis agar solusi berdampak pada efisiensi biaya, kontrol internal, dan mitigasi risiko.",
    en:
      "Every digital initiative begins with analysis of management challenges, business processes, and strategic goals to improve cost efficiency, internal controls, and risk mitigation.",
  },
  {
    titleId: "Enterprise Governance, Security & Scalability",
    titleEn: "Enterprise Governance, Security & Scalability",
    id:
      "Arsitektur sistem dirancang dengan standar keamanan berlapis, compliance tata kelola, dan skalabilitas jangka panjang.",
    en:
      "System architecture is designed with layered security, governance compliance, and long-term scalability.",
  },
  {
    titleId: "Purposeful Innovation & Measured Automation",
    titleEn: "Purposeful Innovation & Measured Automation",
    id:
      "Otomatisasi, data analytics, dan teknologi modern dipilih berdasarkan kebutuhan bisnis nyata, bukan sekadar mengikuti tren.",
    en:
      "Automation, analytics, and modern technology are selected based on real business needs, not short-lived trends.",
  },
  {
    titleId: "Transparent Lifecycle & Extended Support",
    titleEn: "Transparent Lifecycle & Extended Support",
    id:
      "Manajemen proyek dilakukan transparan dari planning, development, SIT/UAT, hingga dukungan pasca implementasi yang responsif.",
    en:
      "Project management is transparent from planning, development, SIT/UAT, through responsive post-implementation support.",
  },
];

const translations = {
  id: {
    About: "Tentang",
    Services: "Layanan",
    Leadership: "Kepemimpinan",
    Portfolio: "Portofolio",
    Contact: "Kontak",
    "Get Consultation": "Konsultasi Gratis",
    "Explore Services": "Jelajahi Layanan",
    "PT Nexora Teknologi Nusantara": "PT Nexora Teknologi Nusantara",
    "COMPANY PROFILE NEXORA TECHNOLOGY": "PROFIL PERUSAHAAN NEXORA TECHNOLOGY",
    "Elevating Businesses, Empowering Innovation. Kami menghadirkan solusi teknologi mutakhir untuk mengakselerasi pertumbuhan bisnis Anda.":
      "Mengangkat bisnis, memberdayakan inovasi. Kami menghadirkan solusi teknologi mutakhir untuk mengakselerasi pertumbuhan bisnis Anda.",
    "About Nexora": "Tentang Nexora",
    "One-Stop Technology Partner": "Mitra Teknologi Terpadu",
    "Business-Driven Solutions": "Solusi Berbasis Bisnis",
    "Solusi terintegrasi dari hulu ke hilir untuk segala kebutuhan IT Anda.":
      "Solusi terintegrasi dari awal hingga akhir untuk seluruh kebutuhan IT Anda.",
    "Setiap baris kode yang kami buat didasarkan pada nilai bisnis nyata.":
      "Setiap baris kode yang kami buat berangkat dari nilai bisnis yang nyata.",
    "Membangun Masa Depan Digital Indonesia": "Membangun Masa Depan Digital Indonesia",
    "50+": "50+",
    "Projects Delivered": "Proyek Selesai",
    "20+": "20+",
    "Expert Engineers": "Engineer Ahli",
    Visi: "Visi",
    Misi: "Misi",
    "Core Values": "Nilai Inti",
    "Pilar utama yang mendasari setiap interaksi dan solusi yang kami berikan.":
      "Pilar utama yang mendasari setiap interaksi dan solusi yang kami berikan.",
    "Integrity & Governance": "Integritas & Tata Kelola",
    "Engineering Excellence": "Keunggulan Rekayasa",
    "Business-Driven Innovation": "Inovasi Berbasis Bisnis",
    "Operational Ownership": "Kepemilikan Operasional",
    "Our Pillars of Services": "Pilar Layanan Kami",
    "Solusi komprehensif yang dirancang untuk menjawab tantangan unik bisnis Anda di era industri 4.0.":
      "Solusi komprehensif yang dirancang untuk menjawab tantangan unik bisnis Anda di era industri 4.0.",
    "View All Services": "Lihat Semua Layanan",
    "Custom Software Development": "Pengembangan Software Kustom",
    "System Integration": "Integrasi Sistem",
    "Data Analytics": "Analitik Data",
    "IT Consulting": "Konsultasi IT",
    "Meet Our Leadership": "Tim Kepemimpinan Kami",
    "Chief Executive Officer": "Chief Executive Officer",
    "Chief Technology Officer": "Chief Technology Officer",
    "Chief Operating Officer": "Chief Operating Officer",
    "Head of Sales": "Head of Sales",
    "Why Choose Nexora?": "Mengapa Memilih Nexora?",
    "Enterprise Governance": "Tata Kelola Enterprise",
    "Military-Grade Security": "Keamanan Tingkat Tinggi",
    "24/7 Dedicated Support": "Dukungan Khusus 24/7",
    "Agile Delivery": "Pengiriman Agile",
    "Project Portfolio": "Portofolio Proyek",
    "All": "Semua",
    Enterprise: "Enterprise",
    Dashboard: "Dashboard",
    "Enterprise System Implementation": "Implementasi Sistem Enterprise",
    "Real-time Data Analytics": "Analitik Data Real-time",
    "Custom Fintech Solution": "Solusi Fintech Kustom",
    "Letâ€™s Build the Future Together": "Mari Bangun Masa Depan Bersama",
    "Siap untuk mentransformasi bisnis Anda? Hubungi tim ahli kami hari ini untuk konsultasi gratis.":
      "Siap mentransformasi bisnis Anda? Hubungi tim ahli kami hari ini untuk konsultasi gratis.",
    "Kantor Pusat": "Kantor Pusat",
    "Email Kemitraan": "Email Kemitraan",
    "Nama Lengkap": "Nama Lengkap",
    "Nama Perusahaan": "Nama Perusahaan",
    "Email Bisnis": "Email Bisnis",
    "Nomor WhatsApp": "Nomor WhatsApp",
    "Pesan / Kebutuhan IT": "Pesan / Kebutuhan IT",
    "Kirim Pesan Sekarang": "Kirim Pesan Sekarang",
    "Quick Links": "Tautan Cepat",
    "About Us": "Tentang Kami",
    "Core Services": "Layanan Utama",
    "Leadership Team": "Tim Kepemimpinan",
    "Software Dev": "Pengembangan Software",
    Legal: "Legal",
    "Privacy Policy": "Kebijakan Privasi",
    "Terms of Service": "Syarat Layanan",
  },
  en: {
    About: "About",
    Services: "Services",
    Leadership: "Leadership",
    Portfolio: "Portfolio",
    Contact: "Contact",
    "Get Consultation": "Get Consultation",
    "Explore Services": "Explore Services",
    "PT Nexora Teknologi Nusantara": "PT Nexora Teknologi Nusantara",
    "COMPANY PROFILE NEXORA TECHNOLOGY": "NEXORA TECHNOLOGY COMPANY PROFILE",
    "Elevating Businesses, Empowering Innovation. Kami menghadirkan solusi teknologi mutakhir untuk mengakselerasi pertumbuhan bisnis Anda.":
      "Elevating businesses, empowering innovation. We deliver advanced technology solutions to accelerate your business growth.",
    "Di era digital yang terus berkembang, teknologi bukan lagi sekadar pendukung, melainkan inti dari setiap strategi bisnis yang sukses. PT Nexora Teknologi Nusantara (Nexora Technology) hadir sebagai mitra strategis bagi perusahaan yang ingin bertransformasi, berinovasi, dan mendominasi pasar melalui solusi teknologi informasi yang cerdas, efisien, dan berorientasi pada hasil.":
      "In an ever-evolving digital era, technology is no longer just a support function, but the core of every successful business strategy. PT Nexora Teknologi Nusantara (Nexora Technology) is a strategic partner for companies that want to transform, innovate, and lead their markets through intelligent, efficient, and outcome-driven IT solutions.",
    "About Nexora": "About Nexora",
    "One-Stop Technology Partner": "One-Stop Technology Partner",
    "Business-Driven Solutions": "Business-Driven Solutions",
    "Solusi terintegrasi dari hulu ke hilir untuk segala kebutuhan IT Anda.":
      "Integrated end-to-end solutions for all your IT needs.",
    "Setiap baris kode yang kami buat didasarkan pada nilai bisnis nyata.":
      "Every line of code we build is grounded in real business value.",
    "Membangun Masa Depan Digital Indonesia": "Building Indonesia's Digital Future",
    "\"Kami percaya bahwa inovasi bukan tentang apa yang kita buat hari ini, tapi bagaimana teknologi tersebut mampu menopang pertumbuhan bisnis untuk dekade yang akan datang.\"":
      "\"We believe innovation is not only about what we build today, but how technology can support business growth for the decades ahead.\"",
    "Projects Delivered": "Projects Delivered",
    "Expert Engineers": "Expert Engineers",
    Visi: "Vision",
    Misi: "Mission",
    "Menjadi perusahaan konsultan dan pengembang teknologi informasi terdepan di Asia Tenggara yang memberdayakan bisnis melalui inovasi digital yang strategis dan berkelanjutan.":
      "To become a leading IT consulting and development company in Southeast Asia that empowers businesses through strategic and sustainable digital innovation.",
    "Memberikan solusi IT yang personal dan berdampak langsung pada efisiensi operasional.":
      "Deliver personalized IT solutions that directly improve operational efficiency.",
    "Menjembatani kesenjangan antara kebutuhan bisnis dan kapabilitas teknologi.":
      "Bridge the gap between business needs and technology capabilities.",
    "Membangun ekosistem teknologi yang aman, skalabel, dan terukur.":
      "Build secure, scalable, and measurable technology ecosystems.",
    "Core Values": "Core Values",
    "Pilar utama yang mendasari setiap interaksi dan solusi yang kami berikan.":
      "The core pillars behind every interaction and solution we deliver.",
    "Integrity & Governance": "Integrity & Governance",
    "Menjunjung tinggi standar etika dan transparansi dalam setiap proyek.":
      "Upholding ethical standards and transparency in every project.",
    "Engineering Excellence": "Engineering Excellence",
    "Presisi teknis dalam setiap baris kode dan arsitektur sistem.":
      "Technical precision in every line of code and system architecture.",
    "Business-Driven Innovation": "Business-Driven Innovation",
    "Inovasi yang fokus pada ROI dan pertumbuhan strategis klien.":
      "Innovation focused on ROI and strategic client growth.",
    "Operational Ownership": "Operational Ownership",
    "Tanggung jawab penuh atas keberlanjutan dan performa sistem.":
      "Full ownership of system continuity and performance.",
    "Our Pillars of Services": "Our Pillars of Services",
    "Solusi komprehensif yang dirancang untuk menjawab tantangan unik bisnis Anda di era industri 4.0.":
      "Comprehensive solutions designed to answer your unique business challenges in the Industry 4.0 era.",
    "View All Services": "View All Services",
    "Custom Software Development": "Custom Software Development",
    "System Integration": "System Integration",
    "Data Analytics": "Data Analytics",
    "IT Consulting": "IT Consulting",
    "Meet Our Leadership": "Meet Our Leadership",
    "Why Choose Nexora?": "Why Choose Nexora?",
    "Keunggulan kami dalam memberikan jaminan kualitas dan keamanan tingkat enterprise.":
      "Our strength in delivering enterprise-grade quality assurance and security.",
    "Enterprise Governance": "Enterprise Governance",
    "Standar operasional yang terukur dan terdokumentasi dengan baik.":
      "Measurable and well-documented operational standards.",
    "Military-Grade Security": "Military-Grade Security",
    "Perlindungan data end-to-end dengan standar enkripsi terbaru.":
      "End-to-end data protection with modern encryption standards.",
    "24/7 Dedicated Support": "24/7 Dedicated Support",
    "Tim dukungan responsif siap membantu kelancaran bisnis Anda.":
      "A responsive support team ready to keep your business running smoothly.",
    "Agile Delivery": "Agile Delivery",
    "Metodologi pengembangan cepat tanpa mengorbankan kualitas.":
      "Fast development methodology without compromising quality.",
    "Project Portfolio": "Project Portfolio",
    "Intip beberapa karya terbaik kami yang telah membantu transformasi digital klien.":
      "Explore selected work that has helped clients with digital transformation.",
    All: "All",
    Enterprise: "Enterprise",
    Dashboard: "Dashboard",
    "Enterprise System Implementation": "Enterprise System Implementation",
    "Real-time Data Analytics": "Real-time Data Analytics",
    "Custom Fintech Solution": "Custom Fintech Solution",
    "Letâ€™s Build the Future Together": "Let's Build the Future Together",
    "Siap untuk mentransformasi bisnis Anda? Hubungi tim ahli kami hari ini untuk konsultasi gratis.":
      "Ready to transform your business? Contact our expert team today for a free consultation.",
    "Kantor Pusat": "Head Office",
    "Email Kemitraan": "Partnership Email",
    "Nama Lengkap": "Full Name",
    "Nama Perusahaan": "Company Name",
    "Email Bisnis": "Business Email",
    "Nomor WhatsApp": "WhatsApp Number",
    "Pesan / Kebutuhan IT": "Message / IT Needs",
    "Kirim Pesan Sekarang": "Send Message Now",
    "Quick Links": "Quick Links",
    "About Us": "About Us",
    "Core Services": "Core Services",
    "Leadership Team": "Leadership Team",
    "Software Dev": "Software Dev",
    Legal: "Legal",
    "Privacy Policy": "Privacy Policy",
    "Terms of Service": "Terms of Service",
    "Penyedia solusi IT end-to-end yang berfokus pada inovasi dan nilai bisnis nyata untuk industri modern.":
      "An end-to-end IT solutions provider focused on innovation and real business value for modern industries.",
    "Â© 2024 PT Nexora Teknologi Nusantara. Empowering Growth Through Technology.":
      "© 2024 PT Nexora Teknologi Nusantara. Empowering Growth Through Technology.",
  },
};

function extractBodyMarkup(html) {
  const document = new DOMParser().parseFromString(html, "text/html");
  document.querySelectorAll("script, style").forEach((node) => node.remove());
  return document.body.innerHTML;
}

function applyLanguage(language) {
  document.documentElement.lang = language === "id" ? "id" : "en";
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === language);
    button.setAttribute("aria-pressed", button.dataset.lang === language ? "true" : "false");
  });
  document.querySelectorAll("[data-text-id][data-text-en]").forEach((node) => {
    node.textContent = node.dataset[language === "id" ? "textId" : "textEn"];
  });

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();

  while (node) {
    if (node.parentElement?.closest("[data-text-id][data-text-en]")) {
      node = walker.nextNode();
      continue;
    }

    if (!originalTextNodes.has(node)) {
      originalTextNodes.set(node, node.nodeValue);
    }

    const original = originalTextNodes.get(node);
    const trimmed = original.trim();
    const translated = translations[language][trimmed];

    node.nodeValue = translated ? original.replace(trimmed, translated) : original;
    node = walker.nextNode();
  }
}

function buildDetailSections() {
  const serviceCards = serviceDetails
    .map(
      (service) => `
        <article class="nexora-detail-card">
          <div class="nexora-detail-icon"><span class="material-symbols-outlined">${service.icon}</span></div>
          <h3>${bilingual(service.titleId, service.titleEn)}</h3>
          <p>${bilingual(service.descId, service.descEn)}</p>
          <ul>
            ${service.items.map((item) => `<li><span class="material-symbols-outlined">check_circle</span>${item}</li>`).join("")}
          </ul>
        </article>
      `,
    )
    .join("");

  const leadershipCards = leadershipDetails
    .map(
      (leader) => `
        <article class="nexora-leader-note">
          <span>${leader.role}</span>
          <h3>${leader.name}</h3>
          <p>${bilingual(leader.id, leader.en)}</p>
        </article>
      `,
    )
    .join("");

  const whyCards = whyDetails
    .map(
      (item, index) => `
        <article class="nexora-why-card">
          <strong>${String(index + 1).padStart(2, "0")}</strong>
          <h3>${bilingual(item.titleId, item.titleEn)}</h3>
          <p>${bilingual(item.id, item.en)}</p>
        </article>
      `,
    )
    .join("");

  return `
    <section class="nexora-expanded-section" id="capabilities">
      <div class="nexora-expanded-inner">
        <div class="nexora-section-heading">
          <p>${bilingual("Cakupan Layanan Lengkap", "Complete Service Coverage")}</p>
          <h2>${bilingual("Solusi end-to-end untuk transformasi digital yang aman, terukur, dan siap tumbuh.", "End-to-end solutions for secure, measurable, and scalable digital transformation.")}</h2>
          <span>${bilingual(
            "Dirangkum dari company profile: konsultasi strategis, pengembangan sistem, integrasi enterprise, data analytics, otomasi, hingga managed support pasca implementasi.",
            "Summarized from the company profile: strategic consulting, system development, enterprise integration, data analytics, automation, and managed post-implementation support.",
          )}</span>
        </div>
        <div class="nexora-detail-grid">${serviceCards}</div>
      </div>
    </section>

    <section class="nexora-management-section">
      <div class="nexora-expanded-inner">
        <div class="nexora-section-heading compact">
          <p>${bilingual("Manajemen & Peran Strategis", "Management & Strategic Roles")}</p>
          <h2>${bilingual("Dipimpin oleh tim yang menggabungkan tata kelola, engineering, operasional, dan pertumbuhan bisnis.", "Led by a team combining governance, engineering, operations, and business growth.")}</h2>
        </div>
        <div class="nexora-leader-grid">${leadershipCards}</div>
      </div>
    </section>

    <section class="nexora-proof-section">
      <div class="nexora-expanded-inner">
        <div class="nexora-section-heading compact">
          <p>${bilingual("Keunggulan Nexora", "Nexora Advantages")}</p>
          <h2>${bilingual("Kami menggabungkan engineering excellence dengan tata kelola bisnis yang matang.", "We combine engineering excellence with mature business governance.")}</h2>
        </div>
        <div class="nexora-why-grid">${whyCards}</div>
      </div>
    </section>
  `;
}

function enhancePage() {
  document.body.classList.add("nexora-polished");

  const brandElements = Array.from(document.querySelectorAll(".font-headline-md, .font-headline-sm")).filter((node) =>
    node.textContent.trim().replace(/\s/g, "").includes("NexoraTechnology"),
  );

  brandElements.forEach((node) => {
    node.classList.add("nexora-brand");
    node.innerHTML = `
      <img class="nexora-logo-image" src="${logoUrl}" alt="Nexora Technology" />
    `;
  });

  const headerInner = document.querySelector("header > div");
  headerInner?.classList.add("nexora-nav-inner");
  document.querySelector("header nav")?.classList.add("nexora-nav-links");
  document.querySelector('header a[href="#contact"].hidden.md\\:flex')?.classList.add("nexora-nav-cta");

  const services = document.getElementById("services");
  if (services && !document.getElementById("capabilities")) {
    services.insertAdjacentHTML("afterend", buildDetailSections());
  }

  const about = document.getElementById("about");
  if (about) {
    const aboutText = about.querySelector("h2 + p");
    if (aboutText) {
      aboutText.innerHTML = bilingual(
        "Di era digital yang terus berkembang, perusahaan membutuhkan lebih dari sekadar teknologi; mereka membutuhkan mitra satu pintu yang mampu menerjemahkan tantangan bisnis menjadi solusi berdampak nyata. PT Nexora hadir sebagai perusahaan teknologi terintegrasi yang menyediakan layanan lengkap mulai dari konsultasi IT strategis, pengembangan sistem kustom, integrasi aplikasi enterprise, hingga transformasi digital menyeluruh. Kami mengambil tanggung jawab penuh atas perjalanan teknologi Anda, mulai dari perencanaan arsitektur, implementasi sistem, hingga pendampingan operasional pasca-rilis. Dengan mengkonsolidasikan seluruh kebutuhan IT di bawah satu atap, Nexora menggabungkan inovasi modern, analisis bisnis mendalam, dan tata kelola yang aman untuk menciptakan efisiensi operasional maksimal.",
        "In an evolving digital era, businesses require more than just technology; they need a single, comprehensive partner capable of translating complex business challenges into high-impact solutions. PT Nexora is an integrated technology enterprise delivering one-stop solutions across strategic IT consulting, custom software development, enterprise system integration, and digital transformation services. We take full responsibility for your technology journey, from architectural planning and system deployment to ongoing post-launch operational support. By consolidating your entire IT ecosystem under one roof, Nexora combines modern innovation, deep business analytics, and secure governance to maximize operational efficiency.",
      );
    }
  }

  const visionMission = Array.from(document.querySelectorAll("section")).find((section) =>
    section.textContent.includes("Visi"),
  );
  if (visionMission && !visionMission.dataset.enhanced) {
    visionMission.dataset.enhanced = "true";
    const cards = visionMission.querySelectorAll(".grid > div");
    const visionParagraph = cards[0]?.querySelector("p");
    const missionList = cards[1]?.querySelector("ul");

    if (visionParagraph) {
      visionParagraph.innerHTML = bilingual(
        "Menjadi Extended IT Partner strategis utama di Indonesia yang mengawal pelaku bisnis mencapai keunggulan operasional, pengendalian risiko yang kokoh, dan pertumbuhan bisnis berkelanjutan melalui transformasi digital yang berdampak nyata.",
        "To become the premier strategic Extended IT Partner in Indonesia, empowering organizations to attain operational excellence, robust risk management, and sustainable business growth through high-impact digital transformation.",
      );
    }

    if (missionList) {
      const missions = [
        [
          "Membangun solusi teknologi kustom yang adaptif dan selaras dengan tujuan bisnis serta kepatuhan tata kelola internal pelanggan.",
          "Engineer custom, adaptive technology solutions that seamlessly align with clients' business objectives and internal corporate governance.",
        ],
        [
          "Mengoptimalkan proses bisnis melalui digitalisasi yang efektif untuk meminimalkan risiko kebocoran finansial serta meningkatkan produktivitas harian.",
          "Drive core business processes through effective digitalization, systematically minimizing financial leakages while maximizing operational productivity.",
        ],
        [
          "Menyediakan arsitektur sistem informasi yang aman, andal, berstandar tinggi, dan siap diperluas seiring perkembangan skala bisnis jangka panjang klien.",
          "Deliver highly secure, reliable, and scalable information systems built to support long-term enterprise growth and data integrity.",
        ],
        [
          "Memberikan konsultasi strategis, pendampingan teknis berkelanjutan, serta penyediaan data akurat untuk mendukung manajemen dalam pengambilan keputusan yang cepat dan tepat.",
          "Provide continuous technical assistance, strategic consulting, and data-driven insights that empower management to make swift, precise executive decisions.",
        ],
        [
          "Menjadi katalisator dalam menciptakan ekosistem industri digital Indonesia yang lebih transparan, inovatif, kompetitif, dan bernilai tinggi.",
          "Act as a prime catalyst in fostering a more transparent, innovative, competitive, and value-driven digital industrial ecosystem in Indonesia.",
        ],
      ];

      missionList.innerHTML = missions
        .map(
          ([id, en], index) => `
            <li class="flex gap-4">
              <span class="text-primary-fixed shrink-0">${String(index + 1).padStart(2, "0")}.</span>
              ${bilingual(id, en)}
            </li>
          `,
        )
        .join("");
    }
  }

  const portfolio = document.getElementById("portfolio");
  if (portfolio) {
    const portfolioIntro = portfolio.querySelector("h2 + p");
    if (portfolioIntro) {
      portfolioIntro.innerHTML = bilingual(
        "Kami telah dipercaya oleh berbagai organisasi untuk merancang dan mengintegrasikan sistem teknologi yang memperkuat tata kelola, meminimalkan risiko operasional, serta mendorong efisiensi yang terukur.",
        "We have been trusted by various organizations to engineer and integrate technology systems that reinforce corporate governance, mitigate operational risks, and drive measurable efficiency.",
      );
    }
  }

  const contact = document.getElementById("contact");
  if (contact) {
    const heading = contact.querySelector("h2");
    if (heading) heading.textContent = "Mari Bangun Masa Depan Bersama";

    const intro = contact.querySelector(".lg\\:col-span-2 p.opacity-80");
    if (intro) {
      intro.innerHTML = bilingual(
        "Sebagai Extended IT Partner, Nexora siap membantu organisasi Anda menerjemahkan tantangan bisnis menjadi solusi digital bernilai tinggi untuk kebutuhan hari ini dan kesiapan masa depan.",
        "As your Extended IT Partner, Nexora is ready to help your organization translate business challenges into high-value digital solutions for today's needs and tomorrow's readiness.",
      );
    }

    const infoBlocks = contact.querySelectorAll(".lg\\:col-span-2 .space-y-8 > div");
    if (infoBlocks[0]) {
      infoBlocks[0].querySelector("h5").textContent = "Alamat Kantor";
      infoBlocks[0].querySelector("p").textContent = "Jl. Depok 17, Antapani, Bandung - Jawa Barat";
    }
    if (infoBlocks[1]) {
      infoBlocks[1].querySelector("h5").textContent = "Email";
      infoBlocks[1].querySelector("p").innerHTML = "Admin@nexora-technology.id<br />Sales@nexora-technology.id<br />www.nexora-technology.id";
    }
  }

  document.querySelectorAll("a[href='#']").forEach((link) => {
    link.removeAttribute("href");
  });
}

function bindInternalNavigation() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    const targetId = link.getAttribute("href")?.slice(1);
    if (!targetId) return;
    link.dataset.scrollTarget = targetId;
    link.removeAttribute("href");
    link.setAttribute("role", "button");
    link.setAttribute("tabindex", "0");
  });

  const links = Array.from(document.querySelectorAll("[data-scroll-target]"));
  const handlers = [];

  links.forEach((link) => {
    const targetId = link.dataset.scrollTarget;
    if (!targetId) return;

    const handler = (event) => {
      const target = document.getElementById(targetId);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      if (window.location.hash) {
        window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
      }
    };
    const keyboardHandler = (event) => {
      if (event.key === "Enter" || event.key === " ") {
        handler(event);
      }
    };

    link.addEventListener("click", handler);
    link.addEventListener("keydown", keyboardHandler);
    handlers.push(() => {
      link.removeEventListener("click", handler);
      link.removeEventListener("keydown", keyboardHandler);
    });
  });

  return () => handlers.forEach((cleanup) => cleanup());
}

export default function App() {
  const markup = useMemo(() => extractBodyMarkup(originalHtml), []);

  useEffect(() => {
    if (!markup) return undefined;

    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeMenu = document.getElementById("close-menu");
    const navLinks = mobileMenu ? Array.from(mobileMenu.querySelectorAll("a")) : [];
    const navbar = document.getElementById("navbar");

    enhancePage();

    const desktopCta = document.querySelector('header a[href="#contact"].hidden.md\\:flex');
    const languageToggle = document.createElement("div");
    languageToggle.className = "language-toggle hidden md:inline-flex";
    languageToggle.innerHTML = `
      <button type="button" data-lang="id">ID</button>
      <button type="button" data-lang="en">EN</button>
    `;
    desktopCta?.before(languageToggle);

    const mobileToggle = document.createElement("div");
    mobileToggle.className = "language-toggle language-toggle-mobile";
    mobileToggle.innerHTML = `
      <button type="button" data-lang="id">ID</button>
      <button type="button" data-lang="en">EN</button>
    `;
    closeMenu?.after(mobileToggle);

    const languageButtons = Array.from(document.querySelectorAll("[data-lang]"));
    const handleLanguageClick = (event) => applyLanguage(event.currentTarget.dataset.lang);
    const cleanupInternalNavigation = bindInternalNavigation();

    const openMenu = () => mobileMenu?.classList.remove("translate-x-full");
    const closeMenuPanel = () => mobileMenu?.classList.add("translate-x-full");
    const handleScroll = () => {
      if (!navbar) return;

      if (window.scrollY > 50) {
        navbar.classList.add("py-2", "shadow-md");
        navbar.classList.remove("py-4");
      } else {
        navbar.classList.remove("py-2", "shadow-md");
        navbar.classList.add("py-4");
      }
    };

    mobileMenuBtn?.addEventListener("click", openMenu);
    closeMenu?.addEventListener("click", closeMenuPanel);
    navLinks.forEach((link) => link.addEventListener("click", closeMenuPanel));
    languageButtons.forEach((button) => button.addEventListener("click", handleLanguageClick));
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 },
    );

    const sections = Array.from(document.querySelectorAll("section"));
    sections.forEach((section) => {
      section.classList.add("transition-all", "duration-700", "opacity-0", "translate-y-10");
      observer.observe(section);
    });
    applyLanguage("id");

    return () => {
      mobileMenuBtn?.removeEventListener("click", openMenu);
      closeMenu?.removeEventListener("click", closeMenuPanel);
      navLinks.forEach((link) => link.removeEventListener("click", closeMenuPanel));
      languageButtons.forEach((button) => button.removeEventListener("click", handleLanguageClick));
      cleanupInternalNavigation();
      languageToggle.remove();
      mobileToggle.remove();
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [markup]);

  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
