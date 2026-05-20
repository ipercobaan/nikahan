import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

interface AudioPlayerProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export default function AudioPlayer({ isPlaying, onTogglePlay }: AudioPlayerProps) {
  return (
    <div className="fixed bottom-[84px] left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 bg-[#FCFAF5] border-2 border-charcoal-500 rounded-full py-1.5 px-3 shadow-[3px_3px_0px_0px_rgba(45,41,38,1)] transition-all duration-300">
      
      {/* Tiny Sound Waves – Compact Dynamic EQ */}
      {isPlaying && (
        <div className="flex items-end justify-center gap-[2.5px] h-3.5 px-1 select-none pointer-events-none">
          <span className="w-[2px] bg-[#3B5F43] rounded-full animate-soundwave-1 h-1.5" />
          <span className="w-[2px] bg-[#8D5B4C] rounded-full animate-soundwave-2 h-3" />
          <span className="w-[2px] bg-[#C4B6A3] rounded-full animate-soundwave-3 h-2" />
          <span className="w-[2px] bg-[#3B5F43] rounded-full animate-soundwave-4 h-3.5" />
          <span className="w-[2px] bg-[#8D5B4C] rounded-full animate-soundwave-5 h-1" />
        </div>
      )}

      {/* Mini Volume Toggle */}
      <button
        id="btn-music-toggle"
        onClick={onTogglePlay}
        className={`flex items-center justify-center w-7 h-7 rounded-full border border-charcoal-500 hover:scale-105 transition-all duration-300 cursor-pointer ${
          isPlaying
            ? 'bg-terracotta-500 text-cream-50'
            : 'bg-[#FAF8F5] text-charcoal-500'
        }`}
        title={isPlaying ? 'Matikan musik' : 'Putar musik'}
      >
        {isPlaying ? (
          <Volume2 className="w-3.5 h-3.5 text-cream-50" />
        ) : (
          <VolumeX className="w-3.5 h-3.5" />
        )}
      </button>

      {/* Label - mini understate, hidden on extra small screens */}
      <span className="font-mono text-[8px] uppercase tracking-wider font-extrabold text-charcoal-500/70 select-none pb-[1px]" style={{ fontSize: '7.5px' }}>
        {isPlaying ? 'Music On' : 'Muted'}
      </span>
    </div>
  );
}
