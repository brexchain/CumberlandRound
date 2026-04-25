import { motion } from 'motion/react';
import { Hammer, Scissors, Layers, Cpu, Box, Wrench } from 'lucide-react';

const equipmentGroups = [
  {
    title: 'Holz & Glas',
    icon: <Layers className="w-8 h-8" />,
    desc: 'Bandsägen, Kappsägen, Zylinderschleifmaschinen, Glasschmelzofen.',
    code: 'UNIT_01'
  },
  {
    title: 'Metall & Keramik',
    icon: <Hammer className="w-8 h-8" />,
    desc: 'MIG/MAG Schweißgerät, WIG-Anlage, Brennöfen für Keramik.',
    code: 'UNIT_02'
  },
  {
    title: 'Stoff & Leder',
    icon: <Scissors className="w-8 h-8" />,
    desc: 'Dürkopp Adler Industrie-Nähmaschinen, Lederspaltmaschinen.',
    code: 'UNIT_03'
  },
  {
    title: 'Präzision & Sand',
    icon: <Cpu className="w-8 h-8" />,
    desc: 'Sandstrahlkabine, Feinmechanik-Tools, Plotter.',
    code: 'UNIT_04'
  }
];

export default function Equipment() {
  return (
    <section id="equipment" className="py-32 relative overflow-hidden bg-[var(--brand-bg)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="mb-20">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center text-brand-primary">
                    <Wrench className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--brand-text)]">Technisches Arsenal</h2>
            </div>
            <h3 className="text-5xl md:text-[8rem] font-bold leading-[0.85] uppercase tracking-tighter mb-8">
               Advanced <span className="text-brand-primary">Machinery</span>
            </h3>
            <div className="flex flex-wrap gap-4">
                <div className="px-6 py-2 glass-card border-brand-primary/20 text-brand-primary font-mono text-[10px] uppercase font-bold rounded-full flex items-center gap-2">
                   <div className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse" />
                   Status: Operational
                </div>
            </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {equipmentGroups.map((group, index) => (
            <motion.div 
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-10 rounded-[32px] flex flex-col justify-between group hover:border-brand-primary transition-all duration-500"
            >
              <div>
                 <div className="flex justify-between items-start mb-8">
                    <div className="p-4 bg-brand-primary/10 text-brand-primary w-fit rounded-2xl group-hover:bg-brand-primary group-hover:text-white transition-colors">
                       {group.icon}
                    </div>
                    <span className="font-mono text-[10px] font-bold text-[var(--brand-muted)] opacity-50">{group.code}</span>
                 </div>
                 <h4 className="text-3xl font-bold mb-4 uppercase leading-none">{group.title}</h4>
                 <p className="text-[var(--brand-muted)] leading-relaxed text-sm">
                   {group.desc}
                 </p>
              </div>
              <div className="mt-8 pt-8 border-t border-[var(--brand-border)] flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                 <span className="text-[10px] font-mono font-bold text-brand-primary">SEC_INIT_V2.0</span>
                 <Wrench className="w-4 h-4 text-brand-primary" />
              </div>
            </motion.div>
          ))}
          
          <div className="lg:col-span-3 glass-card p-10 md:p-16 rounded-[48px] bg-brand-primary text-white border-none overflow-hidden relative glow-primary">
             <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
             <div className="grid md:grid-cols-2 gap-12 relative z-10 items-center">
                <div>
                   <h3 className="text-5xl md:text-7xl font-bold uppercase leading-none mb-8">System <br/> Protocol</h3>
                   <p className="text-xl md:text-2xl font-medium leading-tight mb-12 opacity-90 italic border-l-4 border-white pl-6">
                      "Wir teilen nicht nur Werkzeuge, sondern radikales Wissen. Die Maschine ist Dein Partner, nicht Dein Sklave."
                   </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   {[
                       'Inklusive für alle Mitglieder',
                       'Einweisung obligatorisch',
                       '24/7 Zugang nach Absprache',
                       'Fair-Use Protocol active'
                   ].map(rule => (
                       <div key={rule} className="p-6 glass-card border-white/20 bg-white/10 text-white rounded-[32px] flex items-center gap-4">
                           <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-primary">
                             <Wrench className="w-5 h-5" />
                           </div>
                           <span className="text-[10px] font-mono font-bold uppercase leading-tight">{rule}</span>
                       </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
