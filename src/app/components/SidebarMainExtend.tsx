'use client'
import { useContext } from 'react'
import SidebarContext from '../context/sidebarContext'

type Props = {}
const SidebarMainExtend = (props: Props) => {
  const { openMainSidebar, mainSidebarContent } = useContext(SidebarContext)

  return (
    <div
      className={`${
        openMainSidebar === false ? 'w-0' : 'w-52'
      }  transition-all duration-100 ease-in-out`}
    >
      {openMainSidebar === false ? null : mainSidebarContent === 'mail' ? (
        <p>Mail Navigation Here</p>
      ) : mainSidebarContent === 'chat' ? (
        <p>Chat Navigation Here</p>
      ) : mainSidebarContent === 'spaces' ? (
        <p>Spaces Navigation Here</p>
      ) : mainSidebarContent === 'meet' ? (
        <p>Meet Navigation Here</p>
      ) : null}
    </div>
  )
}
export default SidebarMainExtend
