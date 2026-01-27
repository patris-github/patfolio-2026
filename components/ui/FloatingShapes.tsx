"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Ripple {
  id: number
  x: number
  y: number
  delay: number
}

export function FloatingShapes() {
  const [ripples, setRipples] = useState<Ripple[]>([])
  const [mounted, setMounted] = useState(false)

  const createRipple = useCallback(() => {
    const newRipple: Ripple = {
      id: Date.now() + Math.random(),
      x: 10 + Math.random() * 80,
      y: 10 + Math.random() * 80,
      delay: 0,
    }
    return newRipple
  }, [])

  useEffect(() => {
    setMounted(true)

    // Create initial ripples
    const initialRipples = Array.from({ length: 4 }, () => createRipple())
    setRipples(initialRipples)

    // Add new ripples periodically
    const interval = setInterval(() => {
      setRipples(prev => {
        // Remove old ripples and add new one
        const newRipples = prev.length >= 6
          ? [...prev.slice(1), createRipple()]
          : [...prev, createRipple()]
        return newRipples
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [createRipple])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <AnimatePresence>
        {ripples.map((ripple) => (
          <RippleEffect key={ripple.id} x={ripple.x} y={ripple.y} />
        ))}
      </AnimatePresence>
    </div>
  )
}

function RippleEffect({ x, y }: { x: number; y: number }) {
  return (
    <div
      className="absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Multiple concentric ripples with staggered delays */}
      {[0, 1, 2, 3].map((index) => (
        <motion.div
          key={index}
          className="absolute rounded-full border border-primary/30 dark:border-primary/20"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          initial={{
            width: 0,
            height: 0,
            opacity: 0.6,
          }}
          animate={{
            width: [0, 400, 800],
            height: [0, 400, 800],
            opacity: [0.5, 0.3, 0],
          }}
          transition={{
            duration: 8,
            delay: index * 1.5,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />
      ))}
    </div>
  )
}
