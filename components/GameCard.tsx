import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Game } from "@/lib/data"

type GameCardProps = {
  game: Game
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Card className={`p-3 rounded-lg ${game.isHome ? "bg-[#ab2328]" : "bg-[#003057]"} text-white`}>
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-bold text-lg">
            {game.isHome ? "vs" : "@"} {game.opponent}
          </h3>
          <p className="text-sm text-gray-300">
            {game.date} • {game.time}
          </p>
          <p className="text-xs text-gray-400">{game.location}</p>
        </div>
        <Badge
          className={`${
            game.status === "Win"
              ? "bg-green-600"
              : game.status === "Loss"
                ? "bg-red-600"
                : game.status === "Tie"
                  ? "bg-yellow-600"
                  : game.status === "Canceled"
                    ? "bg-gray-600"
                    : "bg-blue-600"
          }`}
        >
          {game.status === "Upcoming" ? "Upcoming" : game.status}
          {game.score && ` ${game.score}`}
        </Badge>
      </div>
    </Card>
  )
} 