"use client"

import { motion } from "framer-motion"
import { Lightbulb, Palette, Code, Rocket } from "lucide-react"

const steps = [
  {
    icon: Lightbulb,
    title: "Découverte",
    description: "Comprendre vos besoins, vos objectifs et votre vision pour définir la meilleure stratégie.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Concevoir une identité visuelle et une expérience utilisateur qui vous ressemblent.",
  },
  {
    icon: Code,
    title: "Développement",
    description: "Transformer les maquettes en réalité avec un code propre et performant.",
  },
  {
    icon: Rocket,
    title: "Livraison",
    description: "Déployer votre projet et vous accompagner pour un lancement réussi.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-16 md:py-24">
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
            Comment je travaille
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une méthodologie éprouvée pour des projets livrés dans les temps.
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="bg-card border rounded-lg p-6 h-full hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                {/* Step number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
