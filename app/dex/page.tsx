/*
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TradingView } from '@/components/dex/trading/trading-view';
import { Bridge } from '@/components/dex/bridge/bridge-view';
import { Dashboard } from '@/components/dex/dashboard/dashboard-view';
import { Vault } from '@/components/dex/vault/vault-view';
import { KYC } from '@/components/dex/kyc/kyc-view';
*/

export default function DexPage() {
  return (
    <div style={{ minHeight: '100vh', width: '100vw', background: '#0A0A0A', overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <NeonDots count={18} />
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <h1 style={{ color: '#00FFFF', fontSize: '2.8rem', fontFamily: 'Orbitron, sans-serif', letterSpacing: '2px', textShadow: '0 0 16px #00FFFF, 0 0 32px #00FFFF' }}>
          Under Construction
        </h1>
        <p style={{ color: '#fff', fontSize: '1.3rem', marginTop: '1.5rem', fontFamily: 'Orbitron, sans-serif', textShadow: '0 0 8px #00FFFF' }}>
          Please wait for the launch.<br />
          The site is currently in development.
        </p>
      </div>
    </div>
  );
}

function NeonDots({ count = 12 }) {
  // Generate random positions and animation delays for each dot
  const dots = Array.from({ length: count }).map((_, i) => {
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const size = 6 + Math.random() * 8; // smaller dots
    const duration = 8 + Math.random() * 8;
    const delay = Math.random() * 8;
    return { left, top, size, duration, delay };
  });
  return (
    <>
      {dots.map((dot, i) => (
        <span
          key={i}
          style={{
            position: 'absolute',
            left: `${dot.left}%`,
            top: `${dot.top}%`,
            width: dot.size,
            height: dot.size,
            borderRadius: '50%',
            background: 'radial-gradient(circle, #00ffff 60%, #0fffc0 100%, transparent 100%)',
            boxShadow: '0 0 8px 4px #00ffff99, 0 0 16px 8px #00ffff33',
            opacity: 0.5,
            zIndex: 1,
            animation: `neonDotFade${i} ${dot.duration}s ease-in-out ${dot.delay}s infinite alternate`,
            pointerEvents: 'none',
          }}
        />
      ))}
      <style>{`
        ${dots.map((dot, i) => `
          @keyframes neonDotFade${i} {
            0% {
              opacity: 0.15;
              filter: blur(0.5px);
            }
            50% {
              opacity: 0.85;
              filter: blur(2px);
            }
            100% {
              opacity: 0.15;
              filter: blur(0.5px);
            }
          }
        `).join('\n')}
      `}</style>
    </>
  );
}