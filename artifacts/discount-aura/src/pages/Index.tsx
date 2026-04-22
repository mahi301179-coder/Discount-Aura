import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { AIOptimizer } from '@/components/sections/AIOptimizer';
import { Categories } from '@/components/sections/Categories';
import { TrendingCoupons } from '@/components/sections/TrendingCoupons';
import { PremiumLock } from '@/components/sections/PremiumLock';
import { DashboardPreview } from '@/components/sections/DashboardPreview';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { FadeInOnScroll } from '@/components/effects/FadeInOnScroll';
import { BackgroundBlobs } from '@/components/effects/BackgroundBlobs';
import { CursorGlow } from '@/components/effects/CursorGlow';

export default function Index() {
  return (
    <div className="min-h-screen selection:bg-primary/30 selection:text-white">
      <CursorGlow />
      <BackgroundBlobs />
      <Navbar />
      
      <main>
        <Hero />
        
        <FadeInOnScroll>
          <TrendingCoupons />
        </FadeInOnScroll>
        
        <FadeInOnScroll delay={0.2}>
          <AIOptimizer />
        </FadeInOnScroll>

        <FadeInOnScroll>
          <Categories />
        </FadeInOnScroll>
        
        <FadeInOnScroll>
          <HowItWorks />
        </FadeInOnScroll>

        <FadeInOnScroll>
          <PremiumLock />
        </FadeInOnScroll>

        <FadeInOnScroll>
          <DashboardPreview />
        </FadeInOnScroll>
      </main>

      <FadeInOnScroll>
        <Footer />
      </FadeInOnScroll>
    </div>
  );
}
