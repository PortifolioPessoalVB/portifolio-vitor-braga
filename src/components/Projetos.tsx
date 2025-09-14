import { Card, CardContent } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Engepar Engenharia (Site)",
    description: "Migração de WordPress para Next.js.",
    stack: ["Next.js", "React", "Tailwind"],
    github: "https://github.com/felipecesar13/engepar",
    live: "https://engepar.eng.br/",
  },
  {
    title: "Baixar Processo (Frontend)",
    description: "Interface para download de processos judiciais.",
    stack: ["Next.js", "TypeScript", "ShadCN UI"],
    github: "https://github.com/BragaVitorJ/baixarProcesso-frontend",
    live: "https://baixar-processo-frontend.vercel.app/",
  },
  {
    title: "Biblioteca de Filmes (Estudo)",
    description: "Catálogo de filmes com busca e filtros.",
    stack: ["Next.js", "TypeScript", "Recharts"],
    github: "https://github.com/BragaVitorJ/lib_movies",
    live: "/",
  },
];

export default function Projetos() {
  return (
    <section id="projetos" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Projetos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border border-slate-600 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-slate-700"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-slate-600 text-slate-200 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-slate-300 hover:text-red-400 transition-colors text-sm"
                    rel="noopener"
                    aria-label={`Ver código do projeto ${project.title} no GitHub`}
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-slate-300 hover:text-red-400 transition-colors text-sm"
                    rel="noopener"
                    aria-label={`Ver projeto ${project.title} ao vivo`}
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}