import { motion } from 'motion/react';
import { Mail, MapPin, Send, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 bg-brand-secondary overflow-hidden rounded-t-[100px] md:rounded-t-[200px] mb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-12 mb-12">
            <h2 className="text-[12vw] sm:text-[14vw] md:text-[10rem] font-display font-black uppercase text-brand-bg leading-[0.75] tracking-tighter transform -skew-x-6">
              Join <br/> <span className="text-brand-primary">The Tribe</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-[40px] md:rounded-[80px] p-10 md:p-16 bg-[var(--brand-bg)] shadow-2xl border-4 border-brand-primary text-[var(--brand-text)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/5 rounded-full blur-2xl" />
              <h3 className="text-4xl font-display font-black uppercase mb-8 text-brand-primary">Nachricht_Input</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block font-mono text-[10px] font-black uppercase tracking-widest text-brand-muted mb-2">Dein Name</label>
                  <input type="text" className="w-full bg-transparent border-b-2 border-brand-primary/20 focus:border-brand-accent outline-none p-2 font-mono text-[var(--brand-text)]" />
                </div>
                <div>
                  <label className="block font-mono text-[10px] font-black uppercase tracking-widest text-brand-muted mb-2">Email</label>
                  <input type="email" className="w-full bg-transparent border-b-2 border-brand-primary/20 focus:border-brand-accent outline-none p-2 font-mono text-[var(--brand-text)]" />
                </div>
                <div>
                  <label className="block font-mono text-[10px] font-black uppercase tracking-widest text-brand-muted mb-2">Vision / Projekt</label>
                  <textarea rows={4} className="w-full bg-transparent border-b-2 border-brand-primary/20 focus:border-brand-accent outline-none p-2 font-mono resize-none text-[var(--brand-text)]"></textarea>
                </div>
                <button className="w-full py-6 md:py-8 bg-brand-primary text-brand-bg rounded-full flex items-center justify-center gap-4 group font-display font-black text-2xl uppercase transform hover:scale-105 transition-transform shadow-xl">
                  <Send className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  <span>Senden</span>
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid md:grid-cols-2 gap-12">
               <div className="space-y-6">
                  <div className="p-10 rounded-[60px] bg-brand-bg/5 border-2 border-brand-bg/20 backdrop-blur-md">
                     <MapPin className="w-8 h-8 text-brand-bg mb-4" />
                     <h4 className="text-2xl font-display font-black uppercase text-brand-bg">Location</h4>
                     <p className="font-mono text-sm font-bold text-brand-bg/60 mt-2">
                        Cumberlandstr. 54 <br/> 30161 Hannover
                     </p>
                  </div>
                  <div className="p-10 rounded-[60px] bg-brand-bg text-brand-primary border-4 border-brand-accent transform -rotate-1">
                     <Mail className="w-8 h-8 text-brand-accent mb-4" />
                     <h4 className="text-2xl font-display font-black uppercase">Direct_Link</h4>
                     <a href="mailto:hallo@cumberland54.de" className="font-mono text-sm font-black underline mt-2 block break-all">hallo@cumberland54.de</a>
                  </div>
               </div>

               <div className="flex flex-col justify-between h-full">
                  <div className="p-12 rounded-full aspect-square border-4 border-dashed border-brand-bg/20 flex flex-col items-center justify-center text-center">
                     <Instagram className="w-12 h-12 text-brand-bg mb-6 animate-bounce" />
                     <p className="font-display font-black text-3xl uppercase text-brand-bg leading-none">Visual <br/> Chaos</p>
                     <p className="font-mono text-[10px] uppercase tracking-widest text-brand-bg/40 mt-4">@cumberland.54</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
