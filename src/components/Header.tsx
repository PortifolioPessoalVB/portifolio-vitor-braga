"use client"

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Header({ scrollToSection }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white flex items-center gap-2">👨‍💻 Vítor Braga</h1>
            <p className="text-slate-300">Web & Mobile Developer</p>
          </div>
          <nav className="flex flex-wrap gap-6">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-slate-300 hover:text-red-400 transition-colors"
              aria-label="Ir para seção Sobre"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("habilidades")}
              className="text-slate-300 hover:text-red-400 transition-colors"
              aria-label="Ir para seção Habilidades"
            >
              Habilidades
            </button>
            <button
              onClick={() => scrollToSection("projetos")}
              className="text-slate-300 hover:text-red-400 transition-colors"
              aria-label="Ir para seção Projetos"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-slate-300 hover:text-red-400 transition-colors"
              aria-label="Ir para seção Contato"
            >
              Contato
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}