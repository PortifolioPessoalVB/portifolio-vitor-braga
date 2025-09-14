import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

export default function Contato() {
  return (
    <section id="contato" className="py-20 px-4 bg-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Contato</h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="mailto:vitorbragajs@gmail.com"
            className="flex items-center gap-3 text-slate-300 hover:text-red-400 transition-colors"
            aria-label="Enviar email para Vítor Braga"
          >
            <Mail size={20} />
            <span>vitorbragajs@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/vitor-devjr/"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-3 text-slate-300 hover:text-red-400 transition-colors"
            aria-label="Ver perfil do LinkedIn de Vítor Braga"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/BragaVitorJ"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-3 text-slate-300 hover:text-red-400 transition-colors"
            aria-label="Ver perfil do GitHub de Vítor Braga"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a
            href="https://wa.me/5537999382235"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-3 text-slate-300 hover:text-red-400 transition-colors"
            aria-label="Entrar em contato via WhatsApp"
          >
            <MessageCircle size={20} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}