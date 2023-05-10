'use client'
import React, { createContext, useState, ReactNode } from 'react'

type SidebarContextType = {
  openMainSidebar: boolean
  setOpenMainSidebar: React.Dispatch<React.SetStateAction<boolean>>
  openSettings: boolean
  setOpenSettings: React.Dispatch<React.SetStateAction<boolean>>
  mainSidebarContent: string
  setMainSidebarContent: React.Dispatch<React.SetStateAction<string>>
}

export const SidebarContext = createContext<SidebarContextType >({} as SidebarContextType)

type SidebarProviderProps = {
  children: ReactNode
}

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [openMainSidebar, setOpenMainSidebar] = useState<boolean>(false)
  const [mainSidebarContent, setMainSidebarContent] = useState<string>('mail')
  const [openSettings, setOpenSettings] = useState<boolean>(false)

  const handleSettings = () => {
    setOpenSettings(!openSettings)
  }

  return (
    <SidebarContext.Provider
      value={{
        openMainSidebar,
        openSettings,
        mainSidebarContent,
        setOpenMainSidebar,
        setOpenSettings,
        setMainSidebarContent,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarContext
