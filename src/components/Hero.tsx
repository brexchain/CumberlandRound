import { motion } from 'motion/react';
import { ArrowRight, Zap, Settings } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center px-6 md:px-10 py-12 overflow-hidden bg-brand-bg rounded-b-[80px] md:rounded-b-[200px]">
      {/* Decorative background layers */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary opacity-5 skew-x-12 transform translate-x-24 z-0" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-brand-secondary opacity-5 blur-3xl z-0 rounded-full" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-8">
            <Zap className="w-6 h-6 text-brand-primary fill-brand-primary" />
            <span className="text-[10px] font-mono font-black uppercase tracking-[0.4em] text-brand-primary/60">
              Machined Excellence // 2026
            </span>
          </div>

          <h1 className="text-[14vw] sm:text-[14vw] md:text-[10rem] font-display font-black leading-[0.8] tracking-tighter uppercase mb-12 flex flex-col mix-blend-normal overflow-hidden text-[var(--brand-text)]">
            <span className="relative inline-block w-fit">
              Radikale
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ delay: 0.5, duration: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-1 md:-bottom-2 left-0 h-1 md:h-2 bg-brand-primary z-[-1] rounded-full"
              />
            </span>
            <span className="text-brand-accent transform translate-x-0 md:-translate-x-12 leading-tight">
              Vernetzung
            </span>
            <span className="flex items-center gap-3 md:gap-4 self-start md:self-end mt-4">
              <span className="text-[12vw] md:text-8xl text-stroke text-transparent border-[var(--brand-text)]">2.6</span>
              <motion.div
                animate={{ rotate: [0, 90, 180, 270, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="text-brand-secondary"
              >
                <Settings className="w-12 h-12 md:w-24 md:h-24" />
              </motion.div>
            </span>
          </h1>

          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-7">
              <p className="text-xl md:text-3xl font-display font-medium leading-tight text-brand-text/80 max-w-xl">
                Wir <span className="text-brand-primary italic">fräsen</span> neue Pfade zwischen Kunst und <span className="text-brand-secondary italic">Technologie</span>. Ein Labor für die <span className="text-brand-accent italic">Verschmelzung</span> von Materie.
              </p>
            </div>
            
            <div className="md:col-span-5 flex flex-col gap-4">
              <a href="#kontakt" className="maximalist-btn group !rounded-full !px-8 !py-6">
                <span>Start Sequence</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Status UI */}
      <div className="absolute top-1/2 right-10 hidden xl:block -translate-y-1/2">
        <div className="rotated-label font-mono text-[8px] uppercase tracking-[0.6em] text-brand-primary opacity-30">
          OPERATIONAL • EXCELLENCE • COLLABORATION
        </div>
      </div>
    </section>
  );
}

