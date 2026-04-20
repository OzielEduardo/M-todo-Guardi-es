import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Scroll, Shield, Brain, Swords, Flame, Heart, Zap, History, Mountain, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from "../constants/images";

const LorePage = () => {
  return (
    <div className="min-h-screen bg-sombra text-ar font-sans selection:bg-sagrado/30 overflow-x-hidden relative">
      {/* Background Image Wrapper */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <img 
          src={IMAGES.LORE_BG} 
          alt="Original Lore Background" 
          className="w-full h-full object-cover grayscale opacity-[0.05] contrast-125 brightness-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sombra via-transparent to-sombra" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-sombra/90 backdrop-blur-xl border-b border-white/[0.03]">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <ArrowLeft className="w-5 h-5 text-sagrado group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium opacity-60 group-hover:opacity-100 transition-opacity uppercase tracking-widest">Voltar para Início</span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <img 
                src={IMAGES.LOGO} 
                alt="Logo" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-sm font-display font-bold tracking-wider hidden sm:inline-block">GUARDIÕES</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-40 pb-20 px-4 relative overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-sagrado/[0.05] to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-sagrado/10 text-sagrado border border-sagrado/20 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              A História e o Legado
            </span>
            <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-8 leading-[0.9]">
              OS <span className="text-sagrado italic font-medium">GUARDIÕES</span>
            </h1>
            <div className="w-24 h-1 bg-sagrado mx-auto mb-12 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)]" />
            <p className="text-xl md:text-2xl text-ar/80 font-light leading-relaxed max-w-2xl mx-auto italic">
              "Antes de vencer o mundo, seu filho precisa aprender a vencer a si mesmo."
            </p>
          </motion.div>
        </div>
      </header>

      {/* Story Content */}
      <main className="max-w-4xl mx-auto px-4 pb-32">
        <section className="space-y-24">
          
          {/* Introduction */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="prose prose-invert prose-lg max-w-none space-y-8"
          >
            <p className="text-2xl font-light leading-relaxed border-l-2 border-sagrado/30 pl-8 italic text-white/90">
              No período mais instável do Japão feudal, quando guerras entre clãs eram constantes e a honra de um homem valia mais que sua própria vida, existia uma ordem pouco conhecida… mas profundamente respeitada.
            </p>
            <div className="flex flex-col gap-4 text-ar/70">
              <p>Eles não eram os mais fortes no campo de batalha. Nem os mais temidos.</p>
              <p className="text-white font-bold text-3xl tracking-tight">Mas eram os mais difíceis de quebrar.</p>
              <p className="text-xl">Eles eram chamados de <span className="text-sagrado font-bold">Guardiões</span>.</p>
            </div>
          </motion.div>

          {/* A Origem */}
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3 space-y-6">
              <h2 className="text-3xl font-bold flex items-center gap-4 text-white">
                <span className="text-sagrado">🏯</span> A ORIGEM
              </h2>
              <div className="space-y-4 text-ar/80 leading-relaxed font-light">
                <p>
                  Enquanto samurais eram treinados para servir seus senhores, os Guardiões seguiam um caminho diferente.
                </p>
                <p className="text-white text-lg font-medium">
                  Eles eram treinados para dominar algo que nenhum inimigo poderia atacar: a própria mente.
                </p>
                <p>
                  A ordem nasceu em um dojo isolado nas montanhas, fundada por um antigo guerreiro que havia sobrevivido a inúmeras batalhas. Não por ser o mais forte. Mas por nunca perder o controle de si.
                </p>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 relative group">
                <div className="absolute inset-0 bg-sagrado/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]" />
                <p className="relative z-10 text-xl italic font-serif leading-relaxed text-sagrado">
                  “Um guerreiro não é derrotado quando cai… mas quando perde o controle.”
                </p>
              </div>
            </div>
          </div>

          {/* O Caminho */}
          <div className="bg-white/[0.01] border border-white/[0.03] rounded-[3rem] p-12 space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold tracking-tight text-white italic">⚔️ O CAMINHO DOS GUARDIÕES</h2>
              <p className="text-ar/60 uppercase tracking-widest text-xs font-bold font-mono">Início do Caminho Invisível</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-6">
                <p className="text-lg font-light text-ar/80">
                  Diferente dos outros, o treinamento não começava com combate. Começava com o invisível.
                </p>
                <ul className="space-y-4">
                  {[
                    { label: "Controle emocional", icon: Heart },
                    { label: "Disciplina", icon: Shield },
                    { label: "Foco", icon: Zap },
                    { label: "Resiliência", icon: Mountain },
                    { label: "Consciência", icon: Brain }
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-white font-medium">
                      <div className="w-8 h-8 rounded-lg bg-sagrado/10 flex items-center justify-center text-sagrado">
                        <item.icon className="w-4 h-4" />
                      </div>
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-sombra/50 p-8 rounded-3xl border border-white/5 flex flex-col justify-center gap-6">
                <p className="text-ar/60 text-sm uppercase tracking-widest font-bold">Antes de lutar, aprendiam a:</p>
                <div className="space-y-4">
                  <p className="text-xl text-white font-bold border-b border-sagrado/20 pb-2">Não reagir impulsivamente…</p>
                  <p className="text-xl text-white font-bold border-b border-sagrado/20 pb-2">Não desistir diante da dificuldade…</p>
                  <p className="text-xl text-white font-bold pb-2">Não se perder dentro de si mesmos.</p>
                </div>
              </div>
            </div>
          </div>

          {/* O Verdadeiro Poder */}
          <div className="relative py-12">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sagrado/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sagrado/20 to-transparent" />
            
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="md:w-1/3">
                 <div className="w-full aspect-square rounded-[2rem] bg-gradient-to-br from-sagrado/20 to-sombra flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-20 group-hover:scale-110 transition-transform duration-1000">
                       <History className="w-full h-full text-sagrado" />
                    </div>
                    <Brain className="w-24 h-24 text-sagrado relative z-10" />
                 </div>
              </div>
              <div className="md:w-2/3 space-y-8">
                <h2 className="text-3xl font-bold text-white">🧠 O VERDADEIRO PODER</h2>
                <div className="space-y-6 text-ar/80 leading-relaxed font-light">
                  <p>
                    Os Guardiões sabiam que a maior batalha não acontecia no campo de guerra. <span className="text-white font-bold">Acontecia dentro de cada um.</span>
                  </p>
                  <div className="flex gap-4">
                    <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white/60">Medo</span>
                    <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white/60">Raiva</span>
                    <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white/60">Insegurança</span>
                  </div>
                  <p>Eles não ignoravam essas emoções. Eles aprendiam a controlá-las.</p>
                  <p className="text-xl text-sagrado font-bold italic">
                    "Sem controle interno, não existe força real."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Missão e Legado */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 space-y-6">
              <h3 className="text-2xl font-bold text-white">🔥 A MISSÃO</h3>
              <p className="text-ar/70 leading-relaxed">
                Os Guardiões não existiam para conquistar territórios. Existiam para formar pessoas. Em tempos de guerra, protegiam vilarejos. Em tempos de paz, formavam jovens.
              </p>
              <p className="text-white font-medium text-lg">Eles não criavam soldados. Criavam indivíduos preparados para a vida.</p>
            </div>
            <div className="p-10 rounded-[3rem] bg-sagrado/5 border border-sagrado/10 space-y-6 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-sagrado/5 blur-3xl" />
              <h3 className="text-2xl font-bold text-white">🌎 O LEGADO</h3>
              <p className="text-ar/70 leading-relaxed">
                Com o passar dos anos, guerras terminaram… clãs desapareceram… histórias foram esquecidas. Mas o princípio dos Guardiões nunca deixou de existir.
              </p>
              <p className="text-white font-bold italic">Ele apenas aguardava o momento certo para retornar.</p>
            </div>
          </div>

          {/* Os Guardiões */}
          <div className="text-center space-y-12 pt-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">Os <span className="text-sagrado">GUARDIÕES</span></h2>
              <p className="text-ar/50 text-sm font-medium">O Renascimento de uma Filosofia</p>
            </div>

            <div className="bg-gradient-to-b from-white/[0.03] to-transparent p-12 rounded-[3.5rem] border border-white/10 max-w-4xl mx-auto shadow-2xl space-y-12">
              <div className="space-y-6 text-left max-w-2xl mx-auto">
                <p className="text-lg text-ar/80 leading-relaxed">
                  Hoje, esse caminho renasce. Os Guardiões não são apenas um treinamento físico.
                </p>
                <p className="text-xl text-white font-bold leading-relaxed italic">
                  É a continuação de uma filosofia antiga, agora potencializada por conhecimentos modernos como:
                </p>
                <ul className="space-y-4">
                  {[
                    "Neurociência aplicada ao desenvolvimento infantil",
                    "Técnicas de respiração (breathwork) para controle emocional",
                    "Tendências e estudos sobre comportamento e inteligência emocional infantil"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-ar/80">
                      <Zap className="w-5 h-5 text-sagrado shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-lg text-sagrado font-medium pt-4 border-t border-white/5">
                  Tudo isso adaptado de forma prática, acessível e eficaz para crianças.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-6">
                  <p className="text-sm uppercase tracking-widest text-ar/40 font-bold">Vivemos em um mundo onde muitas crianças:</p>
                  <ul className="space-y-4">
                    {[
                      "se distraem com facilidade",
                      "não aprendem a lidar com emoções",
                      "desistem diante das primeiras dificuldades"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-white/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 rounded-3xl bg-sagrado/5 border border-sagrado/10 space-y-6">
                  <p className="text-sm uppercase tracking-widest text-sagrado/60 font-bold">Aqui, elas aprendem o que realmente importa:</p>
                  <ul className="space-y-4 font-bold">
                    {[
                      "controlar a mente",
                      "desenvolver disciplina",
                      "fortalecer o emocional",
                      "construir confiança real"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-white">
                        <CheckCircle2 className="w-5 h-5 text-sagrado" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-12 pt-12">
               <p className="text-2xl text-white font-light italic opacity-80 max-w-2xl mx-auto leading-relaxed">
                  "Porque antes de enfrentar o mundo… é preciso aprender a enfrentar a si mesmo."
               </p>
               <div className="space-y-8">
                 <div className="w-16 h-px bg-white/10 mx-auto" />
                 <p className="text-2xl text-white font-bold opacity-60 italic">Nem todo guerreiro é um Guardião.</p>
                 <div className="inline-flex flex-col gap-4">
                   <p className="text-ar/40 uppercase tracking-[0.4em] text-[10px] font-bold">Mas todo Guardião aprende uma coisa primeiro:</p>
                   <p className="text-4xl md:text-5xl text-sagrado font-black tracking-tight leading-[1.1] max-w-2xl mx-auto">
                     “Antes de vencer o mundo… seu filho precisa aprender a vencer a si mesmo.”
                   </p>
                 </div>
               </div>
            </div>
          </div>

          {/* Final CTA Button */}
          <div className="pt-20 text-center">
            <a 
              href="https://guardian-quest-form.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-sagrado text-sombra px-10 py-5 rounded-2xl font-black text-lg transition-all hover:scale-105 shadow-2xl shadow-sagrado/20 border-b-4 border-sagrado/40"
            >
              Tenho interesse
              <Swords className="w-6 h-6" />
            </a>
          </div>

        </section>
      </main>

      <footer className="py-20 border-t border-white/[0.03] bg-black/40">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-12">
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

          <p className="text-ar/20 text-[10px] uppercase tracking-[0.3em] font-bold">© 2026 GUARDIÕES • LEGADO ANTIGO, TREINAMENTO MODERNO</p>
        </div>
      </footer>
    </div>
  );
};

export default LorePage;
