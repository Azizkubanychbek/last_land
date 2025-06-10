"use client"
import React, { useEffect, useState } from 'react';
import { Clock, Zap, Shield, Globe, ArrowLeft } from 'lucide-react';
import { Footer } from '@/components/layout/footer';

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      // Fallback if no history
      window.location.href = '/';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyberpunk-black via-cyberpunk-dark to-cyberpunk-black text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyberpunk-cyan/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyberpunk-blue/5 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyberpunk-purple/5 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Back button */}
        <div className="pt-8 px-4 md:px-8">
          <button
            onClick={handleBack}
            className="inline-flex items-center space-x-2 text-cyberpunk-cyan hover:text-white transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
        </div>


      <main className="relative z-10 min-h-screen flex items-center justify-center px-4">
       
        <div className="text-center max-w-4xl mx-auto">

          {/* Main heading */}
          <div className={`mb-12 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-6 animate-glow">
              SOON
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-cyberpunk-cyan to-transparent mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Something extraordinary is coming. 
              <span className="text-cyberpunk-cyan font-semibold"> Revolutionary technology</span> meets 
              <span className="text-cyberpunk-cyan font-semibold"> innovative design</span>.
            </p>
          </div>

          {/* Feature highlights */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-600 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="group">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyberpunk-cyan/50 transition-all duration-300 hover:scale-105">
                <Clock className="w-8 h-8 text-cyberpunk-cyan mb-4 mx-auto group-hover:animate-pulse" />
                <h3 className="text-lg font-semibold mb-2">Coming Soon</h3>
                <p className="text-gray-400 text-sm">Launching in the near future</p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyberpunk-cyan/50 transition-all duration-300 hover:scale-105">
                <Shield className="w-8 h-8 text-cyberpunk-cyan mb-4 mx-auto group-hover:animate-pulse" />
                <h3 className="text-lg font-semibold mb-2">Secure</h3>
                <p className="text-gray-400 text-sm">Built with security in mind</p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyberpunk-cyan/50 transition-all duration-300 hover:scale-105">
                <Globe className="w-8 h-8 text-cyberpunk-cyan mb-4 mx-auto group-hover:animate-pulse" />
                <h3 className="text-lg font-semibold mb-2">Global</h3>
                <p className="text-gray-400 text-sm">Accessible worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Subtle animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyberpunk-cyan/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;