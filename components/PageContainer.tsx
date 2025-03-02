import { ReactNode } from "react"

type PageContainerProps = {
  children: ReactNode
}

export function PageContainer({ children }: PageContainerProps) {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-black to-[#ab2328]">
      <div className="w-full max-w-md flex flex-col items-center p-4">
        {children}
      </div>
    </main>
  )
} 