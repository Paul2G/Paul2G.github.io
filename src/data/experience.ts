import type { IExperienceEvent } from "../types";

export const experienceEvents: Array<IExperienceEvent> = [
  {
    title: "Desarrollador web (e-commerce)",
    company: {
      name: "Sol Beauty & Care",
      website: "https://solbeautyandcare.com/",
    },
    startDate: new Date("2023-03-21"),
    endDate: new Date(),
    description: `- Desarrollé por completo tiendas en linea utilizando Remix (React) como tecnología principal y Shopify como administrador de contenido.
- Colaboré con el equipo de diseño e ingeniería para comprender los requisitos del proyecto y garantizar la coherencia en la experiencia del usuario.
- Fui parte de la toma de decisiones para la implementación de nuevas características en dichos proyectos dentro de mi alcance como desarrollador.
- Planeé desarrollé y documenté el proyecto de una herramienta web de uso interno para la administración de contenido multimedia de las tiendas online.`,
    cardColor: "#ccd4ff",
  },
  {
    title: "Desarrollador web",
    company: {
      name: "Grupo Gurú",
      website: "https://grupoguru.com/",
    },
    startDate: new Date("2022-08-20"),
    endDate: new Date("2022-12-12"),
    description: `- Creación de sitios web para empresas de múltiples giros usando Wordpress.
- Desarrollo de funcionalidades a medida para los sitios web usando Javascript, HTML y CSS.
- Administración y configuración de servidores para los sitios web usando cPanel y HWM.`,
    cardColor: "#ffe486",
  },
] as const;
