import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Kabosu",
  description: "Kabosu lore and anniversary memecoin landing page.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
