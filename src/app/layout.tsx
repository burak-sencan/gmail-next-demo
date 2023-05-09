import './globals.css'
import { useContext, useEffect } from 'react'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import SidebarSecondary from './components/SidebarSecondary'
import SidebarMain from './components/SidebarMain'
import SidebarContext, { SidebarProvider } from './context/sidebarContext'
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
