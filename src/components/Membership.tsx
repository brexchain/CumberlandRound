import { motion } from 'motion/react';
import { ArrowUpRight, Zap, Target, Star } from 'lucide-react';

export default function Membership() {
  return (
    <section id="mitgliedschaft" className="py-32 relative overflow-hidden bg-[var(--brand-bg)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 glass-card rounded-xl text-brand-primary">
                        <Star className="w-6 h-6 animate-pulse" />
                    </div>
                    <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[var(--brand-muted)]">Access Protocol v2.6</span>
                </div>
                <h2 className="text-5xl md:text-[8rem] font-bold uppercase leading-[0.85] tracking-tighter">
                   Join the <br/> <span className="text-brand-primary">Vortex</span>
                </h2>
            </div>
            <p className="max-w-xs font-medium text-lg text-[var(--brand-muted)] leading-relaxed mb-4">
                Wir wählen unsere Mitglieder nach Synergie-Faktor aus. Keine leeren Schreibtische, nur volle Visionen.
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Full Membership */}
          <div className="rounded-[48px] glass-card p-10 md:p-16 relative overflow-hidden group hover:border-brand-primary transition-all duration-700 glow-primary shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-700" />
            <div className="flex justify-between items-start mb-12 relative z-10">
                <div>
                   <span className="font-mono text-[10px] font-bold text-brand-primary block mb-4 tracking-[0.2em]">FULL_ACCESS_MODULE</span>
                   <h3 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter">ab 200€</h3>
                </div>
                <Zap className="w-12 h-12 text-brand-primary fill-brand-primary" />
            </div>
            
            <ul className="space-y-6 mb-16 font-medium text-lg relative z-10">
                <li className="flex items-center gap-4 border-b border-[var(--brand-border)] pb-6">
                    <div className="w-2 h-2 bg-brand-primary rounded-full" /> Fester Arbeitsbereich (24/7 Access)
                </li>
                <li className="flex items-center gap-4 border-b border-[var(--brand-border)] pb-6">
                    <div className="w-2 h-2 bg-brand-primary rounded-full" /> Industrieller Maschinenpark Integration
                </li>
                <li className="flex items-center gap-4 pb-0">
                    <div className="w-2 h-2 bg-brand-primary rounded-full" /> Globales Kunst- & Handwerksnetzwerk
                </li>
            </ul>

            <a href="#kontakt" className="px-10 py-6 bg-brand-primary text-white font-bold text-xl uppercase rounded-2xl block text-center transform hover:scale-[1.02] transition-transform shadow-xl relative z-10">
                <span>Start Application</span>
            </a>
          </div>

          {/* One-Week Residency */}
          <div className="p-10 md:p-16 rounded-[48px] glass-card flex flex-col justify-between group hover:border-brand-accent transition-all">
             <div className="relative">
                <div className="flex justify-between items-start mb-12">
                    <div className="p-4 bg-brand-accent/10 rounded-2xl text-brand-accent">
                        <Target className="w-10 h-10" />
                    </div>
                    <span className="py-2 px-4 glass-card border-brand-accent/20 text-brand-accent font-mono text-[9px] font-bold uppercase rounded-full">PROJECT_SPRINT_V5</span>
                </div>
                
                <h3 className="text-4xl md:text-6xl font-bold uppercase leading-[0.9] mb-8">
                   One Week <br/> <span className="text-brand-accent">Intensive</span>
                </h3>
                
                <p className="text-[var(--brand-muted)] font-medium text-xl mb-12 leading-tight">
                   Keine Verträge. Nur Fokus. Treibe Dein Projekt in nur 7 Tagen ungestört voran.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-12">
                   {['Tool Pool', 'Residency', 'Technical Help', 'Exhibition'].map(item => (
                     <div key={item} className="p-4 rounded-xl glass-card border-[var(--brand-border)] font-mono text-[9px] uppercase font-bold text-[var(--brand-muted)] text-center group-hover:border-brand-accent group-hover:text-brand-accent transition-colors">
                        / {item}
                     </div>
                   ))}
                </div>
             </div>

             <a href="#kontakt" className="px-10 py-6 border-2 border-[var(--brand-border)] rounded-2xl text-[var(--brand-text)] font-bold text-lg uppercase hover:bg-brand-accent hover:border-brand-accent hover:text-white transition-all text-center">
                Woche Buchen
             </a>
          </div>
        </div>
      </div>
    </section>
  );
}
