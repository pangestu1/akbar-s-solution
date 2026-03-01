import { CheckCircle, Clock, CreditCard, FileText } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Pricing = () => {
  const scrollRef = useScrollAnimation();

  const packages = [
    {
      name: "Digital Presence",
      price: "Rp 525.000",
      subtitle: "Hadir Online dengan Profesional",
      pages: "1 Halaman",
      featured: false,
      tag: null,
      features: [
        "1 Halaman Website (Landing Page)",
        "Desain Responsive (Mobile Friendly)",
        "Integrasi WhatsApp Langsung",
        "Integrasi Google Maps",
        "Galeri Foto Produk / Layanan",
        "Link Social Media",
        "Domain .com (1 Tahun)",
        "Hosting Aktif 1 Tahun"
      ]
    },
    {
      name: "UMKM Modern",
      price: "Rp 1.000.000",
      subtitle: "Tampil Rapi dengan Multi Halaman",
      pages: "3 Halaman",
      featured: false,
      tag: null,
      features: [
        "3 Halaman Website",
        "Desain Profesional & Responsive",
        "Domain .com (1 Tahun)",
        "Hosting (1 Tahun)",
        "1 Email Bisnis Domain",
        "Dashboard Admin (Update Konten)",
        "Integrasi Google Maps",
        "SEO Dasar",
        "Google Analytics Setup"
      ]
    },
    {
      name: "Bisnis Essential",
      price: "Rp 1.500.000",
      subtitle: "Company Profile Profesional",
      pages: "5 Halaman",
      featured: true,
      tag: "BEST SELLER",
      features: [
        "5 Halaman Website Lengkap",
        "Desain Lebih Custom",
        "Domain & Hosting (1 Tahun)",
        "1 Email Domain",
        "Dashboard Admin Penuh",
        "SEO On-Page Dasar",
        "Integrasi Google Maps & WhatsApp",
        "Video Tutorial Penggunaan",
        "Gratis Desain Logo Sederhana"
      ]
    },
    {
      name: "Profesional",
      price: "Rp 2.525.000",
      subtitle: "Solusi Bisnis Berkembang",
      pages: "10 Halaman",
      featured: false,
      tag: null,
      features: [
        "10 Halaman Website",
        "Custom Design Layout",
        "Domain (.com / .id / .org)",
        "Hosting (1 Tahun)",
        "5 Email Domain",
        "3 Artikel Blog",
        "SEO Optimasi",
        "Google Analytics",
        "Integrasi Maps & Social Media",
        "Tutorial Penggunaan"
      ]
    },
    {
      name: "Profesional Plus",
      price: "Rp 5.000.000",
      subtitle: "Tampil Premium & Powerful",
      pages: "20 Halaman",
      featured: false,
      tag: "PREMIUM",
      features: [
        "20 Halaman Website",
        "Custom Web Design Premium",
        "Hosting Dedicated",
        "5 Email Domain",
        "6 Artikel Blog",
        "SEO Optimasi Lengkap",
        "Setup Awal Google Ads",
        "Integrasi Maps & Social Media",
        "Tutorial & Support"
      ]
    },
    {
      name: "Ekspansi High",
      price: "Rp 7.500.000",
      subtitle: "Website Skala Besar",
      pages: "30+ Halaman",
      featured: false,
      tag: null,
      features: [
        "30+ Halaman Website",
        "Multi Bahasa",
        "Hosting Dedicated",
        "Live Chat Integration",
        "SEO Advanced",
        "6 Artikel Blog",
        "Keamanan & Backup Sistem",
        "Email Domain Lengkap",
        "Setup Awal Digital Ads"
      ]
    },
    {
      name: "Custom Website",
      price: "Hubungi Kami",
      subtitle: "Fitur Khusus Sesuai Kebutuhan",
      pages: "Sesuai Kebutuhan",
      featured: false,
      tag: "CUSTOM",
      features: [
        "Sistem Booking & Reservasi",
        "Payment Gateway Integration",
        "Sistem HRD / Manajemen",
        "LMS / E-Learning",
        "E-Commerce & Marketplace",
        "Portal Lowongan Kerja",
        "Sistem Internal Perusahaan",
        "Semua Fitur Bisa Disesuaikan"
      ]
    }
  ];

  return (
    <div className="pricing-page section-padding" ref={scrollRef}>
      <div className="container">
        <div className="section-header text-center animate-fade">
          <span className="pricing-badge">Paket Layanan Website</span>
          <h1 className="gradient-text">Pilih Paket Sesuai Kebutuhan</h1>
          <p>Harga transparan tanpa biaya tersembunyi. Semua paket termasuk desain profesional dan support.</p>
        </div>

        {/* Pricing Grid */}
        <div className="pricing-grid-new">
          {packages.map((pkg, index) => (
            <div key={index} className={`glass-card pricing-card-new ${pkg.featured ? 'featured' : ''} animate-on-scroll delay-${(index % 4) + 1}`}>
              {pkg.tag && <div className={`card-tag ${pkg.featured ? 'tag-featured' : ''}`}>{pkg.tag}</div>}
              <div className="pricing-header-new">
                <h3>{pkg.name}</h3>
                <div className="price-new">{pkg.price}</div>
                <p className="price-subtitle">{pkg.subtitle}</p>
                <span className="page-count">{pkg.pages}</span>
              </div>
              <div className="pricing-features">
                {pkg.features.map((feature, i) => (
                  <div key={i} className="feature-row">
                    <CheckCircle size={15} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <a
                href={`https://wa.me/6289681587936?text=Halo,%20saya%20tertarik%20dengan%20Paket%20${encodeURIComponent(pkg.name)}`}
                className={`btn ${pkg.featured ? 'btn-primary' : 'btn-secondary'} w-full`}
              >
                Pilih Paket
              </a>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="info-section">
          <div className="info-grid">
            <div className="glass-card info-block animate-on-scroll delay-1">
              <div className="info-icon"><FileText size={26} /></div>
              <h3>Scope of Work</h3>
              <div className="info-list">
                <h4>✅ Termasuk:</h4>
                <ul>
                  <li><CheckCircle size={14} /> Konsultasi kebutuhan</li>
                  <li><CheckCircle size={14} /> Desain & Development</li>
                  <li><CheckCircle size={14} /> Testing & QA</li>
                  <li><CheckCircle size={14} /> Launching ke server</li>
                  <li><CheckCircle size={14} /> Support awal setelah live</li>
                </ul>
                <h4>❌ Tidak termasuk:</h4>
                <ul className="excluded">
                  <li>Copywriting konten</li>
                  <li>Foto / video profesional</li>
                  <li>Biaya iklan digital</li>
                  <li>Perpanjangan domain & hosting</li>
                </ul>
              </div>
            </div>

            <div className="glass-card info-block animate-on-scroll delay-2">
              <div className="info-icon"><Clock size={26} /></div>
              <h3>Timeline Pengerjaan</h3>
              <div className="timeline-items">
                <div className="timeline-row">
                  <span className="timeline-label">1–3 Halaman</span>
                  <span className="timeline-value">5–10 hari kerja</span>
                </div>
                <div className="timeline-row">
                  <span className="timeline-label">5–10 Halaman</span>
                  <span className="timeline-value">2–3 minggu</span>
                </div>
                <div className="timeline-row">
                  <span className="timeline-label">10+ Halaman</span>
                  <span className="timeline-value">3–4 minggu</span>
                </div>
              </div>
              <p className="timeline-note">* Tergantung kelengkapan konten dari klien</p>
            </div>

            <div className="glass-card info-block animate-on-scroll delay-3">
              <div className="info-icon"><CreditCard size={26} /></div>
              <h3>Skema Pembayaran</h3>
              <div className="payment-scheme">
                <div className="payment-row">
                  <span className="payment-pct">50%</span>
                  <span>Down Payment (DP)</span>
                </div>
                <div className="payment-divider"></div>
                <div className="payment-row">
                  <span className="payment-pct">50%</span>
                  <span>Pelunasan sebelum launching</span>
                </div>
              </div>
              <p className="payment-note">Untuk paket custom, termin sesuai kesepakatan.</p>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="pricing-note text-center animate-on-scroll">
          <p>📍 Harga perpanjangan domain & hosting setelah 1 tahun akan diinformasikan sebelum jatuh tempo.</p>
          <p>📍 Paket bisa dikustom sesuai permintaan klien.</p>
        </div>
      </div>

      <style>{`
        .pricing-page {
          background: var(--secondary-bg);
          padding-top: 140px;
        }

        .pricing-grid-new {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-top: 3rem;
        }

        .pricing-card-new {
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        .pricing-card-new.featured {
          border: 2px solid var(--accent-blue);
          background: linear-gradient(135deg, #eff6ff 0%, #ffffff 100%);
          box-shadow: var(--shadow-blue);
        }

        .card-tag {
          position: absolute;
          top: 0;
          right: 0;
          background: var(--gradient-primary);
          padding: 5px 14px;
          border-radius: 0 1.25rem 0 0.75rem;
          font-size: 0.65rem;
          font-weight: 800;
          color: white;
          letter-spacing: 0.05em;
        }

        .tag-featured {
          background: linear-gradient(135deg, #f59e0b, #ef4444);
        }

        .pricing-header-new h3 {
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
        }

        .price-new {
          font-size: 1.75rem;
          font-weight: 800;
          margin-bottom: 0.35rem;
          color: var(--text-primary);
        }

        .price-subtitle {
          color: var(--text-secondary);
          font-size: 0.85rem;
          margin-bottom: 0.75rem;
        }

        .page-count {
          display: inline-block;
          background: var(--gradient-light);
          color: var(--accent-blue);
          padding: 0.2rem 0.6rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          margin-bottom: 1.25rem;
          border: 1px solid rgba(37, 99, 235, 0.1);
        }

        .pricing-features {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .feature-row {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--text-primary);
        }

        .feature-row svg {
          color: var(--accent-blue);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .w-full {
          width: 100%;
          margin-top: auto;
          text-align: center;
        }

        /* Info Section */
        .info-section {
          margin-top: 5rem;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .info-block {
          text-align: center;
        }

        .info-icon {
          width: 56px;
          height: 56px;
          background: var(--gradient-light);
          color: var(--accent-blue);
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.25rem;
        }

        .info-block h3 {
          font-size: 1.2rem;
          margin-bottom: 1.25rem;
        }

        .info-list {
          text-align: left;
        }

        .info-list h4 {
          font-size: 0.8rem;
          color: var(--text-primary);
          font-weight: 700;
          margin-bottom: 0.6rem;
          margin-top: 0.75rem;
        }

        .info-list ul {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .info-list ul li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
        }

        .info-list ul li svg {
          color: var(--accent-blue);
          flex-shrink: 0;
        }

        .info-list ul.excluded li {
          color: var(--text-secondary);
          font-size: 0.8rem;
          padding-left: 0.5rem;
        }

        .info-list ul.excluded li::before {
          content: "—";
          margin-right: 0.5rem;
          color: #cbd5e1;
        }

        /* Timeline */
        .timeline-items {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          text-align: left;
        }

        .timeline-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.6rem 0.75rem;
          background: var(--gradient-light);
          border-radius: 0.5rem;
          border: 1px solid rgba(37, 99, 235, 0.08);
        }

        .timeline-label {
          font-weight: 600;
          font-size: 0.85rem;
        }

        .timeline-value {
          color: var(--accent-blue);
          font-weight: 600;
          font-size: 0.85rem;
        }

        .timeline-note {
          margin-top: 0.75rem;
          font-size: 0.75rem;
          color: var(--text-secondary);
          text-align: left;
        }

        /* Payment */
        .payment-scheme {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          align-items: center;
          margin-bottom: 0.75rem;
        }

        .payment-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.9rem;
        }

        .payment-pct {
          width: 44px;
          height: 44px;
          background: var(--gradient-primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 0.8rem;
          box-shadow: var(--shadow-blue);
        }

        .payment-divider {
          width: 2px;
          height: 16px;
          background: var(--border-color);
        }

        .payment-note {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        /* Note */
        .pricing-note {
          margin-top: 3rem;
          padding: 2rem;
          border-top: 1px solid var(--border-color);
        }

        .pricing-note p {
          color: var(--text-secondary);
          font-size: 0.85rem;
          margin-bottom: 0.4rem;
        }

        @media (max-width: 992px) {
          .pricing-card-new.featured { transform: scale(1); }
          .info-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
          .pricing-grid-new { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default Pricing;
