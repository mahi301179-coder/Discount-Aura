import React from 'react';
import { GlassCard } from '../ui/GlassCard';

const steps = [
  {
    num: "01",
    title: "Pick a store",
    desc: "Browse 500+ partner stores including Swiggy, Amazon, Myntra, and more."
  },
  {
    num: "02",
    title: "Copy the code",
    desc: "One-click to clipboard. We only show codes that actually work today."
  },
  {
    num: "03",
    title: "Stack cashback",
    desc: "We tell you exactly which credit card or wallet to use to layer extra savings."
  },
  {
    num: "04",
    title: "Save more",
    desc: "Watch your net savings grow on your personalized dashboard."
  }
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-black/40 border-y border-white/5">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How it works</h2>
          <p className="text-white/60">Saving money shouldn't be a full-time job.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative">
          
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 z-0" />

          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-card border border-white/10 flex items-center justify-center text-2xl font-bold text-primary font-mono shadow-[0_0_20px_rgba(250,204,21,0.1)] mb-6">
                {step.num}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed px-4">{step.desc}</p>
            </div>
          ))}
          
        </div>

      </div>
    </section>
  );
}
