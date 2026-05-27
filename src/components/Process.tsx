import { useState } from 'react';
import { Search, Compass, Terminal, Rocket, CheckCircle2, Clock } from 'lucide-react';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: <Search className="w-6 h-6" />,
      number: '01',
      title: 'Discovery & Consultation',
      subtitle: 'Memahami visi dan kebutuhan bisnis Anda.',
      duration: '3 - 7 Hari',
      description:
        'Sebelum menulis satu baris kode pun, kami duduk bersama Anda untuk membedah model bisnis, memahami target pengguna, memetakan fitur prioritas, dan menetapkan tolok ukur kesuksesan produk digital Anda.',
      outputs: ['Dokumen PRD Terstruktur', 'Sitemap & Arsitektur Informasi', 'Rencana Anggaran & Jadwal Rilis'],
      color: 'from-brand-teal to-[#3B82F6]',
      accentColor: 'text-brand-teal',
      bgColor: 'bg-brand-teal/10',
    },
    {
      icon: <Compass className="w-6 h-6" />,
      number: '02',
      title: 'UI/UX Wireframing & Prototyping',
      subtitle: 'Validasi visual interaktif sebelum fase coding.',
      duration: '1 - 2 Minggu',
      description:
        'Tim desainer kami merancang antarmuka kustom di Figma berdasarkan riset user flow. Kami membangun purwarupa interaktif (clickable prototype) agar Anda bisa merasakan alur navigasi web Anda secara nyata sebelum dikembangkan.',
      outputs: ['Wireframe & User Journey Map', 'Desain UI High-Fidelity di Figma', 'Klik Purwarupa Interaktif'],
      color: 'from-[#3B82F6] to-brand-purple',
      accentColor: 'text-[#3B82F6]',
      bgColor: 'bg-[#3B82F6]/10',
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      number: '03',
      title: 'Agile Development & Coding',
      subtitle: 'Pemrograman bersih, responsif, dan teruji.',
      duration: '2 - 6 Minggu',
      description:
        'Co-founder Zisyahtu Project memimpin langsung proses pengodean menggunakan React, Next.js, dan Tailwind CSS. Kami menerapkan prinsip Agile, memastikan kode terstruktur bersih, responsif di semua device, dan teruji secara ketat.',
      outputs: ['Clean & Component-Based Codebase', 'Penyetelan Database Tangguh', 'Unit Testing & Quality Assurance (QA)'],
      color: 'from-brand-purple to-[#EC4899]',
      accentColor: 'text-brand-purple',
      bgColor: 'bg-brand-purple/10',
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      number: '04',
      title: 'Deployment & Optimization',
      subtitle: 'Peluncuran server awan & audit performa penuh.',
      duration: '2 - 4 Hari',
      description:
        'Kami meluncurkan sistem web Anda ke infrastruktur cloud berkinerja tinggi (Vercel, AWS, Cloudflare). Kami melakukan audit Lighthouse akhir untuk memastikan kecepatan loading sub-detik, SEO teroptimasi, dan keamanan HTTPS maksimal.',
      outputs: ['Live Production Website', 'Google Lighthouse Score 95+ Audit', 'Dokumentasi Sistem & Handover Selesai'],
      color: 'from-[#EC4899] to-brand-teal',
      accentColor: 'text-[#EC4899]',
      bgColor: 'bg-[#EC4899]/10',
    },
  ];

  return (
    <section id="process" className="py-24 bg-brand-surface relative overflow-hidden">
      {/* Background radial effects */}
      <div className="hidden md:block absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-brand-purple/5 blur-[120px] -z-10" />
      <div className="hidden md:block absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-brand-teal/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-[#3B82F6] uppercase">
            Development Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight font-sans">
            Cara Kerja Transparan Kami
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-sans font-light">
            Kami memangkas kebingungan Anda dengan menghadirkan alur kerja sistematis, termonitor, dan transparan dari awal hingga peluncuran. Anda memegang kendali penuh di setiap langkah.
          </p>
        </div>

        {/* Process Interaction Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Steps List (Tabs) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 relative overflow-hidden ${
                    isActive
                      ? 'bg-brand-card border-brand-teal shadow-glow-teal'
                      : 'bg-brand-card/30 border-white/5 hover:border-white/15'
                  }`}
                >
                  {/* Step Number Background */}
                  <span className="absolute right-4 bottom-0 text-7xl font-bold font-sans text-white/[0.02] pointer-events-none select-none">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-teal-purple border-transparent text-white'
                        : 'bg-white/5 border-white/10 text-gray-400'
                    }`}
                  >
                    {step.icon}
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block">
                      Langkah {step.number}
                    </span>
                    <h3 className={`text-base font-bold transition-colors duration-200 ${isActive ? 'text-white' : 'text-gray-300'}`}>
                      {step.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Step Details Pane */}
          <div className="lg:col-span-7 flex">
            <div className="w-full glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 flex flex-col justify-between relative overflow-hidden">
              {/* Inner Glowing Ornament */}
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br ${steps[activeStep].color} opacity-[0.1] blur-2xl`} />

              {/* Pane Top Header */}
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="text-sm font-bold tracking-widest text-brand-teal uppercase font-sans">
                    Langkah {steps[activeStep].number} dari 04
                  </span>
                  
                  {/* Duration Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-gray-300">
                    <Clock className="w-3.5 h-3.5 text-brand-purple" />
                    Durasi: {steps[activeStep].duration}
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
                  {steps[activeStep].title}
                </h3>
                
                <p className="text-gray-400 font-sans font-light leading-relaxed">
                  {steps[activeStep].description}
                </p>

                {/* Outputs List */}
                <div className="space-y-3.5 pt-4">
                  <h4 className="text-xs uppercase font-extrabold tracking-wider text-gray-500">
                    Outputs / Deliverables:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {steps[activeStep].outputs.map((out, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                        <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                        <span className="text-xs font-medium text-gray-300 font-sans">{out}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Next Button Hint */}
              <div className="pt-8 mt-8 border-t border-white/5 flex justify-between items-center">
                <span className="text-xs text-gray-500 italic">
                  *Setiap fase dilakukan dengan sistem pelaporan transparan (Trello/Slack).
                </span>
                {activeStep < 3 && (
                  <button
                    onClick={() => setActiveStep(activeStep + 1)}
                    className="text-xs font-bold text-brand-teal hover:text-white uppercase tracking-wider transition-colors duration-200"
                  >
                    Selanjutnya &rarr;
                  </button>
                )}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
