import Image from "next/image"
import logoImg from "@/public/lunique-logo-light.png"

export default function Header() {
  return (
    <div className="flex flex-col items-center">
      <div className="p-5">
        <Image src={logoImg} alt="Lunique Logo" width={300} height={150} />
      </div>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
      <p className="text-3xl font-extralight lg:text-4xl mx-auto max-w-xl text-center">
        Great things coming soon!
      </p>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  )
}
