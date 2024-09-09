interface Props{
    text: string;
    customClass?:string;
}
const Titles = ({text, customClass}:Props) => {
  return (
    <h2 className={`${customClass} font-semibold lg:text-[48px] text-[28px] leading-[130%] text-black mb-4`}>{text}</h2>
  )
}

export default Titles