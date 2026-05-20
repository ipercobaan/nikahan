import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Heart, Calendar, Users, MapPin, Music, Volume2, VolumeX, Code } from 'lucide-react';
import OpeningCover from './components/OopeningCover';
import AudioPlayer from './components/AaudioPlayer';
import HeroSection from './components/HeroSection';
import CoupleSection from './components/CoupleSection';
import EventSection from './components/EventSection';
import RsvpSection from './components/RsvpSection';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Lazy initialize standard audio stream
    audioRef.current = new Audio('https://drive.google.com/uc?export=download&id=1_pM4YS9FZsse9r9rtSGoZEorMivlqpff');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.45;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.play().catch(err => {
        console.log('Autoplay blocked by browser. User needs to tap further.', err);
      });
    }
  };

  const handleToggleMusic = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(err => console.log(err));
      setIsPlaying(true);
    }
  };

  // Minimal and stylish persistent anchor bar at the bottom center of the screen
  const navItems = [
    { label: 'Beranda', icon: <Heart className="w-4 h-4" />, target: 'beranda' },
    { label: 'Mempelai', icon: <Users className="w-4 h-4" />, target: 'mempelai' },
    { label: 'Acara', icon: <MapPin className="w-4 h-4" />, target: 'acara' },
    { label: 'RSVP', icon: <Calendar className="w-4 h-4" />, target: 'rsvp' },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-sand-200 flex justify-center items-start overflow-x-hidden antialiased relative">
      {/* Background decorations on desktop */}
      <div className="hidden lg:block fixed left-10 top-12 max-w-xs text-left text-charcoal-500/40 space-y-2 pointer-events-none font-mono z-0 selection:bg-transparent">
        <p className="text-xs uppercase tracking-[0.25em] font-bold text-terracotta-500">Panganten Sunda</p>
        <p className="text-[10px] leading-relaxed">Pernikahan Faisal &amp; Nisa<br />Minggu, 07 Juni 2026<br />Cipageran, Cimahi Utara</p>
      </div>


      {/* Mobile-Dikhususkan Frame */}
      <div className="w-full max-w-md min-h-screen bg-cream-100 bg-grain relative shadow-[0_0_60px_rgba(45,41,38,0.12)] border-x-4 border-charcoal-500 flex flex-col z-10 overflow-hidden">
        
        {/* Front Page Backdrop Overlay (Opening Envelope) */}
        <AnimatePresence>
          {!isOpen && (
            <OpeningCover onOpen={handleOpenInvitation} />
          )}
        </AnimatePresence>

        {/* Main Content (Revealed after Buka Undangan is clicked) */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full flex-1 flex flex-col pb-24"
          >
          {/* Header Navigation Logo */}
          <header className="sticky top-0 z-45 w-full bg-cream-100 border-b-2 border-charcoal-500 py-4 px-6 flex justify-between items-center transition-all">
            <span className="font-serif italic font-bold text-lg tracking-tight text-charcoal-500 hover:scale-105 transition-transform cursor-pointer" onClick={() => scrollToSection('beranda')}>
              Faisal <span className="font-serif italic text-terracotta-500 text-sm font-light">&amp;</span> Nisa
            </span>
          </header>

          {/* Editorial Content Layout */}
          <main className="flex-1 flex flex-col w-full">
            <HeroSection />
            <CoupleSection />
            <EventSection />
            <RsvpSection />
          </main>

          {/* Humble Sincere Footer - Not-lebay footer section */}
          <footer className="w-full py-12 px-6 bg-sand-200 text-center flex flex-col items-center">
            <div className="max-w-md space-y-4">
              <span className="font-mono text-[9px] tracking-[0.3em] text-sage-600 uppercase">
                RASA SYUKUR KAMI
              </span>
              <p className="font-serif italic text-sm text-charcoal-500/80 leading-relaxed max-w-sm mx-auto">
                &ldquo;Merupakan suatu kehormatan dan kebahagiaan yang tak terhingga bagi kami sekeluarga, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada kedua mempelai.&rdquo;
              </p>
              
              <div className="flex items-center justify-center gap-1 my-4">
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500" />
                <span className="w-8 h-[1px] bg-sand-300" />
                <span className="w-1.5 h-1.5 rounded-full bg-sage-500" />
              </div>

              <div className="text-charcoal-500 font-sans space-y-1">
                <p className="text-xs font-semibold">Kami yang berbahagia,</p>
                <p className="text-sm font-serif">Keluarga Besar Faisal &amp; Nisa</p>
              </div>

              <p className="font-mono text-[8.5px] text-[#b3a899] uppercase tracking-widest mt-8">
                ✦ 2026 ✦
              </p>
            </div>
          </footer>

          {/* Equalizer Equalizer & Sticky Music Controller */}
          <AudioPlayer isPlaying={isPlaying} onTogglePlay={handleToggleMusic} />

          {/* Understated Sticky Bottom Navigation Pills - perfect for Single Page App */}
          <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2.5rem)] max-w-[360px] bg-white border-2 border-charcoal-500 rounded-2xl py-1.5 px-3 flex items-center justify-around gap-1.5 shadow-[4px_4px_0px_0px_rgba(45,41,38,1)]">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.target)}
                className="flex flex-col items-center gap-1 text-charcoal-500 hover:text-terracotta-500 transition-colors py-1 px-2 rounded-xl text-center group cursor-pointer"
              >
                <div className="transition-transform duration-300 group-hover:scale-110 font-bold">
                  {item.icon}
                </div>
                <span className="font-mono text-[9px] tracking-wider uppercase font-bold hidden xs:block">
                  {item.label}
                </span>
              </button>
            ))}
          </nav>

        </motion.div>
      )}

      </div>
    </div>
  );
}
