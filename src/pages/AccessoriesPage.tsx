import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IMAGES } from "../constants/images";
import { 
  ArrowLeft, 
  ShoppingBag,
  Instagram,
  X
} from "lucide-react";

const AccessoriesPage = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const products = [
    { name: "Kimono Branco", price: "---", img: IMAGES.PRODUCTS.KIMONO_BRANCO },
    { name: "Kimono Preto", price: "---", img: IMAGES.PRODUCTS.KIMONO_PRETO },
    { name: "Boné Branco", price: "---", img: IMAGES.PRODUCTS.BONE_BRANCO },
  ];

  return (
    <div className="min-h-screen bg-sombra text-white selection:bg-sagrado selection:text-sombra overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-sombra/90 backdrop-blur-xl border-b border-white/[0.03]">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <ArrowLeft className="w-5 h-5 text-sagrado group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium opacity-60 group-hover:opacity-100 transition-opacity uppercase tracking-widest">Início</span>
          </Link>
          
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src={IMAGES.LOGO} 
                alt="Logo" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-sm font-display font-bold tracking-wider uppercase">GUARDIÕES</span>
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tighter uppercase italic">Acessórios</h1>
              <p className="text-sagrado text-xl font-medium mb-8 uppercase tracking-[0.2em]">Equipamentos Oficiais</p>
              <div className="w-24 h-1 bg-sagrado mx-auto mb-12 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.5)]" />
              <p className="text-ar text-lg max-w-2xl mx-auto opacity-60 leading-relaxed italic">
                Prepare seu herói com a armadura certa para sua jornada. Cada peça carrega o legado dos Guardiões.
              </p>
            </motion.div>
          </div>

          {/* Product Grid */}
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {products.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group bg-white/[0.01] border border-white/[0.03] rounded-[3rem] overflow-hidden hover:border-sagrado/30 transition-all duration-700 hover:shadow-2xl hover:shadow-sagrado/10"
                >
                  <div 
                    className="aspect-[4/5] relative overflow-hidden bg-white/[0.02] cursor-zoom-in"
                    onClick={() => setSelectedImg(p.img)}
                  >
                    <img 
                      src={p.img} 
                      alt={p.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sombra via-transparent to-transparent opacity-60" />
                    
                    <div className="absolute top-8 right-8">
                      <div className="w-12 h-12 rounded-full bg-sombra/80 backdrop-blur-md border border-white/10 flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <ShoppingBag className="w-5 h-5 text-sagrado" />
                      </div>
                    </div>
                  </div>

                  <div className="p-10 text-center">
                    <h3 className="text-2xl font-bold mb-3 tracking-tight">{p.name}</h3>
                    <div className="inline-block px-6 py-2 rounded-full bg-sagrado/10 border border-sagrado/20 mb-8">
                      <span className="text-sagrado font-display font-bold text-sm tracking-widest">R$ {p.price}</span>
                    </div>
                    
                    <button className="w-full py-5 rounded-2xl bg-white/[0.03] text-white text-[11px] font-black uppercase tracking-[0.3em] border border-white/10 hover:bg-sagrado hover:text-sombra hover:border-sagrado transition-all duration-500 transform group-hover:translate-y-[-4px]">
                      Em breve
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-24 text-center border border-dashed border-white/10 rounded-[3rem] bg-white/[0.01]"
            >
              <ShoppingBag className="w-16 h-16 text-sagrado/20 mx-auto mb-6" />
              <p className="text-ar/40 uppercase tracking-[0.3em] font-bold text-sm">Novos itens em breve</p>
            </motion.div>
          )}
        </div>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] bg-sombra/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImg(null)}
                className="absolute -top-12 right-0 md:-right-12 text-white/50 hover:text-sagrado transition-colors p-2"
              >
                <X className="w-8 h-8" />
              </button>
              <img 
                src={selectedImg} 
                alt="Enlarged view" 
                className="max-w-full max-h-screen object-contain rounded-2xl shadow-2xl shadow-sagrado/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="py-20 border-t border-white/[0.03] bg-black/20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-10">
          <Link to="/" className="flex flex-col items-center gap-6 text-ar/30 text-[11px] uppercase tracking-[0.3em] font-bold group">
            <div className="w-16 h-16 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
              <img 
                src={IMAGES.LOGO} 
                alt="Logo" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </Link>
          
          <nav className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            <Link to="/" className="text-ar/40 hover:text-sagrado text-xs font-bold uppercase tracking-widest transition-colors">Início</Link>
            <Link to="/lore" className="text-ar/40 hover:text-sagrado text-xs font-bold uppercase tracking-widest transition-colors">História</Link>
            <Link to="/metodo" className="text-ar/40 hover:text-sagrado text-xs font-bold uppercase tracking-widest transition-colors">Método</Link>
            <Link to="/acessorios" className="text-ar/40 hover:text-sagrado text-xs font-bold uppercase tracking-widest transition-colors">Acessórios</Link>
          </nav>

          <p className="text-ar/20 text-[10px] uppercase tracking-[0.3em] font-bold">© 2026 GUARDIÕES • LOJA OFICIAL</p>
        </div>
      </footer>
    </div>
  );
};

export default AccessoriesPage;
