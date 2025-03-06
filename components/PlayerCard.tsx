import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Player } from "@/lib/data"

type PlayerCardProps = {
  player: Player
}

export function PlayerCard({ player }: PlayerCardProps) {
  // Check if the player number contains a slash (indicating two numbers)
  const hasTwoNumbers = player.number.includes('/')

  return (
    <Card className="p-3 rounded-lg bg-[#ab2328] text-white border-b-2 border-black">
      <div className="grid grid-cols-[60px_64px_1fr] items-center h-16">
        {/* Player Number - Prominent on left */}
        <div className="flex items-center justify-center font-bold text-white">
          <span className={`${hasTwoNumbers ? 'text-2xl' : 'text-4xl'}`}>
            {player.number}
          </span>
        </div>
        
        {/* Player Image */}
        <div className="relative w-16 h-16 rounded-full overflow-hidden bg-[#ab2328] flex-shrink-0">
          <Image
            src={player.image || "/SHS_Logo_Profile.png"}
            alt={player.name}
            fill
            className="object-cover object-top scale-[1.0]"
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