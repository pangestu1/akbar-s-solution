import { ArrowRight, Smartphone, Globe, Shield, Zap, HeadphonesIcon, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import profileImg from '../assets/profil.png';

const Home = () => {
  const scrollRef = useScrollAnimation();

  return (
    <div className="home-page" ref={scrollRef}>
      {/* Hero Section */}
      <section className="hero section-padding">
        <div className="container">
          <div className="hero-layout">
            <div className="hero-content animate-fade">
              <span className="pricing-badge">Digital Website & System Specialist</span>
              <h1>
                Jasa Pembuatan <br />
                <span className="gradient-text">Website & Sistem Digital</span> <br />
                Profesional
              </h1>
              <p className="hero-sub">
                Kami membantu bisnis membangun kehadiran digital yang kredibel, modern, dan efektif.
                Mulai dari website company profile hingga sistem booking & payment terintegrasi.
              </p>
              <div className="hero-btns">
                <a href="https://wa.me/6289681587936" className="btn btn-primary btn-lg">
                  Konsultasi Gratis <ArrowRight size={20} />
                </a>
                <Link to="/paket-harga" className="btn btn-secondary btn-lg">
                  Lihat Paket Harga
                </Link>
              </div>
            </div>
            <div className="hero-image animate-fade-delay-2">
              <div className="profile-wrapper">
                <img src={profileImg} alt="Mohamad Akbar Sugih Pangestu - Founder" className="profile-img" />
                <div className="profile-glow"></div>
              </div>
              <div className="profile-info">
                <strong>Mohamad Akbar Sugih Pangestu</strong>
                <span>Founder & Lead Developer</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="why-us section-padding">
        <div className="container">
          <div className="section-header text-center animate-on-scroll">
            <span className="pricing-badge">Keunggulan Kami</span>
            <h2>Kenapa Memilih Kami?</h2>
            <p>Kami tidak hanya membuat website, tetapi membangun sistem digital untuk pertumbuhan bisnis Anda.</p>
          </div>

          <div className="features-grid">
            <div className="glass-card feature-card animate-on-scroll delay-1">
              <div className="icon-box"><Globe /></div>
              <h3>Desain Modern & Profesional</h3>
              <p>Website tampil rapi, modern, dan optimal di semua perangkat — meningkatkan kredibilitas brand Anda.</p>
            </div>

            <div className="glass-card feature-card animate-on-scroll delay-2">
              <div className="icon-box"><Smartphone /></div>
              <h3>Mobile Friendly</h3>
              <p>80% traffic dari smartphone. Website kami dirancang responsive sempurna di semua ukuran layar.</p>
            </div>

            <div className="glass-card feature-card animate-on-scroll delay-3">
              <div className="icon-box"><Shield /></div>
              <h3>SEO Friendly</h3>
              <p>Website dioptimalkan agar mudah ditemukan di mesin pencari Google untuk menjangkau pelanggan lebih luas.</p>
            </div>

            <div className="glass-card feature-card animate-on-scroll delay-4">
              <div className="icon-box"><Zap /></div>
              <h3>Bisa Dikembangkan</h3>
              <p>Website dapat ditingkatkan menjadi sistem yang lebih kompleks sesuai pertumbuhan bisnis Anda.</p>
            </div>

            <div className="glass-card feature-card animate-on-scroll delay-5">
              <div className="icon-box"><HeadphonesIcon /></div>
              <h3>Support & Komunikasi Cepat</h3>
              <p>Tim kami siap membantu dengan respons cepat melalui WhatsApp — sebelum, selama, dan setelah project.</p>
            </div>

            <div className="glass-card feature-card animate-on-scroll delay-6">
              <div className="icon-box"><DollarSign /></div>
              <h3>Harga Transparan</h3>
              <p>Tanpa biaya tersembunyi. Paket harga terstruktur jelas mulai dari Rp 525.000 untuk landing page.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section-padding">
        <div className="container">
          <div className="glass-card cta-card text-center scale-up">
            <h2>Siap Membawa Bisnis Anda ke Level Digital?</h2>
            <p>Website profesional mulai dari Rp 525.000. Konsultasi gratis sekarang!</p>
            <a href="https://wa.me/6289681587936" className="btn btn-primary btn-lg">
              Hubungi Kami via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .hero {
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
          padding-top: 120px;
          background: var(--gradient-hero);
          overflow: hidden;
        }

        .hero-layout {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 3rem;
          align-items: center;
        }

        .hero-content {
          max-width: 650px;
        }

        .hero h1 {
          font-size: 3.5rem;
          line-height: 1.15;
          margin-top: 1.5rem;
          font-weight: 800;
        }

        .hero-sub {
          font-size: 1.15rem;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          line-height: 1.8;
        }

        .hero-btns {
          display: flex;
          gap: 1rem;
        }

        /* Profile Image */
        .hero-image {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .profile-wrapper {
          position: relative;
          width: 300px;
          height: 300px;
          margin-bottom: 1.5rem;
        }

        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          border: 4px solid white;
          box-shadow: 0 10px 40px rgba(37, 99, 235, 0.15);
          position: relative;
          z-index: 2;
          animation: float 4s ease-in-out infinite;
        }

        .profile-glow {
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border-radius: 50%;
          background: var(--gradient-primary);
          opacity: 0.15;
          z-index: 1;
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .profile-info strong {
          display: block;
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .profile-info span {
          font-size: 0.9rem;
          color: var(--accent-blue);
          font-weight: 600;
        }

        /* Hero Background Shapes */
        .hero-bg-shapes {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.1;
        }

        .shape-1 {
          width: 400px;
          height: 400px;
          background: var(--accent-blue);
          top: -100px;
          right: -100px;
          animation: float 6s ease-in-out infinite;
        }

        .shape-2 {
          width: 250px;
          height: 250px;
          background: var(--accent-cyan);
          bottom: -50px;
          left: -50px;
          animation: float 8s ease-in-out infinite reverse;
        }

        .shape-3 {
          width: 150px;
          height: 150px;
          background: var(--accent-indigo);
          top: 50%;
          left: 30%;
          animation: float 5s ease-in-out infinite;
        }

        /* Why Us */
        .why-us {
          background: var(--secondary-bg);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 3rem;
        }

        .icon-box {
          width: 56px;
          height: 56px;
          border-radius: 0.875rem;
          background: var(--gradient-light);
          color: var(--accent-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
          transition: all 0.3s ease;
        }

        .feature-card:hover .icon-box {
          background: var(--gradient-primary);
          color: white;
        }

        .icon-box svg {
          width: 26px;
          height: 26px;
        }

        .feature-card h3 {
          margin-bottom: 0.75rem;
          font-size: 1.1rem;
        }

        .feature-card p {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .section-header h2 {
          font-size: 2.5rem;
          margin-top: 0.75rem;
        }

        .section-header p {
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        /* CTA */
        .cta-card {
          padding: 4rem;
          background: var(--gradient-hero);
          border: 1px solid rgba(37, 99, 235, 0.1);
        }

        .cta-card h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .cta-card p {
          font-size: 1.15rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        @media (max-width: 992px) {
          .hero-layout {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-content { max-width: 100%; }
          .hero-btns { justify-content: center; }
          .hero-image { order: -1; }
          .profile-wrapper { width: 200px; height: 200px; }
        }

        @media (max-width: 768px) {
          .hero h1 { font-size: 2.25rem; }
          .hero-btns { flex-direction: column; align-items: center; }
          .features-grid { grid-template-columns: 1fr; }
          .cta-card { padding: 2.5rem; }
          .cta-card h2 { font-size: 1.75rem; }
        }
      `}</style>
    </div>
  );
};

export default Home;
