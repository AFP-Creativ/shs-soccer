import Link from "next/link"

type TeamSelectorProps = {
  activeTeam: string
  teams: Array<{
    id: string
    name: string
  }>
  baseUrl: string
  paramName: string
  onSelect?: (teamId: string) => void
  useLinks?: boolean
}

export function TeamSelector({ 
  activeTeam, 
  teams, 
  baseUrl, 
  paramName, 
  onSelect, 
  useLinks = false 
}: TeamSelectorProps) {
  return (
    <div className="w-full max-w-xs flex justify-center space-x-4 my-4">
      {teams.map((team) => (
        useLinks ? (
          <Link
            key={team.id}
            href={`${baseUrl}?${paramName}=${team.id}`}
            className={`text-white text-lg font-bold ${
              activeTeam === team.id ? "text-white" : "text-gray-400"
            }`}
          >
            {team.name}
          </Link>
        ) : (
          <button
            key={team.id}
            onClick={() => onSelect?.(team.id)}
            className={`text-white text-lg font-bold ${
              activeTeam === team.id ? "text-white" : "text-gray-400"
            }`}
          >
            {team.name}
          </button>
        )
      ))}
    </div>
  )
} 