import Image from "next/image"
import webSite from "../assets/images/sitio-web.webp";
import ecommerce from "../assets/images/tiendaVirtual.webp";
import landingPage from "../assets/images/landingPge.webp";
import mantenimiento from "../assets/images/mantenimiento.webp";
import seo from "../assets/images/seo.webp";
import flyers from "../assets/images/flyers.webp";
import communityManager from "../assets/images/communityManager.webp";
import contentManager from "../assets/images/contentManager.webp";
import { Paragraphs } from "./Paragraphs";

const services = [
    {
        "img": webSite,
        "servicio": "Paginas Web"
    },
    {
        "img": ecommerce,
        "servicio": "Tiendas Virtuales"
    },
    {
        "img": landingPage,
        "servicio": "Landing Page"
    },
    {
        "img": mantenimiento,
        "servicio": "Mantenimiento"
    },
    {
         "img": seo,
        "servicio": "SEO"
    },
    {
        "img": flyers,
        "servicio": "Flyers"
    },
    {
        "img":communityManager,
        "servicio": "Community Manager"
    },
    {
        "img": contentManager,
        "servicio": "Content Manager"
    }
]

const ServicesCard = () => {
  return (
    <div className="flex mt-7 lg:mt-12 flex-wrap gap-2 md:gap-4 md:justify-center">
        {
            services.map(({img, servicio}) => (
                <div className="bg-purple text-white flex rounded-lg pl-[16px] pr-[23px] items-center py-[12px] " key={servicio}>
                     <Image src={img} alt={servicio} className="md:w-8 md:h-8 w-4 h-4 mr-2" />
                     <Paragraphs text={servicio} customClass="text-white text-[13px] md:text-[15px] " />
                </div>
            ))
        }
    </div>
  )
}

export default ServicesCard