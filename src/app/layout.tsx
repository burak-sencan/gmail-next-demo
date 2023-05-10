'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import SidebarMain from './components/SidebarMain'
import { SidebarProvider } from './context/sidebarContext'
import Settings from './components/Settings'
import SidebarMainExtend from './components/SidebarMainExtend'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gmail',
  description: 'Gmail nextjs dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex bg-main-light">
        <SidebarProvider>
          <SidebarMain />
          <div className="w-full flex-col ">
            <Navbar />
            <div className="mx-2 flex h-[calc(100vh-4rem)] gap-4 overflow-hidden">
              <SidebarMainExtend />
              <div className="grow rounded-2xl bg-white">{children}</div>
              <Settings />
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}
