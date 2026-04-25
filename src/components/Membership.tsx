import { motion } from 'motion/react';
import { ArrowUpRight, Zap, Target, Star } from 'lucide-react';

export default function Membership() {
  return (
    <section id="mitgliedschaft" className="py-32 bg-brand-primary text-brand-bg relative overflow-hidden rounded-[100px] md:rounded-[200px]">
      {/* Background layer */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-brand-accent)_1px,_transparent_1px)] bg-[length:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-6">
                    <Star className="w-6 h-6 text-brand-bg animate-pulse" />
                    <span className="font-mono text-brand-bg uppercase text-xs tracking-widest">Access Protocol v2.6</span>
                </div>
                <h2 className="text-[12vw] sm:text-[14vw] md:text-[8rem] font-display font-black uppercase leading-[0.8] tracking-tighter">
                   Join the <br/> <span className="text-brand-accent underline decoration-brand-bg">Vortex</span>
                </h2>
            </div>
            <p className="max-w-xs font-mono text-[10px] uppercase tracking-[0.3em] text-brand-bg/60 mb-4">
                Wir wählen unsere Mitglieder nach Synergie-Faktor aus. Keine leeren Schreibtische, nur volle Visionen.
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Full Membership */}
          <div className="rounded-[40px] md:rounded-[80px] bg-[var(--brand-bg)] text-[var(--brand-primary)] p-10 md:p-20 relative overflow-hidden group border-4 border-brand-primary">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            <div className="flex justify-between items-start mb-12">
                <div>
                   <span className="font-mono text-[10px] uppercase font-black text-brand-muted block mb-2">FULL_ACCESS_MODULE</span>
                   <h3 className="text-5xl md:text-8xl font-display font-black uppercase leading-none">ab 200€</h3>
                </div>
                <Zap className="w-12 h-12 text-brand-primary fill-brand-primary animate-bounce" />
            </div>
            
            <ul className="space-y-6 mb-16 font-mono text-xs uppercase font-bold tracking-wider">
                <li className="flex items-center gap-4 border-b border-brand-primary/10 pb-4">
                    <span className="w-3 h-3 bg-brand-accent rounded-full" /> Fester Arbeitsbereich (24/7 Access)
                </li>
                <li className="flex items-center gap-4 border-b border-brand-primary/10 pb-4">
                    <span className="w-3 h-3 bg-brand-accent rounded-full" /> Industrieller Maschinenpark Integration
                </li>
                <li className="flex items-center gap-4 border-b border-brand-primary/10 pb-4">
                    <span className="w-3 h-3 bg-brand-accent rounded-full" /> Globales Kunst- & Handwerksnetzwerk
                </li>
            </ul>

            <a href="#kontakt" className="px-10 py-6 md:py-8 bg-brand-primary text-brand-bg font-display font-black text-2xl md:text-3xl uppercase tracking-tighter rounded-full block text-center transform hover:scale-105 transition-transform shadow-2xl">
                <span>Start Application</span>
            </a>
          </div>

          {/* One-Week Residency */}
          <div className="p-10 md:p-20 rounded-[40px] md:rounded-[80px] bg-white text-black flex flex-col justify-between group border-4 border-brand-primary shadow-xl">
             <div className="relative">
                <div className="flex justify-between items-start mb-12">
                    <Target className="w-12 h-12 text-brand-accent" />
                    <span className="py-2 px-4 bg-brand-accent text-white font-mono text-[10px] font-black uppercase rounded-full -rotate-6">PROJECT_SPRINT_V5</span>
                </div>
                
                <h3 className="text-4xl md:text-7xl font-display font-black uppercase text-black leading-none mb-8">
                   One Week <br/> <span className="text-brand-accent">Intensive</span>
                </h3>
                
                <p className="text-black/70 font-bold text-xl mb-12 leading-tight">
                   Keine Verträge. Nur Fokus. <span className="italic text-brand-accent">Fräs</span> Dich durch Dein Projekt in nur 7 Tagen.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-12">
                   {['Tool Pool', 'Residency', 'Technical Help', 'Exhibition'].map(item => (
                     <div key={item} className="p-4 rounded-full border-2 border-black/10 font-mono text-[10px] uppercase font-black text-black text-center">
                        / {item}
                     </div>
                   ))}
                </div>
             </div>

             <a href="#kontakt" className="px-10 py-8 border-4 border-black rounded-full text-black font-display font-black text-3xl uppercase tracking-tighter hover:bg-black hover:text-white transition-all text-center">
                Woche Buchen
             </a>
          </div>
        </div>
      </div>
    </section>
  );
}
