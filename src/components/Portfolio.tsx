import { Paragraphs } from "./Paragraphs"
import SliderWorks from "./SliderWorks"
import Titles from "./Titles"

export const Portfolio = () => {
  return (
    <div className="backgroundPortfolio mx-[16px] rounded-[35px] p-4 mb-[72px]">
        <div className="flex flex-col items-center pt-[80px] pb-[50px]">
          <Titles text="Portafolio" customClass="text-white"/>
          <Paragraphs text="En esta sección encontrarás una selección de mis proyectos digitales, donde pongo en práctica mis habilidades y creatividad" customClass="text-white/60 text-center max-w-[350px] lg:max-w-[564px]" />
        </div>    
        <SliderWorks />
        
    </div>
  )
}
