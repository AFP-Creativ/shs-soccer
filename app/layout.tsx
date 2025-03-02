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
    generator: 'v0.dev'
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