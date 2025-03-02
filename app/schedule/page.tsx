"use client"

import { useState, useEffect } from "react"
import { scheduleData } from "@/lib/data"
import { PageContainer } from "@/components/PageContainer"
import { Header } from "@/components/Header"
import { SectionHeader } from "@/components/SectionHeader"
import { TeamSelector } from "@/components/TeamSelector"
import { GameCard } from "@/components/GameCard"
import { MinimalHeader } from "@/components/MinimalHeader"
import { useScrollHeader } from "@/hooks/useScrollHeader"

export default function SchedulePage({
  searchParams,
}: {
  searchParams: { team?: string };
}) {
  // Set default tab based on URL parameter or default to "varsityJv"
  const defaultTeam = searchParams.team || "varsityJv";
  const [activeTeam, setActiveTeam] = useState(defaultTeam);
  
  // Use the scroll header hook to determine when to show the minimal header
  const showMinimalHeader = useScrollHeader(100);
  
  // Update active team when URL parameter changes
  useEffect(() => {
    setActiveTeam(defaultTeam);
  }, [defaultTeam]);
  
  // Get the current schedule data based on the active team
  const currentScheduleData = 
    activeTeam === "varsityJv" 
      ? scheduleData.varsityJv 
      : scheduleData.froshSoph;
  
  const teams = [
    { id: "varsityJv", name: "Varsity/JV" },
    { id: "froshSoph", name: "Fresh/Soph" }
  ];

  return (
    <PageContainer>
      {/* Minimal header that appears when scrolling */}
      <MinimalHeader 
        activePage="schedule"
        activeTeam={activeTeam}
        teams={teams}
        baseUrl="/schedule"
        paramName="team"
        isVisible={showMinimalHeader}
      />
      
      {/* Regular header */}
      <Header activePage="schedule" />
      
      <SectionHeader title="2025 SEASON" />

      <TeamSelector 
        activeTeam={activeTeam}
        teams={teams}
        baseUrl="/schedule"
        paramName="team"
        useLinks={true}
      />

      {/* Schedule Content - Now using regular div instead of ScrollArea */}
      <div className="w-full px-4 pb-20">
        <div className="w-full max-w-xs mx-auto space-y-3 py-4">
          {currentScheduleData.map((game, index) => (
            <GameCard key={index} game={game} />
          ))}
        </div>
      </div>
    </PageContainer>
  )
}