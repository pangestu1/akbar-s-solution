import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Layanan', path: '/layanan' },
    { name: 'Paket Harga', path: '/paket-harga' },
    { name: 'Portfolio', path: '/portfolio' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-content">
        <Link to="/" className="nav-logo">
          <Rocket className="logo-icon" />
          <span>AKBAR'S <span className="accent">SOLUTION</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/kontak" className="btn btn-primary btn-sm">Mulai Sekarang</Link>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Nav */}
        <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="mobile-link"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/kontak"
            className="btn btn-primary"
            onClick={() => setIsOpen(false)}
          >
            Mulai Sekarang
          </Link>
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.3s ease;
          padding: 1.25rem 0;
        }

        .navbar-scrolled {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(16px);
          padding: 0.75rem 0;
          border-bottom: 1px solid var(--border-color);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.04);
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          font-size: 1.4rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-primary);
        }

        .logo-icon {
          color: var(--accent-blue);
        }

        .nav-logo .accent {
          color: var(--accent-blue);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          font-weight: 500;
          color: var(--text-secondary);
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--gradient-primary);
          transition: width 0.3s ease;
          border-radius: 2px;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--text-primary);
        }

        .btn-sm {
          padding: 0.5rem 1.25rem;
          font-size: 0.875rem;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }

        .mobile-nav {
          display: none;
        }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .mobile-toggle { display: block; }
          
          .mobile-nav {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: white;
            padding: 2rem;
            gap: 1.5rem;
            transform: translateY(-100%);
            opacity: 0;
            transition: all 0.3s ease;
            pointer-events: none;
            border-bottom: 1px solid var(--border-color);
            box-shadow: var(--shadow-lg);
          }

          .mobile-nav.open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: all;
          }

          .mobile-link {
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--text-primary);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
