import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IMAGES } from "../constants/images";
import { 
  Shield, 
  Flame,
  Droplets, 
  Mountain, 
  Wind, 
  Sun, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Award, 
  Zap, 
  Heart,
  BookOpen,
  Brain,
  Instagram,
  Scroll,
  Menu,
  X,
  Trophy,
  Star,
  Crown,
  Swords
} from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-sombra/90 backdrop-blur-xl border-b border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 flex items-center justify-center rounded-full overflow-hidden bg-sombra">
            <img 
              src={IMAGES.LOGO} 
              alt="Logo" 
              className="w-full h-full object-contain scale-125"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-xl font-display font-bold tracking-wider group-hover:text-sagrado transition-colors uppercase">GUARDIÕES</span>
        </Link>
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/metodo_guardioes/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sagrado/60 hover:text-sagrado transition-colors p-2"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              to="/lore"
              className="text-sagrado hover:bg-sagrado/10 px-5 py-2 rounded-full font-bold transition-all border border-sagrado/20 text-sm"
            >
              Os Guardiões
            </Link>
            <Link 
              to="/acessorios"
              className="text-sagrado hover:bg-sagrado/10 px-5 py-2 rounded-full font-bold transition-all border border-sagrado/20 text-sm"
            >
              Acessórios
            </Link>
            <a 
              href="https://guardian-quest-form.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sagrado text-sombra hover:bg-white px-6 py-2 rounded-full font-bold transition-all text-sm shadow-lg shadow-sagrado/20"
            >
              Tenho interesse
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-sagrado hover:bg-sagrado/10 rounded-lg transition-colors"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-sombra border-b border-white/[0.03] overflow-hidden"
          >
            <div className="px-4 py-8 flex flex-col gap-6">
              <Link 
                to="/lore" 
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-bold text-sagrado flex items-center justify-between"
              >
                Os Guardiões
                <ArrowRight className="w-4 h-4 opacity-40" />
              </Link>
              <Link 
                to="/acessorios" 
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-bold text-sagrado flex items-center justify-between"
              >
                Acessórios
                <ArrowRight className="w-4 h-4 opacity-40" />
              </Link>
              <a 
                href="https://guardian-quest-form.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sagrado text-sombra px-6 py-4 rounded-2xl font-bold text-center shadow-lg shadow-sagrado/20"
              >
                Tenho interesse
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
    {/* Background Glows - Subtle and Atmospheric */}
    <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-fogo/5 blur-[140px] rounded-full" />
    <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-agua/5 blur-[140px] rounded-full" />

    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
      <div>
          <span className="inline-block px-4 py-1 rounded-full bg-white/[0.03] text-sagrado border border-white/10 text-xs font-bold mb-6 uppercase tracking-[0.2em]">
            Guardiões
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6 tracking-tighter text-white">
            Método <span className="text-sagrado italic font-medium">Guardiões</span>
          </h1>
          <p className="text-lg text-white leading-relaxed mb-8 max-w-xl">
            Um programa de <span className="font-bold">formação de identidade</span> e <span className="font-bold">mentalidade infantil</span> que utiliza <span className="text-sagrado font-bold">inteligência emocional</span>, <span className="text-sagrado font-bold">neurociência</span>, <span className="text-sagrado font-bold">breathwork</span> e <span className="text-sagrado font-bold">disciplina marcial (Karate)</span> para construir crianças emocionalmente fortes, seguras e preparadas para a vida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-3 py-2">
              <span className="text-xs font-medium tracking-wide uppercase text-white">Iniciativa Pedagógica Guardiões</span>
            </div>
          </div>
        </div>

        <div 
          className="relative flex items-center justify-center p-4"
        >
        <div className="relative z-10 w-full max-w-lg aspect-square overflow-hidden group bg-sombra rounded-[3rem]">
          <img 
            src={IMAGES.HERO_CHILD} 
            alt="Guardiões dos Elementos" 
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="hidden absolute inset-0 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center">
             <Shield className="w-24 h-24 text-sagrado/40" />
          </div>
        </div>
        {/* Subtle Decorative Elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-sagrado/10 blur-[120px] rounded-full opacity-50" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-fogo/10 blur-[120px] rounded-full opacity-50" />
      </div>
    </div>
  </section>
);

const Dores = () => (
  <section id="dores" className="py-24 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div
          className="relative group rounded-[3rem] overflow-hidden shadow-2xl shadow-fogo/10 border border-white/5 order-2 lg:order-1"
        >
          <img 
            src={IMAGES.DORES_CHILD} 
            alt="Criança isolada em dispositivos digitais" 
            className="w-full aspect-square object-cover grayscale contrast-125 opacity-70 group-hover:scale-110 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-sombra via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-12 left-12 right-12 p-8 rounded-3xl bg-sombra/40 backdrop-blur-md border border-white/10 hidden md:block">
             <p className="text-xs text-sagrado font-bold uppercase tracking-[0.3em]">Ambiente Digital</p>
             <p className="text-lg text-white font-medium mt-2">O isolamento que as telas geram.</p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div>
            <span className="text-sagrado font-bold uppercase tracking-widest text-sm mb-4 block">Você reconhece isso?</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">O que nenhuma aula <span className="text-white">convencional</span> resolve</h2>
            <p className="text-lg text-white mb-12 leading-relaxed font-light">
              Seu filho pode ter acesso à melhor escola, ao melhor esporte — e ainda assim enfrentar <span className="text-sagrado font-bold">desafios que nenhum conteúdo técnico resolve</span>.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Falta de disciplina",
                desc: "Crianças sem rotina clara e limites definidos enfrentam dificuldades para se organizar e manter o foco.",
                icon: Wind
              },
              {
                title: "Baixa autoconfiança",
                desc: "A insegurança afeta o desempenho escolar, as relações sociais e a capacidade de tomar decisões.",
                icon: Shield
              },
              {
                title: "Dificuldade emocional",
                desc: "Sem ferramentas adequadas, crianças não sabem lidar com frustrações, ansiedade e conflitos.",
                icon: Heart
              },
              {
                title: "Falta de engajamento",
                desc: "Métodos tradicionais não capturam a atenção e motivação das novas gerações.",
                icon: Flame
              }
            ].map((pain, i) => (
              <div
                key={i}
                className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-sagrado/20 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center mb-6 group-hover:bg-sagrado/10 group-hover:border-sagrado/30 transition-colors">
                  <pain.icon className="w-5 h-5 text-sagrado group-hover:text-sagrado transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">{pain.title}</h3>
                <p className="text-sm text-white leading-relaxed font-light">{pain.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Beliefs = () => (
  <section className="py-24 relative overflow-hidden bg-black/40">
    <div className="max-w-7xl mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-white">
            Mas o problema não está no <span className="text-fogo bg-fogo/10 px-4 py-1 rounded-lg">comportamento</span> da criança…
            <br />
            <span className="text-lg md:text-xl text-white font-light mt-4 block">
              Está no que foi instalado nela sem perceber.
            </span>
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-6">
            <h3 className="text-xl font-bold text-sagrado tracking-wide uppercase text-sm">Desde cedo, toda criança forma crenças sobre:</h3>
            <ul className="space-y-4">
              {["Quem ela é", "O que ela consegue", "Até onde pode ir"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg font-medium text-white">
                  <div className="w-1.5 h-1.5 rounded-full bg-sagrado shadow-[0_0_10px_#FFD700]" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-white italic">E a maioria dessas crenças não é construída de forma consciente.</p>
          </div>

          <div className="space-y-4 px-4 border-l border-white/10">
            <p className="text-sm uppercase tracking-[0.2em] text-white">É por isso que muitos adultos crescem com:</p>
            <div className="grid grid-cols-1 gap-3">
              {["Medo de tentar", "Falta de confiança", "Dificuldade em manter constância"].map((text, i) => (
                <div key={i} className="flex items-center gap-3 py-2 px-4 rounded-lg bg-white/[0.01]">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span className="text-sm text-white">{text}</span>
                </div>
              ))}
            </div>
            <p className="text-base text-sagrado italic font-medium mt-6">"E depois passam anos tentando se corrigir."</p>
          </div>
        </div>

        <div className="relative">
          <div className="p-10 rounded-[3rem] bg-sagrado/10 border border-sagrado/20 relative z-10 backdrop-blur-sm">
            <span className="text-sagrado font-bold uppercase tracking-[0.3em] text-[10px] mb-8 block">A virada</span>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 leading-tight text-white">
              Enquanto o mundo tenta reprogramar adultos…
            </h3>
            <div className="space-y-6">
              <p className="text-lg md:text-2xl font-bold text-white leading-relaxed">
                Os <span className="text-sagrado">Guardiões</span> atuam antes disso acontecer.
              </p>
              <div className="space-y-3 pt-6 border-t border-white/5">
                <p className="text-lg text-white font-light">Não é sobre corrigir depois.</p>
                <p className="text-xl md:text-3xl font-bold text-sagrado italic underline decoration-sagrado/30 underline-offset-8">
                  É sobre construir desde o início.
                </p>
              </div>
            </div>
          </div>
          
          {/* Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-sagrado/5 blur-[100px] z-0 rounded-full" />
        </div>
      </div>
    </div>
  </section>
);

const Lore = () => (
  <section className="py-24 relative overflow-hidden bg-black/20">
    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <div className="space-y-8">
            <span className="text-sagrado font-bold uppercase tracking-widest text-sm mb-4 block text-white">A Ordem Milenar</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight text-white">
              Os <span className="text-sagrado italic font-medium">Guardiões</span>
            </h2>
            <p className="text-xl text-white leading-relaxed font-light">
              No <span className="font-bold">Japão feudal</span>, existia uma ordem respeitada não pela <span className="font-bold">força bruta</span>, mas pela <span className="text-sagrado font-bold">maestria sobre a própria mente</span>.
            </p>
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-4">
              <p className="text-sm text-white leading-relaxed italic">
                “Um guerreiro não é derrotado quando cai… mas quando <span className="text-sagrado font-bold">perde o controle</span>.”
              </p>
              <div className="w-12 h-px bg-sagrado/30" />
              <p className="text-white font-bold tracking-tight">O treinamento começava com o <span className="font-bold">invisível</span>: o <span className="text-sagrado font-bold">controle das emoções</span> antes do domínio das armas.</p>
            </div>
            <Link 
              to="/lore"
              className="inline-flex items-center gap-3 bg-sagrado text-sombra px-8 py-4 rounded-2xl font-bold hover:bg-white transition-all shadow-lg shadow-sagrado/20 group"
            >
              Conheça a história completa
              <Scroll className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
           <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 relative group">
            <img 
              src={IMAGES.LORE_BG} 
              alt="Legado dos Guardiões" 
              className="w-full h-full object-cover grayscale brightness-[0.7] contrast-125 group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-sombra/60" />
          </div>
          <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-sagrado/10 blur-[100px] rounded-full" />
        </div>
      </div>
    </div>
  </section>
);

const Benefits = () => (
  <section className="py-24 bg-white/[0.01] border-y border-white/[0.02]">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white">Objetivos de <span className="text-sagrado italic">Desenvolvimento</span></h2>
          <p className="text-white text-base leading-relaxed mb-8">
            A aplicação sistemática da metodologia visa estabelecer competências duradouras que preparam a criança para os desafios da vida adulta.
          </p>
          <div className="space-y-4">
            {[
              "Autonomia no gerenciamento de tarefas escolares e domésticas.",
              "Capacidade de autorregulação em momentos de frustração.",
              "Fortalecimento da autoestima e segurança social.",
              "Alinhamento com valores familiares e éticos."
            ].map((text, i) => (
              <div key={i} className="flex gap-3 items-start text-sm text-white">
                <CheckCircle2 className="w-5 h-5 text-sagrado shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          {[
            { icon: Shield, title: "Segurança", color: "text-sagrado" },
            { icon: Award, title: "Foco", color: "text-terra" },
            { icon: MessageSquare, title: "Comunicação", color: "text-white" },
            { icon: Heart, title: "Empatia", color: "text-fogo" },
          ].map((b, i) => (
            <div key={i} className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl flex flex-col items-center text-center">
              <b.icon className={`w-6 h-6 mb-4 ${b.color}`} />
              <span className="text-xs uppercase tracking-widest font-bold text-white">{b.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Breathwork = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <div className="relative">
            <div className="aspect-square rounded-[3rem] border border-white/10 overflow-hidden relative group shadow-2xl shadow-white/10">
              <img 
                src={IMAGES.BREATHWORK} 
                alt="A Ciência da Respiração" 
                className="w-full h-full object-cover brightness-110 group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-sombra/80 via-sombra/20 to-transparent" />
              
              <div className="absolute bottom-10 left-10 right-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                    <Wind className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight text-white mb-0">Breathwork</h2>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white font-bold">A Ciência da Respiração</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-white/5 blur-[100px] rounded-full" />
          </div>
        </div>

        <div className="lg:w-1/2 space-y-8 text-white">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
              Por que ensinar técnicas de <span className="text-sagrado italic font-bold">Breathwork</span> para crianças?
            </h3>
            <p className="text-lg leading-relaxed font-light">
              A <span className="text-sagrado font-bold">respiração</span> é uma das ferramentas mais poderosas — e ao mesmo tempo mais ignoradas — no <span className="font-bold">desenvolvimento emocional</span> das crianças.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-base leading-relaxed">
              Crianças com desafios como <span className="font-bold">agitação, impulsividade, dificuldade de foco</span> ou até mesmo <span className="font-bold">autismo nível 1</span> vivem em um estado constante de estímulo e tensão. 
              <span className="block mt-4 text-sagrado font-bold">
                A forma como a criança respira influencia diretamente esse comportamento.
              </span>
            </p>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm space-y-4 shadow-xl">
              <p className="text-sm leading-relaxed">
                Quando ensinamos técnicas de <span className="text-sagrado font-bold">Breathwork</span> (respiração consciente), ajudamos a criança a <span className="font-bold">desacelerar o corpo</span> e <span className="font-bold">organizar as emoções</span>.
              </p>
              <p className="text-sm font-bold">
                Respirações <span className="text-sagrado font-bold">profundas e controladas</span> ativam o sistema de relaxamento do cérebro, trazendo mais <span className="text-sagrado font-bold">calma, equilíbrio e clareza mental</span>.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-xs uppercase tracking-widest text-white font-bold">Na prática, isso significa:</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Controle emocional em frustrações",
                  "Foco e atenção nas atividades",
                  "Menos ansiedade e impulsividade",
                  "Segurança e consciência"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 transition-all hover:bg-white/10">
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                    <span className="text-xs font-medium text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm leading-relaxed italic border-l-2 border-white pl-6">
              Além disso, a respiração nasal contínua melhora a oxigenação do cérebro, favorecendo o aprendizado e a reteção de informações.
            </p>

            <div className="pt-8 space-y-4">
              <p className="text-xl md:text-2xl font-bold leading-tight">
                Mais do que uma técnica, o <span className="text-sagrado font-bold uppercase tracking-wider">Breathwork</span> é uma <span className="text-sagrado italic underline decoration-sagrado/30 underline-offset-4 font-bold">habilidade para a vida</span>.
              </p>
              <p className="text-sm leading-relaxed">
                Quando integrado à rotina, ele transforma não só o <span className="font-bold">comportamento da criança</span>, mas também o <span className="font-bold">ambiente ao redor</span> — tornando a casa mais leve, equilibrada e consciente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const GoalStructure = () => (
  <section className="py-32 relative overflow-hidden bg-sombra">
    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="text-center mb-20 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter">Estrutura de Metas e Objetivos</h2>
        <p className="text-xl text-sagrado font-bold mb-8 uppercase tracking-[0.2em] text-sm italic underline decoration-sagrado/30 underline-offset-8">Sistema de Bótons e Progressão Permanente</p>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed text-white font-medium">
          A progressão exige a validação de <span className="text-sagrado font-bold">competências emocionais</span>, <span className="text-sagrado font-bold">respiratórias</span> e <span className="text-sagrado font-bold">comportamentais</span> em ambientes como casa, dojô e escola de forma permanente.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Trilha do Guardião */}
        <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 space-y-10 group hover:border-sagrado/20 transition-all">
          <div className="space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-sagrado/10 flex items-center justify-center text-sagrado mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-white">1. Trilha do Guardião</h3>
            <p className="text-sagrado font-bold text-xs uppercase tracking-[0.2em]">Fase Iniciante • Foco em Acolhimento e Base</p>
          </div>

          <div className="grid gap-6">
            {[
              { title: "Guardião em Treinamento", desc: "Porta de entrada. Foco em acolhimento.", icon: Star },
              { title: "Guardião Bronze", desc: "Validação da conduta e tarefas de “Eu Sou”.", icon: Shield },
              { title: "Guardião Prata", desc: "Domínio das técnicas básicas de respiração.", icon: Wind },
              { title: "Guardião Ouro", desc: "Consolidação da fase inicial e preparação para transição.", icon: Trophy }
            ].map((step, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all transform hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-sagrado shrink-0">
                  <step.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">{step.title}</h4>
                  <p className="text-sm text-white font-light opacity-80 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trilha da Elite */}
        <div className="p-10 rounded-[3rem] bg-sagrado/[0.03] border border-sagrado/10 space-y-10 group hover:border-sagrado/30 transition-all">
          <div className="space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-sagrado/20 flex items-center justify-center text-sagrado mb-6">
              <Crown className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-white">2. Trilha da Elite</h3>
            <p className="text-sagrado font-bold text-xs uppercase tracking-[0.2em]">Alunos Graduados / Pré-Adolescentes</p>
          </div>

          <div className="grid gap-6">
            {[
              { title: "Elite", desc: "Transição para maturidade técnica.", icon: Swords },
              { title: "Elite Beta", desc: "Prática de resiliência e autorregulação.", icon: Brain },
              { title: "Elite Alpha", desc: "Liderança positiva e decisões conscientes.", icon: Zap },
              { title: "Elite Black", desc: "Honraria máxima: autonomia total e altruísmo.", icon: Trophy }
            ].map((step, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl bg-sagrado/10 border border-sagrado/10 hover:bg-sagrado/20 transition-all transform hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-sagrado/20 border border-sagrado/30 flex items-center justify-center text-sagrado shrink-0">
                  <step.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">{step.title}</h4>
                  <p className="text-sm text-white font-light opacity-80 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
const HowItWorks = () => (
  <section className="py-24 bg-white/[0.02] border-y border-white/[0.02]">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-20 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter">A solução</h2>
        <p className="text-xl text-sagrado font-bold mb-4 uppercase tracking-[0.2em] text-sm italic">Não é uma aula. É uma formação de identidade.</p>
        <p className="text-lg max-w-2xl mx-auto leading-relaxed italic">
          Cada <span className="font-bold">etapa</span> foi desenhada para construir <span className="text-sagrado font-bold">quem a criança vai se tornar</span> — não apenas o que ela sabe fazer.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "Sistema de progressão", desc: "Evolução estruturada em etapas claras que formam mentalidade de crescimento desde cedo.", icon: Award },
          { title: "Formação com propósito", desc: "Planos pedagógicos com objetivos definidos que vão muito além de técnicas físicas.", icon: BookOpen },
          { title: "Disciplina e identidade através do karatê", desc: "O karatê como ferramenta de formação de caráter, não apenas como esporte.", icon: Shield },
          { title: "Neurociência aplicada", desc: "Técnicas de respiração, foco e regulação emocional baseadas em evidências científicas.", icon: Brain },
          { title: "Inteligência emocional", desc: "Autoconhecimento, empatia e autocontrole que a criança leva para a vida inteira.", icon: Heart },
        ].map((item, i) => (
          <div key={i} className="p-8 rounded-3xl border border-white/[0.03] bg-white/[0.01] hover:bg-white/[0.03] transition-all group text-white">
            <div className="w-12 h-12 rounded-xl bg-sagrado/10 flex items-center justify-center text-sagrado mb-6 group-hover:scale-110 transition-transform">
              <item.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-sm text-white leading-relaxed font-light">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-32 relative overflow-hidden bg-sombra">
    <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter text-white">
        Deseja aprofundar seu conhecimento sobre os <span className="text-sagrado font-bold">Guardiões</span>?
      </h2>
      <p className="text-lg text-white mb-12 font-medium leading-relaxed">
        Disponibilizamos <span className="font-bold">materiais complementares</span> e <span className="font-bold">informações detalhadas</span> sobre como iniciar 
        o processo de <span className="text-sagrado font-bold">acompanhamento pedagógico</span>.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <Link 
          to="/metodo"
          className="bg-white text-sombra px-10 py-5 rounded-2xl font-bold text-base hover:bg-sagrado transition-colors"
        >
          Veja o Método
        </Link>
      </div>
    </div>
  </section>
);

const Results = () => {
  const results = [
    { title: "Disciplina que vem de dentro", icon: Shield, color: "text-sagrado" },
    { title: "Autoconfiança construída na prática", icon: Mountain, color: "text-terra" },
    { title: "Controle emocional em situações reais", icon: Droplets, color: "text-agua" },
    { title: "Respeito como valor, não imposição", icon: Heart, color: "text-fogo" },
    { title: "Foco e constância desde cedo", icon: Award, color: "text-sagrado" },
    { title: "Capacidade de tomar boas decisões", icon: Sun, color: "text-white" },
    { title: "Mentalidade preparada para o futuro", icon: Zap, color: "text-fogo" },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-black/40">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter text-white">Resultados</h2>
            <p className="text-sagrado text-xl font-medium mb-6 uppercase tracking-[0.2em] text-sm">O que seu filho leva para a vida inteira</p>
            <p className="text-white text-lg max-w-2xl mx-auto leading-relaxed">
              <span className="font-bold">Habilidades</span> que não se aprendem na escola — e que definem o <span className="text-sagrado font-bold">adulto que ele vai se tornar</span>.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {results.map((res, i) => (
            <div
              key={i}
              className="group p-8 rounded-3xl border border-white/[0.03] bg-white/[0.01] hover:bg-white/[0.02] hover:border-white/[0.08] transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className={`w-16 h-16 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10`}>
                <res.icon className={`w-8 h-8 ${res.color}`} />
              </div>
              <h3 className="text-base font-bold leading-tight relative z-10 text-white">{res.title}</h3>
            </div>
          ))}
          
          <div
            className="lg:col-span-1 p-8 rounded-3xl bg-sagrado/[0.05] border border-sagrado/20 flex flex-col justify-center items-center text-center group"
          >
            <ArrowRight className="w-8 h-8 text-sagrado mb-4 group-hover:translate-x-2 transition-transform" />
            <p className="text-xs font-bold uppercase tracking-widest text-sagrado">Preparação Integral</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 border-t border-white/[0.03] bg-sombra">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
      <Link to="/" className="flex items-center gap-3 group">
        <div className="w-12 h-12 flex items-center justify-center rounded-full overflow-hidden bg-sombra border border-white/10">
          <img 
            src={IMAGES.LOGO} 
            alt="Logo" 
            className="w-full h-full object-contain scale-125"
            referrerPolicy="no-referrer"
          />
        </div>
        <span className="text-lg font-display font-bold tracking-wider uppercase group-hover:text-sagrado transition-colors">GUARDIÕES</span>
      </Link>
      <div className="text-white text-sm font-medium">
        © 2026 Guardiões. Todos os direitos reservados.
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <nav className="flex gap-6">
          <Link to="/lore" className="text-white hover:text-sagrado text-sm font-medium transition-colors">História</Link>
          <Link to="/metodo" className="text-white hover:text-sagrado text-sm font-medium transition-colors">Método</Link>
          <Link to="/acessorios" className="text-white hover:text-sagrado text-sm font-medium transition-colors">Acessórios</Link>
        </nav>
        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/metodo_guardioes/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-sagrado transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          {[CheckCircle2, MessageSquare, Shield].map((Icon, i) => (
            <div key={i} className="text-white hover:text-sagrado transition-colors cursor-pointer">
              <Icon className="w-5 h-5" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default function LandingPage() {
  return (
    <div className="selection:bg-sagrado selection:text-sombra">
      <Navigation />
      <Hero />
      <Dores />
      <Beliefs />
      <HowItWorks />
      <GoalStructure />
      <Lore />
      <Benefits />
      <Breathwork />
      <Results />
      <CTA />
      <Footer />
    </div>
  );
}
