import Titles from "./Titles";

const works = [
  {
    date: "Enero 2022 - Actualidad",
    worktitle: "Desarrollo web independiente",
    description:
      "Creación de sitios web y aplicaciones web personalizadas utilizando Wordpress, Elementor, Figma y Photoshop",
  },
  {
    date: "Diciembre 2023 - Marzo 2024",
    worktitle: "Webmaster - Dilo Club",
    description:
      "Trabajo tiempo parcial donde se creó la página web de la academia, además de la creación de la imagen de la marca Tubachi con su página web",
  },
  {
    date: "Agosto 2023 - Marzo 2024",
    worktitle: "Webmaster | Community Manager - The Pole Garage",
    description:
      "Creación de página web, creación de imágenes y contenido para redes sociales, encargada de atención al cliente.",
  },
];

const WorksCards = () => {
  return (
    <div className="flex justify-center flex-col mt-20 z-20 m">
      <Titles text="Experiencia Laboral" customClass="text-center" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {works.map(({ date, worktitle, description }) => (
          <div className="bg-black rounded-[35px] p-[32px] h-full flex flex-col">
            <div className="flex justify-between items-center">
              <div className="w-[14px] h-[14px] bg-purple rounded-full mr-4"></div>
              <p className="font-medium text-[13px] text-[#929292]">{date}</p>
            </div>
            <h2 className="font-semibold text-[19px] md:text-[24px] leading-[150%] text-white mt-[24px]">
              {worktitle}
            </h2>
            <h3 className="font-light text-white/60 text-[16px] mt-[36px] ">
              {description}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorksCards;
