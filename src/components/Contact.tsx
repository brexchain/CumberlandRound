import { motion } from 'motion/react';
import { Mail, MapPin, Send, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="kontakt" className="py-32 relative overflow-hidden bg-[var(--brand-bg)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-12 mb-20 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center text-brand-secondary">
                    <Send className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--brand-text)]">Transmission Hub</h2>
            </div>
            <h3 className="text-5xl md:text-[8rem] font-bold uppercase leading-[0.85] tracking-tighter mb-8">
               Join <span className="text-brand-secondary">The Tribe</span>
            </h3>
          </div>

          <div className="lg:col-span-5">
            <div className="glass-card p-10 md:p-14 rounded-[40px] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/5 rounded-full blur-2xl" />
              <h3 className="text-2xl font-bold uppercase mb-8 text-brand-secondary">Connection_Input</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--brand-muted)] mb-3">Identität / Name</label>
                  <input type="text" className="w-full bg-[var(--brand-bg)] border border-[var(--brand-border)] rounded-xl py-4 px-6 focus:border-brand-secondary outline-none transition-colors" placeholder="Dein Name" />
                </div>
                <div>
                  <label className="block font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--brand-muted)] mb-3">Verschlüsselung / Email</label>
                  <input type="email" className="w-full bg-[var(--brand-bg)] border border-[var(--brand-border)] rounded-xl py-4 px-6 focus:border-brand-secondary outline-none transition-colors" placeholder="hallo@mission.space" />
                </div>
                <div>
                  <label className="block font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--brand-muted)] mb-3">Vision / Projekt</label>
                  <textarea rows={4} className="w-full bg-[var(--brand-bg)] border border-[var(--brand-border)] rounded-xl py-4 px-6 focus:border-brand-secondary outline-none transition-colors resize-none" placeholder="Beschreibe Deine Vision..."></textarea>
                </div>
                <button className="w-full py-5 bg-brand-secondary text-white rounded-2xl flex items-center justify-center gap-4 group font-bold text-lg uppercase transform hover:scale-[1.02] transition-transform shadow-xl">
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  <span>Senden</span>
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid md:grid-cols-2 gap-8">
               <div className="space-y-8">
                  <div className="p-10 rounded-[32px] glass-card group hover:border-brand-secondary transition-colors">
                     <MapPin className="w-8 h-8 text-brand-secondary mb-6" />
                     <h4 className="text-2xl font-bold uppercase">Base Location</h4>
                     <p className="text-[var(--brand-muted)] mt-4 leading-relaxed font-medium">
                        Cumberlandstr. 54 <br/> 30161 Hannover
                     </p>
                  </div>
                  <div className="p-10 rounded-[32px] glass-card group hover:border-brand-primary transition-colors">
                     <Mail className="w-8 h-8 text-brand-primary mb-6" />
                     <h4 className="text-2xl font-bold uppercase">Direct Access</h4>
                     <a href="mailto:hallo@cumberland54.de" className="text-[var(--brand-muted)] hover:text-brand-primary transition-colors mt-4 block break-all font-bold text-lg">hallo@cumberland54.de</a>
                  </div>
               </div>

               <div className="h-full">
                  <div className="p-12 rounded-[32px] glass-card flex flex-col items-center justify-center text-center h-full group hover:border-brand-accent transition-colors">
                     <div className="p-6 bg-brand-accent/10 rounded-full mb-8 group-hover:rotate-12 transition-transform">
                        <Instagram className="w-12 h-12 text-brand-accent animate-pulse" />
                     </div>
                     <p className="font-bold text-4xl uppercase leading-none">Visual <br/> Chaos</p>
                     <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--brand-muted)] mt-6">@cumberland.54</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
