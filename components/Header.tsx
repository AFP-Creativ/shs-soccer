import Link from "next/link"
import Image from "next/image"

type HeaderProps = {
  activePage?: "home" | "team" | "schedule" | "news"
}

export function Header({ activePage = "home" }: HeaderProps) {
  return (
    <>
      {/* Logo */}
      <div className="w-full flex flex-col items-center my-4">
        <Link href="/" className="relative w-32 h-auto">
          <Image
            src="/SHS_Logo.png"
            alt="Springville Boys Soccer"
            width={200}
            height={200}
            className="w-full h-auto object-contain"
            priority
          />
        </Link>
        <h1 className="text-white font-bold text-3xl md:text-3xl mt-3 px-4 text-center w-full max-w-3xl mx-auto">Springville Boys Soccer</h1>
      </div>

      {/* Navigation */}
      {activePage !== "home" && (
        <div className="w-full flex justify-center mb-2">
          <div className="flex w-full max-w-xs justify-between px-4">
            <Link 
              href="/team" 
              className={`text-white text-2xl font-bold ${activePage === "team" ? "" : "opacity-70"}`}
            >
              TEAM
            </Link>
            <Link 
              href="/schedule" 
              className={`text-white text-2xl font-bold ${activePage === "schedule" ? "" : "opacity-70"}`}
            >
              SCHEDULE
            </Link>
          </div>
        </div>
      )}
    </>
  )
} 