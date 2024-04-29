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
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    title: "Desarrollador web",
    company: {
      name: "Grupo Gurú",
      website: "https://grupoguru.com/",
    },
    startDate: new Date("2022-08-20"),
    endDate: new Date("2022-12-12"),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
];
