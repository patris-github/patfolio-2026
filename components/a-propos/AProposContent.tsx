"use client"

import { motion } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
}

export function AProposContent() {
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
