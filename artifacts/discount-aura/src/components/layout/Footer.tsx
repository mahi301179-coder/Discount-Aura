import React from 'react';
import { Sparkles, Twitter, Instagram, Github } from 'lucide-react';
import { Link } from 'wouter';

export function Footer() {
  return (
    <footer className="mt-32 relative border-t border-white/10 bg-background">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Sparkles className="w-6 h-6 text-primary" />
              <span className="font-bold text-xl tracking-tight">DiscountAura</span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed">
              India's premium smart coupon stacking platform. Elevate your savings with AI precision.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white/90">Product</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#" className="hover:text-primary transition-colors">Premium Features</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">AI Optimizer</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Store Directory</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white/90">Resources</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#" className="hover:text-primary transition-colors">Savings Guide</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white/90">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-colors border border-white/10">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-colors border border-white/10">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-colors border border-white/10">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
          
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} DiscountAura. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
