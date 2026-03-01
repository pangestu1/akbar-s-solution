import { CheckCircle, Layers, Zap, RefreshCw, Settings, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Services = () => {
  const scrollRef = useScrollAnimation();

  const services = [
    {
      title: "Website Company Profile",
      icon: <Layers />,
      desc: "Representasi digital profesional untuk meningkatkan kredibilitas dan kepercayaan pelanggan terhadap bisnis Anda.",
      benefits: [
        "Desain Modern & Responsive (Mobile Friendly)",
        "Halaman Profil, Layanan, Portfolio, Kontak",
        "Integrasi Google Maps & WhatsApp",
        "SEO Friendly (Optimasi Mesin Pencari)",
        "Dashboard Admin untuk Update Konten",
        "Domain & Hosting Setup"
      ]
    },
    {
      title: "Sistem Booking & Reservasi",
      icon: <Zap />,
      desc: "Otomasi sistem reservasi dan pembayaran online untuk bisnis jasa, travel, rental, klinik, dan lainnya.",
      benefits: [
        "Sistem Reservasi Online Real-time",
        "Integrasi Payment Gateway",
        "Dashboard Admin & Laporan Transaksi",
        "Email / WhatsApp Notification",
        "Manajemen User & Role",
        "Custom Sesuai Workflow Bisnis"
      ]
    },
    {
      title: "Website as a Service",
      icon: <RefreshCw />,
      desc: "Website profesional tanpa biaya besar di awal. Cukup bayar biaya bulanan dengan fasilitas lengkap.",
      benefits: [
        "Website Siap Pakai & Profesional",
        "Hosting & Domain Termasuk",
        "Maintenance Rutin & Backup Otomatis",
        "Update Konten Gratis",
        "Support Teknis via WhatsApp",
        "Kontrak Fleksibel Mulai 12 Bulan"
      ]
    },
    {
      title: "Sistem Custom Development",
      icon: <Settings />,
      desc: "Solusi digital khusus yang dirancang mengikuti kebutuhan unik dan workflow bisnis Anda.",
      benefits: [
        "Sistem HRD & Manajemen Karyawan",
        "LMS / E-Learning Platform",
        "E-Commerce & Marketplace",
        "Portal Lowongan Kerja",
        "Sistem Internal Perusahaan",
        "Integrasi API Pihak Ketiga"
      ]
    }
  ];

  const addOns = [
    { name: "Logo & Branding", price: "+ Rp 500.000" },
    { name: "Maintenance Rutin Bulanan", price: "Mulai Rp 250.000/bulan" },
    { name: "Penambahan Halaman / Modul", price: "Mulai Rp 200.000/unit" },
    { name: "Email Bisnis Domain", price: "+ Rp 150.000/tahun" }
  ];

  return (
    <div className="services-page section-padding" ref={scrollRef}>
      <div className="container">
        <div className="section-header text-center animate-fade">
          <span className="pricing-badge">Layanan Unggulan</span>
          <h1 className="gradient-text">Solusi Digital Terintegrasi</h1>
          <p>Membantu bisnis Anda tampil profesional dan siap bersaing di era digital.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`glass-card service-detail-card animate-on-scroll delay-${index + 1}`}>
              <div className="service-icon">{service.icon}</div>
              <h2>{service.title}</h2>
              <p className="service-desc">{service.desc}</p>
              <div className="benefits-list">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="benefit-item">
                    <CheckCircle size={18} className="check-icon" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Add-On Section */}
        <div className="addon-section">
          <div className="section-header text-center animate-on-scroll">
            <h2>Layanan Tambahan (Add-On)</h2>
            <p>Tingkatkan website Anda dengan layanan pendukung berikut.</p>
          </div>
          <div className="addon-grid">
            {addOns.map((addon, index) => (
              <div key={index} className={`glass-card addon-card animate-on-scroll delay-${index + 1}`}>
                <div className="addon-icon"><Plus size={20} /></div>
                <div>
                  <h4>{addon.name}</h4>
                  <span className="addon-price">{addon.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="services-cta text-center scale-up">
          <h3>Butuh Konsultasi Lebih Lanjut?</h3>
          <p>Kami siap membantu menentukan layanan yang paling tepat untuk bisnis Anda.</p>
          <div className="cta-btns">
            <a href="https://wa.me/6289681587936" className="btn btn-primary btn-lg">Konsultasi Gratis via WhatsApp</a>
            <Link to="/paket-harga" className="btn btn-secondary btn-lg">Lihat Paket Harga</Link>
          </div>
        </div>
      </div>

      <style>{`
        .services-page {
          background: var(--secondary-bg);
          padding-top: 140px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .service-detail-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .service-icon {
          width: 64px;
          height: 64px;
          background: var(--gradient-primary);
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-bottom: 1.5rem;
          box-shadow: var(--shadow-blue);
          transition: transform 0.3s ease;
        }

        .service-detail-card:hover .service-icon {
          transform: scale(1.1) rotate(-5deg);
        }

        .service-icon svg {
          width: 30px;
          height: 30px;
        }

        .service-detail-card h2 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
        }

        .service-desc {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          font-size: 0.95rem;
        }

        .benefits-list {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          color: var(--text-primary);
          font-size: 0.9rem;
        }

        .check-icon {
          color: var(--accent-blue);
          flex-shrink: 0;
        }

        /* Add-On Section */
        .addon-section {
          margin-top: 5rem;
        }

        .addon-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.25rem;
          margin-top: 2rem;
        }

        .addon-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem 1.5rem;
        }

        .addon-icon {
          width: 40px;
          height: 40px;
          background: var(--gradient-light);
          color: var(--accent-blue);
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .addon-card:hover .addon-icon {
          background: var(--gradient-primary);
          color: white;
        }

        .addon-card h4 {
          margin-bottom: 0.2rem;
          font-size: 0.95rem;
        }

        .addon-price {
          color: var(--accent-blue);
          font-weight: 600;
          font-size: 0.85rem;
        }

        /* CTA */
        .services-cta {
          margin-top: 5rem;
          padding: 4rem 2rem;
          border-top: 1px solid var(--border-color);
        }

        .services-cta h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .services-cta p {
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .cta-btns {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .services-grid { grid-template-columns: 1fr; }
          .addon-grid { grid-template-columns: 1fr; }
          .cta-btns { flex-direction: column; align-items: center; }
        }
      `}</style>
    </div>
  );
};

export default Services;
