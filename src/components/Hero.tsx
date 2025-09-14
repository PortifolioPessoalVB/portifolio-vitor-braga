import Image from 'next/image';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-8">
          <div className="flex-shrink-0">
            <div className="w-48 h-48 rounded-full border-4 border-slate-600 shadow-lg overflow-hidden">
              <Image
                src="/foto_perfil.jpeg"
                alt='Foto de perfil de Vítor Braga'
                width={192}
                height={192}
                className="object-cover"
              >

              </Image>
            </div>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <p className="text-lg text-slate-300 leading-relaxed text-balance">
              Sou Desenvolvedor Júnior em constante evolução, formado em Ciência da Computação (UNA Bom Despacho). Tenho experiência prática com React, Next.js e TypeScript, criando interfaces modernas e responsivas, sempre com foco em performance e usabilidade.
              Atuo também na integração de APIs REST e já trabalhei com implantação de sistemas ERP, o que me trouxe visão de negócio e experiência em alinhar tecnologia às necessidades reais do cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}