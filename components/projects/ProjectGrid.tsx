"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ProjectCard } from "./ProjectCard"
import { ProjectModal } from "./ProjectModal"
import { Button } from "@/components/ui/button"
import {
  projects,
  Project,
  ProjectCategory,
  categoryLabels,
} from "@/lib/projects"
import { cn } from "@/lib/utils"

type FilterType = "all" | ProjectCategory

export function ProjectGrid() {
  const [filter, setFilter] = useState<FilterType>("all")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter)

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  const filters: { value: FilterType; label: string }[] = [
    { value: "all", label: "Tous" },
    { value: "product-builder", label: categoryLabels["product-builder"] },
    { value: "design-graphique", label: categoryLabels["design-graphique"] },
  ]

  return (
    <div>
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {filters.map((f) => (
          <Button
            key={f.value}
            variant={filter === f.value ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(f.value)}
            className={cn(
              "transition-all",
              filter === f.value && "shadow-md"
            )}
          >
            {f.label}
          </Button>
        ))}
      </div>

      {/* Projects grid */}
      <motion.div
        layout
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard
                project={project}
                onClick={() => handleProjectClick(project)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            Aucun projet dans cette catégorie pour le moment.
          </p>
        </div>
      )}

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  )
}
