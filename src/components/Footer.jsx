import { Rocket, Mail, MapPin, Phone, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer section-padding">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-info">
            <Link to="/" className="footer-logo">
              <Rocket className="logo-icon" />
              <span>AKBAR'S <span className="accent">SOLUTION</span></span>
            </Link>
            <p className="footer-desc">
              Kami membantu bisnis membangun kehadiran digital yang tidak hanya menarik secara tampilan,
              tetapi juga mampu meningkatkan kredibilitas dan potensi penjualan.
            </p>
            <div className="social-links">
              <a href="https://www.instagram.com/pangeeeestu10/" target="_blank" rel="noopener noreferrer" className="social-icon"><Instagram size={20} /></a>
              <a href="https://www.linkedin.com/in/mohamad-akbar-sugih-pangestu-4a7308318/" target="_blank" rel="noopener noreferrer" className="social-icon"><Linkedin size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Navigasi</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/layanan">Layanan</Link></li>
              <li><Link to="/paket-harga">Paket Harga</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Hubungi Kami</h3>
            <ul>
              <li><Phone size={18} /> +62 896 8158 7936</li>
              <li><Mail size={18} /> mas.pangestu10@gmail.com</li>
              <li><MapPin size={18} /> Bekasi, Bandung & Yogyakarta, Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AKBAR'S SOLUTION. All rights reserved.</p>
        </div>
      </div>

      <style>{`
        .footer {
          background: #0f172a;
          color: #e2e8f0;
          border-top: none;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }

        .footer-logo {
          font-size: 1.4rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          color: white;
        }

        .footer-logo .logo-icon {
          color: #60a5fa;
        }

        .footer-logo .accent {
          color: #60a5fa;
        }

        .footer-desc {
          color: #94a3b8;
          margin-bottom: 1.5rem;
          max-width: 320px;
          line-height: 1.7;
        }

        .social-links {
          display: flex;
          gap: 0.75rem;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #94a3b8;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          color: #60a5fa;
          border-color: #60a5fa;
          background: rgba(96, 165, 250, 0.1);
          transform: translateY(-2px);
        }

        .footer-links h3, .footer-contact h3 {
          margin-bottom: 1.5rem;
          font-size: 1.15rem;
          color: white;
        }

        .footer-links ul li {
          margin-bottom: 0.75rem;
        }

        .footer-links ul li a {
          color: #94a3b8;
          transition: all 0.3s ease;
        }

        .footer-links ul li a:hover {
          color: #60a5fa;
          padding-left: 5px;
        }

        .footer-contact ul li {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 1rem;
          color: #94a3b8;
        }

        .footer-contact ul li svg {
          color: #60a5fa;
        }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          color: #64748b;
          font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
