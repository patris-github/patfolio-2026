"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GalleryItem } from "@/lib/projects"

interface ImageCarouselProps {
  items: GalleryItem[]
}

// Placeholder blur générique (gris neutre)
const blurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAQMDBAMBAAAAAAAAAAAAAQIDBAAFEQYSITEHE0FR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/ANFtWo7hHuUWO7JUtl55DboLaQQkkAkHHIODwfrNKVLsxYlTgJn/2Q=="

export function ImageCarousel({ items }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const goToPrevious = () => {
    setIsLoading(true)
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setIsLoading(true)
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1))
  }

  const currentItem = items[currentIndex]

  return (
    <div className="relative">
      {/* Image container */}
      <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
        <Image
          src={currentItem.src}
          alt={currentItem.title}
          fill
          className={`object-contain bg-black transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          sizes="(max-width: 768px) 100vw, 700px"
          placeholder="blur"
          blurDataURL={blurDataURL}
          onLoad={() => setIsLoading(false)}
        />

        {/* Navigation arrows */}
        {items.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full"
              onClick={goToNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </>
        )}
      </div>

      {/* Title and counter */}
      <div className="mt-3 flex items-center justify-between">
        <p className="font-medium text-foreground">{currentItem.title}</p>
        {items.length > 1 && (
          <span className="text-sm text-muted-foreground">
            {currentIndex + 1} / {items.length}
          </span>
        )}
      </div>

      {/* Dots indicator */}
      {items.length > 1 && (
        <div className="flex justify-center gap-1.5 mt-3">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-primary"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
