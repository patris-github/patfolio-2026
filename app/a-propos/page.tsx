import { Metadata } from "next"
import { AProposContent } from "@/components/a-propos/AProposContent"

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez mon parcours : du graphisme au développement, 16 ans d'expertise créative. Stratégie, design, développement et automatisations en un seul interlocuteur.",
}

export default function AProposPage() {
  return <AProposContent />
}
