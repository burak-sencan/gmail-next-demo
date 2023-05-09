'use client'
import { useContext } from 'react'
import SidebarContext from '../context/sidebarContext'

type Props = {}
function Settings({}: Props) {
  const { openSettings } = useContext(SidebarContext)
  console.log(openSettings)

  return (
    <div
      className={`${
        openSettings === false ? 'w-0' : 'w-80'
      } flex items-center justify-center rounded-2xl bg-white transition-all duration-100 ease-in-out`}
    >
      {openSettings === false ? null : <p>Settings Content Here</p>}
    </div>
  )
}
export default Settings
