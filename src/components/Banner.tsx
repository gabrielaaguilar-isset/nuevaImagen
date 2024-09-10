import Image from "next/image";
import arrowRight from "../assets/icons/arrow-right.svg";
import { TecnologiesSlider } from "./TecnologiesSlider";
import Link from "next/link";
import imgCard from "../assets/images/cardImagen.svg";
import { Paragraphs } from "./Paragraphs";
export const Banner = () => {
  return (
    <div className="backgroundImgBanner mx-[16px] relative rounded-[35px] overflow-hidden top py-12 2xl:mx-28">

      <div className="bg-purple rounded-full w-36 h-36 blur-[200px] lg:w-96  lg:h-96 absolute lg:-right-24 lg:blur-[260px] top-5 lg:-top-28"></div>
      <div className="flex flex-col md:flex-row pt-8 p-4 items-center md:px-[60px] lg:justify-between lg:mb-[40px] ">
        <div className="lg:w-[55%]">
          <h1 className="font-semibold text-[42px] lg:text-[72px] leading-[110%] mb-6">
            <span className="text-[16px] lg:leading-[110%] ">
              Hola! mi nombre es <br />
            </span>
            Gabriela Aguilar <br /> Frontend Developer
          </h1>
          <Paragraphs text="¡Bienvenido/a a mi sitio web! Aquí podrás descubrir mis proyectos
            digitales, las paginas web que he hecho y mis habilidades" customClass="max-w-[557px]" />
          <button
            type="button"
            className="flex mt-[26px] md:py-[16px] py-[13px] px-[22px] bg-black rounded-[70px] md:px-[32px] text-white text-[16px] mb-6" 
          >
            <Link href="https://api.whatsapp.com/send/?phone=573133207188&text&type=phone_number&app_absent=0" target="_blank">Hablemos</Link>
            <Image
              src={arrowRight}
              alt="arrow right"
              className="ml-[42px] hover:scale-150 transform-gpu"
            />
          </button>
        </div>
        <div className="mb-6 z-10">
          <div className="relative">
            <Image src={imgCard} alt="imagen de presentacion" />
            <div className="absolute top-[10%] left-[5%] lg:left-[12%]">
              <Link href="https://api.whatsapp.com/send/?phone=573133207188&text&type=phone_number&app_absent=0" target="_blank" className="text-white font-semibold">
                <div className="flex items-center lg:mt-5  lg:mb-[10%]">
                  <hr className="w-[54px] my-4 bg-white border-2 mr-3 " />
                  <h2 className="text-[14px] text-white">consigue tu cita ahora</h2>
                </div>

                <h2 className="text-[22px] max-w-[280px]  lg:text-[27px] text-white">
                  {" "}
                  Diseño personalizado adaptado a tu necesidades
                </h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex px-4 flex-col sm:flex-row lg:items-center md:pl-[60px]">
        <h3 className="font-semibold text-[14px] sm:w-[35%] lg:w-[19%] ">
          Manejo de las mejores <br />
          tecnologias
        </h3>
        <TecnologiesSlider customClass="mt-5" />
      </div>

      <div className="bg-yellow rounded-full w-40 h-40 blur-[90px] lg:w-79 lg:h-66 absolute lg:blur-[120px]  bottom-0 right-0 lg:left-0"></div>
    </div>
  );
};
