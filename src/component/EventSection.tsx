import { Calendar, Clock, MapPin, Navigation, Map } from 'lucide-react';

export default function EventSection() {
  const mapUrl = "https://www.google.com/maps?ll=-6.846735,107.548156&z=18&t=m&hl=id-ID&gl=US&mapclient=embed&q=6%C2%B050%2741.7%22S+107%C2%B032%2759.4%22E+-6.844903,+107.549819@-6.844903,107.549819";
  
  // Custom reliable iframe map source with exact coordinates and parameters
  const embedMapUrl = "https://maps.google.com/maps?q=-6.844903,107.549819&z=18&hl=id-ID&t=m&output=embed";

  return (
    <section id="acara" className="relative w-full py-12 px-4 bg-cream-150 flex flex-col items-center overflow-hidden bg-grain border-b-2 border-charcoal-500">
      
      <div className="w-full flex flex-col items-center">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <span className="font-mono text-xs tracking-[0.25em] text-terracotta-500 font-extrabold block mb-2 uppercase">
            ✦ AGENDA RESMI ✦
          </span>
          <h2 className="font-serif text-3xl font-bold text-charcoal-500">
            Akad Nikah &amp; Walimah
          </h2>
          <div className="w-16 h-1 bg-charcoal-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Info Grid (Bento Boxes - stacked for optimal mobile UX) */}
        <div className="grid grid-cols-1 gap-6 w-full mb-8">
          
          {/* Card 1: Waktu & Tanggal (White bg, strong charcoal border, pop icon) */}
          <div className="bg-white border-2 border-charcoal-500 p-8 rounded-[2rem] shadow-[6px_6px_0px_0px_rgba(45,41,38,1)] hover:shadow-[10px_10px_0px_0px_rgba(45,41,38,1)] hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0.5 active:translate-y-0.5 transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden group cursor-pointer">
            <div className="absolute top-0 inset-x-0 h-2 bg-terracotta-500" />
            
            {/* Pop-Cultural Stamp Inside */}
            <div className="absolute top-4 right-4 rotate-12 bg-cream-200 text-charcoal-800 font-mono text-[8px] font-extrabold tracking-widest px-2 py-0.5 rounded border border-charcoal-500 select-none pointer-events-none">
              AKAD NIKAH
            </div>

            <div className="w-12 h-12 rounded-xl bg-terracotta-100 border-2 border-charcoal-500 flex items-center justify-center text-terracotta-700 mb-5 shadow-[3px_3px_0px_0px_rgba(45,41,38,1)] group-hover:scale-105 duration-300">
              <Calendar className="w-5 h-5 font-bold" />
            </div>
            
            <span className="font-mono text-[9px] tracking-widest text-sage-600 uppercase mb-1.5 font-bold">HARI &amp; TANGGAL</span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-500 mb-3">Minggu, 7 Juni 2026</h3>
            
            <div className="w-16 h-[2px] bg-charcoal-500 my-2" />
            
            <div className="flex items-center gap-2 text-charcoal-500 mb-2">
              <Clock className="w-4 h-4 text-sage-600 animate-pulse" />
              <span className="font-sans font-bold text-sm">Pukul 10.00 WIB s/d Selesai</span>
            </div>
            <p className="font-sans text-[11px] text-charcoal-500/60 leading-relaxed italic max-w-[200px] font-medium">
              InsyaAllah dinten berkah, miwah kersaning Gusti Allah SWT.
            </p>
          </div>

          {/* Card 2: Tempat & Alamat */}
          <div className="bg-white border-2 border-charcoal-500 p-8 rounded-[2rem] shadow-[6px_6px_0px_0px_rgba(45,41,38,1)] hover:shadow-[10px_10px_0px_0px_rgba(45,41,38,1)] hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0.5 active:translate-y-0.5 transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden group cursor-pointer">
            <div className="absolute top-0 inset-x-0 h-2 bg-sage-500" />
            
            {/* Pop-Cultural Stamp Inside */}
            <div className="absolute top-4 right-4 -rotate-12 bg-sage-100 text-sage-700 font-mono text-[8px] font-extrabold tracking-widest px-2 py-0.5 rounded border border-charcoal-500 select-none pointer-events-none">
              WALIMAH
            </div>

            <div className="w-12 h-12 rounded-xl bg-sage-100 border-2 border-charcoal-500 flex items-center justify-center text-sage-700 mb-5 shadow-[3px_3px_0px_0px_rgba(45,41,38,1)] group-hover:scale-105 duration-300">
              <MapPin className="w-5 h-5 font-bold" />
            </div>
            
            <span className="font-mono text-[9px] tracking-widest text-sage-600 uppercase mb-1.5 font-bold">LOKASI EVENT</span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-500 mb-2">Kediaman Mempelai</h3>
            
            <div className="w-16 h-[2px] bg-charcoal-500 my-2" />
            
            <p className="font-sans text-sm text-charcoal-500 leading-relaxed font-bold mb-1">
              Kp. Warung Muncang, Cipageran
            </p>
            <p className="font-sans text-xs text-charcoal-500/70 max-w-[280px] font-medium leading-relaxed">
              Jl. Kolonel Masturi, Cipageran, Cimahi Utara, Kota Cimahi
            </p>
          </div>

        </div>

        {/* Embedded Map Panel - very robust layout */}
        <div className="w-full bg-[#FCFAF5] border-2 border-charcoal-500 p-4 sm:p-6 rounded-[2rem] shadow-[6px_6px_0px_0px_rgba(45,41,38,1)] hover:shadow-[10px_10px_0px_0px_rgba(45,41,38,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
          <div className="flex items-center justify-between mb-4 px-2">
            <div className="flex items-center gap-2">
              <Map className="w-4 h-4 text-sage-500 font-bold" />
              <span className="font-mono font-bold text-[10px] tracking-wider text-charcoal-500 uppercase">Interactive Map Guide</span>
            </div>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse border border-charcoal-500" />
          </div>

          <div className="w-full h-80 rounded-[1.5rem] overflow-hidden border-2 border-charcoal-500 relative bg-white shadow-[inset_0_2px_10px_rgba(0,0,0,0.06)]">
            <iframe
              title="Google Map Location"
              src={embedMapUrl}
              className="w-full h-full border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Direct CTA button to Google Maps */}
          <div className="mt-5 flex justify-center">
            <a
              id="link-google-maps"
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-4 bg-sage-500 hover:bg-sage-600 text-cream-550 hover:text-cream-50 font-sans font-extrabold text-xs tracking-widest rounded-xl transition-all border-2 border-charcoal-500 shadow-[4px_4px_0px_0px_rgba(45,41,38,1)] hover:shadow-[1px_1px_0px_0px_rgba(45,41,38,1)] hover:translate-x-0.5 hover:translate-y-0.5 uppercase cursor-pointer"
            >
              <Navigation className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              <span>BUKA GOOGLE MAPS</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
