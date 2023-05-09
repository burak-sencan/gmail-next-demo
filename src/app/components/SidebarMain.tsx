'use client'
import { useContext, useState } from 'react'
import { IconButton, Tooltip } from '@mui/material'
import {
  ChatBubbleIcon,
  GroupsIcon,
  MailOutlineIcon,
  MenuIcon,
  VideocamIcon,
} from '../assets/Icons'
import SidebarContext from '../context/sidebarContext'
import { useRouter } from 'next/navigation'

type Props = {}
const SidebarMain = (props: Props) => {
  const router = useRouter()
  const {
    openMainSidebar,
    setOpenMainSidebar,
    setMainSidebarContent,
    mainSidebarContent,
  } = useContext(SidebarContext)
  const [hovered, setHovered] = useState<string>('')
  const popupStyle =
    'absolute -top-2 overflow-auto flex flex-col justify-center items-center left-[3.8rem] z-10 min-h-[80vh] w-[14.2rem] rounded-xl bg-white shadow-md'

  return (
    <div className="flex w-16 flex-col items-center gap-8 bg-gray-light">
      <Tooltip
        onClick={() => {
          setOpenMainSidebar(!openMainSidebar)
        }}
        title="Sidebar"
        className="h-10 w-10 m-2"
      >
        <IconButton>
          <MenuIcon />
        </IconButton>
      </Tooltip>

      <div className="relative flex w-full flex-col gap-4 text-sm">
        <div
          className={`${
            mainSidebarContent === 'mail' ? 'text-gray-800' : 'text-gray-400'
          } flex w-full flex-col items-center`}
          title="Mail"
          onMouseEnter={() => {
            setHovered('mail')
          }}
          onMouseLeave={() => {
            setHovered('')
          }}
          onClick={() => {
            setMainSidebarContent('mail')
            router.push('/')
          }}
        >
          <IconButton>
            <MailOutlineIcon />
          </IconButton>
          <p>Mail</p>
        </div>
        {hovered === 'mail' && !openMainSidebar && (
          <div
            className={popupStyle}
            onMouseEnter={() => {
              setHovered('mail')
            }}
            onMouseLeave={() => {
              setHovered('')
            }}
          >
            Mail Navigation Here
          </div>
        )}

        <div
          title="Chat"
          className={`${
            mainSidebarContent === 'chat' ? 'text-gray-800' : 'text-gray-400'
          } flex w-full flex-col items-center`}
          onMouseEnter={() => {
            setHovered('chat')
          }}
          onMouseLeave={() => {
            setHovered('')
          }}
          onClick={() => {
            setMainSidebarContent('chat')
            router.push('/chat')
          }}
        >
          <IconButton>
            <ChatBubbleIcon />
          </IconButton>
          <p>Chat</p>
        </div>
        {hovered === 'chat' && !openMainSidebar && (
          <div
            className={popupStyle}
            onMouseEnter={() => {
              setHovered('chat')
            }}
            onMouseLeave={() => {
              setHovered('')
            }}
          >
            Chat Navigation Here
          </div>
        )}

        <div
          title="Spaces"
          className={`${
            mainSidebarContent === 'spaces' ? 'text-gray-800' : 'text-gray-400'
          } flex w-full flex-col items-center`}
          onMouseEnter={() => {
            setHovered('spaces')
          }}
          onMouseLeave={() => {
            setHovered('')
          }}
          onClick={() => {
            setMainSidebarContent('spaces')
            router.push('/spaces')
          }}
        >
          <IconButton>
            <GroupsIcon />
          </IconButton>
          <p>Spaces</p>
        </div>
        {hovered === 'spaces' && !openMainSidebar && (
          <div
            className={popupStyle}
            onMouseEnter={() => {
              setHovered('spaces')
            }}
            onMouseLeave={() => {
              setHovered('')
            }}
          >
            Spaces Navigation Here
          </div>
        )}

        <div
          title="Meet"
          className={`${
            mainSidebarContent === 'meet' ? 'text-gray-800' : 'text-gray-400'
          } flex w-full flex-col items-center`}
          onMouseEnter={() => {
            setHovered('meet')
          }}
          onMouseLeave={() => {
            setHovered('')
          }}
          onClick={() => {
            setMainSidebarContent('meet')
            router.push('/meet')
          }}
        >
          <IconButton>
            <VideocamIcon />
          </IconButton>
          <p>Meet</p>
        </div>
        {hovered === 'meet' && !openMainSidebar && (
          <div
            className={popupStyle}
            onMouseEnter={() => {
              setHovered('meet')
            }}
            onMouseLeave={() => {
              setHovered('')
            }}
          >
            Meet Navigation Here
          </div>
        )}
      </div>
    </div>
  )
}
export default SidebarMain
