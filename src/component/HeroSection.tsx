import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Heart, Clock, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const weddingDate = new Date('2026-06-07T12:00:00+07:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isOver: false,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference <= 0) {
        setTimeLeft(prev => ({ ...prev, isOver: true }));
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isOver: false });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [weddingDate]);

  return (
    <section id="beranda" className="relative w-full py-12 px-4 flex flex-col items-center justify-center overflow-hidden border-b-2 border-charcoal-500 bg-grain">
      
      {/* Outer Bento Container (Stacked for perfectly clean mobile preview) */}
      <div className="w-full flex flex-col gap-6">
        
        {/* CARD 1: Main Name Card (Rust/Terracotta background, white text) */}
        <div className="w-full bg-terracotta-500 rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between text-cream-50 border-2 border-charcoal-500 shadow-[6px_6px_0px_0px_rgba(45,41,38,1)] hover:shadow-[10px_10px_0px_0px_rgba(45,41,38,1)] hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0.5 active:translate-y-0.5 transition-all duration-300 min-h-[300px] relative overflow-hidden group cursor-pointer">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-terracotta-600 rounded-full opacity-50 pointer-events-none transition-transform duration-700 group-hover:scale-110" />
          
          {/* Custom Pop Stamp / Stamp Sticker element for Kalcer Vibe */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 rotate-12 w-20 h-20 border-4 border-dashed border-cream-200/20 rounded-full flex items-center justify-center font-mono text-[9px] text-cream-200/40 uppercase font-extrabold tracking-widest pointer-events-none select-none">
            FAISAL ✦ NISA
          </div>

          <div className="flex justify-between items-center z-10">
            <span className="px-3 py-1 border-2 border-cream-100 rounded-full text-[9px] font-mono tracking-widest uppercase font-bold text-cream-100 bg-charcoal-500/10 backdrop-blur-xs">
              THE WEDDING OF
            </span>
            <span className="text-lg font-serif italic text-cream-200">07 · 06 · 2026</span>
          </div>

          <div className="my-6 z-10">
            <h1 className="text-4xl sm:text-5xl font-serif leading-tight tracking-tight text-cream-50">
              Faisal &amp; <br />
              <span className="ml-6 italic text-sand-200">Nisa</span>
            </h1>
          </div>

          <div className="flex justify-between items-center z-10 pt-4 border-t border-cream-100/20">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sand-200 animate-pulse" />
              <p className="text-[9px] font-mono uppercase tracking-widest text-cream-200 font-bold">Cipageran, Cimahi</p>
            </div>
            <p className="text-[9px] font-mono uppercase tracking-widest text-cream-200 opacity-80 font-bold">#FaisalNisaDay</p>
          </div>
        </div>

        {/* CARD 2: Pop Graphic Icon Card (Sand background, custom vector ring and concentric ripples) */}
        <div className="w-full bg-sand-300 rounded-[2rem] p-6 border-2 border-charcoal-500 shadow-[6px_6px_0px_0px_rgba(45,41,38,1)] hover:shadow-[10px_10px_0px_0px_rgba(45,41,38,1)] hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0.5 active:translate-y-0.5 transition-all duration-300 flex flex-col justify-between items-center text-center relative overflow-hidden min-h-[220px] group cursor-pointer">
          
          {/* Concentric Circle Ripples exactly as shown in screenshot */}
          <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none select-none">
            <div className="w-[260px] h-[260px] border border-charcoal-500/10 rounded-full flex items-center justify-center">
              <div className="w-[190px] h-[190px] border-2 border-charcoal-500/15 rounded-full flex items-center justify-center">
                <div className="w-[120px] h-[120px] border border-charcoal-500/10 rounded-full" />
              </div>
            </div>
          </div>

          {/* Handdrawn Kalcer Leaf Sticker on the Left of the Card */}
          <div className="absolute left-6 top-[45%] -translate-y-1/2 -rotate-12 w-10 h-10 pointer-events-none select-none transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#5A6351]/80">
              <path fill="none" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" d="M35,82 C42,65 52,48 62,25" />
              <path fill="currentColor" stroke="currentColor" strokeWidth="1" d="M36,65 C24,62 18,50 26,46 C34,42 42,48 41,58 Z" />
              <path fill="currentColor" stroke="currentColor" strokeWidth="1" d="M46,48 C38,36 36,26 45,22 C54,18 56,28 51,41 Z" />
              <path fill="currentColor" stroke="currentColor" strokeWidth="1" d="M55,30 C49,18 52,8 60,6 C68,4 68,14 61,25 Z" />
            </svg>
          </div>

          <span className="font-mono text-[9px] tracking-widest text-[#5C5346]/80 font-bold uppercase relative z-10">
            CULTURAL UNION
          </span>

          <div className="my-auto py-1 z-10 flex flex-col items-center justify-center">
            {/* Elegant Custom Vector Ring Icon as shown in screenshot */}
            <div className="relative mb-2 transition-transform duration-500 group-hover:scale-110">
              <svg viewBox="0 0 108 108" className="w-20 h-20 filter drop-shadow-[0_4px_8px_rgba(45,41,38,0.15)]">
                {/* Ring Hoop with custom thick glossy lavender band */}
                <circle cx="54" cy="62" r="19" fill="none" stroke="#C4B5FD" strokeWidth="6.5" />
                <circle cx="54" cy="62" r="19" fill="none" stroke="#FAF5FF" strokeWidth="1.5" strokeDasharray="30 15" opacity="0.8" />
                
                {/* Gem Metal Setting */}
                <path d="M48,39 L60,39 L57,43 L51,43 Z" fill="#9061F9" stroke="rgba(45,41,38,0.25)" strokeWidth="1" />
                
                {/* Glowing Blue Diamond Gem */}
                <polygon points="54,23 66,33 60,39 48,39 42,33" fill="#38BDF8" stroke="#0284C7" strokeWidth="1.5" strokeLinejoin="round" />
                
                {/* Gem Face Facets for Pop sheen */}
                <polygon points="54,23 54,39 48,39" fill="#0EA5E9" opacity="0.4" />
                <polygon points="54,23 54,39 60,39" fill="#7DD3FC" opacity="0.3" />
                <polygon points="54,23 48,39 42,33" fill="#0284C7" opacity="0.2" />
                <polygon points="54,23 60,39 66,33" fill="#E0F2FE" opacity="0.4" />
              </svg>
            </div>
            
            <p className="font-serif italic text-xl text-[#2F2A25] font-bold">Walimatul &apos;Ursy</p>
          </div>

          <span className="font-mono text-[9px] tracking-wider text-charcoal-500 bg-[#FCFAF5] border border-charcoal-500 px-3.5 py-1 rounded-full relative z-10 font-bold shadow-[2px_2px_0px_0px_rgba(45,41,38,1)]">
            Panganten Sunda
          </span>
        </div>

        {/* CARD 3: Countdown Widget (Sage Green background) */}
        <div className="w-full bg-sage-500 text-cream-50 rounded-[2.2rem] p-6 border-2 border-charcoal-550 shadow-[6px_6px_0px_0px_rgba(45,41,38,1)] hover:shadow-[10px_10px_0px_0px_rgba(45,41,38,1)] hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0.5 active:translate-y-0.5 transition-all duration-300 flex flex-col items-center justify-between gap-4 relative overflow-hidden cursor-pointer group">
          <div className="absolute top-0 right-0 w-24 h-full bg-sage-600 rounded-l-full opacity-30 pointer-events-none transition-transform duration-500 group-hover:translate-x-2" />

          {/* Label info */}
          <div className="flex items-center gap-3.5 z-10 text-center">
            <div className="w-10 h-10 rounded-2xl bg-cream-100/10 border border-cream-100/20 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-cream-100 animate-spin" style={{ animationDuration: '12s' }} />
            </div>
            <div className="text-left">
              <h3 className="font-mono text-[10px] tracking-wider uppercase font-bold text-cream-100">
                MENUNGGU HARI BAHAGIA
              </h3>
              <p className="font-serif text-xs italic text-cream-200">
                Wanci numutkeun rarancang akad nikah
              </p>
            </div>
          </div>

          {/* Countdown Boxes */}
          <div className="z-10 w-full">
            {timeLeft.isOver ? (
              <div className="text-center font-serif text-lg text-cream-100 font-bold tracking-wide bg-charcoal-500/10 py-2.5 px-4 rounded-xl border-2 border-cream-100">
                Hari bahagia telah tiba! ✨
              </div>
            ) : (
              <div className="grid grid-cols-4 gap-2.5 max-w-sm mx-auto">
                {[
                  { label: 'Hari', val: timeLeft.days },
                  { label: 'Jam', val: timeLeft.hours },
                  { label: 'Menit', val: timeLeft.minutes },
                  { label: 'Detik', val: timeLeft.seconds },
                ].map((t, idx) => (
                  <div
                    key={idx}
                    className="bg-cream-100 text-charcoal-500 border-2 border-charcoal-500 rounded-[1.2rem] py-2.5 px-1 flex flex-col items-center justify-center shadow-[3px_3px_0px_0px_rgba(45,41,38,1)] transition-transform duration-300 hover:scale-105"
                  >
                    <span className="font-serif text-base sm:text-l font-bold leading-none mb-0.5 text-charcoal-800">
                      {String(t.val).padStart(2, '0')}
                    </span>
                    <span className="font-mono text-[8px] tracking-wider text-sage-500 font-bold uppercase">
                      {t.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
