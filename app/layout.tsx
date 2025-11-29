import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OmniDM - AI-Powered Chat Automation for Cambodia',
  description: 'Automate customer conversations across all platforms with integrated Cambodian payments',
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
