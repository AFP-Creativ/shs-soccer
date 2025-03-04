import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Player } from "@/lib/data"

type PlayerCardProps = {
  player: Player
}

export function PlayerCard({ player }: PlayerCardProps) {
  return (
    <Card className="p-3 rounded-lg bg-[#ab2328] text-white border-b-2 border-black">
      <div className="grid grid-cols-[60px_64px_1fr] items-center h-16">
        {/* Player Number - Prominent on left */}
        <div className="flex items-center justify-center text-4xl font-bold text-white">
          {player.number}
        </div>
        
        {/* Player Image */}
        <div className="relative w-16 h-16 rounded-full overflow-hidden bg-[#ab2328] flex-shrink-0">
          <Image
            src={player.image || "/SHS_Logo_Profile.png"}
            alt={player.name}
            fill
            className="object-cover object-top scale-[.9]"
          />
        </div>
        
        {/* Player Name, Year and Position */}
        <div className="pl-3">
          <h3 className="font-bold text-lg leading-tight">{player.name}</h3>
          <p className="text-sm text-gray-300">
            {player.year} • {player.position}
          </p>
        </div>
      </div>
    </Card>
  )
} 