"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import Image from "next/image";
import wordpressLogo from "../assets/icons/wordpress.svg";
import reactLogo from "../assets/icons/React.svg";
import typeScriptLogo from "../assets/icons/TypesScrip.svg";
import tailwindLogo from "../assets/icons/Tailwind.svg";
import nextJsLogo from "../assets/icons/Nextjs.svg";
import mongoDBLogo from "../assets/icons/MongoDB.svg";
import figmaLogo from "../assets/icons/Figma.svg";
import phostoshopLogo from "../assets/icons/Photoshop.svg";
import { useState, useEffect } from 'react';

const tecnologies = [
  {
    img: wordpressLogo,
    alt: "Wordpress Logo",
  },
  {
    img: reactLogo,
    alt: "React Logo",
  },
  {
    img: typeScriptLogo,
    alt: "TypeScript Logo",
  },
  {
    img: tailwindLogo,
    alt: "Tailwind Logo",
  },
  {
    img: nextJsLogo,
    alt: "Next js Logo",
  },
  {
    img: mongoDBLogo,
    alt: "MongoDB Logo",
  },
  {
    img: figmaLogo,
    alt: "Figma Logo",
  },
  {
    img: phostoshopLogo,
    alt: "Photoshop Logo",
  },
];

interface Props {
  customClass?: string;
}

export const TecnologiesSlider = ({ customClass }: Props) => {
  const [sliderPerView, setSliderPerView] = useState<number>(0);
  const [spaceBetwen, setspaceBetwen] = useState<number>(0)

  // Función para ajustar el número de slides mostrados basado en el ancho de la pantalla
  const handleResize = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setSliderPerView(6); 
      setspaceBetwen(25);
    } else if (width >= 769) {
      setSliderPerView(5); 
      setspaceBetwen(15);
    } else if (width <= 768) {
      setSliderPerView(3); 
      setspaceBetwen(25);
    }
  };

  useEffect(() => {
    // Configura el número de slides cuando el componente se monta
    handleResize();

    // Añade el listener para cambios de tamaño de pantalla
    window.addEventListener("resize", handleResize);

    // Limpia el listener cuando el componente se desmonta
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Swiper
      slidesPerView={sliderPerView}
      centeredSlides={true}
      spaceBetween={spaceBetwen}
      modules={[Pagination]}
      className={`w-[100%] h-[100%] ${customClass} relative `}
      autoplay={true}
      loop
    >
      {tecnologies.map(({ img, alt }) => (
        <SwiperSlide className="flex items-center justify-center object-cover" key={alt}>
          <Image src={img} alt={alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
