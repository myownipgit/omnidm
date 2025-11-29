import type { Metadata } from 'next'
import Script from 'next/script'
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
      <head>
        <meta name="facebook-domain-verification" content="9x1qhej2nne7tyd5t4w7t8hjk8wg4a" />
      </head>
      <body>
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7MELG373M6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7MELG373M6');
          `}
        </Script>
      </body>
    </html>
  )
}
