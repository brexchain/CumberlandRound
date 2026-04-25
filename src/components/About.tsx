import { motion } from 'motion/react';
import { Eye, Shield, Globe } from 'lucide-react';

export default function About() {
  return (
    <section id="ueber-uns" className="py-24 bg-brand-bg relative overflow-hidden -mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-12">
             <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-black uppercase text-brand-text">Der Grundwellen-Vektor</h2>
             </div>
             <p className="text-[10vw] sm:text-[12vw] md:text-[7rem] font-display font-black leading-[0.75] uppercase text-brand-primary tracking-tighter mix-blend-difference mb-12">
                Ehrliches <br/>
                <span className="text-brand-accent">Handwerk</span> <br/>
                Kollaborative <span className="text-brand-secondary">Energie</span>
             </p>
          </div>

          <div className="lg:col-span-12">
            <div className="rounded-[60px] md:rounded-[100px] border-2 border-brand-primary/20 p-10 md:p-24 bg-brand-bg/50 backdrop-blur-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/5 rounded-full blur-3xl" />
               <p className="text-2xl md:text-5xl font-display font-black uppercase leading-tight mb-16 relative z-10">
                  Cumberland54 ist kein statischer Raum. Es ist eine <span className="text-brand-primary underline decoration-brand-accent underline-offset-8">Schnittstelle</span>, die Materie in Bedeutung verwandelt.
               </p>
               <div className="grid md:grid-cols-2 gap-12 relative z-10">
                  <div className="p-10 rounded-[60px] border-2 border-brand-primary bg-brand-primary text-brand-bg">
                     <p className="font-mono text-[10px] uppercase font-black mb-4 flex items-center gap-2">
                        <Shield className="w-4 h-4" /> Schutzraum : Experiment
                     </p>
                     <p className="text-xl font-bold leading-tight">
                        Wir demokratisieren Werkzeuge. Wir <span className="italic">fräsen</span> Barrieren weg, damit Kunst atmen kann.
                     </p>
                  </div>
                  <div className="p-10 rounded-[60px] border-2 border-brand-secondary bg-brand-secondary text-brand-bg">
                     <p className="font-mono text-[10px] uppercase font-black mb-4 flex items-center gap-2">
                        <Globe className="w-4 h-4" /> Globale : Verbindung
                     </p>
                     <p className="text-xl font-bold leading-tight">
                        Die <span className="italic">Verschmelzung</span> von Leder, Holz und Code schafft neue Realitäten.
                     </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

