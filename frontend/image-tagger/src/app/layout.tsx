import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from '@/components/nav/nav'
import { ThemeProvider } from '@/lib/theme-provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Image-Tagger',
  description: 'Created for hackGT',
}

const bodyClassName = inter.className + " w-100"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={bodyClassName}>
        <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange>
          <Nav/>
          {children}
        
        </ThemeProvider>
        </body>


    </html>
  )
}
