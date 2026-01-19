"use client"

import Image from "next/image"
import { ExternalLink, X, CheckCircle2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Project, categoryLabels } from "@/lib/projects"
import { ImageCarousel } from "./ImageCarousel"

interface ProjectModalProps {
  project: Project | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

function isVideo(src: string): boolean {
  return /\.(mp4|webm|ogg)$/i.test(src)
}

// Placeholder blur générique
const blurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAQMDBAMBAAAAAAAAAAAAAQIDBAAFEQYSITEHE0FR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/ANFtWo7hHuUWO7JUtl55DboLaQQkkAkHHIODwfrNKVLsxYlTgJn/2Q=="

export function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  if (!project) return null

  const mediaIsVideo = isVideo(project.image)
  const hasGallery = project.gallery && project.gallery.length > 0

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="pr-8">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary">
              {categoryLabels[project.category]}
            </Badge>
          </div>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
        </DialogHeader>

        {/* Media: Gallery Carousel, Video, or Image */}
        <div className="my-4">
          {hasGallery ? (
            <ImageCarousel items={project.gallery!} />
          ) : (
            <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
              {mediaIsVideo ? (
                <video
                  src={project.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="absolute inset-0 w-full h-full object-contain bg-black"
                />
              ) : (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 700px"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                />
              )}
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-muted-foreground">{project.description}</p>

        {/* Challenge */}
        <div className="mt-6">
          <h4 className="font-semibold text-lg mb-2">Le défi</h4>
          <p className="text-muted-foreground">{project.challenge}</p>
        </div>

        {/* Solution */}
        <div className="mt-6">
          <h4 className="font-semibold text-lg mb-2">La solution</h4>
          <p className="text-muted-foreground">{project.solution}</p>
        </div>

        {/* Results */}
        <div className="mt-6">
          <h4 className="font-semibold text-lg mb-3">Résultats</h4>
          <ul className="space-y-2">
            {project.results.map((result, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-muted-foreground"
              >
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="mt-6 pt-4 border-t">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* External Link */}
        {project.link && (
          <div className="mt-6">
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Voir le projet
              </a>
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
