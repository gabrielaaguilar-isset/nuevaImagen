"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import arrowRight from "../assets/icons/arrow-right.svg";

import { useSwiper } from "swiper/react";

import adriCaponEdit from "../assets/images/adricapon.webp";
import verMas from "../assets/icons/vermas.svg";
import link from "../assets/icons/link.svg";

import { ModalCards } from "./ModalCards";

const works = [
  {
    title: "Dilo club ",
    url: "https://dilo.club/",
    img: [adriCaponEdit, adriCaponEdit, adriCaponEdit],
    type: "wordpress",
    description:
      "Sitio web desarrollado desde cero con WordPress y Elementor, sin plantillas. Todo el diseño y funcionalidad fueron personalizados para cumplir con las necesidades específicas del proyecto.",
  },
  {
    title: "AdriCapon",
    url: "https://adricapon.com",
    img: [adriCaponEdit, adriCaponEdit, adriCaponEdit],
    type: "wordpress",
    description:
      "Sitio web desarrollado desde cero con WordPress y Elementor, sin plantillas. Todo el diseño y funcionalidad fueron personalizados para cumplir con las necesidades específicas del proyecto.",
  },

  {
    title: "Mauricorp ",
    url: "https://mauricorp.com/",
    img: [adriCaponEdit, adriCaponEdit, adriCaponEdit],
    type: "wordpress",
    description:
      "Sitio web desarrollado desde cero con WordPress y Elementor, sin plantillas. Todo el diseño y funcionalidad fueron personalizados para cumplir con las necesidades específicas del proyecto.",
  },
  {
    title: "Travnow ",
    url: "https://gabrielaaguilar.link/projects/travnow/",
    img: [adriCaponEdit, adriCaponEdit, adriCaponEdit],
    type: "React + Next js",
    description:
      "Sitio web desarrollado desde cero con WordPress y Elementor, sin plantillas. Todo el diseño y funcionalidad fueron personalizados para cumplir con las necesidades específicas del proyecto.",
  },
];

const SliderWorks = () => {
  const [spaceBetween, setSpaceBetween] = useState<number>(0);

  const handleResize = () => {
    const width = window.innerWidth;

    if (width > 1540) {
      setSpaceBetween(54);
    } else if (width > 1024) {
      setSpaceBetween(24);
    } else if (width >= 769) {
      setSpaceBetween(15);
    } else {
      setSpaceBetween(25);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const swiper = useSwiper();

  const [selectedType, setSelectedType] = useState<string>("Todos");

  const handleFilterClick = (type: string) => {
    setSelectedType(type);
  };

  const [open, setOpen] = useState<boolean>(false);
  const [selectedWork, setSelectedWork] = useState<any>(null);

  const openModal = (work: any) => {
    setSelectedWork(work);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelectedWork(null);
  };

  return (
    <div className="flex justify-center items-center flex-col overflow-hidden">
      <div className="flex gap-4 flex-wrap justify-center pb-6 lg:pb-10">
        <button
          className={`py-[10px] px-[23px] rounded-[35px] lg:py-[13px] lg:px-[63px] text-white font-regular border lg:rounded-full text-[16px] ${
            selectedType === "Todos" ? "bg-purple" : ""
          }`}
          onClick={() => handleFilterClick("Todos")}
        >
          Todos
        </button>
        <button
          className={`py-[10px] px-[23px] rounded-[35px] lg:py-[13px] lg:px-[63px] text-white font-regular border lg:rounded-full ${
            selectedType === "wordpress" ? "bg-purple" : ""
          }`}
          onClick={() => handleFilterClick("wordpress")}
        >
          Wordpress
        </button>
        <button
          className={`py-[10px] px-[23px] rounded-[35px] lg:py-[13px] lg:px-[63px] text-white font-regular border lg:rounded-full ${
            selectedType === "React + Next js" ? "bg-purple" : ""
          }`}
          onClick={() => handleFilterClick("React + Next js")}
        >
          React + Next js
        </button>
      </div>

      <Swiper
        slidesPerView={"auto"}
        spaceBetween={spaceBetween}
        modules={[Pagination]}
        className="mb-[90px] w-full lg:max-w-[1310px] 2xl:max-w-[1420px] ml-5 "
      >
        {works
          .filter(
            (work) => selectedType === "Todos" || work.type === selectedType
          )
          .map((work) => (
            <SwiperSlide
              className="pt-[32px] pl-[32px] rounded-[35px] bg-purple max-w-[300px] min-h-[320px] lg:max-w-[425px] relative group"
              key={work.title}
            >
              <div className="bg-black opacity-70 absolute top-0 w-full h-full left-0 items-center justify-center gap-10 rounded-[35px] hidden group-hover:flex">
                <Link href={work.url} target="_blank">
                  <Image src={link} alt="ver pagina" />
                </Link>

                <button
                  onClick={() => openModal(work)}
                >
                  <Image src={verMas} alt="ver mas info" />
                </button>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <hr className="w-[54px] my-4 bg-white border-white border mr-3 z-20" />
                  <h3 className="font-regular text-white text-[17px] z-20">
                    {work.title}
                  </h3>
                </div>
                <Image
                  src={work.img[0]}
                  alt={work.title}
                  className="m-auto max-h-[388px] w-auto"
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="flex justify-end w-full gap-8">
        <button
          className="py-[16px] px-[32px] border rounded-[35px]"
          onClick={() => swiper.slidePrev()}
        >
          <Image src={arrowRight} alt="siguiente" className="scale-x-[-1]" />
        </button>
        <button
          className="py-[16px] px-[32px] border rounded-[35px]"
          onClick={() => swiper.slideNext()}
        >
          <Image src={arrowRight} alt="siguiente" className="" />
        </button>
      </div>
      {open && selectedWork && (
        <ModalCards
          title={selectedWork.title}
          url={selectedWork.url}
          img={selectedWork.img}
          type={selectedWork.type}
          description={selectedWork.description}
          open={open}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default SliderWorks;
