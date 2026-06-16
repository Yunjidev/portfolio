import kettle1 from '../assets/img/kettle1.png'
import kettle2 from '../assets/img/kettle2.png'
import kettle3 from '../assets/img/kettle3.png'
import proxilio from '../assets/img/proxilio.png'
import dofucraft from '../assets/img/dofucraft.png'
import madroom from '../assets/img/madroom.png'
import lilith from '../assets/img/lilith.png'
import cautioneo from '../assets/img/cautioneo.png'
import mas1 from '../assets/img/Mas/1.png'
import mas2 from '../assets/img/Mas/2.png'
import mas3 from '../assets/img/Mas/3.png'
import dao1 from '../assets/img/dao1.png'
import dao2 from '../assets/img/dao2.png'
import daofull from '../assets/img/daofull.png'
import wiki from '../assets/img/wiki.png'
import wiki2 from '../assets/img/wiki2.png'
import sba from '../assets/img/sba.png'

export const projects = [
  {
    id: 1,
    title: 'Kettlecore',
    description: 'Plateforme de diagnostic énergétique en ligne avec questionnaire dynamique, résultats par dimension et génération de rapports PDF.',
    images: [kettle1, kettle2, kettle3],
    tags: ['Ruby on Rails', 'React', 'TypeScript', 'Tailwind'],
    badge: 'Freelance',
    liveUrl: 'https://kettlecore.app/',
    codeUrl: null,
  },
  {
    id: 2,
    title: 'Proxilio',
    description: 'Plateforme mettant en relation particuliers et professionnels locaux vérifiés — recherche de prestataires, prise de contact et réservation.',
    images: [proxilio],
    tags: ['React', 'Tailwind', 'NodeJS'],
    badge: 'Freelance',
    liveUrl: 'https://proxilio.fr/',
    codeUrl: null,
  },
  {
    id: 3,
    title: 'DofuCraft',
    description: "Outils web pour joueurs de Dofus : calcul de rentabilité de crafts, suivi du ROI par ressource et optimisation des gains en jeu.",
    images: [dofucraft],
    tags: ['React', 'Tailwind', 'Rails'],
    badge: 'Freelance',
    liveUrl: 'https://dofucraft.fr/',
    codeUrl: null,
  },
  {
    id: 4,
    title: 'Madroom',
    description: "Plateforme de réservation en ligne pour un défouloir — gestion des créneaux, des offres et des expériences.",
    images: [madroom],
    tags: ['React', 'Tailwind', 'Rails'],
    badge: 'Freelance',
    liveUrl: 'https://madroom.fr/',
    codeUrl: null,
  },
  {
    id: 5,
    title: "L'Étincelle de Lilith",
    description: "Boutique en ligne de bougies parfumées artisanales — catalogue produits, fiches détaillées et tunnel d'achat.",
    images: [lilith],
    tags: ['React', 'Tailwind', 'Rails'],
    badge: 'Freelance',
    liveUrl: 'https://etincelledelilith.fr/',
    codeUrl: null,
  },
  {
    id: 6,
    title: 'Cautioneo',
    description: "Refonte de plusieurs parcours utilisateurs pour une fintech spécialisée dans la garantie locative et l'assurance loyers impayés.",
    images: [cautioneo],
    tags: ['Ruby on Rails', 'CSS', 'API'],
    badge: 'Freelance',
    liveUrl: 'https://www.cautioneo.com/',
    codeUrl: null,
  },
  {
    id: 7,
    title: 'Mas des Sources',
    description: "Site vitrine multipage pour un hébergement touristique dans les Cévennes : logements, activités, loisirs.",
    images: [mas1, mas2, mas3],
    tags: ['React', 'JavaScript', 'Tailwind'],
    badge: 'Freelance',
    liveUrl: 'https://mas-des-sources.vercel.app/',
    codeUrl: 'https://github.com/Yunjidev/mas_des_sources',
  },
  {
    id: 8,
    title: 'ChronoDAO',
    description: "Site complet pour une guilde Web3 du jeu BigTime avec backend Strapi entièrement administrable.",
    images: [dao1, dao2, daofull],
    tags: ['React', 'TypeScript', 'Strapi'],
    badge: 'Freelance',
    liveUrl: null,
    codeUrl: 'https://github.com/ChronoDAO/website',
  },
  {
    id: 9,
    title: 'Wiki BigTime',
    description: "Encyclopédie collaborative pour le jeu BigTime avec intégration API Charmverse et affichage d'articles Markdown.",
    images: [wiki, wiki2],
    tags: ['React', 'TypeScript', 'Strapi'],
    badge: 'Freelance',
    liveUrl: null,
    codeUrl: 'https://github.com/Yunjidev/wiki_bigtime',
  },
  {
    id: 10,
    title: 'SBA Vins',
    description: "Outils de gestion interne pour commerciaux et entreprises du secteur vitivinicole — maintenance, développement de nouveaux modules et intégration de l'IA.",
    images: [sba],
    tags: ['Ruby on Rails', 'HTML', 'CSS', 'IA'],
    badge: 'Freelance',
    liveUrl: 'https://sbavins.com/',
    codeUrl: null,
  },
]
