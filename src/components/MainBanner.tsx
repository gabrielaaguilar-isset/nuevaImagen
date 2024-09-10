import Image from "next/image";
import arrowRight from "../assets/icons/arrow-right.svg";
import { TecnologiesSlider } from "./TecnologiesSlider";
import Link from "next/link";
import imgBanner from "../assets/images/img-banner.svg";
import { Paragraphs } from "./Paragraphs";

const MainBanner = () => {
  return (
    <div className="bg-[#f0eded] rounded-b-[35px] mb-44 pb-4 ">
      {" "}
      <div className="bg-purple py-4 w-full px-4 rounded-b-[35px] ">
        <div className="flex flex-col md:flex-row pt-8 p-4 items-center md:px-[60px] lg:justify-between lg:mb-[40px] ">
          <div className="lg:w-[55%]">
            <h1 className="font-semibold text-[32px] text-white lg:text-[72px] leading-[110%] mb-6">
              <span className="text-[16px] lg:leading-[110%] ">
                Hola! mi nombre es <br />
              </span>
              Gabriela Aguilar <br />{" "}
              <span className="text-yellow">Frontend Developer</span>
            </h1>
            <Paragraphs
              text="¡Bienvenido/a a mi sitio web! Aquí podrás descubrir mis proyectos digitales, las paginas web que he hecho y mis habilidades"
              customClass="max-w-[557px] text-white"
            />

            <div className="flex bg-white rounded-xl py-4 px-6 mt-6 flex-col">
              <input
                type="email"
                name=""
                id=""
                className="p-2 border rounded-xl border-black/20 w-full"
                placeholder="Email"
              />
              <button className="bg-black mt-4 rounded-xl text-white py-2">
                SIGUIENTE
              </button>
            </div>
          </div>
        </div>
        <Image src={imgBanner} alt="img banner" className="mt-6" />
      </div>
      
      <div className="flex px-4 flex-col sm:flex-row lg:items-center md:pl-[60px] py-5">
        <h3 className="font-semibold text-[14px] sm:w-[35%] lg:w-[19%] ">
          Manejo de las mejores <br />
          tecnologias
        </h3>
        <TecnologiesSlider customClass="mt-5" />
      </div>
    </div>
  );
};

export default MainBanner;
