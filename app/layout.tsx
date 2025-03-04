import type React from "react"
import type { Metadata } from "next"
import { Roboto_Slab } from "next/font/google"
import "./globals.css"

// Define the font
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
})

export const metadata: Metadata = {
  title: "Springville Boys Soccer",
  description: "Official app for Springville High School Boys Soccer Team",
  generator: 'v0.dev',
  icons: {
    icon: {
      url: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚽️</text></svg>',
      type: 'image/svg+xml'
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${robotoSlab.variable} font-roboto-slab`}>
        <div
          className="min-h-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/background.png')" }}
        >
          {children}
        </div>
      </body>
    </html>
  )
}



import './globals.css'