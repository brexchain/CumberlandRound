import { motion } from 'motion/react';
import { ArrowRight, Zap, Settings } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center px-6 md:px-10 py-24 overflow-hidden rounded-b-[40px] md:rounded-b-[80px]">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-primary/20 blur-[120px] rounded-full z-0" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-accent/20 blur-[120px] rounded-full z-0" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-[1px] bg-brand-primary" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-brand-primary">
              Evolution // Creative Lab 2026
            </span>
          </div>

          <h1 className="text-[10vw] sm:text-[11vw] md:text-[8.5rem] font-display font-bold leading-[0.9] tracking-tight mb-12 flex flex-col text-[var(--brand-text)]">
            <span className="relative inline-block w-fit">
              Radikale
            </span>
            <span className="flex items-center gap-6">
              <span className="text-brand-primary">Vernetzung</span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="hidden lg:block p-4 glass-card rounded-full border-brand-primary/20"
              >
                <Settings className="w-12 h-12 text-brand-primary" />
              </motion.div>
            </span>
          </h1>

          <div className="grid lg:grid-cols-12 gap-12 items-start mt-8">
            <div className="lg:col-span-12">
              <p className="text-xl md:text-3xl font-medium leading-tight text-[var(--brand-muted)] max-w-2xl mb-12">
                Wir erschaffen Synergien zwischen <span className="text-[var(--brand-text)] font-bold">analoger Präzision</span> und <span className="text-[var(--brand-text)] font-bold">digitaler Vision</span>. Ein Raum für Fortschritt durch Kollaboration.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#kontakt" className="px-8 py-4 bg-brand-primary text-white rounded-2xl font-bold flex items-center gap-3 hover:scale-105 transition-all glow-primary">
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#economics" className="px-8 py-4 glass-card rounded-2xl font-bold flex items-center gap-3 hover:bg-[var(--brand-border)] transition-all">
                  <span>View Services</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Meta Info */}
      <div className="absolute bottom-10 left-10 hidden lg:flex items-center gap-6 z-10 px-6 py-3 glass-card rounded-2xl">
        <div className="flex -space-x-3">
          {[1, 2, 3].map(i => (
            <div key={i} className="w-8 h-8 rounded-full border-2 border-[var(--brand-card)] bg-brand-muted/20 overflow-hidden">
              <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="avatar" />
            </div>
          ))}
        </div>
        <div className="h-8 w-[1px] bg-[var(--brand-border)]" />
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--brand-muted)]">
          12 Active Creators Online
        </span>
      </div>
    </section>
  );
}

