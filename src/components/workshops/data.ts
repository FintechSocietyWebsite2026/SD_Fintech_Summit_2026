import { IWorkShop } from "./types";

export const workshopsMockData: Record<string, IWorkShop[]> = {
  day1: [
    {
      date: "5 Jan 2026",
      time: "2:00PM - 5:00PM",
      imageAlt: "Workshop 2",
      imageSrc: "/workshops/Nvdia.png",
      secondImageSrc: "/workshops/EmbeddedLLM.svg",
      title: "Creating Applications Using LLM, Vision & Text Models",
      company: "Nvidia X EmbeddedLLM",
      description: "Learn to build AI-powered apps in mere hours!",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSc1AJxMFKfvM1BGgF7WF9fS588SSsnfNnRMQRcSxNyc3oSIOA/viewform",
      speakers: ["Rachael Tan, Startup & Developer Growth Manager, APS", "Muhammad Usman, AI Integration Lead"],
      disabled: false,
    },
  ],
  day2: [
    {
      date: "6 Jan 2026",
      time: "1:00PM - 2.00PM",
      imageAlt: "CitiBank",
      imageSrc: "/workshops/CitiBank.png",
      title: "State of Blockchain use cases in banks",
      company: "CitiBank",
      description: "",
      registrationLink: "https://forms.gle/UYu5F6t5BniRXRqr8",
      speakers: ["Choo Haiping, Digital Assets"],
      disabled: true,
    },
  ],
};
