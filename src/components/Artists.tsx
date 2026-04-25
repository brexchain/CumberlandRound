import { motion } from 'motion/react';
import { ExternalLink, MessageCircle, Briefcase, Hammer } from 'lucide-react';

const artists = [
  {
    name: 'Hannah König',
    role: 'Bühnenbild & Leder',
    phone: '4917612345678',
    description: 'Transformation von Materie in Narrative. Hannah verbindet die schwere Haptik von Leder mit der ätherischen Welt des Theaters.',
    link: 'https://www.hannahkoenig.at/',
    accent: 'var(--color-brand-accent)',
    works: [
      'https://images.unsplash.com/photo-1544411047-c491e34a2450?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=800',
    ]
  },
  {
    name: 'Florian Tanzer',
    role: 'Keramik & Pixel',
    phone: '4917687654321',
    description: 'Wo Ton auf Daten trifft. Florian erschafft hybride Objekte, die sowohl im physischen als auch im digitalen Raum existieren.',
    link: 'https://www.cumberland54.com/?page_id=48',
    accent: 'var(--color-brand-secondary)',
    works: [
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1565191999001-551c187427bb?auto=format&fit=crop&q=80&w=800',
    ]
  }
];

export default function Artists() {
  const getWhatsAppBuyLink = (name: string, phone: string) => {
    const message = encodeURIComponent(`Hi ${name.split(' ')[0]}, ich bin über Cumberland54 auf dich gestoßen und würde gerne über ein Werk oder eine Zusammenarbeit anfragen!`);
    return `https://wa.me/${phone}?text=${message}`;
  };

  return (
    <section id="kuenstler" className="py-32 relative overflow-hidden bg-[var(--brand-bg)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-24 flex flex-col items-center text-center">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center text-brand-primary">
                    <Hammer className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--brand-text)]">The Ghost Collective</h2>
            </div>
            <h3 className="text-5xl md:text-[8rem] font-bold leading-[0.85] uppercase tracking-tighter mb-8 max-w-4xl text-center">
               Visionäre <span className="text-brand-primary">Macher</span>
            </h3>
            <p className="max-w-xl text-[var(--brand-muted)] text-lg leading-relaxed">
              Unsere Künstler fräsen sich durch die Materie. Ein Kollektiv aus Handwerker:innen, Coder:innen und Visionär:innen.
            </p>
        </div>

        <div className="space-y-32">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="glass-card p-10 md:p-14 rounded-[40px] hover:border-brand-primary transition-all duration-500 shadow-xl">
                    <span className="text-xs font-mono font-bold text-brand-primary mb-4 block tracking-[0.4em]">
                      {artist.role.toUpperCase()}
                    </span>
                    <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-none">
                      {artist.name}
                    </h3>
                    <p className="text-lg leading-relaxed text-[var(--brand-muted)] mb-10">
                      {artist.description}
                    </p>
                    
                    <div className="flex flex-col gap-4">
                      <a
                        href={getWhatsAppBuyLink(artist.name, artist.phone)}
                        className="w-full py-4 rounded-2xl bg-[#25D366] text-white flex items-center justify-center gap-3 font-bold text-xs uppercase hover:scale-[1.02] transition-transform shadow-lg"
                      >
                        <MessageCircle className="w-5 h-5" />
                        <span>Work with {artist.name.split(' ')[0]}</span>
                      </a>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <button 
                          onClick={() => window.open(getWhatsAppBuyLink(artist.name, artist.phone), '_blank')}
                          className="py-4 rounded-2xl bg-brand-primary text-white flex items-center justify-center gap-2 font-bold text-[10px] uppercase hover:opacity-90 transition-all glow-primary"
                        >
                          <Briefcase className="w-4 h-4" />
                          Collab
                        </button>
                        <a
                           href={artist.link}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="py-4 rounded-2xl glass-card flex items-center justify-center gap-2 font-bold text-[10px] uppercase hover:bg-[var(--brand-border)] transition-all"
                        >
                           <ExternalLink className="w-4 h-4" />
                           Bio
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`lg:col-span-7 grid grid-cols-2 gap-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                   {artist.works.map((img, i) => (
                     <div key={i} className={`relative rounded-3xl overflow-hidden glass-card p-0 h-[400px] ${i === 0 ? 'mt-0' : 'mt-12'}`}>
                        <img 
                          src={img} 
                          alt="Artist work" 
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-4 left-4 glass-card px-4 py-1.5 rounded-full text-[8px] font-mono font-bold uppercase text-white bg-black/40">
                          PROJ_0{i+1}
                        </div>
                     </div>
                   ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
