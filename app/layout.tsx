import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gopi M — AI/ML Engineer',
  description: 'AI/ML engineer specializing in end-to-end intelligent systems and scalable deployment.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
