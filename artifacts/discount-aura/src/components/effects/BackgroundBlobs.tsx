import React from 'react';

export function BackgroundBlobs() {
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null; // Disable on mobile for performance
  }

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/5 blur-[120px] animate-float opacity-70" />
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-emerald-500/5 blur-[100px] animate-float opacity-50" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-violet-500/5 blur-[150px] animate-float opacity-40" style={{ animationDelay: '4s' }} />
    </div>
  );
}
