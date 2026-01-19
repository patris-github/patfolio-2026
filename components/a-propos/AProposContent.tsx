"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Download, X, ZoomIn } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
}

export function AProposContent() {
  const [cvModalOpen, setCvModalOpen] = useState(false)

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            À propos
          </h1>
        </motion.div>

        {/* Accroche */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <p className="text-2xl font-semibold text-foreground leading-relaxed">
            J&apos;ai arrêté de faire du beau pour faire de l&apos;utile.
          </p>
          <p className="text-2xl text-muted-foreground leading-relaxed">
            Enfin, pas vraiment. Je fais les deux.
          </p>
        </motion.div>

        {/* Parcours */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6 mb-12"
        >
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              Mon parcours commence dans la création visuelle — graphisme,
              illustration, identités de marque. Mais à force de livrer des
              maquettes sans comprendre ce qui se passait ensuite, j&apos;ai eu
              besoin d&apos;aller plus loin.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Comprendre comment un site web respire. Comment une application
              pense. Comment automatiser ce qui peut l&apos;être.
            </p>
          </div>
        </motion.div>

        {/* Aujourd'hui */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-muted/50 rounded-lg p-8 mb-12"
        >
          <h2 className="text-xl font-semibold mb-4">Aujourd&apos;hui</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Aujourd&apos;hui, je suis un créatif qui livre. Stratégie, design,
            développement, automatisations — le tout en un seul interlocuteur.
          </p>
        </motion.div>

        {/* CV Section */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mb-12"
        >
          <h2 className="text-xl font-semibold mb-4">Mon CV</h2>
          <button
            onClick={() => setCvModalOpen(true)}
            className="group flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-card border rounded-lg p-6 hover:border-primary/50 hover:shadow-md transition-all duration-300 w-full text-left"
          >
            {/* Miniature CV */}
            <div className="relative flex-shrink-0 w-28 h-40 sm:w-32 sm:h-44 rounded-md overflow-hidden border-2 border-muted-foreground/20 group-hover:border-primary/50 group-hover:scale-105 transition-all duration-300 shadow-sm">
              <Image
                src="/cv-thumbnail.png"
                alt="Aperçu du CV de Patrice Monat"
                fill
                className="object-cover object-top"
                sizes="128px"
              />
              {/* Overlay zoom icon */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            {/* Texte */}
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                CV Patrice Monat
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Parcours, compétences et expériences détaillées
              </p>
              <div className="inline-flex items-center gap-2 mt-3 text-sm font-medium text-primary">
                <ZoomIn className="w-4 h-4" />
                Consulter le CV
              </div>
            </div>
          </button>
        </motion.div>

        {/* CV Modal */}
        <Dialog open={cvModalOpen} onOpenChange={setCvModalOpen}>
          <DialogContent className="max-w-4xl max-h-[95vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>CV Patrice Monat</DialogTitle>
            </DialogHeader>
            <div className="relative w-full aspect-[210/297] my-4">
              <Image
                src="/cv-thumbnail.png"
                alt="CV de Patrice Monat"
                fill
                className="object-contain"
                sizes="(max-width: 896px) 100vw, 896px"
                priority
              />
            </div>
            <div className="flex justify-center">
              <Button asChild>
                <a href="/cv-patrice-monat.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger le CV (PDF)
                </a>
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Compétences clés */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid gap-6 md:grid-cols-2 mb-12"
        >
          <div className="bg-card border rounded-lg p-6">
            <h3 className="font-semibold mb-2">Stratégie</h3>
            <p className="text-sm text-muted-foreground">
              Comprendre le &quot;pourquoi&quot; avant le &quot;comment&quot;.
              Aligner les solutions sur vos objectifs business.
            </p>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <h3 className="font-semibold mb-2">Design</h3>
            <p className="text-sm text-muted-foreground">
              16 ans d&apos;expertise créative. Identités visuelles, interfaces,
              illustrations.
            </p>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <h3 className="font-semibold mb-2">Développement</h3>
            <p className="text-sm text-muted-foreground">
              Sites web, applications, outils No-Code. De l&apos;idée au
              déploiement.
            </p>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <h3 className="font-semibold mb-2">Automatisations</h3>
            <p className="text-sm text-muted-foreground">
              Workflows intelligents, intégrations, gain de temps au quotidien.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center border-t pt-12"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Votre projet digital mérite quelqu&apos;un qui comprend le fond ET la forme.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Discutons de votre projet
          </a>
        </motion.div>
      </div>
    </div>
  )
}
