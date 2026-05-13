import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Kabosu",
  description: "Kabosu comic-book memecoin landing page.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
