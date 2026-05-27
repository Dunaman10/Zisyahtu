import { Code2, Palette, Gauge, ArrowUpRight } from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      icon: <Code2 className="w-8 h-8 text-brand-teal" />,
      title: 'Custom Web App Development',
      description:
        'Pembuatan aplikasi web berskala enterprise, platform SaaS, e-commerce kompleks, hingga dashboard kustom internal. Kami menjamin arsitektur yang kuat, performa kilat, dan kode yang mudah dikembangkan.',
      features: ['Software SaaS & Multi-tenant', 'Dashboard & Business Analytics', 'Integrasi API & Sistem Pihak Ketiga'],
      glowClass: 'hover:border-brand-teal/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]',
      accentColor: 'text-brand-teal',
    },
    {
      icon: <Palette className="w-8 h-8 text-brand-purple" />,
      title: 'UI/UX Design & Prototyping',
      description:
        'Transformasikan ide bisnis kasar Anda menjadi wireframe dan desain interaktif bersensasi premium. Pendekatan berpusat pada pengguna kami memastikan antarmuka yang sangat indah, intuitif, dan melipatgandakan tingkat konversi.',
      features: ['Figma High-Fidelity Design', 'Interactive Prototyping', 'User Journey & Empathy Mapping'],
      glowClass: 'hover:border-brand-purple/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]',
      accentColor: 'text-brand-purple',
    },
    {
      icon: <Gauge className="w-8 h-8 text-blue-500" />,
      title: 'Performance & Optimization',
      description:
        'Kami mendiagnosis dan merekayasa ulang website lambat Anda agar mencapai skor Lighthouse 95+. Layanan mencakup migrasi stack modern, pembaruan keamanan, kompresi aset otomatis, dan pemeliharaan server berkala.',
      features: ['Lighthouse 95+ Score Audit', 'Tech Stack Migration (e.g. legacy to React)', 'Security Hardening & Server Maintenance'],
      glowClass: 'hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.12)]',
      accentColor: 'text-blue-500',
    },
  ];

  return (
    <section id="services" className="py-24 bg-brand-surface relative overflow-hidden">
      {/* Background shapes */}
      <div className="hidden md:block absolute top-1/2 left-0 w-80 h-80 rounded-full bg-brand-teal/5 blur-[100px] -z-10" />
      <div className="hidden md:block absolute bottom-0 right-0 w-80 h-80 rounded-full bg-brand-purple/5 blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-brand-teal uppercase">
            Services & Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight font-sans">
            Layanan Rekayasa Web Unggulan Kami
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-sans font-light">
            Kami menggabungkan rekayasa kode presisi tinggi dengan visual kelas premium untuk menghasilkan website yang bukan sekadar ada, melainkan berkinerja dan bernilai bisnis tinggi.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className={`glass-panel p-8 rounded-2xl border border-white/5 transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between ${service.glowClass}`}
            >
              <div className="space-y-6">
                {/* Icon Wrapper */}
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white font-sans tracking-tight">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed font-sans font-light">
                  {service.description}
                </p>

                {/* Bullet Features */}
                <ul className="space-y-3 pt-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-gray-300 font-sans font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer CTA link */}
              <div className="pt-8 mt-8 border-t border-white/5 flex items-center justify-between">
                <a
                  href="#estimate"
                  className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:gap-2.5 ${service.accentColor}`}
                >
                  Dapatkan Estimasi Biaya
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
