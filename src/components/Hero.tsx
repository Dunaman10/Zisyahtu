import { ArrowRight, Server, Zap, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center bg-brand-deep overflow-hidden"
    >
      {/* Dynamic Background Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-brand-teal/15 blur-[80px] sm:blur-[120px] animate-aurora-slow -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-brand-purple/15 blur-[80px] sm:blur-[120px] animate-aurora-delay -z-10" />

      {/* Cyber Grid Pattern */}
      <div className="absolute inset-0 bg-grid-cyber opacity-[0.4] -z-20" />
      
      {/* Dot Matrix Pattern */}
      <div className="absolute inset-0 bg-dot-matrix opacity-[0.25] -z-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-8">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-teal/10 border border-brand-teal/20 text-xs font-semibold tracking-wider text-brand-teal uppercase animate-pulse mx-auto lg:mx-0">
              <Zap className="w-3.5 h-3.5" />
              Software Engineering Agency
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-sans">
              We Build <span className="text-gradient-teal-purple">Fast, Scalable,</span> and Impactful Web Applications.
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans font-light">
              Didirikan oleh 3 co-founder berpengalaman di bidang rekayasa perangkat lunak, 
              kami mentransformasikan ide bisnis Anda menjadi sistem web berkinerja tinggi. 
              Fokus kami: kode yang bersih, performa luar biasa, dan desain visual kelas premium.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#estimate"
                className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-teal-purple text-white text-base font-bold transition-all duration-300 shadow-glow-teal hover:opacity-95 hover:scale-[1.02]"
              >
                Mulai Projek Anda
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 hover:border-brand-teal/40 hover:bg-white/5 text-gray-300 hover:text-white text-base font-semibold transition-all duration-300"
              >
                Lihat Layanan
              </a>
            </div>

            {/* Floating Trust Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/5 max-w-md mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start gap-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">99%</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">Uptime Guarantees</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-brand-teal tracking-tight">&lt;1s</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">Load Speed</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-brand-purple tracking-tight">100%</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">Custom Code</span>
              </div>
            </div>
          </div>

          {/* Interactive Code Mockup IDE (Premium Visual Asset) */}
          <div className="lg:col-span-5 w-full flex justify-center animate-float">
            <div className="w-full max-w-md rounded-2xl border border-white/10 bg-brand-surface/75 backdrop-blur-xl overflow-hidden shadow-2xl">
              {/* Window Header */}
              <div className="px-4 py-3 bg-brand-deep border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                  <div className="w-3 h-3 rounded-full bg-[#10B981]" />
                </div>
                <div className="text-xs text-gray-500 font-mono">ZisyahtuEngine.tsx</div>
                <div className="w-8" />
              </div>
              
              {/* Code Panel */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-[#9CA3AF] bg-[#0c1220]">
                <div>
                  <span className="text-[#F43F5E]">const</span>{' '}
                  <span className="text-[#3B82F6]">ZisyahtuEngine</span> ={' '}
                  <span className="text-[#EF4444]">()</span>{' '}
                  <span className="text-[#F43F5E]">&rArr;</span>{' '}
                  <span className="text-[#EF4444]">&#123;</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#F43F5E]">const</span>{' '}
                  <span className="text-[#EAB308]">founders</span> = [<span className="text-[#10B981]">'Co-Founders 3'</span>];
                </div>
                <div className="pl-4">
                  <span className="text-[#F43F5E]">const</span>{' '}
                  <span className="text-[#EAB308]">coreStack</span> = [<span className="text-[#06B6D4]">'React'</span>, <span className="text-[#06B6D4]">'Tailwind'</span>];
                </div>
                <div className="pl-4 mt-2 text-gray-600">// Core capabilities setup</div>
                <div className="pl-4">
                  <span className="text-[#F43F5E]">return</span> <span className="text-[#EF4444]">(</span>
                </div>
                <div className="pl-8 text-[#A855F7]">&lt;<span className="text-[#EC4899]">Agency</span></div>
                <div className="pl-12">
                  <span className="text-[#06B6D4]">performance</span>=
                  <span className="text-[#10B981]">"UltraFast"</span>
                </div>
                <div className="pl-12">
                  <span className="text-[#06B6D4]">design</span>=
                  <span className="text-[#10B981]">"PremiumUI"</span>
                </div>
                <div className="pl-12">
                  <span className="text-[#06B6D4]">scale</span>=
                  <span className="text-[#10B981]">"Enterprise"</span>
                </div>
                <div className="pl-8 text-[#A855F7]">&gt;</div>
                <div className="pl-12 text-[#9CA3AF]">
                  &lt;<span className="text-[#EAB308]">CleanCode</span> /&gt;
                </div>
                <div className="pl-12 text-[#9CA3AF]">
                  &lt;<span className="text-[#EAB308]">HighSecurity</span> /&gt;
                </div>
                <div className="pl-8 text-[#A855F7]">&lt;/<span className="text-[#EC4899]">Agency</span>&gt;</div>
                <div className="pl-4 text-[#EF4444]">);</div>
                <div><span className="text-[#EF4444]">&#125;;</span></div>
                <div className="mt-4">
                  <span className="text-[#F43F5E]">export default</span>{' '}
                  <span className="text-[#3B82F6]">ZisyahtuEngine</span>;
                </div>
              </div>

              {/* IDE Info Bar */}
              <div className="px-4 py-2.5 bg-brand-deep/80 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500 font-mono">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1"><Server className="w-3 h-3 text-[#10B981]" /> Git: main*</span>
                  <span className="flex items-center gap-1"><Shield className="w-3 h-3 text-brand-teal" /> Build: green</span>
                </div>
                <span>Ln 15, Col 24</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
