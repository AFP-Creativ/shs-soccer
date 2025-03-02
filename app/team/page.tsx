"use client"

import { useState, useEffect } from "react"
import { playerData } from "@/lib/data"
import { PageContainer } from "@/components/PageContainer"
import { Header } from "@/components/Header"
import { SectionHeader } from "@/components/SectionHeader"
import { TeamSelector } from "@/components/TeamSelector"
import { PlayerCard } from "@/components/PlayerCard"
import { MinimalHeader } from "@/components/MinimalHeader"
import { useScrollHeader } from "@/hooks/useScrollHeader"

export default function TeamPage({
  searchParams,
}: {
  searchParams: { roster?: string };
}) {
  // Set default roster based on URL parameter or default to "varsity"
  const defaultRoster = searchParams.roster || "varsity";
  const [activeRoster, setActiveRoster] = useState(defaultRoster);
  
  // Use the scroll header hook to determine when to show the minimal header
  const showMinimalHeader = useScrollHeader(100);
  
  // Update active roster when URL parameter changes
  useEffect(() => {
    setActiveRoster(defaultRoster);
  }, [defaultRoster]);
  
  // Get the current roster data based on the active roster
  const currentRosterData = 
    activeRoster === "varsity" 
      ? playerData.varsity 
      : activeRoster === "jv" 
        ? playerData.jv 
        : playerData.froshSoph;
  
  const teams = [
    { id: "varsity", name: "Varsity" },
    { id: "jv", name: "JV" },
    { id: "froshSoph", name: "Fr/So" }
  ];

  return (
    <PageContainer>
      {/* Minimal header that appears when scrolling */}
      <MinimalHeader 
        activePage="team"
        activeTeam={activeRoster}
        teams={teams}
        baseUrl="/team"
        paramName="roster"
        isVisible={showMinimalHeader}
      />
      
      {/* Regular header */}
      <Header activePage="team" />
      
      <SectionHeader title="ROSTER" />

      <TeamSelector 
        activeTeam={activeRoster}
        teams={teams}
        baseUrl="/team"
        paramName="roster"
        onSelect={setActiveRoster}
        useLinks={false}
      />

      {/* Player Cards - Now using regular div instead of ScrollArea */}
      <div className="w-full px-4 pb-20">
        <div className="w-full max-w-xs mx-auto space-y-3 py-4">
          {currentRosterData.map((player, index) => (
            <PlayerCard key={index} player={player} />
          ))}
        </div>
      </div>
    </PageContainer>
  )
}

