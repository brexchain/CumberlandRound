import { motion } from 'motion/react';
import { TrendingUp, Coins, Users, Zap, Briefcase, Camera, ShoppingBag, Coffee } from 'lucide-react';

const revenueStreams = [
  {
    title: 'Machine Day-Pass',
    desc: 'Voller Zugriff auf den Metall-, Holz- oder Textilpark für 24h. Inklusive technischer Backup-Garantie.',
    price: '45€ / Tag',
    icon: <Zap className="w-6 h-6" />,
    color: 'bg-brand-primary'
  },
  {
    title: 'Focus Sprit',
    desc: 'Eine Woche "Isolation" in unserem Lab. Perfekt für High-Intensity Prototyping oder Projekt-Finalisierung.',
    price: '180€ / Woche',
    icon: <TrendingUp className="w-6 h-6" />,
    color: 'bg-brand-accent'
  },
  {
    title: 'Artist Collab Ticket',
    desc: 'Wir matchen Dich mit einem unserer Resident-Künstler für 4h Tandem-Work an Deiner Vision.',
    price: '90€ + Material',
    icon: <Users className="w-6 h-6" />,
    color: 'bg-brand-secondary'
  },
  {
    title: 'Pop-Up Showcase',
    desc: 'Miete unser Schaufenster und 10qm Fläche für Dein Produkt-Launch oder Deine Ausstellung.',
    price: 'ab 150€ / WE',
    icon: <ShoppingBag className="w-6 h-6" />,
    color: 'bg-brand-primary'
  }
];

const upsellingDeals = [
  {
    title: 'C54 Branding Forge',
    desc: 'Wir lasern Dein Logo auf Material Deiner Wahl. Kleinserien bis 50 Stück.',
    icon: <Briefcase className="w-4 h-4" />
  },
  {
    title: 'Doku-Service',
    desc: 'Professionelles Foto-Shooting Deines Prozesses & fertigen Werkes in unserem Studio.',
    icon: <Camera className="w-4 h-4" />
  },
  {
    title: 'Workshop Host',
    desc: 'Bringe Deine Crowd zu uns. Wir hosten Dein Event mit industriellem Vibe & Espresso-Flat.',
    icon: <Coffee className="w-4 h-4" />
  }
];

export default function Economics() {
  return (
    <section id="economics" className="py-32 relative overflow-hidden bg-[var(--brand-bg)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-8">
               <div className="p-3 glass-card rounded-xl text-brand-primary">
                  <Coins className="w-6 h-6" />
               </div>
               <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[var(--brand-muted)]">C54_FIN_PROTOCOL_v3.0</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-bold uppercase leading-[0.9] mb-10 tracking-tighter">
               Liquid <br/> <span className="text-brand-primary">Capital</span>
            </h2>
            <p className="text-xl font-medium leading-relaxed mb-12 max-w-sm text-[var(--brand-muted)]">
               Wir monetarisieren nicht nur Raum – wir monetarisieren <span className="text-[var(--brand-text)] font-bold">Synergie</span>. Wähle Dein Modul für den nächsten Level Deiner Produktion.
            </p>
            
            <div className="space-y-4">
               {upsellingDeals.map((deal) => (
                 <div key={deal.title} className="p-6 glass-card rounded-3xl group cursor-pointer hover:border-brand-primary transition-colors">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 glass-card border-none bg-brand-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors text-brand-primary">
                          {deal.icon}
                       </div>
                       <div>
                          <h4 className="font-bold uppercase text-xs tracking-wider">{deal.title}</h4>
                          <p className="font-mono text-[9px] uppercase font-bold text-[var(--brand-muted)] mt-1">{deal.desc}</p>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {revenueStreams.map((stream, index) => (
              <motion.div
                key={stream.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-10 rounded-[40px] glass-card flex flex-col justify-between group hover:border-brand-primary hover:glow-primary relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-[60px]" />
                
                <div>
                   <div className="w-14 h-14 glass-card border-none bg-brand-primary text-white rounded-2xl flex items-center justify-center mb-10 group-hover:rotate-12 transition-transform">
                      {stream.icon}
                   </div>
                   <h3 className="text-3xl font-bold uppercase mb-4 leading-none">{stream.title}</h3>
                   <p className="font-mono text-[10px] uppercase font-bold text-[var(--brand-muted)] leading-relaxed">
                      {stream.desc}
                   </p>
                </div>

                <div className="mt-12 flex justify-between items-end border-t border-[var(--brand-border)] pt-8">
                   <div className="text-2xl font-bold tracking-tight">{stream.price}</div>
                   <button className="w-12 h-12 rounded-xl bg-brand-primary text-white flex items-center justify-center hover:scale-110 transition-transform active:scale-95 glow-primary">
                      <Zap className="w-5 h-5 fill-white" />
                   </button>
                </div>
              </motion.div>
            ))}

            <div className="sm:col-span-2 p-10 glass-card rounded-[40px] bg-brand-primary text-white border-none flex flex-col md:flex-row items-center justify-between gap-8 glow-primary">
               <div className="max-w-md">
                  <h4 className="text-2xl font-bold uppercase mb-2">Corporate Creative Sprints</h4>
                  <p className="font-mono text-xs font-bold uppercase text-white/70">Bringe Dein Team aus dem Office direkt an die CNC-Fräse. Radikaler Perspektivwechsel für Innovations-Prozesse.</p>
               </div>
               <a href="#kontakt" className="px-8 py-4 bg-white text-brand-primary rounded-2xl font-bold uppercase text-sm hover:scale-105 transition-transform">
                  Modul Anfragen
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
