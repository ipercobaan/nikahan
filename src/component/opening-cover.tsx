import { motion } from 'motion/react';
import { MailOpen, Calendar, HelpCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

interface OpeningCoverProps {
  onOpen: () => void;
}

export default function OpeningCover({ onOpen }: OpeningCoverProps) {
  const [recipient, setRecipient] = useState<string>('Tamu Undangan');

  useEffect(() => {
    // Look for "?to=..." in url to customize recipient name
    const params = new URLSearchParams(window.location.search);
    const toParam = params.get('to');
    if (toParam) {
      setRecipient(decodeURIComponent(toParam));
    }
  }, []);

  return (
    <motion.div
      id="opening-cover"
      initial={{ y: 0 }}
      exit={{ y: '-100%', opacity: 0 }}
      transition={{ type: 'spring', damping: 25, stiffness: 80, duration: 0.8 }}
      className="absolute inset-0 z-[100] flex flex-col items-center justify-between bg-cream-100 p-6 text-charcoal-500 overflow-hidden bg-grain"
    >
      {/* Decorative leafy/organic vector lines or frames - very kalcer and pop */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-sand-100 to-transparent pointer-events-none opacity-50" />
      
      {/* Upper Border Accent */}
      <div className="w-full max-w-md flex justify-between items-center pt-4 border-b border-sand-300 pb-4">
        <span className="font-mono text-xs tracking-[0.2em] text-sage-500 font-medium">WEDDING INVITATION</span>
        <span className="font-mono text-xs tracking-widest text-[#a89d8d]">07 · 06 · 2026</span>
      </div>

      {/* Main Poster Body */}
      <div className="w-full max-w-md flex-1 flex flex-col items-center justify-center py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-full border-2 border-charcoal-500 bg-[#FCFAF5] p-8 sm:p-10 rounded-[2.5rem] flex flex-col items-center text-center shadow-[8px_8px_0px_0px_rgba(45,41,38,1)] relative overflow-hidden group"
        >
          {/* Subtle pop-culture geometrical decoration and organic leafy lines */}
          <div className="absolute -top-10 -left-10 w-24 h-24 rounded-full bg-terracotta-200/40 pointer-events-none" />
          <div className="absolute -bottom-14 -right-14 w-36 h-36 rounded-full bg-sage-200/40 pointer-events-none" />
          
          {/* Pop-Cultural Sticker Badge 1 */}
          <div className="absolute top-4 right-4 rotate-12 bg-sage-500 text-cream-50 font-mono text-[8px] font-bold tracking-widest px-2.5 py-1 rounded-md border border-charcoal-500 shadow-[1px_1px_0px_0px_rgba(45,41,38,1)] uppercase select-none pointer-events-none transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
            HALAL ✦
          </div>

          {/* Pop-Cultural Sticker Badge 2 */}
          <div className="absolute bottom-4 left-4 -rotate-6 bg-terracotta-500 text-cream-50 font-mono text-[8px] font-bold tracking-widest px-2.5 py-1 rounded-md border border-charcoal-500 shadow-[1px_1px_0px_0px_rgba(45,41,38,1)] uppercase select-none pointer-events-none transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12">
            SAMPURASUN ✦
          </div>
          
          <span className="font-mono text-[10px] tracking-[0.3em] text-sage-600 mb-6 uppercase font-bold relative z-10">
            ✦ Undangan Pernikahan ✦
          </span>
          
          <div className="font-serif text-3xl sm:text-4xl text-charcoal-500 leading-tight space-y-2 mb-1 relative z-10">
            <h1 className="tracking-tight font-extrabold text-charcoal-800">Faisal Andreansyah</h1>
            <div className="text-terracotta-500 font-serif italic text-3xl my-1 font-light">&amp;</div>
            <h1 className="tracking-tight font-bold text-charcoal-850">Nisa Meyliani</h1>
          </div>
          
          {/* Minimal dividing dots */}
          <div className="flex items-center gap-1.5 my-6 relative z-10">
            <span className="w-2.5 h-2.5 rounded-full bg-terracotta-500 border border-charcoal-500" />
            <span className="w-16 h-[2px] bg-charcoal-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-sage-500 border border-charcoal-500" />
          </div>
 
          <div className="mb-8 w-full relative z-10">
            <span className="block font-mono text-[10px] tracking-widest text-[#5A6351] uppercase mb-2 font-bold">Kepada Yth. Bapak/Ibu/Saudara/i</span>
            <div className="bg-cream-100 border-2 border-charcoal-500 rounded-2xl py-3.5 px-5 shadow-[4px_4px_0px_0px_rgba(45,41,38,1)] transform transition-transform group-hover:scale-[1.01]">
              <span className="font-sans font-extrabold text-sm sm:text-base text-charcoal-500 tracking-wide block">
                {recipient}
              </span>
            </div>
            <span className="block font-mono text-[9px] text-[#8C8475] mt-3 italic font-semibold">*Mohon maaf bila ada kesalahan penulisan nama/gelar</span>
          </div>
 
          <motion.button
            id="btn-buka-undangan"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97, y: 1 }}
            onClick={onOpen}
            className="flex items-center justify-center gap-2 px-6 py-4 bg-terracotta-500 hover:bg-terracotta-600 text-cream-50 font-sans font-extrabold text-xs tracking-widest rounded-xl transition-all border-2 border-charcoal-500 shadow-[4px_4px_0px_0px_rgba(45,41,38,1)] hover:shadow-[1px_1px_0px_0px_rgba(45,41,38,1)] cursor-pointer uppercase"
          >
            <MailOpen className="w-4 h-4 text-cream-50" />
            <span>BUKA UNDANGAN</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Understated cultural footer */}
      <div className="w-full max-w-md text-center border-t border-sand-300 pt-4 pb-2">
        <span className="font-mono text-[10px] tracking-widest text-sage-600 uppercase">
          Cipageran · Cimahi Utara
        </span>
      </div>
    </motion.div>
  );
}
