import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Settings, Axe, Zap, Wrench, Hammer, Layers, Sun, Moon } from 'lucide-react';

const machineNav = [
  { name: 'Basis', href: '#ueber-uns', icon: Axe, machine: 'WASSER' },
  { name: 'Mühle', href: '#raeume', icon: Layers, machine: 'FRÄSEN' },
  { name: 'Klinge', href: '#equipment', icon: Wrench, machine: 'SCHLIFF' },
  { name: 'Geister', href: '#kuenstler', icon: Hammer, machine: 'SCHNITT' },
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
      <nav className="fixed top-0 left-0 right-0 z-50 p-4 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
          <a href="#" className="flex items-center gap-3">
            <span className="text-2xl font-display italic font-black uppercase bg-brand-primary text-brand-bg px-4 py-1 rounded-xl">
              C54
            </span>
            <div className="hidden md:flex flex-col">
              <span className="text-[8px] font-mono uppercase tracking-[0.4em] font-black leading-none text-brand-primary">Cumberland</span>
              <span className="text-[8px] font-mono uppercase tracking-[0.4em] font-black text-[var(--brand-text)] leading-none">Creative Lab v2.6</span>
            </div>
          </a>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-3 bg-[var(--brand-bg)]/80 backdrop-blur-md border-2 border-brand-primary/20 rounded-full text-brand-primary hover:scale-110 transition-transform active:scale-95 shadow-lg"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <div className="px-4 py-2 bg-brand-accent/20 backdrop-blur-md border border-brand-accent/30 rounded-full">
              <span className="text-[8px] font-mono font-black uppercase text-brand-accent animate-pulse">System Live: v3.14</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-lg">
        <div className="bg-brand-bg/80 backdrop-blur-2xl border-2 border-brand-primary/20 rounded-[40px] p-2 flex justify-around items-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {machineNav.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.href;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveTab(item.href)}
                className={`machine-nav-btn flex-1 ${isActive ? 'active' : ''}`}
              >
                <motion.div
                  whileTap={{ scale: 0.8 }}
                  className="flex flex-col items-center"
                >
                  <Icon className={`mb-1 ${isActive ? 'text-brand-primary drop-shadow-[0_0_8px_var(--color-brand-primary)]' : ''}`} />
                  <span className={isActive ? 'text-brand-primary' : ''}>{item.machine}</span>
                </motion.div>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
