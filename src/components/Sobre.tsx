export default function Sobre() {
  return (
    <section id="sobre" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Sobre</h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <p className="text-slate-300 leading-relaxed mb-6">
              Tenho experiência em implantação e suporte de sistemas ERP, atuando em levantamento de requisitos e treinamento de usuários. Atualmente, meu foco é o desenvolvimento web, criando aplicações com React/Next.js, Node.js e bancos relacionais e NoSQL.
              Valorizo código limpo, documentação objetiva e entregas consistentes que gerem valor real para o cliente.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Diferenciais</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-300">
                  Experiência prática em implantação de ERP, com visão de processos que agregam valor no desenvolvimento de soluções web.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-300">Criação de aplicações completas com React, Next.js e integração de APIs REST.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-300">Desenvolvimento de CRUDs e otimização de queries em bancos relacionais e NoSQL (MySQL, Firebird, MongoDB).</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-300">Controle de versão com Git e organização de fluxo de branches.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-300">Comunicação clara, colaboração em equipe e foco em entregar resultados consistentes.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}