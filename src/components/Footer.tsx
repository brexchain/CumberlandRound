export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-bg pt-32 pb-24 border-t-2 border-brand-primary/10 relative overflow-hidden rounded-t-[100px] md:rounded-t-[200px] mb-24">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] aspect-square bg-brand-primary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-end">
          <div>
            <div className="flex items-center gap-4 mb-12">
               <span className="text-6xl font-display font-black italic uppercase bg-brand-primary text-brand-bg px-6 py-2 transform -skew-x-12">C54</span>
               <div className="h-px flex-grow bg-brand-primary/20" />
            </div>
            
            <h2 className="text-[14vw] md:text-9xl font-display italic font-black uppercase text-brand-text leading-none mb-12">
               Future <br/> <span className="text-brand-primary">Milled</span>
            </h2>

            <div className="flex flex-wrap gap-4">
                {['Instagram', 'WhatsApp', 'Email', 'Maps'].map(social => (
                    <a key={social} href="#" className="px-8 py-3 rounded-full border-2 border-brand-primary font-mono text-[10px] font-black uppercase hover:bg-brand-primary hover:text-brand-bg transition-all">
                        {social}
                    </a>
                ))}
            </div>
          </div>

          <div className="text-right">
             <div className="inline-block p-12 rounded-[80px] bg-brand-primary text-brand-bg text-left max-w-sm transform rotate-3 shadow-2xl relative">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                   <div className="w-4 h-4 bg-brand-accent rounded-full animate-ping" />
                </div>
                <p className="font-mono text-[10px] font-black uppercase tracking-widest mb-6 border-b border-brand-bg/20 pb-4">Status: Terminal_Active</p>
                <p className="text-2xl font-display italic font-black leading-tight uppercase">
                    "Chaos ist nur Ordnung, die wir noch nicht gefräst haben."
                </p>
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brand-primary/10 font-mono text-[8px] font-black uppercase tracking-widest text-brand-muted gap-4">
          <p>© 2026 CUMBERLAND54_SYSTEMS v{currentYear}.3.14</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-primary transition-colors">Impressum</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Datenschutz</a>
            <span className="opacity-20 hidden md:inline">SYSTEM_OK: 100%</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
