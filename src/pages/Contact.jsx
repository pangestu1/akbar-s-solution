import { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact = () => {
  const scrollRef = useScrollAnimation();
  const [form, setForm] = useState({ nama: '', kontak: '', paket: '', pesan: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message =
      `Halo AKBAR'S SOLUTION,%0A%0A` +
      `Saya ingin konsultasi/memesan layanan.%0A%0A` +
      `*Nama:* ${form.nama}%0A` +
      `*Email/WA:* ${form.kontak}%0A` +
      `*Paket:* ${form.paket}%0A` +
      `*Detail:* ${form.pesan}`;
    window.open(`https://wa.me/6289681587936?text=${message}`, '_blank');
  };

  return (
    <div className="contact-page section-padding" ref={scrollRef}>
      <div className="container">
        <div className="section-header text-center animate-fade">
          <span className="pricing-badge">Hubungi Kami</span>
          <h1 className="gradient-text">Siap Memulai Proyek Anda?</h1>
          <p>Kami di sini untuk membantu Anda menemukan solusi digital yang tepat untuk bisnis Anda.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info slide-left">
            <div className="glass-card info-card">
              <h2>Informasi Kontak</h2>
              <p>Jangan ragu untuk menghubungi kami melalui media apa pun di bawah ini.</p>

              <div className="contact-methods">
                <div className="method-item">
                  <div className="icon-box-sm"><Phone size={20} /></div>
                  <div>
                    <h4>WhatsApp / Telepon</h4>
                    <p>+62 896 8158 7936</p>
                  </div>
                </div>

                <div className="method-item">
                  <div className="icon-box-sm"><Mail size={20} /></div>
                  <div>
                    <h4>Email</h4>
                    <p>mas.pangestu10@gmail.com</p>
                  </div>
                </div>

                <div className="method-item">
                  <div className="icon-box-sm"><MapPin size={20} /></div>
                  <div>
                    <h4>Kantor</h4>
                    <p>Bekasi, Bandung & Yogyakarta, Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="wa-cta-box">
                <p>Ingin respon lebih cepat?</p>
                <a href="https://wa.me/6289681587936" className="btn btn-primary w-full shadow-lg">
                  <MessageCircle size={20} /> Chat via WhatsApp Now
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container slide-right">
            <div className="glass-card form-card">
              <h2>Kirim Pesan</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Nama Lengkap</label>
                  <input type="text" name="nama" value={form.nama} onChange={handleChange} placeholder="Masukkan nama Anda" required />
                </div>

                <div className="form-group">
                  <label>Email / No. WhatsApp</label>
                  <input type="text" name="kontak" value={form.kontak} onChange={handleChange} placeholder="email@perusahaan.com atau 08xx" required />
                </div>

                <div className="form-group">
                  <label>Pilihan Paket</label>
                  <select name="paket" value={form.paket} onChange={handleChange} required>
                    <option value="">Pilih Paket</option>
                    <option value="Paket Digital Presence (Rp 525.000)">Paket Digital Presence (Rp 525.000)</option>
                    <option value="Paket UMKM Modern (Rp 1.000.000)">Paket UMKM Modern (Rp 1.000.000)</option>
                    <option value="Paket Bisnis Essential (Rp 1.500.000)">Paket Bisnis Essential (Rp 1.500.000)</option>
                    <option value="Paket Profesional (Rp 2.525.000)">Paket Profesional (Rp 2.525.000)</option>
                    <option value="Paket Profesional Plus (Rp 5.000.000)">Paket Profesional Plus (Rp 5.000.000)</option>
                    <option value="Paket Ekspansi High (Rp 7.500.000)">Paket Ekspansi High (Rp 7.500.000)</option>
                    <option value="Paket Custom (Konsultasi)">Paket Custom (Konsultasi)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Pesan / Detail Kebutuhan</label>
                  <textarea name="pesan" value={form.pesan} onChange={handleChange} rows="5" placeholder="Ceritakan kebutuhan bisnis Anda..." required></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full btn-lg">
                  Kirim Pesan <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-page {
          background: var(--secondary-bg);
          padding-top: 140px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 2.5rem;
          margin-top: 3rem;
        }

        .info-card h2, .form-card h2 {
          margin-bottom: 1.25rem;
          font-size: 1.5rem;
        }

        .info-card > p {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .contact-methods {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .method-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .icon-box-sm {
          width: 44px;
          height: 44px;
          background: var(--gradient-light);
          color: var(--accent-blue);
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .method-item:hover .icon-box-sm {
          background: var(--gradient-primary);
          color: white;
        }

        .method-item h4 {
          margin-bottom: 0.15rem;
          font-size: 1rem;
        }

        .method-item p {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .wa-cta-box {
          margin-top: 2.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-color);
        }

        .wa-cta-box p {
          margin-bottom: 1rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .form-card {
          padding: 2.5rem;
        }

        .form-group {
          margin-bottom: 1.25rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.4rem;
          font-weight: 500;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        input, select, textarea {
          width: 100%;
          padding: 0.7rem 1rem;
          background: var(--secondary-bg);
          border: 1.5px solid var(--border-color);
          border-radius: 0.75rem;
          color: var(--text-primary);
          outline: none;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }

        input:focus, select:focus, textarea:focus {
          border-color: var(--accent-blue);
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        input::placeholder, textarea::placeholder {
          color: #94a3b8;
        }

        @media (max-width: 992px) {
          .contact-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default Contact;
