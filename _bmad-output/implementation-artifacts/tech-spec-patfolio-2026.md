---
title: 'Patfolio 2026'
slug: 'patfolio-2026'
created: '2026-01-16'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack:
  - Next.js 14+ (App Router)
  - React 18+
  - TypeScript 5+
  - Tailwind CSS 3+
  - shadcn/ui (composants)
  - Framer Motion 11+ (animations)
  - Resend (formulaire contact)
  - Vercel (deployment)
files_to_modify:
  - app/layout.tsx
  - app/page.tsx
  - app/a-propos/page.tsx
  - app/realisations/page.tsx
  - app/contact/page.tsx
  - app/api/contact/route.ts
  - app/globals.css
  - components/layout/Header.tsx
  - components/layout/Footer.tsx
  - components/home/Hero.tsx
  - components/projects/ProjectGrid.tsx
  - components/projects/ProjectCard.tsx
  - components/projects/ProjectModal.tsx
  - components/contact/ContactForm.tsx
  - lib/utils.ts
  - lib/projects.ts
  - tailwind.config.ts
  - next.config.js
code_patterns:
  - Next.js App Router (Server Components par défaut)
  - Client Components avec "use client" pour interactivité
  - shadcn/ui pour composants UI (Button, Dialog, Card, Input)
  - Framer Motion pour animations (motion.div, AnimatePresence)
  - Tailwind utility-first avec cn() helper
  - Route Handlers pour API (app/api/)
test_patterns:
  - Validation manuelle cross-device
  - Tests visuels Chrome/Firefox/Safari
---

# Tech-Spec: Patfolio 2026

**Created:** 2026-01-16

## Overview

### Problem Statement

Le portfolio actuel de Patrice positionne son profil comme "Graphiste-Illustrateur", masquant sa capacité à concevoir et livrer des solutions digitales complètes. Ce positionnement obsolète crée un décalage entre la perception du marché et la valeur réelle offerte, limitant les opportunités CDI auprès des PME.

### Solution

Créer un site portfolio avec Next.js + Tailwind qui démontre par l'exemple les compétences hybrides (design + développement). Le site lui-même sera la preuve des capacités Product Builder : rapide, bien conçu, avec une UX soignée et des animations subtiles montrant l'expertise front-end.

### Scope

**In Scope:**
- 4 pages : Accueil, À propos, Réalisations, Contact
- ~6-8 projets affichés en grille avec modal détail
- 2 catégories de projets : Product Builder / Communication graphique & Illustration
- Formulaire contact fonctionnel (Resend)
- Animations subtiles (transitions, hovers, scroll reveals)
- Responsive mobile-first
- Déploiement Vercel
- SEO de base (meta tags, Open Graph)

**Out of Scope:**
- Blog / Articles
- Mode sombre
- CV PDF téléchargeable
- Multilangue
- CMS (contenu en dur pour la V1)
- Tests automatisés (V1 rapide)

## Context for Development

### Project Status

**Confirmed Clean Slate** - Projet vierge avec uniquement `shadcn` en devDependency. Initialisation complète requise.

### Target Directory Structure

