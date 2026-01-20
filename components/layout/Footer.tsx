import Link from "next/link"
import { Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Patrice Monat. Tous droits réservés.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link
              href="https://www.linkedin.com/in/patrice-monat/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Contact"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>

          {/* Tagline */}
          <p className="text-xs text-muted-foreground">
            De l'idée à la réalisation
          </p>
        </div>
      </div>
    </footer>
  )
}
