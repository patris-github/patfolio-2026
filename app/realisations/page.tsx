import { Metadata } from "next"
import { ProjectGrid } from "@/components/projects/ProjectGrid"

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Découvrez mes projets : applications web, sites, automatisations, identités visuelles et illustrations. Product Builder & Designer créatif.",
}

export default function RealisationsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Réalisations
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Des projets Product Builder aux créations graphiques, découvrez comment
          je transforme les idées en solutions concrètes.
        </p>
      </div>

      {/* Projects */}
      <ProjectGrid />
    </div>
  )
}
