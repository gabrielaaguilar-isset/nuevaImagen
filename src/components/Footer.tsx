import Link from "next/link"

const Footer = () => {
  return (
    <div className="bg-black py-6 sm:py-12 text-white  font-semmibold rounded-t-[35px] px-4">
        <div className="flex justify-between md:mx-[80px]  mx-[16px] flex-col sm:flex-row items-center gap-4">
        <div className="flex gap-12 ">
            <Link href="https://www.linkedin.com/in/gabriela-aguilar01/" target="_blank">Linkedin</Link>
            <Link href="https://www.linkedin.com/in/gabriela-aguilar01/" target="_blank">Email</Link>
        </div>
        <h2>Copyright © 2024 Gabriela Aguilar</h2>
        </div>
       
    </div>
  )
}

export default Footer