```
patfolio-2026/
├── app/
│   ├── layout.tsx          # Layout racine (fonts, metadata)
│   ├── page.tsx             # Page Accueil
│   ├── a-propos/
│   │   └── page.tsx         # Page À propos
│   ├── realisations/
│   │   └── page.tsx         # Page Réalisations (grille + modals)
│   ├── contact/
│   │   └── page.tsx         # Page Contact (formulaire Resend)
│   ├── api/
│   │   └── contact/
│   │       └── route.ts     # API Route pour Resend
│   └── globals.css          # Styles Tailwind globaux
├── components/
│   ├── ui/                  # Composants shadcn/ui (auto-générés)
│   ├── layout/
│   │   ├── Header.tsx       # Navigation
│   │   └── Footer.tsx       # Footer
│   ├── home/
│   │   └── Hero.tsx         # Section hero accueil
│   ├── projects/
│   │   ├── ProjectGrid.tsx  # Grille de projets
│   │   ├── ProjectCard.tsx  # Carte projet
│   │   └── ProjectModal.tsx # Modal détail projet
│   └── contact/
│       └── ContactForm.tsx  # Formulaire contact
├── lib/
│   ├── utils.ts             # Utilitaires (cn helper)
│   └── projects.ts          # Data des projets (typed)
├── public/
│   ├── images/
│   │   └── projects/        # Assets projets (WebP)
│   └── fonts/               # Fonts custom (optionnel)
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

### Codebase Patterns

| Pattern | Implementation |
|---------|----------------|
| **Server Components** | Par défaut dans App Router, pour pages statiques |
| **Client Components** | `"use client"` pour Header, ProjectModal, ContactForm |
| **Styling** | Tailwind utilities + `cn()` helper de shadcn |
| **Animations** | `motion.div` de Framer Motion, `AnimatePresence` pour modals |
| **Data** | Fichier TypeScript statique (`lib/projects.ts`) |
| **API** | Route Handler (`app/api/contact/route.ts`) |
| **Images** | `next/image` avec optimisation auto |

### shadcn/ui Components to Use

| Composant | Usage |
|-----------|-------|
| `Button` | CTAs, navigation |
| `Dialog` | Modal projet |
| `Card` | Carte projet |
| `Input` | Champs formulaire |
| `Textarea` | Message contact |
| `Badge` | Tags catégories |

### Files to Reference

| File | Purpose |
| ---- | ------- |
| `_bmad-output/planning-artifacts/product-brief-Patfolio-2026-2026-01-15.md` | Contenu validé (accroches, bio, structure) |

### Technical Decisions

| Décision | Choix | Raison |
|----------|-------|--------|
| **Router** | App Router | Standard moderne Next.js 14+ |
| **UI Library** | shadcn/ui | Composants accessibles, customisables, pro |
| **Styling** | Tailwind CSS | Rapidité, design system intégré |
| **Animations** | Framer Motion | Déclaratif, performant |
| **Fonts** | Geist (via next/font) | Font moderne, variable, optimisée |
| **Images** | next/image + WebP | Optimisation automatique |
| **Contact API** | Resend via Route Handler | Serverless, simple, gratuit |
| **State modals** | useState local | Pas besoin de global state |
| **Déploiement** | Vercel | Zero-config, preview branches |

---

## Implementation Plan

### Phase 0 : Initialisation Projet (Prérequis)

- [ ] **Task 0.1**: Initialiser Next.js avec TypeScript + Tailwind
  - Action: `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"`
  - Notes: Répondre "Yes" à App Router, "No" à src directory

- [ ] **Task 0.2**: Initialiser shadcn/ui
  - Action: `npx shadcn@latest init`
  - Notes: Style "New York", couleur base "Slate", CSS variables "Yes"

- [ ] **Task 0.3**: Ajouter composants shadcn nécessaires
  - Action: `npx shadcn@latest add button dialog card input textarea badge`
  - Notes: Génère les composants dans `components/ui/`

- [ ] **Task 0.4**: Installer dépendances additionnelles
  - Action: `npm install framer-motion resend`
  - Notes: Framer Motion pour animations, Resend pour emails

- [ ] **Task 0.5**: Créer structure de dossiers
  - Action: Créer `components/layout/`, `components/home/`, `components/projects/`, `components/contact/`, `lib/`, `public/images/projects/`
  - Notes: Structure prête pour le développement

---

### Phase 1 : Fondations (Layout + Navigation)

- [ ] **Task 1.1**: Configurer le layout racine
  - File: `app/layout.tsx`
  - Action: Configurer metadata SEO, importer Geist font, inclure Header/Footer
  - Notes: Metadata avec title "Patrice Monat | Creative Solution Designer", description orientée PME

