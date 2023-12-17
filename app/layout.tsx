import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import BarraLateral from '@/componentes/BarraLateral'

const font  = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify',
  description: 'Listen to your favorite music and podcasts on Spotify.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pr-br">
      <body className={font.className}>
        <BarraLateral>
          {children}
        </BarraLateral>
        
      </body>
    </html>
  )
}
