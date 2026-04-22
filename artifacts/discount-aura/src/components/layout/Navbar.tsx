import React, { useState } from 'react';
import { Link } from 'wouter';
import { Sparkles, Search, Bell, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const notifications = [
    "New: SWIGGY50 verified just now",
    "HDFC cashback updated — now 15%",
    "Flash deal: MYNTRA30 expires in 2h"
  ];

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 bg-background/60 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0 hover:opacity-80 transition-opacity">
              <Sparkles className="w-6 h-6 text-primary" />
              <span className="font-bold text-xl tracking-tight">DiscountAura</span>
            </Link>

            {/* Desktop Search */}
            <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-white/40" />
              </div>
              <input
                type="text"
                placeholder="Search stores, coupons..."
                className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
              />
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <div className="relative">
                <button 
                  onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                  className="p-2 text-white/70 hover:text-white transition-colors relative"
                >
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full"></span>
                </button>

                <AnimatePresence>
                  {isNotificationsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-72 bg-card border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                    >
                      <div className="p-3 font-semibold border-b border-white/10 text-sm">Live Alerts</div>
                      <div className="py-2">
                        {notifications.map((note, i) => (
                          <div key={i} className="px-4 py-2.5 text-sm text-white/80 hover:bg-white/5 cursor-pointer transition-colors">
                            {note}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button className="text-sm font-medium text-white/80 hover:text-white px-3 py-2 transition-colors">
                Login
              </button>
              
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-full text-sm font-bold transition-all hover:shadow-[0_0_15px_rgba(250,204,21,0.4)] active:scale-95">
                Subscribe ₹200/mo
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-white/70 hover:text-white"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 inset-x-0 bg-background/95 backdrop-blur-2xl border-b border-white/10 z-30 md:hidden overflow-hidden"
          >
            <div className="px-4 py-6 space-y-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-white/40" />
                <input
                  type="text"
                  placeholder="Search stores..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              
              <div className="space-y-4">
                <div className="text-xs font-semibold text-white/40 uppercase tracking-wider">Live Alerts</div>
                {notifications.map((note, i) => (
                  <div key={i} className="text-sm text-white/80 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {note}
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <button className="w-full text-center py-3 text-sm font-medium border border-white/20 rounded-xl">
                  Login
                </button>
                <button className="w-full bg-primary text-primary-foreground py-3 rounded-xl text-sm font-bold">
                  Subscribe ₹200/mo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
