import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, RefreshCcw } from 'lucide-react';

export default function ManifestoGenerator() {
  const [manifesto, setManifesto] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState('');

  const generateManifesto = async () => {
    if (!keyword) return;
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Generate a short, avant-garde, brutalist artistic manifesto (max 40 words) in German based on the keyword: "${keyword}". Use aggressive verbs and short sentences. Make it sound like a 1920s futurist manifesto but for 2026.`,
      });
      setManifesto(response.text || '');
    } catch (error) {
      console.error("Manifesto generation failed", error);
      setManifesto("DIE MASCHINE SCHLÄFT NIE. DAS METALL SCHREIT. WIR SCHAFFEN.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-brand-primary text-brand-bg relative overflow-hidden rounded-[80px] md:rounded-[200px]">
      <div className="absolute top-0 left-0 w-full mb-8 marquee-container !bg-transparent !border-brand-bg/10">
        <div className="marquee-content !text-brand-bg/10 !text-[8rem]">
          RADIKAL • EXPERIMENT • CHAOS • CUMBERLAND54 • 
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-8xl md:text-[10rem] font-display font-black uppercase leading-[0.8] mb-12 transform -rotate-3">
              Vision <br/> <span className="text-brand-accent">Engine</span>
            </h2>
            <p className="text-xl font-mono font-bold uppercase tracking-tight mb-12 max-w-sm">
              Füttere die Maschine mit einem Wort. Erhalte eine radikale künstlerische Vision.
            </p>
            
            <div className="relative group max-w-md">
              <input 
                type="text" 
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="STICHWORT_INPUT"
                className="w-full bg-brand-bg text-brand-primary p-8 font-mono text-xl rounded-full border-4 border-brand-bg focus:border-brand-accent outline-none transition-all placeholder:text-brand-primary/30"
              />
              <button 
                onClick={generateManifesto}
                disabled={loading}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-16 bg-brand-accent text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform active:scale-95 shadow-xl"
              >
                {loading ? <RefreshCcw className="w-8 h-8 animate-spin" /> : <Sparkles className="w-8 h-8" />}
              </button>
            </div>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              {manifesto && (
                <motion.div
                  initial={{ opacity: 0, x: 100, rotate: 5 }}
                  animate={{ opacity: 1, x: 0, rotate: -2 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="bg-white p-12 text-brand-bg rounded-[60px] shadow-2xl relative"
                >
                  <div className="absolute -top-6 right-6 bg-brand-accent text-white px-4 py-1 rounded-full font-mono text-[10px] font-black uppercase tracking-widest">
                    OUTPUT_ID: {Math.floor(Math.random() * 9999)}
                  </div>
                  
                  <div className="border-b-2 border-brand-bg/10 pb-8 mb-8">
                     <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => <div key={i} className="w-2 h-2 bg-brand-accent rounded-full" />)}
                     </div>
                     <p className="text-2xl md:text-4xl font-display font-black leading-tight uppercase">
                        {manifesto}
                     </p>
                  </div>

                  <div className="flex justify-between items-end font-mono text-[10px] font-black uppercase tracking-widest text-brand-bg/40">
                    <div>
                        <p>C54_GEN_VERSION: 3.14</p>
                        <p>STAMP_OFFICIAL: YES</p>
                    </div>
                    <div className="w-16 h-16 border-2 border-brand-bg/20 rounded-full flex items-center justify-center rotate-45">
                        C54
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {!manifesto && (
              <div className="aspect-square border-4 border-dashed border-brand-bg/20 rounded-full flex items-center justify-center">
                 <p className="font-mono text-brand-bg/20 animate-pulse text-xs uppercase tracking-[0.5em]">Waiting for Input...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