- [ ] **Task 1.2**: Configurer les styles globaux
  - File: `app/globals.css`
  - Action: Définir variables CSS custom (couleurs, espacements), animations de base
  - Notes: Palette sobre et professionnelle

- [ ] **Task 1.3**: Créer le Header avec navigation
  - File: `components/layout/Header.tsx`
  - Action: Navigation responsive (desktop: liens inline, mobile: menu burger), logo/nom, liens vers 4 pages
  - Notes: "use client" pour état mobile, animation Framer Motion sur apparition

- [ ] **Task 1.4**: Créer le Footer
  - File: `components/layout/Footer.tsx`
  - Action: Liens LinkedIn + Email, copyright, mention "Développé avec Next.js"
  - Notes: Simple, sobre, avec liens sociaux

---

### Phase 2 : Page Accueil

- [ ] **Task 2.1**: Créer le composant Hero
  - File: `components/home/Hero.tsx`
  - Action: Titre accrocheur ("Marre de jongler..."), proposition de valeur, CTAs (Réalisations + Contact)
  - Notes: Animation fade-in au chargement, texte du Product Brief

- [ ] **Task 2.2**: Assembler la page Accueil
  - File: `app/page.tsx`
  - Action: Intégrer Hero, ajouter section aperçu compétences (optionnel), CTA final
  - Notes: Server Component, import du Hero

---

### Phase 3 : Page À Propos

- [ ] **Task 3.1**: Créer la page À propos
  - File: `app/a-propos/page.tsx`
  - Action: Storytelling transformation (graphiste → Creative Solution Designer), parcours, valeurs
  - Notes: Contenu du Product Brief (section Bio), animation scroll reveal

---

### Phase 4 : Système de Projets (Core Feature)

- [ ] **Task 4.1**: Définir les types et data des projets
  - File: `lib/projects.ts`
  - Action: Créer interface `Project` (id, title, slug, category, description, challenge, solution, results, images, tags, link?), exporter array de projets placeholder
  - Notes: Catégories: "product-builder" | "design-graphique"

- [ ] **Task 4.2**: Créer le composant ProjectCard
  - File: `components/projects/ProjectCard.tsx`
  - Action: Card shadcn avec image, titre, catégorie (Badge), hover animation
  - Notes: "use client", onClick pour ouvrir modal, Framer Motion scale on hover

- [ ] **Task 4.3**: Créer le composant ProjectModal
  - File: `components/projects/ProjectModal.tsx`
  - Action: Dialog shadcn avec détails projet (images carousel?, challenge, solution, résultats), bouton fermer
  - Notes: "use client", AnimatePresence pour transition, scroll interne si contenu long

- [ ] **Task 4.4**: Créer le composant ProjectGrid
  - File: `components/projects/ProjectGrid.tsx`
  - Action: Grille responsive (1 col mobile, 2 cols tablet, 3 cols desktop), filtres par catégorie, gestion état modal
  - Notes: "use client", useState pour filtre actif et projet sélectionné

- [ ] **Task 4.5**: Assembler la page Réalisations
  - File: `app/realisations/page.tsx`
  - Action: Titre section, description, intégrer ProjectGrid
  - Notes: Server Component wrapper, ProjectGrid gère l'interactivité

---

### Phase 5 : Page Contact

- [ ] **Task 5.1**: Créer l'API Route pour Resend
  - File: `app/api/contact/route.ts`
  - Action: POST handler, validation des champs (name, email, message), envoi via Resend, réponse JSON
  - Notes: Variable env RESEND_API_KEY, template email simple

- [ ] **Task 5.2**: Créer le composant ContactForm
  - File: `components/contact/ContactForm.tsx`
  - Action: Formulaire avec Input (nom, email) + Textarea (message) + Button submit, états loading/success/error
  - Notes: "use client", validation côté client basique, fetch vers API route

