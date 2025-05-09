"use client";

import { useAudio } from '@/components/providers/audio-provider';

export function Logo() {
  const { playSound } = useAudio();

  return (
    <div 
      className="flex items-center cursor-pointer"
      onMouseEnter={() => playSound('hover')}
      onClick={() => {
        playSound('click');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    >
      <div className="w-9 h-10 mr-2">
        <img
          src="/sounds/1024x1024.png"
          alt="Logo"
          className="w-full h-full"
        />
      </div>
      <div className="text-xl font-display tracking-wider text-white">
        ARMA<span className="text-cyberpunk-cyan">DEX</span>
      </div>
    </div>
  );
}
