import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PageContainer } from "@/components/PageContainer"
import { Header } from "@/components/Header"
import { scheduleData } from "@/lib/data"

export default function Home() {
  // Find the next upcoming Varsity game
  const nextVarsityGame = scheduleData.varsity
    .filter(game => game.status === "Upcoming")
    .sort((a, b) => {
      const dateA = new Date(a.date.replace(/,/g, '') + ' ' + a.time);
      const dateB = new Date(b.date.replace(/,/g, '') + ' ' + b.time);
      return dateA.getTime() - dateB.getTime();
    })[0];

  // Find the next upcoming JV game
  const nextJvGame = scheduleData.jv
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
              TEAM ROSTERS
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
              TEAM SCHEDULES
            </Button>
          </Link>
          <div className="flex w-full mt-2 gap-2">
            <Link href="/schedule?team=varsity" className="flex-1">
              <Button
                variant="outline"
                className="w-full h-10 text-sm font-bold text-white border border-[#ab2328] bg-black/30 hover:bg-[#ab2328]/30"
              >
                Varsity
              </Button>
            </Link>
            <Link href="/schedule?team=jv" className="flex-1">
              <Button
                variant="outline"
                className="w-full h-10 text-sm font-bold text-white border border-[#ab2328] bg-black/30 hover:bg-[#ab2328]/30"
              >
                JV
              </Button>
            </Link>
            <Link href="/schedule?team=froshSoph" className="flex-1">
              <Button
                variant="outline"
                className="w-full h-10 text-sm font-bold text-white border border-[#ab2328] bg-black/30 hover:bg-[#ab2328]/30"
              >
                Fr/So
              </Button>
            </Link>
          </div>
        </div>

        {/* NEWS button hidden temporarily - will be used later
        <Link href="/news" className="w-full">
          <Button
            variant="outline"
            className="w-full h-16 text-xl font-bold text-white border-2 border-[#ab2328] bg-black/50 hover:bg-[#ab2328]/50"
          >
            NEWS
          </Button>
        </Link>
        */}
      </div>

      <div className="w-full mt-12 flex flex-col gap-6">
        {nextVarsityGame && (
          <div className="text-center text-white w-full">
            <h2 className="text-2xl font-bold mb-4">Next Varsity Game</h2>
            <Link href="/schedule?team=varsity" className="block w-full">
              <div className="bg-black/40 p-4 rounded-lg border border-[#ab2328] hover:bg-black/60 transition-colors">
                <p className="text-lg font-semibold">
                  {nextVarsityGame.isHome ? "vs. " : "@ "}{nextVarsityGame.opponent}
                </p>
                <p>{nextVarsityGame.date} • {nextVarsityGame.time}</p>
                <p>{nextVarsityGame.location}</p>
              </div>
            </Link>
          </div>
        )}

        {nextJvGame && (
          <div className="text-center text-white w-full">
            <h2 className="text-2xl font-bold mb-4">Next JV Game</h2>
            <Link href="/schedule?team=jv" className="block w-full">
              <div className="bg-black/40 p-4 rounded-lg border border-[#ab2328] hover:bg-black/60 transition-colors">
                <p className="text-lg font-semibold">
                  {nextJvGame.isHome ? "vs. " : "@ "}{nextJvGame.opponent}
                </p>
                <p>{nextJvGame.date} • {nextJvGame.time}</p>
                <p>{nextJvGame.location}</p>
              </div>
            </Link>
          </div>
        )}

        {nextFroshSophGame && (
          <div className="text-center text-white w-full">
            <h2 className="text-2xl font-bold mb-4">Next Fresh/Soph Game</h2>
            <Link href="/schedule?team=froshSoph" className="block w-full">
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

