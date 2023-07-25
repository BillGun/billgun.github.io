import Link from "next/link";
import { CircularText } from "./Icons";

export default function HireMe() {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <CircularText className={"fill-dark animate-spin-slow"} />
        <Link href="mailto:privatebillgun@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
           bg-dark text-light shadow-md border border-solid border-dark w-32 h-32 font-medium rounded-full hover:bg-light hover:text-dark">
          Hire Me
        </Link>
      </div>
    </div>
  )
}
