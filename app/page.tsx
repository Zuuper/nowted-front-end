import { Button } from "@/components/Ui/Button"
import Navbar from "@/components/Ui/Navigation/Navbar"
import { ArrowPathIcon, ArrowRightIcon, LockClosedIcon } from "@heroicons/react/24/outline"
import Image from "next/image"



export default function Home() {

  return (
    <main className="p-8 md:p-16 lg:p-28 tracking-wide">
      <div className="absolute -top-1/3 -z-10 -translate-y-1/2 left-0 w-full 
      aspect-square rounded-full
      bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-500 blur-lg opacity-30
      "
      />

      <Navbar />
      <section className="flex flex-col items-center h-96 my-24 justify-center gap-12">
        <h1 className="font-light text-4xl max-w-4xl text-center leading-tight text-slate-400">
          Boost your productivity with our <span className="font-medium text-white">streamlined note-taking</span> solution
        </h1>
        <p className="text-slate-400 max-w-md text-center">
          Effortlessly access your notes from any device with our convenient cloud-based solution.
        </p>
        <Button>
          Try For Free
          <ArrowRightIcon className="w-6 h-6" />
        </Button>
      </section>
      <section className="w-fit mx-auto relative bg-white bg-opacity-5 h-fit rounded-lg mt-8 p-4 lg:p-8">
        <ul className="flex gap-2">
          <li className="w-3 h-3 bg-red-500 rounded-full" />
          <li className="w-3 h-3 bg-yellow-500 rounded-full" />
          <li className="w-3 h-3 bg-green-500 rounded-full" />
        </ul>
        <div className="flex px-4 py-3 bg-white bg-opacity-5 rounded-lg text-white w-[420px] gap-2 items-center absolute left-1/2 -translate-x-1/2 top-4">
          <LockClosedIcon className="w-4 h-4" />
          <p className="text-xs lg:text-sm font-light leading-none tracking-wider flex-grow">https://nowted.app</p>
          <ArrowPathIcon className="w-4 h-4" />
        </div>
        <div className="w-full rounded-xl mt-8 relative">
          <Image src={'/images/preview-app.png'} alt="preview-app" className="rounded-xl" width={946} height={672} />
        </div>
      </section>
    </main>
  )
}
