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
        <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-800 flex-shrink-0">
          {player.image ? (
            <Image
              src={player.image}
              alt={player.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-700"></div>
          )}
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