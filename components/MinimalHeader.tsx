import Link from "next/link";
import Image from "next/image";

type MinimalHeaderProps = {
  activePage: "team" | "schedule";
  activeTeam?: string;
  teams?: Array<{ id: string; name: string }>;
  baseUrl: string;
  paramName: string;
  isVisible: boolean;
}

export function MinimalHeader({
  activePage,
  activeTeam,
  teams,
  baseUrl,
  paramName,
  isVisible
}: MinimalHeaderProps) {
  // Calculate the height of the header for the spacer
  const headerHeight = 56; // in pixels, adjust as needed

  return (
    <>
      {/* Spacer div to prevent content from jumping when header becomes fixed */}
      {isVisible && (
        <div style={{ height: `${headerHeight}px` }} className="w-full" />
      )}
      
      {/* Minimal header */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 bg-[#0A1F44] border-b border-gray-700 transition-all duration-300 ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-2 max-w-screen-md mx-auto">
          {/* Logo and Page Title */}
          <div className="flex items-center">
            <div className="relative w-12 h-12 flex-shrink-0 mr-2">
              <div className="absolute inset-0 bg-red-600 rounded-full flex items-center justify-center overflow-hidden border-2 border-white">
                <Image
                  src="/SHS_Logo.png"
                  alt="Springville Boys Soccer"
                  width={40}
                  height={40}
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-white font-bold text-lg underline">
                {activePage === "team" ? "TEAM" : "SCHEDULE"}
              </div>
              {activeTeam && (
                <div className="text-white text-xs font-medium">
                  {teams?.find(team => team.id === activeTeam)?.name || ""}
                </div>
              )}
            </div>
          </div>

          {/* Team Selector Pills */}
          {teams && teams.length > 0 && (
            <div className="flex space-x-2">
              {teams.map((team) => (
                <Link
                  key={team.id}
                  href={`${baseUrl}?${paramName}=${team.id}`}
                  className={`px-3 py-1 text-xs font-bold rounded-full transition-colors ${
                    activeTeam === team.id
                      ? "bg-red-600 text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  {team.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
} 