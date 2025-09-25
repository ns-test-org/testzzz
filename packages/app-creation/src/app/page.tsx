'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden ocean-background">
      {/* Animated Ocean Background */}
      <div className="absolute inset-0 ocean-waves">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </div>

      {/* Floating Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`bubble bubble-${i + 1}`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className={`welcome-content ${mounted ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Welcome Title */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl ocean-text">
            Welcome
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-2xl leading-relaxed drop-shadow-lg">
            Dive into a world of endless possibilities beneath the vibrant ocean waves
          </p>

          {/* Ocean-themed decorative elements */}
          <div className="flex justify-center space-x-8 mb-12">
            <div className="ocean-icon">🐠</div>
            <div className="ocean-icon">🌊</div>
            <div className="ocean-icon">🐙</div>
            <div className="ocean-icon">🦑</div>
            <div className="ocean-icon">🐚</div>
          </div>

          {/* Call to Action Button */}
          <button className="ocean-button group relative px-8 py-4 text-lg font-semibold text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <span className="relative z-10">Explore the Depths</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
          </button>

          {/* Welcome Message */}
          <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 max-w-lg">
            <p className="text-white/90 text-base leading-relaxed">
              🌊 Welcome to our ocean paradise! Here, the depths of creativity meet the surface of innovation. 
              Let the gentle currents guide your journey through this aquatic wonderland.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
    </div>
  );
}

