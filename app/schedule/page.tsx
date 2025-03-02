"use client"

import { useState, useEffect } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { scheduleData } from "@/lib/data"
import { PageContainer } from "@/components/PageContainer"
import { Header } from "@/components/Header"
import { SectionHeader } from "@/components/SectionHeader"
import { TeamSelector } from "@/components/TeamSelector"
import { GameCard } from "@/components/GameCard"

export default function SchedulePage({
  searchParams,
}: {
  searchParams: { team?: string };
}) {
  // Set default tab based on URL parameter or default to "varsityJv"
  const defaultTeam = searchParams.team || "varsityJv";
  const [activeTeam, setActiveTeam] = useState(defaultTeam);
  
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
      <Header activePage="schedule" />
      
      <SectionHeader title="2025 SEASON" />

      <TeamSelector 
        activeTeam={activeTeam}
        teams={teams}
        baseUrl="/schedule"
        paramName="team"
        useLinks={true}
      />

      {/* Schedule Content */}
      <ScrollArea className="w-full h-[calc(100vh-250px)] px-4">
        <div className="w-full max-w-xs mx-auto space-y-3 py-4">
          {currentScheduleData.map((game, index) => (
            <GameCard key={index} game={game} />
          ))}
        </div>
      </ScrollArea>
    </PageContainer>
  )
}