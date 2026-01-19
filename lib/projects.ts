export type ProjectCategory = "product-builder" | "design-graphique"

export interface GalleryItem {
  src: string
  title: string
}

export interface Project {
  id: string
  title: string
  slug: string
  category: ProjectCategory
  description: string
  challenge: string
  solution: string
  results: string[]
  image: string
  tags: string[]
  link?: string
  gallery?: GalleryItem[]
}

export const projects: Project[] = [
  // Product Builder Projects
  {
    id: "1",
    title: "Pulse : Application mobile en développement",
    slug: "pulse-app-mobile",
    category: "product-builder",
    description:
      "Pulse propose un référencement d'associations de ressortissants étrangers, une fonction de recherche d'associations et une messagerie.",
    challenge:
      "Les nouveaux arrivants sur le territoire se sentent désorientés pour effectuer n'importe quelles démarches administratives.",
    solution:
      "Pulse permet de mettre en relation des nouveaux arrivants avec des associations locales leur permettant d'apporter leur aide dans toutes leurs démarches.",
    results: [
      "Application en cours de développement",
    ],
    image: "/projects/pulse.mp4",
    tags: ["React Native", "Application Mobile", "Node.js"],
  },
  {
    id: "2",
    title: "Océan Zéro Plastique",
    slug: "ocean-zero-plastique",
    category: "product-builder",
    description:
      "Cette application propose de partager des collectes de déchets sur les plages pour mettre en évidence la pollution des océans.",
    challenge:
      "Une association souhaitait digitaliser leurs informations et se rendre plus visible et attractive.",
    solution:
      "Grâce à OZP chaque membre de l'association peut enregistrer ses collectes en notant les lieux et le poids des déchets pour chaque collecte et les partager.",
    results: [
      "100% de visibilité des informations",
    ],
    image: "/projects/ozp.mp4",
    tags: ["Bubble", "Application Web", "Association"],
  },
  {
    id: "3",
    title: "Kickstory",
    slug: "kickstory",
    category: "product-builder",
    description:
      "Une application qui permet de créer des histoires dans des univers variés avec la possibilité de l'écouter comme un podcast.",
    challenge:
      "Toujours les mêmes histoires, pas toujours le temps d'acheter un nouveau livre.",
    solution:
      "Kickstory permet de créer très rapidement des histoires et de pouvoir les écouter. Il favorise l'imaginaire et la reconnexion à la lecture. Il crée l'histoire, une illustration comme une couverture de livre et un audio.",
    results: [
      "100% d'histoires uniques",
      "Grande rapidité de génération",
    ],
    image: "/projects/kickstory.mp4",
    tags: ["Bubble", "Application Web", "OpenAI"],
  },
  // Design Graphique Projects
  {
    id: "4",
    title: "Patfolio Graphiste-Illustrateur",
    slug: "patfolio-graphiste-illustrateur",
    category: "product-builder",
    description:
      "Un portfolio retraçant mon expertise graphique.",
    challenge:
      "Mettre en valeur la variété des compétences graphiques en communication print et en illustration.",
    solution:
      "Un site réalisé entièrement en HTML, CSS et JavaScript pour présenter mes créations graphiques.",
    results: [
      "100% réalisé en HTML/CSS et JavaScript",
    ],
    image: "/projects/patfolio-graphiste.mp4",
    tags: ["HTML/CSS/JavaScript", "Site Web", "Autonomie"],
  },
  {
    id: "5",
    title: "Communication Print",
    slug: "communication-print",
    category: "design-graphique",
    description:
      "Création de supports de communication visuelle pour des entreprises et associations : logos, affiches, flyers, kakémonos et documents commerciaux.",
    challenge:
      "Traduire l'identité et les messages des clients en supports imprimés percutants et professionnels.",
    solution:
      "Conception graphique sur-mesure adaptée à chaque support et contexte de diffusion, de l'identité visuelle aux supports événementiels.",
    results: [
      "Diversité de clients accompagnés",
      "Supports déclinés print et digital",
    ],
    image: "/projects/print-01-logos.png",
    tags: ["Logo", "Affiche", "Flyer", "Print"],
    gallery: [
      { src: "/projects/print-01-logos.png", title: "Logos" },
      { src: "/projects/print-02-gite-guizay.png", title: "Flyer Gîte de Guizay" },
      { src: "/projects/print-03-flyer-rencontres-ludik.png", title: "Flyer Rencontres Ludik Bourgoin-Jallieu" },
      { src: "/projects/print-04-flyer-muravin.png", title: "Flyer Muravin" },
      { src: "/projects/print-05-affiche-rencontres-ludik.jpg", title: "Affiche Rencontres Ludik" },
      { src: "/projects/print-06-affiche-pitt-poule.jpg", title: "Affiche Type Pitt Poule" },
      { src: "/projects/print-07-affiche-elzed.jpg", title: "Affiche Concert Elzed" },
      { src: "/projects/print-08-kakemonos-gambetta.png", title: "Kakémonos LP Gambetta Bourgoin-Jallieu" },
      { src: "/projects/print-09-cd-elzed.jpg", title: "Album CD Pochette et livret Elzed" },
      { src: "/projects/print-10-cd-pitt-poule.jpg", title: "Album CD Pochette et livret Pitt Poule" },
    ],
  },
  {
    id: "6",
    title: "Illustration",
    slug: "illustration",
    category: "design-graphique",
    description:
      "Créations illustrées variées : illustrations pour jeux de société, digital painting et pochettes de CD.",
    challenge:
      "Donner vie à des univers visuels uniques tout en respectant les contraintes techniques de chaque support.",
    solution:
      "Techniques mixtes alliant illustration traditionnelle et digitale pour des rendus adaptés à chaque projet.",
    results: [
      "Univers visuels variés",
      "Polyvalence des styles",
    ],
    image: "/projects/illus-01-jumping-dead.jpg",
    tags: ["Illustrations vectorielles", "Digital Painting", "Jeux de société"],
    gallery: [
      { src: "/projects/illus-01-jumping-dead.jpg", title: "Jeu de société Jumping Dead" },
      { src: "/projects/illus-02-personnages-vectoriels.jpg", title: "Personnages images vectorielles" },
      { src: "/projects/illus-03-cartes-jumping-dead.jpg", title: "Cartes jeu Jumping Dead" },
      { src: "/projects/illus-04-boite-jeu.jpg", title: "Illustration Boîte jeu" },
      { src: "/projects/illus-05-guerre-diadoques.png", title: "Jeu de cartes La Guerre des Diadoques" },
      { src: "/projects/illus-06-onu-wfp.jpg", title: "Projet en cours d'illustration jeu Programme Alimentaire Mondial PAM pour l'ONU" },
      { src: "/projects/illus-07-digital-painting.jpg", title: "Digital Painting Photoshop" },
    ],
  },
]

export const categoryLabels: Record<ProjectCategory, string> = {
  "product-builder": "Product Builder",
  "design-graphique": "Design Graphique",
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
