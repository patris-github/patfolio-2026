"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10 animated-gradient animate-gradient-shift" />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              Creative Solution Designer
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          >
            Marre de jongler entre le graphiste, le dev et le consultant ?
          </motion.h1>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 space-y-2"
          >
            <p className="text-xl text-muted-foreground md:text-2xl">
              <span className="font-semibold text-foreground">Un interlocuteur.</span>{" "}
              Des solutions livrées vite.
            </p>
            <p className="text-lg text-muted-foreground">
              Stratégie. Design. Site. Automatisations.
            </p>
          </motion.div>

          {/* Value proposition */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-lg font-medium text-primary"
          >
            Votre projet digital en semaines, pas en mois.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <Button asChild size="lg" className="group">
              <Link href="/realisations">
                Voir mes réalisations
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Me contacter</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
