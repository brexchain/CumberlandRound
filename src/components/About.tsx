import { motion } from 'motion/react';
import { Eye, Shield, Globe } from 'lucide-react';

export default function About() {
  return (
    <section id="ueber-uns" className="py-32 relative overflow-hidden bg-[var(--brand-bg)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
             <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--brand-text)]">Der Grundwellen-Vektor</h2>
             </div>
             <h3 className="text-5xl md:text-8xl font-bold leading-[0.9] uppercase text-[var(--brand-text)] tracking-tighter mb-12">
                Fortschritt durch <span className="text-brand-primary">Handwerk</span> & <span className="text-brand-accent">Vision</span>
             </h3>
          </div>

          <div className="lg:col-span-12 grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 glass-card p-10 md:p-16 rounded-[32px] overflow-hidden relative">
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-[80px]" />
               <p className="text-2xl md:text-4xl font-bold leading-tight mb-12 relative z-10">
                  Cumberland54 ist die <span className="text-brand-primary underline decoration-brand-accent underline-offset-8 decoration-2">Schnittstelle</span> für kreative Radikalität. Ein technisches Labor, in dem Materie zu Bedeutung verschmilzt.
               </p>
               <div className="flex gap-4 relative z-10">
                 <div className="px-4 py-2 bg-brand-primary/10 rounded-full text-[10px] font-mono font-bold text-brand-primary uppercase">Lab_v2.6</div>
                 <div className="px-4 py-2 bg-[var(--brand-border)] rounded-full text-[10px] font-mono font-bold text-[var(--brand-muted)] uppercase">Creative_Synergy</div>
               </div>
            </div>

            <div className="glass-card p-10 rounded-[32px] flex flex-col justify-between group hover:border-brand-primary transition-colors">
               <div className="p-4 bg-brand-primary/10 w-fit rounded-2xl text-brand-primary">
                  <Shield className="w-8 h-8" />
               </div>
               <div>
                  <h4 className="text-2xl font-bold mb-4">Schutzraum für Experimente</h4>
                  <p className="text-[var(--brand-muted)] leading-relaxed">
                     Wir demokratisieren High-End Werkzeuge. Ein sicherer Hafen für Prototyping und künstlerische Forschung.
                  </p>
               </div>
            </div>

            <div className="glass-card p-10 rounded-[32px] flex flex-col justify-between group hover:border-brand-secondary transition-colors">
               <div className="p-4 bg-brand-secondary/10 w-fit rounded-2xl text-brand-secondary">
                  <Globe className="w-8 h-8" />
               </div>
               <div>
                  <h4 className="text-2xl font-bold mb-4">Globale Vernetzung</h4>
                  <p className="text-[var(--brand-muted)] leading-relaxed">
                     An der Schnittstelle von Leder, Holz und Code erschaffen wir Synergien, die neue Märkte und Realitäten definieren.
                  </p>
               </div>
            </div>
            
            <div className="md:col-span-2 glass-card p-10 rounded-[32px]">
               <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                     <h4 className="text-2xl font-bold mb-4 italic">"Wir fräsen Barrieren weg."</h4>
                     <p className="text-[var(--brand-muted)] leading-relaxed italic">
                        In einer Welt der Massenproduktion setzen wir auf das Unikat, das durch Wissen und State-of-the-art Technik entsteht.
                     </p>
                  </div>
                  <div className="h-40 rounded-2xl bg-[var(--brand-border)] overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700" alt="Machine" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

