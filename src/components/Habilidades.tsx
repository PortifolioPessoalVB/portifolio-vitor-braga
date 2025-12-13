const skills = [
  "JavaScript",
  "TypeScript",
  "Node.js",
  "React",
  "Next.js",
  "HTML",
  "CSS / Tailwind",
  "REST APIs",
  "MySQL",
  "Firebird",
  "MongoDB",
  "React Native",
]

export default function Habilidades() {
  return (
    <section
      id="habilidades"
      className="py-20 px-4 bg-slate-900 scroll-mt-24 md:scroll-mt-32 lg:scroll-mt-40"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Habilidades
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 place-items-center">
          {skills.map((skill) => (
            <span
              key={skill}
              className="w-full text-center px-4 py-2 bg-slate-800 text-slate-200 rounded-lg text-sm sm:text-base font-medium border border-slate-700 shadow-md hover:bg-red-600 hover:text-white hover:scale-105 hover:border-red-600 transition-all duration-300 cursor-pointer"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