- [ ] **Task 5.3**: Assembler la page Contact
  - File: `app/contact/page.tsx`
  - Action: Titre ("On travaille ensemble ?"), texte intro, ContactForm, liens directs (LinkedIn, email)
  - Notes: Contenu du Product Brief

---

### Phase 6 : Animations & Polish

- [ ] **Task 6.1**: Ajouter animations de scroll reveal
  - Files: `components/home/Hero.tsx`, `app/a-propos/page.tsx`, `app/realisations/page.tsx`
  - Action: Wrapper motion.div avec whileInView, stagger pour listes
  - Notes: Subtil, professionnel (fadeIn + slight translateY)

- [ ] **Task 6.2**: Ajouter transitions de page
  - File: `app/layout.tsx` ou wrapper custom
  - Action: AnimatePresence pour transitions entre pages (optionnel, peut complexifier)
  - Notes: Si trop complexe, skip pour MVP

- [ ] **Task 6.3**: Optimiser les images
  - Action: Convertir assets en WebP, configurer next/image avec sizes appropriés
  - Notes: Images projets dans public/images/projects/

---

### Phase 7 : SEO & Déploiement

- [ ] **Task 7.1**: Configurer metadata SEO complète
  - File: `app/layout.tsx`, pages individuelles
  - Action: Title, description, Open Graph images, Twitter cards
  - Notes: Différent par page (Accueil générique, Réalisations orienté portfolio, etc.)

- [ ] **Task 7.2**: Créer les variables d'environnement
  - File: `.env.local` (local), Vercel dashboard (prod)
  - Action: RESEND_API_KEY, optionnel: NEXT_PUBLIC_SITE_URL
  - Notes: Ne pas commit .env.local

- [ ] **Task 7.3**: Déployer sur Vercel
  - Action: `vercel` ou push sur GitHub + connexion Vercel
  - Notes: Configurer domaine custom si disponible

- [ ] **Task 7.4**: Test final cross-device
  - Action: Tester sur mobile (iOS Safari, Android Chrome), tablet, desktop (Chrome, Firefox, Safari)
  - Notes: Vérifier responsive, formulaire, modals, animations

---

## Acceptance Criteria

### AC Généraux

- [ ] **AC-G1**: Given le site est chargé, when l'utilisateur arrive sur n'importe quelle page, then le Header et Footer sont visibles et fonctionnels
- [ ] **AC-G2**: Given un écran mobile (< 768px), when l'utilisateur navigue, then le layout est responsive et utilisable
- [ ] **AC-G3**: Given un écran desktop (> 1024px), when l'utilisateur navigue, then le contenu est bien centré avec max-width approprié

### AC Page Accueil

- [ ] **AC-H1**: Given la page Accueil, when elle se charge, then le Hero affiche le titre accrocheur, la proposition de valeur, et 2 CTAs visibles
- [ ] **AC-H2**: Given la page Accueil, when l'utilisateur clique sur "Voir mes réalisations", then il est redirigé vers /realisations
- [ ] **AC-H3**: Given la page Accueil, when l'utilisateur clique sur "Me contacter", then il est redirigé vers /contact

### AC Page À Propos

