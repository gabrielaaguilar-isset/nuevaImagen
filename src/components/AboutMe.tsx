import { Paragraphs } from "./Paragraphs";
import ServicesCard from "./ServicesCard";
import Titles from "./Titles";
import WorksCards from "./WorksCards";
import arrowRight from "../assets/icons/arrow-right.svg";
import Image from "next/image";

export const AboutMe = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="bg-yellow rounded-full w-26 h-26 blur-[190px] lg:w-96  lg:h-96 absolute lg:-right-24 lg:blur-[260px] top-95 lg:top-[366px]"></div>
      <div className="md:px-[80px] mx-[16px] p-4 mt-[70px] relative overflow-hidden">
        <div className="flex flex-col md:flex-row  z-10">
          <Titles text="Sobre mí" customClass="min-w-[362px]" />
          <Paragraphs
            text="Soy una desarrolladora web con experiencia en React, WordPress, WooCommerce y e-learning, además de poseer conocimientos básicos en PHP. Mi formación incluye habilidades avanzadas en diseño utilizando herramientas como Photoshop y Figma. Me apasiona la programación, el diseño y el aprendizaje continuo, y disfruto trabajando en equipo y enfrentando nuevos desafíos. Mi objetivo es seguir creciendo profesionalmente como desarrolladora web y ofrecer soluciones innovadoras que satisfagan las necesidades y expectativas de los clientes. Estoy dispuesta a aprender y adaptarme a nuevas tecnologías para alcanzar este objetivo."
            customClass="text-justify md:text-left"
          />
        </div>

        <div className="z-20 ">
          <ServicesCard />

          <WorksCards />

          
        </div>

        <div className="flex justify-end">
        <button
            type="button"
            className="flex mt-[26px] md:py-[16px] py-[13px] px-[22px] border rounded-[70px] md:px-[32px] text-black border-black text-[16px] mb-6"
          >
            Conoce más sobre mí 
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-[42px]"
            >
              <path
                d="M5 12H19"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 5L19 12L12 19"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="ml-[42px]"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
