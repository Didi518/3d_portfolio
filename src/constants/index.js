import { alionax, meta, shopify, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Gestionnaire de Versions",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Gestionnaire de Versions",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "Gestionnaire d'Etats",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Développeur Prestashop",
    company_name: "Alionax",
    icon: alionax,
    iconBg: "#accbe1",
    date: "Avril 2021 - Juillet 2021",
    points: [
      "Développer et maintenir des applications web en utilisant Prestashop et d’autres technologies connexes.",
      "Collaborer avec des équipes interfonctionnelles comprenant des designers, des chefs de produit et d’autres développeurs pour créer des produits de haute qualité.",
      "Mettre en œuvre un design réactif et assurer la compatibilité entre les navigateurs.",
      "Participer aux revues de code et fournir des commentaires constructifs aux autres développeurs.",
    ],
  },
  {
    title: "Développeur Web React/Express",
    company_name: "Simplon",
    icon: tesla,
    iconBg: "#fbc3bc",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Développer et maintenir des applications web en utilisant Prestashop et d’autres technologies connexes.",
      "Collaborer avec des équipes interfonctionnelles comprenant des designers, des chefs de produit et d’autres développeurs pour créer des produits de haute qualité.",
      "Mettre en œuvre un design réactif et assurer la compatibilité entre les navigateurs.",
      "Participer aux revues de code et fournir des commentaires constructifs aux autres développeurs.",
    ],
  },
  {
    title: "Développeur Web",
    company_name: "Simplon",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Développer et maintenir des applications web en utilisant Prestashop et d’autres technologies connexes.",
      "Collaborer avec des équipes interfonctionnelles comprenant des designers, des chefs de produit et d’autres développeurs pour créer des produits de haute qualité.",
      "Mettre en œuvre un design réactif et assurer la compatibilité entre les navigateurs.",
      "Participer aux revues de code et fournir des commentaires constructifs aux autres développeurs.",
    ],
  },
  {
    title: "Développeur Fullstack",
    company_name: "Simplon",
    icon: meta,
    iconBg: "#a2d2ff",
    date: "Jan 2023 - Present",
    points: [
      "Développer et maintenir des applications web en utilisant Prestashop et d’autres technologies connexes.",
      "Collaborer avec des équipes interfonctionnelles comprenant des designers, des chefs de produit et d’autres développeurs pour créer des produits de haute qualité.",
      "Mettre en œuvre un design réactif et assurer la compatibilité entre les navigateurs.",
      "Participer aux revues de code et fournir des commentaires constructifs aux autres développeurs.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Didi518",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/ko-/",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Kevflix",
    description:
      "Une encyclopédie des médias films/séries TV basée sur The Movie Database, en MERN stack.",
    link: "https://github.com/Didi518/KevFlix",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Blog App",
    description:
      "Une application de blog utilisant @tiptap toolkit éditeur de text et de code.",
    link: "https://github.com/Didi518/MERN-Blog-App/tree/main",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Discord Clone Full Stack",
    description:
      "Designé à la Discord, une application sociale utilisant web-socket pour les chats, dropzone pour les partages de fichiers et livekit pour les visios. Développer sous Next 13.",
    link: "https://github.com/Didi518/next13-discord/tree/main",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Full Stack InstaChat",
    description:
      "Une inspiration d'Instagram et de Snapchat. Appli complète rassemblant les fonctionnalités des deux fameux réseaux sociaux. Codé avec Typescript.",
    link: "https://github.com/Didi518/instachat",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Spotify",
    description:
      "Développé sous Next 13, cette application est un clone de spotify, comprend un stockage de fichiers musicaux, permettant la création de playlists et bien plus encore.",
    link: "https://github.com/Didi518/nextjs-spotify-2.0",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Make Me Trip",
    description:
      "Application full stack qui m'a permis de valider ma montée en compétence et à obtenir ma certification. Appli réplique d'une agence de voyage codée en MERN Stack intégrant Stripe et Redux notemment.",
    link: "https://github.com/Didi518/Make-Me-Trip",
  },
];