- [ ] **AC-A1**: Given la page À propos, when elle se charge, then le storytelling complet est affiché (accroche, parcours, aujourd'hui)
- [ ] **AC-A2**: Given la page À propos, when l'utilisateur scroll, then les sections apparaissent avec animation subtile

### AC Page Réalisations

- [ ] **AC-R1**: Given la page Réalisations, when elle se charge, then tous les projets sont affichés en grille
- [ ] **AC-R2**: Given la page Réalisations, when l'utilisateur clique sur un filtre catégorie, then seuls les projets de cette catégorie sont affichés
- [ ] **AC-R3**: Given la page Réalisations, when l'utilisateur clique sur une carte projet, then une modal s'ouvre avec les détails du projet
- [ ] **AC-R4**: Given une modal projet ouverte, when l'utilisateur clique sur le bouton fermer ou l'overlay, then la modal se ferme avec animation

### AC Page Contact

- [ ] **AC-C1**: Given la page Contact, when elle se charge, then le formulaire avec 3 champs (nom, email, message) et un bouton submit est visible
- [ ] **AC-C2**: Given le formulaire Contact, when l'utilisateur soumet avec des champs vides, then un message d'erreur s'affiche
- [ ] **AC-C3**: Given le formulaire Contact avec données valides, when l'utilisateur soumet, then un état loading s'affiche puis un message de succès
- [ ] **AC-C4**: Given le formulaire Contact, when l'envoi échoue (API error), then un message d'erreur clair s'affiche
- [ ] **AC-C5**: Given la page Contact, when l'utilisateur cherche des alternatives, then des liens LinkedIn et email directs sont visibles

### AC Animations

- [ ] **AC-AN1**: Given n'importe quelle page, when les éléments entrent dans le viewport, then ils apparaissent avec une animation fade-in subtile
- [ ] **AC-AN2**: Given la page Réalisations, when l'utilisateur hover une carte projet, then un effet visuel (scale ou shadow) indique l'interactivité

### AC SEO

- [ ] **AC-S1**: Given le code source de chaque page, when on inspecte les meta tags, then title et description sont présents et pertinents
- [ ] **AC-S2**: Given un partage sur LinkedIn/Twitter, when le lien est collé, then une preview avec image Open Graph s'affiche

---

## Additional Context

### Dependencies

```json
{
  "dependencies": {
    "next": "^14.x",
    "react": "^18.x",
    "react-dom": "^18.x",
    "framer-motion": "^11.x",
    "resend": "^3.x",
    "class-variance-authority": "^0.7.x",
    "clsx": "^2.x",
    "tailwind-merge": "^2.x",
    "lucide-react": "^0.x"
  },
  "devDependencies": {
    "typescript": "^5.x",
    "@types/react": "^18.x",
    "@types/node": "^20.x",
    "tailwindcss": "^3.x",
    "autoprefixer": "^10.x",
    "postcss": "^8.x"
  }
}
```

### External Services

| Service | Usage | Setup |
|---------|-------|-------|
| **Resend** | Envoi emails contact | Créer compte, obtenir API key, ajouter domaine vérifié |
| **Vercel** | Hébergement | Connexion GitHub, import projet, configurer env vars |

### Environment Variables

```bash
# .env.local
RESEND_API_KEY=re_xxxxxxxxxxxx
NEXT_PUBLIC_SITE_URL=https://patrice-monat.fr  # optionnel
```

### Testing Strategy

| Type | Méthode | Couverture |
|------|---------|------------|
| **Fonctionnel** | Manuel | Navigation, formulaire, modals |
| **Responsive** | Chrome DevTools | Mobile, tablet, desktop |
| **Cross-browser** | BrowserStack ou devices réels | Chrome, Firefox, Safari |
| **Performance** | Lighthouse | Score > 90 |

### Risks & Mitigations

| Risque | Impact | Mitigation |
|--------|--------|------------|
| Assets projets pas prêts | Bloque Phase 4 | Utiliser placeholders, prioriser structure |
| Resend setup complexe | Bloque formulaire | Fallback mailto: si besoin |
| Animations trop lourdes | Performance mobile | Réduire ou désactiver sur mobile |
| Contenu projets incomplet | MVP incomplet | Minimum 4 projets avec données réelles |

### Notes

- **Deadline** : Mi-février 2026 (~4 semaines)
- **Objectif** : CDI dans les 30 jours post-lancement
- **Cible** : Sophie, responsable comm PME (Nord-Isère, Chambéry, Lyon)
- **Assets** : Prêts, formats à optimiser (WebP, vidéos courtes pour démos)
- **Contenu** : Accroches et bio déjà rédigées dans le Product Brief
- **Estimation** : 7-10 jours de développement effectif avec cette spec
