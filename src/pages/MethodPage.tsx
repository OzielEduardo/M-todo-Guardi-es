import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Shield, Brain, Wind, Swords, BookOpen, UserCheck, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const MethodPage = () => {
  return (
    <div className="min-h-screen bg-sombra text-ar font-sans selection:bg-sagrado/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-sombra/90 backdrop-blur-xl border-b border-white/[0.03]">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <ArrowLeft className="w-5 h-5 text-sagrado group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium opacity-60 group-hover:opacity-100 transition-opacity uppercase tracking-widest">Voltar para Início</span>
          </Link>
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src="https://lh3.googleusercontent.com/d/1gNAqtTkkfhRBu5kjOUrtXaW-EZ2Qzdn5" 
                alt="Logo" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-sm font-display font-bold tracking-wider">MÉTODO GUARDIÕES</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-40 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-sagrado/[0.03] to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 rounded-full bg-sagrado/10 text-sagrado border border-sagrado/20 text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
          >
            Aprofundamento Metodológico
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-8 leading-[1.1]"
          >
            O Princípio Fundamental e a <span className="text-sagrado italic font-medium">Disrupção do Comportamento</span>
          </motion.h1>
        </div>
      </header>

      {/* Content Sections */}
      <main className="max-w-4xl mx-auto px-4 pb-32 space-y-24">
        
        {/* Intro Section */}
        <section className="space-y-8 opacity-90 leading-relaxed">
          <p className="text-xl md:text-2xl font-light text-ar/80">
            Vivemos uma geração de crianças mais ansiosas, impulsivas e emocionalmente fragmentadas. 
            Nunca houve tanto acesso à informação — e, ao mesmo tempo, tanta dificuldade em lidar com frustrações, limites e relações.
          </p>
          <p className="text-lg opacity-70">
            Muitos pais estão sobrecarregados. Não por falta de amor, mas por falta de ferramentas e a educação emocional 
            não foi ensinada a eles. Hoje a demanda das crianças é maior do que nunca.
          </p>
          <div className="p-8 bg-white/[0.02] border border-white/[0.05] rounded-3xl space-y-4">
            <h3 className="text-sagrado font-bold uppercase tracking-widest text-xs mb-4">A Confusão Contemporânea</h3>
            <p className="text-lg font-medium leading-relaxed italic">
              "Amor incondicional sendo confundido com ausência de limites."
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-white/[0.03] rounded-xl border border-white/[0.05]">
                <p className="text-xs text-ar/40 uppercase mb-2">O Amor é</p>
                <p className="font-bold text-white">Incondicional</p>
              </div>
              <div className="p-4 bg-white/[0.03] rounded-xl border border-white/[0.05]">
                <p className="text-xs text-ar/40 uppercase mb-2">A Relação é</p>
                <p className="font-bold text-white">Condicional</p>
                <p className="text-[10px] opacity-40 mt-1">(Comportamentos, privilégios e confiança)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Context Grid */}
        <section className="grid md:grid-cols-2 gap-12 pt-12 border-t border-white/[0.05]">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-agua/20 flex items-center justify-center text-agua text-sm">A</span>
              Amor Incondicional
            </h2>
            <p className="text-sm tracking-wide uppercase font-bold text-agua opacity-60">A Base Emocional</p>
            <p className="text-ar/70 leading-relaxed">
              O filho precisa ter absoluta segurança de que é amado independente do que faz. 
              Ele erra, desobedece e falha, mas continua amado e pertencendo.
            </p>
            <p className="text-ar/60 italic text-sm">
              Essa base constrói segurança interna, autoestima saudável e vínculo forte. Sem isso, a criança cresce tentando merecer amor, gerando ansiedade e insegurança.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-fogo/20 flex items-center justify-center text-fogo text-sm">B</span>
              Relação Condicional
            </h2>
            <p className="text-sm tracking-wide uppercase font-bold text-fogo opacity-60">A Construção do Caráter</p>
            <p className="text-ar/70 leading-relaxed">
              Amor não pode ser negociado, mas comportamento precisa ser direcionado. Confiança, liberdade, privilégios e autonomia devem ser conquistados através do comportamento.
            </p>
            <p className="text-ar/60 italic text-sm">
              Ações geram consequências, e a criança precisa aprender isso desde cedo.
            </p>
          </div>
        </section>

        {/* Attention Point */}
        <section className="bg-gradient-to-br from-white/[0.03] to-transparent p-10 rounded-[40px] border border-white/[0.05] relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-32 h-32 bg-sagrado/5 blur-3xl rounded-full" />
          <h2 className="text-xl font-bold mb-6 text-sagrado">Atenção na Educação Atual</h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto leading-relaxed italic">
            "A ausência de presença emocional na rotina tem gerado uma sensação de distanciamento compensada com mais concessões e menos limites."
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-12">
            <div className="p-4 text-sm font-medium border border-white/5 rounded-2xl bg-sombra/50 italic opacity-80">Afeto constante, com limites firmes.</div>
            <div className="p-4 text-sm font-medium border border-white/5 rounded-2xl bg-sombra/50 italic opacity-80">Acolhimento emocional, com direção comportamental.</div>
            <div className="p-4 text-sm font-medium border border-white/5 rounded-2xl bg-sombra/50 italic opacity-80">Amor inegociável, com consequências consistentes.</div>
          </div>
        </section>

        {/* Pillars of Method */}
        <section className="space-y-16 py-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">O Diferencial do Método</h2>
            <p className="text-ar/60 uppercase tracking-widest text-xs font-bold">Forma identidade, e não apenas corrige comportamentos</p>
            <p className="text-ar/80 max-w-xl mx-auto italic">Experiência para crianças de 4 a 9 anos (fase crítica de construção da identidade).</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <PillarCard 
              icon={Brain} 
              title="Inteligência Emocional" 
              desc="A criança aprende a reconhecer e regular emoções através de ferramentas poderosas que fortalecem a percepção de quem ela é." 
              color="text-agua"
            />
            <PillarCard 
              icon={BookOpen} 
              title="Gamificação e Narrativa" 
              desc="Álbum de figurinhas baseado em uma história, onde a criança avança por fases de habilidades físicas, emocionais e comportamentais." 
              color="text-sagrado"
            />
            <PillarCard 
              icon={Wind} 
              title="Breathwork Adaptado" 
              desc="Técnicas de respiração para acessar o sistema nervoso, gerando foco, calma e autocontrole consciente desde cedo." 
              color="text-ar"
            />
            <PillarCard 
              icon={Swords} 
              title="Karatê e Valores" 
              desc="Desenvolvimento físico e motor aliado a valores de hierarquia, honra e respeito vivenciados no dia a dia da prática." 
              color="text-fogo"
            />
          </div>
        </section>

        {/* Detail Overlays */}
        <section className="space-y-8 py-12 border-t border-white/[0.05]">
          <h2 className="text-2xl font-bold tracking-tight">Aprofundamento Prático</h2>
          
          <div className="space-y-4">
            <div className="p-8 bg-white/[0.01] border border-white/[0.03] rounded-3xl hover:bg-white/[0.03] transition-colors">
              <h4 className="flex items-center gap-2 font-bold mb-4 text-sagrado">
                <Star className="w-4 h-4" /> Qualificação Técnica
              </h4>
              <p className="text-sm leading-relaxed opacity-70">
                Professor qualificado com mais de 30 anos de prática e há 25 anos ensinando crianças. Uma formação completa de vida: corpo, mente e emoção alinhados para desenvolver a identidade.
              </p>
            </div>

            <div className="p-8 bg-white/[0.01] border border-white/[0.03] rounded-3xl group">
              <h4 className="flex items-center gap-2 font-bold mb-4 group-hover:text-sagrado transition-colors">
                <Shield className="w-4 h-4" /> Compromisso com a Relação
              </h4>
              <div className="space-y-4 text-ar/70 text-sm">
                <p>• O Método Guardiões não substitui os pais — fortalece a relação.</p>
                <p>• O Guardião nunca perde seu valor, mas pode perder poderes, pontos ou privilégios.</p>
                <p>• A identidade é sempre protegida, e o comportamento será sempre treinado.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="pt-20 text-center">
          <a 
            href="https://guardian-quest-form.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-sagrado text-sombra px-10 py-5 rounded-2xl font-black text-lg transition-all hover:scale-105 shadow-xl shadow-sagrado/10"
          >
            Tenho Interesse
            <UserCheck className="w-6 h-6" />
          </a>
          <p className="mt-6 text-xs opacity-40 uppercase tracking-widest font-bold">Inicie a jornada do seu guardião hoje</p>
        </section>

      </main>

      {/* Footer minimal info-style */}
      <footer className="py-12 border-t border-white/[0.03]">
        <Link to="/" className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4 text-ar/30 text-[10px] uppercase tracking-widest font-bold group">
          <div className="w-12 h-12 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
            <img 
              src="https://lh3.googleusercontent.com/d/1gNAqtTkkfhRBu5kjOUrtXaW-EZ2Qzdn5" 
              alt="Logo" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="group-hover:text-sagrado transition-colors">© 2026 MÉTODO GUARDIÕES • DESENVOLVIMENTO INFANTIL INTEGRAL</p>
        </Link>
      </footer>
    </div>
  );
};

const PillarCard = ({ icon: Icon, title, desc, color }: { icon: any, title: string, desc: string, color: string }) => (
  <div className="p-8 rounded-3xl border border-white/[0.03] bg-white/[0.01] hover:border-white/[0.1] transition-all space-y-4">
    <div className={`w-12 h-12 rounded-xl bg-white/[0.05] flex items-center justify-center ${color}`}>
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold tracking-tight">{title}</h3>
    <p className="text-sm opacity-60 leading-relaxed font-light">{desc}</p>
  </div>
);

export default MethodPage;
