import { Cpu, Layers, Award } from 'lucide-react';

import logoReact from '../assets/icon/logo-react.png';
import logoNext from '../assets/icon/Vector.png';
import logoLaravel from '../assets/icon/logo-laravel.png';
import logoTailwind from '../assets/icon/logo-tailwind.png';
import logoAlpine from '../assets/icon/logo-alpine.png';
import logoVercel from '../assets/icon/logo-vercel.png';

export default function TechStack() {
  const techs = [
    {
      name: 'React',
      category: 'Frontend Core',
      description: 'Untuk UI web dinamis, modular, dan berkinerja ultra-responsif.',
      colorClass: 'group-hover:border-[#61DAFB]/40 group-hover:shadow-[0_0_20px_rgba(97,218,251,0.15)]',
      icon: logoReact,
    },
    {
      name: 'Next.js',
      category: 'Meta Framework',
      description: 'Server-Side Rendering (SSR) & optimasi SEO tingkat dewa secara out-of-the-box.',
      colorClass: 'group-hover:border-white/40 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]',
      icon: logoNext,
    },
    {
      name: 'Laravel',
      category: 'Backend Engine',
      description: 'Mesin backend tangguh, aman, dan arsitektur database berskala raksasa.',
      colorClass: 'group-hover:border-[#FF2D20]/40 group-hover:shadow-[0_0_20px_rgba(255,45,32,0.15)]',
      icon: logoLaravel,
    },
    {
      name: 'Tailwind CSS',
      category: 'Styling Core',
      description: 'Penyusunan gaya visual premium kilat tanpa menulis CSS berantakan.',
      colorClass: 'group-hover:border-[#06B6D4]/40 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]',
      icon: logoTailwind,
    },
    {
      name: 'Alpine.js',
      category: 'Lightweight Logic',
      description: 'Sentuhan interaksi super ringan pada halaman web tanpa bobot Javascript besar.',
      colorClass: 'group-hover:border-[#77C1D2]/40 group-hover:shadow-[0_0_20px_rgba(119,193,210,0.15)]',
      icon: logoAlpine,
    },
    {
      name: 'Vercel / AWS',
      category: 'Cloud Hosting',
      description: 'Peluncuran kilat, global CDN, performa server tepi (edge) 100% aman.',
      colorClass: 'group-hover:border-[#F3F4F6]/40 group-hover:shadow-[0_0_20px_rgba(243,244,246,0.15)]',
      icon: logoVercel,
    },
  ];

  return (
    <section id="tech-stack" className="py-24 bg-brand-deep relative overflow-hidden">
      {/* Visual background accents */}
      <div className="hidden md:block absolute top-0 right-1/4 w-96 h-96 rounded-full bg-brand-teal/5 blur-[120px] -z-10 animate-aurora-slow" />
      <div className="hidden md:block absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-brand-purple/5 blur-[120px] -z-10 animate-aurora-delay" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Description Column */}
          <div className="lg:col-span-4 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-brand-purple uppercase">
              <Award className="w-3.5 h-3.5 text-brand-purple" />
              Technology Credentials
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight font-sans">
              Teknologi Modern, Kecepatan Maksimal
            </h2>
            
            <p className="text-base text-gray-400 font-sans font-light leading-relaxed">
              Kami tidak sembarang menulis kode. Zisyahtu Project memilih dan mengombinasikan stack teknologi terdepan untuk memastikan website Anda memiliki kecepatan muat luar biasa, ramah SEO, serta keandalan jangka panjang.
            </p>
            
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 pt-2 max-w-sm mx-auto lg:mx-0">
              <div className="flex items-center gap-3.5 text-left p-3.5 rounded-xl bg-brand-surface/40 border border-white/5">
                <Cpu className="w-5 h-5 text-brand-teal flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Modern Engineering</h4>
                  <p className="text-xs text-gray-500">Arsitektur bersih berbasis komponen modular.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3.5 text-left p-3.5 rounded-xl bg-brand-surface/40 border border-white/5">
                <Layers className="w-5 h-5 text-brand-purple flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">High Scale Ready</h4>
                  <p className="text-xs text-gray-500">Sistem dirancang untuk menampung lonjakan trafik.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Grid Column */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {techs.map((tech, index) => (
              <div
                key={index}
                className={`group glass-panel p-6 rounded-2xl border border-white/5 transition-all duration-300 flex items-start gap-4 hover:-translate-y-1 hover:bg-brand-surface/80 ${tech.colorClass}`}
              >
                {/* Monochrome Icon converting to color on parent group hover */}
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 shadow-inner group-hover:scale-110 flex-shrink-0">
                  <div className="w-7 h-7 flex items-center justify-center">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-full h-full object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-1 text-left">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500 block">
                    {tech.category}
                  </span>
                  <h3 className="text-lg font-bold text-white transition-colors duration-200 group-hover:text-inherit">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
