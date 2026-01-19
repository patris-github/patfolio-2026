"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Project, categoryLabels } from "@/lib/projects"

interface ProjectCardProps {
  project: Project
  onClick: () => void
}

function isVideo(src: string): boolean {
  return /\.(mp4|webm|ogg)$/i.test(src)
}

// Placeholder blur générique
const blurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAQMDBAMBAAAAAAAAAAAAAQIDBAAFEQYSITEHE0FR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/ANFtWo7hHuUWO7JUtl55DboLaQQkkAkHHIODwfrNKVLsxYlTgJn/2Q=="

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const mediaIsVideo = isVideo(project.image)

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <Card
        className="cursor-pointer overflow-hidden group"
        onClick={onClick}
      >
        <div className="relative aspect-video overflow-hidden bg-muted">
          {mediaIsVideo ? (
            <video
              src={project.image}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-contain bg-black transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
              blurDataURL={blurDataURL}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <CardContent className="p-4">
          <Badge
            variant="secondary"
            className="mb-2 text-xs"
          >
            {categoryLabels[project.category]}
          </Badge>
          <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1 mt-3">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
