import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function CoupleSection() {
  return (
    <section id="mempelai" className="relative w-full py-12 px-4 md:py-16 bg-cream-100 flex flex-col items-center overflow-hidden border-b-2 border-charcoal-500">
      
      <div className="w-full max-w-5xl flex flex-col items-center">
        
        {/* Bento Card 1: Qur'an or Marriage Quote (cream-50 background, black border, elegant typography) */}
        <div className="w-full bg-[#FCFAF5] border-2 border-charcoal-500 rounded-[2rem] p-8 sm:p-10 mb-8 text-center shadow-[6px_6px_0px_0px_rgba(45,41,38,1)] hover:shadow-[10px_10px_0px_0px_rgba(45,41,38,1)] hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 transition-all duration-300 max-w-4xl relative overflow-hidden group cursor-pointer">
          <div className="absolute top-0 left-0 w-24 h-24 bg-sage-50 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2" />
          
          <span className="font-mono text-[9px] sm:text-[10px] tracking-widest text-sage-600 uppercase block mb-3 font-extrabold">
            ✦ KATA MUTIARA PERNIKAHAN ✦
          </span>
          <p className="font-serif italic text-sm sm:text-base md:text-lg text-charcoal-500 leading-relaxed max-w-2xl mx-auto z-10 relative">
            &ldquo;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.&rdquo;
          </p>
          <div className="font-mono text-[10px] tracking-widest text-[#5A6351] font-bold mt-4 z-10 relative bg-cream-100/60 inline-block px-3 py-1 rounded-md border border-charcoal-500/10">
            QS. AR-RUM: 21
          </div>
        </div>

        {/* The Couple Details in Grid format (Always stacked for pristine mobile experience) */}
        <div className="grid grid-cols-1 gap-6 w-full">
          
          {/* BRIDE - Nisa */}
          <div
            id="mempelai-wanita"
            className="flex flex-col items-center justify-center p-8 bg-white border-2 border-charcoal-500 rounded-[2rem] shadow-[6px_6px_0px_0px_rgba(45,41,38,1)] hover:shadow-[10px_10px_0px_0px_rgba(45,41,38,1)] hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0.5 active:translate-y-0.5 transition-all duration-300 relative overflow-hidden min-h-[320px] group cursor-pointer"
          >
            {/* Pop-Cultural Sticker */}
            <div className="absolute top-4 right-4 rotate-12 bg-terracotta-100 text-terracotta-700 font-mono text-[8px] font-bold tracking-widest px-2.5 py-1 rounded-md border border-charcoal-500 shadow-[1px_1px_0px_0px_rgba(45,41,38,1)] uppercase transition-transform duration-300 group-hover:scale-115 group-hover:rotate-6">
              MOJANG ✦
            </div>

            {/* Elegant botanical profile icon / placeholder - very hipster and aesthetic */}
            <div className="w-20 h-20 rounded-full bg-sage-100 mb-6 flex items-center justify-center border-2 border-charcoal-500 shadow-[3px_3px_0px_0px_rgba(45,41,38,1)] overflow-hidden">
              <svg viewBox="0 0 100 100" className="w-12 h-12 text-sage-500 transition-transform duration-700 group-hover:scale-110">
                {/* Handcrafted artistic leaf plant */}
                <path fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" 
                  d="M50,85 C50,85 50,45 50,15 M50,45 C50,45 25,35 25,20 C25,35 45,45 45,45 M50,60 C50,60 75,50 75,35 C75,50 55,60 55,60 M50,30 C50,30 30,20 30,5 C30,20 48,30 48,30" />
              </svg>
            </div>

            <span className="font-mono text-[10px] tracking-[0.25em] text-terracotta-500 font-bold uppercase mb-2">
              PANGANTEN ISTRI
            </span>
            
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-charcoal-500 mb-4 tracking-tight text-center">
              Nisa Meyliani
            </h2>
            
            <div className="w-16 h-[2px] bg-charcoal-500 mb-4" />

            <div className="text-center font-sans">
              <p className="font-mono text-[9px] tracking-wider text-charcoal-500/50 uppercase mb-2 font-bold">Putri dari</p>
              <p className="text-charcoal-500 font-bold text-sm sm:text-base leading-relaxed">
                Bapa Supriatna
              </p>
              <span className="text-xs text-charcoal-500/60 font-medium block my-1">dengan</span>
              <p className="text-charcoal-500 text-xs sm:text-sm leading-relaxed font-bold">
                <span className="text-charcoal-600 text-xs font-bold bg-[#FAF8F5] border border-charcoal-500 py-0.5 px-2 rounded-lg mr-1.5 shadow-[1px_1px_0px_0px_rgba(45,41,38,1)]">Alm</span>
                Ibu Cucu <span className="text-charcoal-500/60 font-light mx-1">dan</span> Ibu Winarti
              </p>
            </div>
          </div>

          {/* GROOM - Faisal */}
          <div
            id="mempelai-pria"
            className="flex flex-col items-center justify-center p-8 bg-white border-2 border-charcoal-500 rounded-[2rem] shadow-[6px_6px_0px_0px_rgba(45,41,38,1)] hover:shadow-[10px_10px_0px_0px_rgba(45,41,38,1)] hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0.5 active:translate-y-0.5 transition-all duration-300 relative overflow-hidden min-h-[320px] group cursor-pointer"
          >
            {/* Pop-Cultural Sticker */}
            <div className="absolute top-4 right-4 -rotate-12 bg-sage-100 text-sage-700 font-mono text-[8px] font-bold tracking-widest px-2.5 py-1 rounded-md border border-charcoal-500 shadow-[1px_1px_0px_0px_rgba(45,41,38,1)] uppercase transition-transform duration-300 group-hover:scale-115 group-hover:-rotate-6">
              RENGRENGAN ✦
            </div>

            {/* Elegant botanical profile icon / placeholder - very hipster and aesthetic */}
            <div className="w-20 h-20 rounded-full bg-terracotta-100 mb-6 flex items-center justify-center border-2 border-charcoal-500 shadow-[3px_3px_0px_0px_rgba(45,41,38,1)] overflow-hidden">
              <svg viewBox="0 0 100 100" className="w-12 h-12 text-terracotta-500 transition-transform duration-700 group-hover:scale-110">
                {/* Handcrafted artistic branch */}
                <path fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" 
                  d="M50,85 C50,65 50,30 50,15 M50,55 C50,55 30,45 35,30 C40,35 48,50 48,50 M50,35 C50,35 70,25 65,10 C60,15 52,30 52,30" />
              </svg>
            </div>

            <span className="font-mono text-[10px] tracking-[0.25em] text-sage-500 font-bold uppercase mb-2">
              PANGANTEN LAKI-LAKI
            </span>
            
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-charcoal-500 mb-4 tracking-tight text-center">
              Faisal Andreansyah Suhara
            </h2>
            
            <div className="w-16 h-[2px] bg-charcoal-500 mb-4" />

            <div className="text-center font-sans">
              <p className="font-mono text-[9px] tracking-wider text-charcoal-500/50 uppercase mb-2 font-bold">Putra dari</p>
              <p className="text-charcoal-500 font-bold text-sm sm:text-base leading-relaxed">
                Bapa Agus Suhara
              </p>
              <span className="text-xs text-charcoal-500/60 font-medium block my-1">dan</span>
              <p className="text-charcoal-500 text-xs sm:text-sm leading-relaxed font-bold">Ibu Romlah</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
