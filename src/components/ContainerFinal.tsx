import LastOneSection from "./LastOneSection";
import { Portfolio } from "./Portfolio";

const ContainerFinal = () => {
  return (
    <div className="backgroundFinal mt-[72px] pt-[16px] w-full pb-[72px]">

        <div className="sm:mb-[72px] mb-4">
        <Portfolio />

        </div>

        <LastOneSection />
  
    </div>
  );
};

export default ContainerFinal;
