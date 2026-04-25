import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Settings, Axe, Zap, Wrench, Hammer, Layers, Sun, Moon } from 'lucide-react';

const machineNav = [
  { name: 'Basis', href: '#ueber-uns', icon: Axe, machine: 'WASSER' },
  { name: 'Arsenal', href: '#equipment', icon: Wrench, machine: 'METALL' },
  { name: 'Geister', href: '#kuenstler', icon: Hammer, machine: 'SCHNITT' },
  { name: 'Liquid', href: '#economics', icon: Settings, machine: 'LIQUID' },
  { name: 'Vortex', href: '#kontakt', icon: Zap, machine: 'KERN' },
];

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [activeTab, setActiveTab] = useState('#ueber-uns');

  useEffect(() => {
    const handleScroll = () => {
      const sections = machineNav.map(n => n.href.substring(1));
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top < 300) {
          setActiveTab(`#${section}`);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl pointer-events-none">
        <div className="flex justify-between items-center pointer-events-auto px-6 py-3 glass-card rounded-3xl glow-primary">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center rotate-3 hover:rotate-0 transition-transform">
              <span className="text-xl font-display font-black text-white">C</span>
            </div>
            <div className="hidden md:flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--brand-text)]">Cumberland54</span>
              <span className="text-[8px] font-mono font-medium text-[var(--brand-muted)]">Lab v2.6 // 2026</span>
            </div>
          </a>
          
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex px-4 py-1.5 glass-card rounded-full border-brand-primary/10">
              <span className="text-[9px] font-mono font-bold text-brand-primary animate-pulse flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                SYSTEM_STABLE
              </span>
            </div>
            <button 
              onClick={toggleTheme}
              className="p-2.5 glass-card border-none hover:bg-brand-primary/10 transition-colors rounded-xl text-[var(--brand-text)]"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-xl">
        <div className="glass-card rounded-[32px] p-2 flex justify-around items-center glow-primary border-brand-primary/5">
          {machineNav.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.href;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveTab(item.href)}
                className={`flex-1 flex flex-col items-center justify-center p-3 rounded-2xl transition-all duration-300 ${isActive ? 'bg-brand-primary text-white' : 'text-[var(--brand-muted)] hover:text-[var(--brand-text)] hover:bg-[var(--brand-muted)]/5'}`}
              >
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="flex flex-col items-center"
                >
                  <Icon className="w-5 h-5 mb-1" />
                  <span className="text-[8px] font-mono font-bold tracking-widest leading-none">{item.machine}</span>
                </motion.div>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
