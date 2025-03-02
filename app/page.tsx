import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PageContainer } from "@/components/PageContainer"
import { Header } from "@/components/Header"
import { scheduleData } from "@/lib/data"

export default function Home() {
  // Find the next upcoming Varsity/JV game
  const nextVarsityJvGame = scheduleData.varsityJv
    .filter(game => game.status === "Upcoming")
    .sort((a, b) => {
      const dateA = new Date(a.date.replace(/,/g, '') + ' ' + a.time);
      const dateB = new Date(b.date.replace(/,/g, '') + ' ' + b.time);
      return dateA.getTime() - dateB.getTime();
    })[0];

  // Find the next upcoming Fresh/Soph game
  const nextFroshSophGame = scheduleData.froshSoph
    .filter(game => game.status === "Upcoming")
    .sort((a, b) => {
      const dateA = new Date(a.date.replace(/,/g, '') + ' ' + a.time);
      const dateB = new Date(b.date.replace(/,/g, '') + ' ' + b.time);
      return dateA.getTime() - dateB.getTime();
    })[0];

  return (
    <PageContainer>
      <Header activePage="home" />

      <div className="w-full flex flex-col gap-6 mt-8">
        <div className="w-full">
          <Link href="/team" className="w-full">
            <Button
              variant="outline"
              className="w-full h-16 text-xl font-bold text-white border-2 border-[#ab2328] bg-black/50 hover:bg-[#ab2328]/50"
            >
              TEAM
            </Button>
          </Link>
          <div className="flex w-full mt-2 gap-2">
            <Link href="/team?roster=varsity" className="flex-1">
              <Button
                variant="outline"
                className="w-full h-10 text-sm font-bold text-white border border-[#ab2328] bg-black/30 hover:bg-[#ab2328]/30"
              >
                Varsity
              </Button>
            </Link>
            <Link href="/team?roster=jv" className="flex-1">
              <Button
                variant="outline"
                className="w-full h-10 text-sm font-bold text-white border border-[#ab2328] bg-black/30 hover:bg-[#ab2328]/30"
              >
                JV
              </Button>
            </Link>
            <Link href="/team?roster=froshSoph" className="flex-1">
              <Button
                variant="outline"
                className="w-full h-10 text-sm font-bold text-white border border-[#ab2328] bg-black/30 hover:bg-[#ab2328]/30"
              >
                Fr/So
              </Button>
            </Link>
          </div>
        </div>

        <div className="w-full">
          <Link href="/schedule" className="w-full">
            <Button
              variant="outline"
              className="w-full h-16 text-xl font-bold text-white border-2 border-[#ab2328] bg-black/50 hover:bg-[#ab2328]/50"
            >
              SCHEDULE
            </Button>
          </Link>
          <div className="flex w-full mt-2 gap-2">
            <Link href="/schedule?team=varsityJv" className="flex-1">
              <Button
                variant="outline"
                className="w-full h-10 text-sm font-bold text-white border border-[#ab2328] bg-black/30 hover:bg-[#ab2328]/30"
              >
                Varsity/JV
              </Button>
            </Link>
            <Link href="/schedule?team=froshSoph" className="flex-1">
              <Button
                variant="outline"
                className="w-full h-10 text-sm font-bold text-white border border-[#ab2328] bg-black/30 hover:bg-[#ab2328]/30"
              >
                Fresh/Soph
              </Button>
            </Link>
          </div>
        </div>

        <Link href="/news" className="w-full">
          <Button
            variant="outline"
            className="w-full h-16 text-xl font-bold text-white border-2 border-[#ab2328] bg-black/50 hover:bg-[#ab2328]/50"
          >
            NEWS
          </Button>
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {nextVarsityJvGame && (
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Next Varsity/JV Game</h2>
            <Link href="/schedule?team=varsityJv" className="block">
              <div className="bg-black/40 p-4 rounded-lg border border-[#ab2328] hover:bg-black/60 transition-colors">
                <p className="text-lg font-semibold">
                  {nextVarsityJvGame.isHome ? "vs. " : "@ "}{nextVarsityJvGame.opponent}
                </p>
                <p>{nextVarsityJvGame.date} • {nextVarsityJvGame.time}</p>
                <p>{nextVarsityJvGame.location}</p>
              </div>
            </Link>
          </div>
        )}

        {nextFroshSophGame && (
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Next Fresh/Soph Game</h2>
            <Link href="/schedule?team=froshSoph" className="block">
              <div className="bg-black/40 p-4 rounded-lg border border-[#ab2328] hover:bg-black/60 transition-colors">
                <p className="text-lg font-semibold">
                  {nextFroshSophGame.isHome ? "vs. " : "@ "}{nextFroshSophGame.opponent}
                </p>
                <p>{nextFroshSophGame.date} • {nextFroshSophGame.time}</p>
                <p>{nextFroshSophGame.location}</p>
              </div>
            </Link>
          </div>
        )}
      </div>
    </PageContainer>
  )
}

