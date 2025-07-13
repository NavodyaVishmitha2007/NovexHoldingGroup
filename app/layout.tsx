// app/layout.tsx (or layout.tsx depending on your folder structure)
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Novex Holding Group (NHG)',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* ⚠️ Use .ico version for best browser support */}
        <link rel="icon" href="/logo.jpg" type="image/jpeg" sizes="192x192" />
      </head>
      <body>{children}</body>
    </html>
  )
}
