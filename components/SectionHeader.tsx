type SectionHeaderProps = {
  title: string
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-xs flex items-center px-4 py-1">
        <div className="h-px bg-gray-500 flex-grow"></div>
        <span className="px-4 text-gray-300 font-bold">{title}</span>
        <div className="h-px bg-gray-500 flex-grow"></div>
      </div>
    </div>
  )
} 