export default function Footer() {
  return (
    <footer
      className="bg-slate-900 py-8 px-4 border-t border-slate-700"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }} // evita espaço branco no iPhone
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-slate-400 mb-4">
          © {new Date().getFullYear()} Vítor Braga — Desenvolvedor Web
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-slate-300 hover:text-red-400 transition-colors"
          aria-label="Voltar ao topo da página"
        >
          ↑ Voltar ao topo
        </button>
      </div>
    </footer>
  );
}
