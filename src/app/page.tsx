"use client"

import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Sobre from "@/components/Sobre"
import Habilidades from "@/components/Habilidades"
import Projetos from "@/components/Projetos"
import Contato from "@/components/Contato"
import Footer from "@/components/Footer"

export default function Portfolio() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-slate-800">
      <Header scrollToSection={scrollToSection} />
      <Hero />
      <Sobre />
      <Habilidades />
      <Projetos />
      <Contato />
      <Footer />
    </div>
  )
}
