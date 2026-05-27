import React, { useState } from 'react';
import { Mail, ArrowRight, Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    description: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    description: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const tempErrors = { name: '', email: '', description: '' };

    if (!formData.name.trim()) {
      tempErrors.name = 'Nama lengkap wajib diisi.';
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'Email wajib diisi.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Alamat email tidak valid.';
      isValid = false;
    }

    if (!formData.description.trim()) {
      tempErrors.description = 'Deskripsi proyek wajib diisi.';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when typing
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate database delivery/API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', description: '' });
    }, 1200);
  };

  // Open WhatsApp direct chat
  const handleDirectWhatsApp = () => {
    const waNumber = '628123456789';
    const msg = encodeURIComponent(
      'Halo Zisyahtu Project! Saya ingin berkonsultasi mengenai rencana pembuatan sistem web saya.'
    );
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${msg}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-brand-surface relative overflow-hidden">
      {/* Background soft glowing lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-teal/5 blur-[150px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-brand-purple uppercase">
                Let's Partner Up
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight font-sans">
                Siap Meluncurkan Projek Impian Anda?
              </h2>
              <p className="text-base text-gray-400 font-sans font-light leading-relaxed">
                Kami siap membantu Anda menganalisis kebutuhan bisnis, merancang antarmuka premium, dan memprogram aplikasi web berperforma tinggi. Diskusikan ide Anda bersama co-founder kami hari ini.
              </p>
            </div>

            {/* Business Contact Cards */}
            <div className="space-y-4 max-w-md mx-auto lg:mx-0">
              
              {/* Email Address */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-brand-deep/50 border border-white/5 text-left transition-all duration-300 hover:border-brand-teal/20">
                <div className="w-11 h-11 rounded-xl bg-brand-teal/10 flex items-center justify-center border border-brand-teal/20">
                  <Mail className="w-5 h-5 text-brand-teal" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-gray-500 tracking-wider">Email Resmi</h4>
                  <a href="mailto:contact@zisyahtu.com" className="text-sm font-semibold text-white hover:text-brand-teal transition-colors">
                    contact@zisyahtu.com
                  </a>
                </div>
              </div>

              {/* Chat Instan WA */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-brand-deep/50 border border-white/5 text-left transition-all duration-300 hover:border-brand-purple/20">
                <div className="w-11 h-11 rounded-xl bg-brand-purple/10 flex items-center justify-center border border-brand-purple/20">
                  <svg className="w-5 h-5 fill-current text-brand-purple" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-gray-500 tracking-wider">WhatsApp Hotline</h4>
                  <button onClick={handleDirectWhatsApp} className="text-sm font-semibold text-white hover:text-brand-purple text-left transition-colors">
                    +62 812-3456-789
                  </button>
                </div>
              </div>

            </div>

            {/* Social Links & Branding */}
            <div className="space-y-4 pt-4">
              <h4 className="text-xs uppercase font-extrabold tracking-wider text-gray-500">
                Ikuti Portofolio Kami
              </h4>
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/5 hover:bg-brand-teal/15 hover:text-brand-teal border border-white/10 hover:border-brand-teal/30 flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-105"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/5 hover:bg-brand-purple/15 hover:text-brand-purple border border-white/10 hover:border-brand-purple/30 flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-105"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
              
              {isSubmitted ? (
                /* Success State */
                <div className="text-center py-12 space-y-6 animate-float">
                  <div className="w-20 h-20 rounded-full bg-brand-teal/10 border border-brand-teal/30 flex items-center justify-center mx-auto shadow-glow-teal">
                    <CheckCircle2 className="w-10 h-10 text-brand-teal" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white font-sans">Pesan Anda Berhasil Terkirim!</h3>
                    <p className="text-sm text-gray-400 max-w-md mx-auto font-light leading-relaxed">
                      Terima kasih telah menghubungi Zisyahtu Project. Co-founder kami akan menganalisis brief proyek Anda dan menghubungi Anda melalui email dalam kurun waktu 1x24 jam.
                    </p>
                  </div>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-gray-300 hover:text-white hover:bg-white/5 text-sm font-semibold transition-all duration-300"
                  >
                    Kirim Pesan Baru
                  </button>
                </div>
              ) : (
                /* Contact Form Inputs */
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  <h3 className="text-xl font-bold text-white tracking-tight border-b border-white/5 pb-4 font-sans">
                    Kirim Brief Projek Anda
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3.5 rounded-xl bg-brand-deep/50 border text-sm text-white placeholder-gray-600 focus:outline-none transition-all duration-300 focus:border-brand-teal/50 focus:bg-brand-deep ${
                          errors.name ? 'border-[#EF4444]' : 'border-white/5'
                        }`}
                      />
                      {errors.name && <span className="text-[10px] text-[#EF4444] font-medium">{errors.name}</span>}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                        Email Bisnis *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@company.com"
                        className={`w-full px-4 py-3.5 rounded-xl bg-brand-deep/50 border text-sm text-white placeholder-gray-600 focus:outline-none transition-all duration-300 focus:border-brand-teal/50 focus:bg-brand-deep ${
                          errors.email ? 'border-[#EF4444]' : 'border-white/5'
                        }`}
                      />
                      {errors.email && <span className="text-[10px] text-[#EF4444] font-medium">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Company Name */}
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Nama Perusahaan / Startup (Opsional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="PT. Sukses Digital"
                      className="w-full px-4 py-3.5 rounded-xl bg-brand-deep/50 border border-white/5 text-sm text-white placeholder-gray-600 focus:outline-none transition-all duration-300 focus:border-brand-teal/50 focus:bg-brand-deep"
                    />
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <label htmlFor="description" className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Deskripsi Ringkas Projek *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Jelaskan secara ringkas ide aplikasi web, fitur utama yang Anda butuhkan, dan target peluncuran..."
                      className={`w-full px-4 py-3.5 rounded-xl bg-brand-deep/50 border text-sm text-white placeholder-gray-600 focus:outline-none transition-all duration-300 focus:border-brand-teal/50 focus:bg-brand-deep resize-none ${
                        errors.description ? 'border-[#EF4444]' : 'border-white/5'
                      }`}
                    />
                    {errors.description && (
                      <span className="text-[10px] text-[#EF4444] font-medium">{errors.description}</span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-teal-purple text-white text-sm font-bold transition-all duration-300 shadow-glow-teal hover:opacity-95 disabled:opacity-50 hover:scale-[1.01]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Mengirimkan Brief...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Kirim Brief Projek
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Real Footer Section */}
        <footer className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs text-gray-500 font-sans">
          <div>
            &copy; {new Date().getFullYear()} Zisyahtu Project. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Premium Web engineering services. Built with React &amp; Tailwind.</span>
          </div>
        </footer>

      </div>

      {/* Floating Premium WhatsApp Widget */}
      <button
        onClick={handleDirectWhatsApp}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.3)] transition-all duration-300 hover:scale-110 active:scale-95 group"
        aria-label="Chat WhatsApp"
      >
        <svg className="w-6 h-6 fill-current transition-transform group-hover:rotate-12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        
        {/* Glowing aura background */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 blur-md -z-10 animate-ping opacity-75" />
      </button>
    </section>
  );
}
