interface Props{
    text: string;
    customClass?:string;
}
export const Paragraphs = ({text, customClass}:Props) => {
  return (
    <p className={`text-[16px] text-black/60 leading-[180%]  ${customClass}`}>
    {text}
    </p>
  )
}
