import Link from "next/link";
import { CircularText } from "./Icons";

export default function HireMe() {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-4 md:left-auto md:top-4 md:bottom-auto md:absolute">
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
        <CircularText className={"fill-dark animate-spin-slow dark:fill-light"} />
        <Link href="mailto:privatebillgun@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
           bg-dark text-light shadow-md border border-solid border-dark w-32 h-32 md:text-[10px] md:w-16 md:h-16 font-medium rounded-full hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light">
          Hire Me
        </Link>
      </div>
    </div>
  )
}
