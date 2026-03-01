import { ExternalLink, Globe } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import imgTravel from '../assets/portfolio/travel.png';
import imgEO from '../assets/portfolio/event organizer.png';
import imgCompany from '../assets/portfolio/bisnis digital.png';
import imgRental from '../assets/portfolio/rental kendaraan.png';

const Portfolio = () => {
  const scrollRef = useScrollAnimation();

  const projects = [
    {
      title: "Travel & Tour Agency",
      category: "Travel Business",
      image: imgTravel,
      desc: "Website bisnis travel lengkap dengan katalog paket wisata, detail destinasi, dan sistem informasi perjalanan.",
      link: "https://prototype-pc-travel.vercel.app/"
    },
    {
      title: "Event Organizer",
      category: "EO Business",
      image: imgEO,
      desc: "Website company profile event organizer profesional dengan portfolio acara dan layanan penyelenggaraan event.",
      link: "https://prototype-eo.vercel.app/"
    },
    {
      title: "General Company Profile",
      category: "Company Profile",
      image: imgCompany,
      desc: "Website profil perusahaan umum yang modern, responsif, dan profesional untuk berbagai jenis bisnis.",
      link: "https://prototype-pc.vercel.app/"
    },
    {
      title: "Rental Kendaraan",
      category: "Rental Business",
      image: imgRental,
      desc: "Website bisnis rental kendaraan dengan katalog armada, informasi harga, dan sistem pemesanan.",
      link: "https://prototype-pc-rental-kendaraan.vercel.app/"
    }
  ];

  return (
    <div className="portfolio-page section-padding" ref={scrollRef}>
      <div className="container">
        <div className="section-header text-center animate-fade">
          <span className="pricing-badge">Karya Kami</span>
          <h1 className="gradient-text">Portfolio Unggulan</h1>
          <p>Melihat bagaimana kami membantu klien mencapai target bisnis mereka melalui solusi digital.</p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className={`glass-card portfolio-card animate-on-scroll delay-${(index % 4) + 1}`}>
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="image-overlay">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="overlay-btn">
                    <ExternalLink size={24} />
                    <span>Lihat Website</span>
                  </a>
                </div>
              </div>
              <div className="portfolio-info">
                <span className="category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary demo-btn">
                  <Globe size={16} /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-cta text-center scale-up">
          <h3>Punya Proyek Serupa?</h3>
          <p>Konsultasikan kebutuhan teknis Anda dengan tim ahli kami.</p>
          <a href="https://wa.me/6289681587936" className="btn btn-primary btn-lg">Diskusikan Proyek</a>
        </div>
      </div>

      <style>{`
        .portfolio-page {
          background: var(--primary-bg);
          padding-top: 140px;
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .portfolio-card {
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .portfolio-image {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .portfolio-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(37, 99, 235, 0.6);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .overlay-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: white;
          font-weight: 600;
          font-size: 0.95rem;
          transition: transform 0.3s ease;
        }

        .overlay-btn:hover {
          transform: scale(1.1);
        }

        .portfolio-card:hover .portfolio-image img {
          transform: scale(1.08);
        }

        .portfolio-card:hover .image-overlay {
          opacity: 1;
        }

        .portfolio-info {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .portfolio-info .category {
          color: var(--accent-blue);
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
          display: block;
        }

        .portfolio-info h3 {
          margin-bottom: 0.5rem;
          font-size: 1.15rem;
        }

        .portfolio-info p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .demo-btn {
          margin-top: auto;
          padding: 0.6rem 1.25rem;
          font-size: 0.85rem;
          width: fit-content;
          border-radius: 9999px;
        }

        .portfolio-cta {
          margin-top: 5rem;
          padding: 4rem 2rem;
          border-top: 1px solid var(--border-color);
        }

        .portfolio-cta h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .portfolio-cta p {
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        @media (max-width: 768px) {
          .portfolio-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
