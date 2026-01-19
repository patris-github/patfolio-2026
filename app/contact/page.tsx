import { Metadata } from "next"
import Link from "next/link"
import { Linkedin, Mail, MapPin } from "lucide-react"
import { ContactForm } from "@/components/contact/ContactForm"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez-moi pour discuter de votre projet digital. Disponible en Nord-Isère, Chambéry et Lyon.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            On travaille ensemble ?
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Je cherche une PME où apporter ma double casquette créative et
            technique. Nord-Isère, Chambéry, Lyon — je suis mobile.
          </p>
          <p className="text-muted-foreground mt-2">Un message suffit.</p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Envoyez-moi un message</h2>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-6">Autres moyens de contact</h2>

              <div className="space-y-4">
                {/* LinkedIn */}
                <Link
                  href="https://www.linkedin.com/in/patrice-monat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors group"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-[#0077B5] rounded-lg flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      LinkedIn
                    </p>
                    <p className="text-sm text-muted-foreground">
                      /in/patrice-monat
                    </p>
                  </div>
                </Link>

                {/* Email */}
                <Link
                  href="mailto:monat.patrice@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors group"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      Email
                    </p>
                    <p className="text-sm text-muted-foreground">
                      monat.patrice@gmail.com
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Location */}
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Zone géographique
              </h3>
              <p className="text-muted-foreground">
                Basé en Nord-Isère, je suis disponible pour des postes<span className="whitespace-nowrap">&nbsp;en&nbsp;:</span>
              </p>
              <ul className="mt-2 space-y-1 text-muted-foreground">
                <li>• Nord-Isère (Bourgoin-Jallieu et environs)</li>
                <li>• Bassin chambérien</li>
                <li>• Ouest lyonnais</li>
              </ul>
            </div>

            {/* Availability */}
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-900">
              <p className="text-sm font-medium text-green-700 dark:text-green-400">
                Disponible immédiatement
              </p>
              <p className="text-sm text-green-600 dark:text-green-500 mt-1">
                À la recherche d&apos;un CDI
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
