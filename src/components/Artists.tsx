import { motion } from 'motion/react';
import { ExternalLink, MessageCircle, ShoppingBag } from 'lucide-react';

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
]

export default function Artists() {
  const getWhatsAppBuyLink = (name: string, phone: string) => {
    const message = encodeURIComponent(`Hi ${name.split(' ')[0]}, ich bin über Cumberland54 auf dich gestoßen und würde gerne über ein Werk oder eine Zusammenarbeit anfragen!`);
    return `https://wa.me/${phone}?text=${message}`;
  };

  return (
    <section id="kuenstler" className="py-24 bg-brand-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono text-brand-primary">SEC_04</span>
              <div className="h-[2px] w-12 bg-brand-primary" />
            </div>
            <h2 className="text-[16vw] md:text-9xl font-display font-black uppercase text-brand-text leading-none overflow-hidden">
              Schnitt <br/> <span className="text-brand-primary">Die Geister</span>
            </h2>
          </div>
          <p className="max-w-xs font-mono text-[10px] uppercase tracking-[0.3em] text-brand-muted">
            Unsere Künstler fräsen sich durch die Materie. Supporte lokales Handwerk direkt.
          </p>
        </div>

        <div className="space-y-64">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 relative z-10">
                <div className="lg:col-span-5 order-2 lg:order-1">
                  <div className="rounded-[60px] border-2 border-brand-primary/20 p-12 bg-brand-bg/50 backdrop-blur-xl transition-all hover:border-brand-primary">
                    <span className="text-xs font-mono text-brand-primary mb-4 block tracking-[0.4em]">
                      {artist.role.toUpperCase()}
                    </span>
                    <h3 className="text-5xl md:text-7xl font-display font-black mb-8 text-brand-text">
                      {artist.name}
                    </h3>
                    <p className="text-xl leading-relaxed text-brand-text/70 mb-10 font-bold">
                      {artist.description}
                    </p>
                    
                    <div className="flex flex-col gap-4">
                      <a
                        href={getWhatsAppBuyLink(artist.name, artist.phone)}
                        className="w-full py-5 rounded-full bg-[#25D366] text-white flex items-center justify-center gap-3 font-mono text-[10px] font-black uppercase hover:scale-105 transition-transform shadow-lg"
                      >
                        <MessageCircle className="w-5 h-5" />
                        <span>Anfrage via WhatsApp</span>
                      </a>
                      
                      <div className="flex gap-4">
                        <a
                          href={artist.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-grow py-5 rounded-full border-2 border-brand-primary flex items-center justify-center gap-2 font-mono text-[10px] uppercase font-black hover:bg-brand-primary hover:text-brand-bg transition-all"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Portfolio
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-12">
                   {artist.works.map((img, i) => (
                     <motion.div
                      key={i}
                      whileInView={{ x: i % 2 === 0 ? 20 : -20, rotate: i % 2 === 0 ? 1 : -1 }}
                      className="relative w-full aspect-video rounded-[60px] border-2 border-brand-primary/20 overflow-hidden"
                     >
                        <img 
                          src={img} 
                          alt="Artist work" 
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100" 
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute bottom-6 right-10 bg-brand-primary text-brand-bg px-6 py-2 rounded-full font-mono text-[10px] font-black uppercase">
                          C54_WORK_0{i+1}.RAW
                        </div>
                     </motion.div>
                   ))}
                </div>
              </div>

              {/* Huge Background Text Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-[20vw] font-display font-black opacity-5 pointer-events-none text-brand-primary whitespace-nowrap overflow-hidden">
                {artist.name.toUpperCase()}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
