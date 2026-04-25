import { motion } from 'motion/react';
import { LayoutGrid, Info, ArrowUpRight, Settings } from 'lucide-react';

const rooms = [
  { id: '02.1', title: 'Ladenlokal', desc: 'Repräsentationsfläche für Ausstellungen und Pop-ups.', size: 'col-span-2 row-span-2' },
  { id: '02.2', title: 'Co-Working', desc: 'Digitaler Workspace & Netzwerk-Hub.', size: 'col-span-1 row-span-1' },
  { id: '02.3', title: 'Nähzimmer', desc: 'Textil & Lederbearbeitung.', size: 'col-span-1 row-span-2' },
  { id: '02.4', title: 'Holz', desc: 'Großer Maschinenpark & Zuschnitt.', size: 'col-span-1 row-span-1' },
  { id: '02.5', title: 'Metall', desc: 'Schweißen & Metallbau.', size: 'col-span-2 row-span-1' },
  { id: '02.6', title: 'Special', desc: 'Spezialwerkstätten & Lager.', size: 'col-span-1 row-span-1' },
];

export default function Rooms() {
  return (
    <section id="raeume" className="py-24 bg-brand-bg px-6 lg:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-brand-primary" />
              <span className="font-mono text-brand-primary uppercase text-xs">Sector : Mapping</span>
            </div>
            <h2 className="text-[12vw] sm:text-[14vw] md:text-[9rem] font-display font-black uppercase leading-[0.8] mb-8 overflow-hidden">
              Fräsen <br/> <span className="text-brand-secondary">Die Area</span>
            </h2>
          </div>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 border-4 border-brand-primary hidden lg:flex items-center justify-center rounded-full"
          >
            <Settings className="w-12 h-12 text-brand-primary" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-[60px] border-2 border-brand-primary/20 p-10 group relative overflow-hidden transition-all duration-500 hover:border-brand-primary`}
            >
              <div className="absolute inset-0 bg-brand-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0 rounded-full scale-150" />
              
              <div className="relative z-10 flex flex-col justify-between h-56">
                <div className="flex justify-between items-start">
                  <span className="font-mono text-xs font-bold text-brand-primary group-hover:text-brand-bg transition-colors">
                    UNIT_{room.id}
                  </span>
                  <ArrowUpRight className="w-6 h-6 text-brand-text group-hover:text-brand-bg transition-colors" />
                </div>
                
                <div>
                  <h4 className="text-4xl font-display font-black uppercase leading-none mb-3 group-hover:text-brand-bg transition-colors">
                    {room.title}
                  </h4>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-brand-muted group-hover:text-brand-bg/70 transition-colors">
                    {room.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          
          <motion.a
            href="#kontakt"
            className="md:col-span-2 rounded-[60px] bg-brand-accent flex items-center justify-center p-12 relative overflow-hidden group border-4 border-brand-bg"
          >
             <div className="absolute inset-0 bg-brand-primary opacity-20 scale-150 rounded-full translate-y-20 group-hover:translate-y-0 transition-transform duration-700" />
             <div className="text-center relative z-10">
                <p className="font-mono text-xs uppercase font-black text-white mb-4 tracking-[0.4em]">RESIDENCY_ONE_WEEK</p>
                <h3 className="text-[12vw] md:text-7xl font-display font-black text-white uppercase leading-none">
                  Schnittstelle <br/> <span className="text-brand-primary underline underline-offset-8">Buchen</span>
                </h3>
             </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

