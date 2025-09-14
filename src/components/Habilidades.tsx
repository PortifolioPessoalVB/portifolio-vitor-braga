const skills = [
  "JavaScript",
  "TypeScript",
  "Node.js",
  "React",
  "Next.js",
  "HTML",
  "CSS/Tailwind",
  "REST APIs",
  "MySQL",
  "Firebird",
  "MongoDB",
  "React Native",
];

export default function Habilidades() {
  return (
    <section id="habilidades" className="py-20 px-4 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Habilidades</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-slate-700 text-slate-200 rounded-full text-sm font-medium border border-slate-600 hover:bg-red-600 hover:text-white hover:scale-105 hover:border-red-600 transition-all duration-300 cursor-pointer"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}