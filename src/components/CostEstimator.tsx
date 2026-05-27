import { useState, useEffect } from 'react';
import { Calculator, Check, ArrowRight, Clock } from 'lucide-react';

interface AppType {
  id: string;
  name: string;
  baseMin: number;
  baseMax: number;
  weeksMin: number;
  weeksMax: number;
  description: string;
  icon: string;
}

interface Feature {
  id: string;
  name: string;
  cost: number;
  weeks: number;
  description: string;
}

interface Scale {
  id: string;
  name: string;
  multiplier: number;
  weeksExtra: number;
  description: string;
}

export default function CostEstimator() {
  // Config arrays
  const appTypes: AppType[] = [
    {
      id: 'company',
      name: 'Company Profile',
      baseMin: 5000000,
      baseMax: 8000000,
      weeksMin: 2,
      weeksMax: 3,
      description: 'Website presentasi bisnis modern & responsif sempurna.',
      icon: '🏢',
    },
    {
      id: 'ecommerce',
      name: 'E-Commerce Store',
      baseMin: 12000000,
      baseMax: 18000000,
      weeksMin: 4,
      weeksMax: 6,
      description: 'Toko online lengkap dengan katalog & sistem checkout.',
      icon: '🛍️',
    },
    {
      id: 'dashboard',
      name: 'Custom Dashboard',
      baseMin: 18000000,
      baseMax: 28000000,
      weeksMin: 5,
      weeksMax: 8,
      description: 'Sistem portal data internal & visualisasi chart interaktif.',
      icon: '📊',
    },
    {
      id: 'saas',
      name: 'Web SaaS Application',
      baseMin: 30000000,
      baseMax: 50000000,
      weeksMin: 6,
      weeksMax: 10,
      description: 'Aplikasi web multi-tenant berskala besar & siap pakai.',
      icon: '🚀',
    },
  ];

  const featuresList: Feature[] = [
    {
      id: 'auth',
      name: 'Sistem Login & Multi-Role',
      cost: 2500000,
      weeks: 1,
      description: 'Autentikasi aman dan tingkat izin akses user.',
    },
    {
      id: 'payment',
      name: 'Integrasi Payment Gateway',
      cost: 4000000,
      weeks: 1.5,
      description: 'Pembayaran otomatis via Midtrans/Xendit.',
    },
    {
      id: 'i18n',
      name: 'Sistem Multi-bahasa (i18n)',
      cost: 2000000,
      weeks: 1,
      description: 'Dukungan bahasa Indonesia, Inggris, Mandarin.',
    },
    {
      id: 'chat',
      name: 'Real-time Chat & Notifikasi',
      cost: 5000000,
      weeks: 2,
      description: 'Komunikasi langsung instan menggunakan WebSocket.',
    },
  ];

  const scales: Scale[] = [
    {
      id: 'small',
      name: 'Small (Standard)',
      multiplier: 1.0,
      weeksExtra: 0,
      description: 'Fitur terdefinisi rapi, alur kerja standar.',
    },
    {
      id: 'medium',
      name: 'Medium (Custom)',
      multiplier: 1.3,
      weeksExtra: 2,
      description: 'Lebih banyak halaman, kustomisasi visual lanjut.',
    },
    {
      id: 'large',
      name: 'Large (Complex)',
      multiplier: 1.7,
      weeksExtra: 4,
      description: 'Integrasi database kompleks, keamanan lapis ganda.',
    },
  ];

  // Component States
  const [selectedApp, setSelectedApp] = useState<AppType>(appTypes[0]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedScale, setSelectedScale] = useState<Scale>(scales[0]);

  const [minPrice, setMinPrice] = useState(selectedApp.baseMin);
  const [maxPrice, setMaxPrice] = useState(selectedApp.baseMax);
  const [minWeeks, setMinWeeks] = useState(selectedApp.weeksMin);
  const [maxWeeks, setMaxWeeks] = useState(selectedApp.weeksMax);

  // Smooth ticking price counters
  const [animatedMin, setAnimatedMin] = useState(selectedApp.baseMin);
  const [animatedMax, setAnimatedMax] = useState(selectedApp.baseMax);

  // Recalculate whenever selection changes
  useEffect(() => {
    // 1. Sum up base costs + selected features costs
    const featuresCost = featuresList
      .filter((f) => selectedFeatures.includes(f.id))
      .reduce((sum, f) => sum + f.cost, 0);

    const rawMin = selectedApp.baseMin + featuresCost;
    const rawMax = selectedApp.baseMax + featuresCost;

    // 2. Apply scale multiplier
    const finalMin = Math.round(rawMin * selectedScale.multiplier);
    const finalMax = Math.round(rawMax * selectedScale.multiplier);

    setMinPrice(finalMin);
    setMaxPrice(finalMax);

    // 3. Recalculate timeline weeks
    const featuresWeeks = featuresList
      .filter((f) => selectedFeatures.includes(f.id))
      .reduce((sum, f) => sum + f.weeks, 0);

    const calculatedWeeksMin = Math.round(selectedApp.weeksMin + featuresWeeks + selectedScale.weeksExtra);
    const calculatedWeeksMax = Math.round(selectedApp.weeksMax + featuresWeeks + selectedScale.weeksExtra);

    setMinWeeks(calculatedWeeksMin);
    setMaxWeeks(calculatedWeeksMax);
  }, [selectedApp, selectedFeatures, selectedScale]);

  // Smooth animation effect for counters
  useEffect(() => {
    let startMin = animatedMin;
    let startMax = animatedMax;
    const duration = 400; // ms
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);

      const currentMin = Math.round(startMin + (minPrice - startMin) * ease);
      const currentMax = Math.round(startMax + (maxPrice - startMax) * ease);

      setAnimatedMin(currentMin);
      setAnimatedMax(currentMax);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [minPrice, maxPrice]);

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((fId) => fId !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const formatRupiah = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Compose dynamic WhatsApp URL
  const claimViaWhatsApp = () => {
    const waNumber = '628123456789'; // Official WhatsApp Placeholder
    const selectedFeaturesNames =
      selectedFeatures.length > 0
        ? featuresList
            .filter((f) => selectedFeatures.includes(f.id))
            .map((f) => f.name)
            .join(', ')
        : 'Tidak ada';

    const textMessage = `Halo Zisyahtu Project! Saya ingin mengklaim estimasi biaya proyek saya dari website.

*Rincian Projek:*
- *Tipe Aplikasi:* ${selectedApp.name} (${selectedApp.icon})
- *Fitur Tambahan:* ${selectedFeaturesNames}
- *Skala Projek:* ${selectedScale.name}
- *Estimasi Biaya:* ${formatRupiah(minPrice)} - ${formatRupiah(maxPrice)}
- *Estimasi Durasi:* ${minWeeks} - ${maxWeeks} Minggu

Mohon informasi lebih lanjut untuk memulai sesi konsultasi gratis. Terima kasih!`;

    const encodedText = encodeURIComponent(textMessage);
    const waUrl = `https://api.whatsapp.com/send?phone=${waNumber}&text=${encodedText}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="estimate" className="py-24 bg-brand-deep relative overflow-hidden">
      {/* Background neon orbs */}
      <div className="hidden md:block absolute top-1/3 left-10 w-96 h-96 rounded-full bg-brand-teal/5 blur-[120px] -z-10 animate-aurora-slow" />
      <div className="hidden md:block absolute bottom-10 right-10 w-96 h-96 rounded-full bg-brand-purple/5 blur-[120px] -z-10 animate-aurora-delay" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-brand-teal uppercase">
            <Calculator className="w-3.5 h-3.5" />
            Interactive Tool
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight font-sans">
            Kalkulator Estimasi Biaya Transparan
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-sans font-light">
            Hitung perkiraan biaya dan durasi pengerjaan proyek Anda secara instan dan mandiri. Sesuaikan dengan fungsionalitas dan skala bisnis yang Anda butuhkan.
          </p>
        </div>

        {/* Main Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inputs Section */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Step 1: App Type */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-teal/15 text-brand-teal text-xs font-bold flex items-center justify-center border border-brand-teal/20">
                  1
                </span>
                Pilih Tipe Aplikasi Web
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {appTypes.map((type) => {
                  const isSelected = selectedApp.id === type.id;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setSelectedApp(type)}
                      className={`text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                        isSelected
                          ? 'bg-brand-card border-brand-teal shadow-glow-teal'
                          : 'bg-brand-surface/45 border-white/5 hover:border-white/15'
                      }`}
                    >
                      <span className="text-3xl p-1 bg-white/5 rounded-xl border border-white/5 shadow-inner">
                        {type.icon}
                      </span>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-white font-sans">{type.name}</h4>
                        <p className="text-xs text-gray-400 font-light leading-relaxed">{type.description}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Features List */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-teal/15 text-brand-teal text-xs font-bold flex items-center justify-center border border-brand-teal/20">
                  2
                </span>
                Pilih Fitur Tambahan (Add-ons)
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {featuresList.map((feature) => {
                  const isChecked = selectedFeatures.includes(feature.id);
                  return (
                    <button
                      key={feature.id}
                      onClick={() => toggleFeature(feature.id)}
                      className={`text-left p-5 rounded-2xl border transition-all duration-300 flex items-start justify-between gap-4 ${
                        isChecked
                          ? 'bg-brand-card border-brand-purple shadow-glow-purple'
                          : 'bg-brand-surface/45 border-white/5 hover:border-white/10'
                      }`}
                    >
                      <div className="space-y-1.5 pr-2">
                        <h4 className="text-sm font-bold text-white font-sans flex items-center gap-2">
                          {feature.name}
                        </h4>
                        <p className="text-xs text-gray-400 font-light leading-relaxed">{feature.description}</p>
                        <span className="inline-block text-[10px] font-bold text-brand-purple bg-brand-purple/10 px-2 py-0.5 rounded-md border border-brand-purple/20">
                          +{formatRupiah(feature.cost)}
                        </span>
                      </div>
                      
                      {/* Checkbox circle indicator */}
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all duration-200 flex-shrink-0 mt-0.5 ${
                          isChecked
                            ? 'bg-brand-purple border-transparent text-white'
                            : 'bg-white/5 border-white/10 text-transparent'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5 stroke-[3px]" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Project Scale */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-teal/15 text-brand-teal text-xs font-bold flex items-center justify-center border border-brand-teal/20">
                  3
                </span>
                Tentukan Skala & Kompleksitas Projek
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {scales.map((scale) => {
                  const isSelected = selectedScale.id === scale.id;
                  return (
                    <button
                      key={scale.id}
                      onClick={() => setSelectedScale(scale)}
                      className={`text-left p-5 rounded-2xl border transition-all duration-300 ${
                        isSelected
                          ? 'bg-brand-card border-brand-teal shadow-glow-teal'
                          : 'bg-brand-surface/45 border-white/5 hover:border-white/10'
                      }`}
                    >
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-white font-sans">{scale.name}</h4>
                        <p className="text-xs text-gray-400 font-light leading-relaxed">{scale.description}</p>
                        <div className="flex items-center gap-1.5 text-[10px] font-semibold text-brand-teal">
                          <span>Multiplier: {scale.multiplier}x</span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Dynamic Output Sticky Panel */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="w-full glass-panel rounded-3xl border border-white/10 p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-brand-teal/10 blur-xl pointer-events-none" />

              <h3 className="text-base font-bold text-white tracking-tight uppercase border-b border-white/5 pb-4 font-sans">
                Estimasi Penawaran Anda
              </h3>

              {/* Price Panel */}
              <div className="space-y-1.5">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest block">
                  Rentang Biaya (IDR)
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none font-mono">
                  {formatRupiah(animatedMin)}
                </div>
                <div className="text-xs font-semibold text-gray-500">sampai</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-brand-teal tracking-tight leading-none font-mono">
                  {formatRupiah(animatedMax)}
                </div>
              </div>

              {/* Duration Panel */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">
                    Estimasi Durasi
                  </span>
                  <span className="text-sm font-bold text-white font-sans">
                    {minWeeks} - {maxWeeks} Minggu
                  </span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-brand-purple/10 flex items-center justify-center border border-brand-purple/20">
                  <Clock className="w-5 h-5 text-brand-purple" />
                </div>
              </div>

              {/* Delivery list items guarantee */}
              <div className="space-y-3 pt-2">
                <h4 className="text-[10px] uppercase font-extrabold tracking-wider text-gray-500">
                  Paket Sudah Termasuk:
                </h4>
                <ul className="space-y-2.5">
                  <li className="flex items-center gap-2.5 text-xs text-gray-300 font-sans font-light">
                    <span className="w-1 h-1 rounded-full bg-brand-teal" />
                    Garansi Performa Lighthouse 95+
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-gray-300 font-sans font-light">
                    <span className="w-1 h-1 rounded-full bg-brand-teal" />
                    SEO Optimization (OpenGraph Meta)
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-gray-300 font-sans font-light">
                    <span className="w-1 h-1 rounded-full bg-brand-teal" />
                    Handover Source Code & Aset Figma
                  </li>
                </ul>
              </div>

              {/* WhatsApp CTA Action */}
              <button
                onClick={claimViaWhatsApp}
                className="w-full glow-btn bg-gradient-teal-purple hover:opacity-95 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 text-sm transition-all duration-300 shadow-glow-teal hover:scale-[1.01]"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Klaim Estimasi via WhatsApp
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-gray-500 text-center leading-relaxed">
                *Estimasi ini bersifat indikasi awal. Konsultasikan visi Anda secara gratis untuk mendapatkan proposal spesifikasi teknis final.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
