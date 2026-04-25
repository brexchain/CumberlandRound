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
    <section id="equipment" className="py-32 bg-brand-bg relative overflow-hidden rounded-[80px] md:rounded-[200px] border-y-2 border-brand-primary/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="mb-24">
            <h2 className="text-[12vw] sm:text-[14vw] md:text-[10rem] font-display font-black uppercase text-brand-primary leading-[0.8] mb-8 transform -rotate-1">
               Arsenal <br/> <span className="text-brand-accent">Machinery</span>
            </h2>
            <div className="flex flex-wrap gap-4">
                <div className="px-6 py-2 bg-brand-accent text-white font-mono text-[10px] uppercase font-black rounded-full">Status: Operational</div>
                <div className="px-6 py-2 border-2 border-brand-primary text-brand-primary font-mono text-[10px] uppercase font-black rounded-full">Unit: C54_BASE</div>
            </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-16">
            {equipmentGroups.map((group, index) => (
              <motion.div 
                key={group.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="flex items-start gap-8">
                  <div className="relative">
                      <div className="w-24 h-24 bg-brand-primary text-brand-bg rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-lg">
                        {group.icon}
                      </div>
                      <span className="absolute -top-2 -left-2 font-mono text-[10px] font-black p-2 bg-brand-accent text-white rounded-full">{group.code}</span>
                  </div>
                  <div className="flex-1 border-b-2 border-brand-primary/10 pb-8">
                    <h3 className="text-4xl font-display font-black italic uppercase mb-4 text-brand-text group-hover:text-brand-primary">{group.title}</h3>
                    <p className="text-xl font-bold text-brand-text/60 leading-relaxed max-w-sm">
                      {group.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="sticky top-40">
             <div className="rounded-[80px] bg-brand-primary p-12 md:p-20 relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/20 rounded-full blur-3xl" />
                <Box className="w-16 h-16 mb-8 text-brand-accent" />
                <h3 className="text-5xl md:text-7xl font-display font-black italic uppercase leading-none mb-8 text-brand-bg">System <br/> Protocol</h3>
                
                <p className="text-2xl font-bold mb-12 border-l-4 border-brand-accent pl-6 italic text-brand-bg">
                   "Wir teilen nicht nur Werkzeug, sondern radikales Wissen. Die Maschine ist Dein Partner, nicht Dein Sklave."
                </p>

                <div className="space-y-6">
                    {[
                        'Inklusive für alle Mitglieder',
                        'Einweisung obligatorisch',
                        '24/7 Zugang nach Absprache',
                        'Fair-Use Protocol active'
                    ].map(rule => (
                        <div key={rule} className="flex items-center gap-4 font-mono text-[10px] uppercase font-black text-brand-bg">
                            <Wrench className="w-5 h-5 text-brand-accent" />
                            {rule}
                        </div>
                    ))}
                </div>

                <div className="mt-12 pt-8 border-t-2 border-brand-bg/20 flex justify-between items-end">
                    <div className="text-8xl font-display font-black opacity-10 leading-none text-brand-bg">C54</div>
                    <div className="w-24 h-px bg-brand-accent animate-pulse" />
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
