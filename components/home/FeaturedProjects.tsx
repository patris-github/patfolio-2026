"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { ProjectCard } from "@/components/projects/ProjectCard"
import { ProjectModal } from "@/components/projects/ProjectModal"
import { projects, Project } from "@/lib/projects"
import { Button } from "@/components/ui/button"
import { useState } from "react"

// Sélection des projets vedettes (IDs: Kickstory, Communication Print, Pulse)
const featuredProjectIds = ["3", "5", "1"]

export function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const featuredProjects = projects.filter((p) =>
    featuredProjectIds.includes(p.id)
  )

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Projets vedettes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            De l'application mobile au design graphique, quelques réalisations
            qui illustrent ma double expertise.
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-10"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <ProjectCard
                project={project}
                onClick={() => handleProjectClick(project)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA to see all projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Button asChild variant="outline" size="lg" className="group">
            <Link href="/realisations">
              Voir toutes mes réalisations
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>

        {/* Modal */}
        <ProjectModal
          project={selectedProject}
          open={modalOpen}
          onOpenChange={setModalOpen}
        />
      </div>
    </section>
  )
}
