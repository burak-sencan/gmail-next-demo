'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Logo } from '../assets'
import {
  Avatar,
  Box,
  IconButton,
  ListItemIcon,
  Menu,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
} from '@mui/material'
import {
  AppsIcon,
  CheckIcon,
  ClearIcon,
  MailOutlineIcon,
  SearchIcon,
  SettingsIcon,
  TuneIcon,
} from '../assets/Icons'
import { useState, useRef, useEffect, useContext } from 'react'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import PersonAdd from '@mui/icons-material/PersonAdd'
import Logout from '@mui/icons-material/Logout'
import Settings from '@mui/icons-material/Settings'
import SidebarContext from '../context/sidebarContext'

type Props = {}
export default function Navbar({}: Props) {
  const { openSettings, setOpenSettings } = useContext(SidebarContext)

  const searchRef = useRef<HTMLDivElement>(null)
  const optionRef = useRef<HTMLDivElement>(null)
  const [text, setText] = useState<string>('')
  const [onFocused, setOnFocused] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [showOption, setShowOption] = useState(false)
  const [tempVal, setTempVal] = useState('') // for temp select inputs
  const [formats, setFormats] = useState(() => ['bold', 'italic'])
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [anchorElApp, setAnchorElApp] = useState<null | HTMLElement>(null)

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[]
  ) => {
    setFormats(newFormats)
  }
  const open = Boolean(anchorEl)
  const openApp = Boolean(anchorElApp)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleClickApp = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElApp(event.currentTarget)
  }
  const handleCloseApp = () => {
    setAnchorElApp(null)
  }

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setOnFocused(false)
        setShowSearch(false)
        setShowOption(false)
      }
      if (
        optionRef.current &&
        !optionRef.current.contains(event.target as Node)
      ) {
        setOnFocused(false)
        setShowSearch(false)
        setShowOption(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [searchRef])

  return (
    <nav className="flex h-16">
      <div className="flex w-56 items-center p-6">
        <Link href="/">
          <Image src={Logo} alt="google-logo"></Image>
        </Link>
      </div>

      <div className="flex grow  items-center p-2 ">
        <div
          ref={searchRef}
          className={`${
            onFocused && 'rounded-b-none rounded-t-lg bg-white shadow-sm'
          } relative z-10  flex  h-12 w-3/4 items-center  gap-2 rounded-lg bg-gray-light p-2 transition`}
        >
          <Tooltip title="Arama" className="h-10 w-10">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Tooltip>
          <input
            className="w-full grow bg-inherit focus:outline-none"
            placeholder="Postalarda arayın"
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value)
            }}
            onFocus={() => {
              setOnFocused(true)
              setShowSearch(true)
              setShowOption(false)
            }}
          />
          {text && (
            <Tooltip
              onClick={() => {
                setText('')
              }}
              title="Aramayı temizle"
              className="h-10 w-10"
            >
              <IconButton>
                <ClearIcon />
              </IconButton>
            </Tooltip>
          )}
          {!showOption && (
            <Tooltip
              onClick={() => {
                setOnFocused(true)
                setShowSearch(false)
                setShowOption(true)
              }}
              title="Arama seçeneklerini göster"
              className="h-10 w-10"
            >
              <IconButton>
                <TuneIcon />
              </IconButton>
            </Tooltip>
          )}

          {/* Search */}
          {showSearch && (
            <div className="absolute left-0 top-[48px] min-h-[2rem] w-full rounded-b-lg bg-white p-2 shadow-md transition">
              <div className="flex gap-4 border-y py-2">
                <ToggleButtonGroup value={formats} onChange={handleFormat}>
                  <ToggleButton value="1">
                    {formats.includes('1') && <CheckIcon />} Eki olan
                  </ToggleButton>
                  <ToggleButton value="2">
                    {formats.includes('2') && <CheckIcon />}Son 7 Gün
                  </ToggleButton>
                  <ToggleButton value="3">
                    {formats.includes('3') && <CheckIcon />}Benden
                  </ToggleButton>
                </ToggleButtonGroup>
              </div>
              <div>
                <div className="flex items-center gap-4 p-2 text-xs text-gray-600 hover:bg-gray-light">
                  <MailOutlineIcon />
                  <p>Filtered results here</p>
                </div>
                <div className="flex items-center gap-4 p-2 text-xs text-gray-600 hover:bg-gray-light">
                  <MailOutlineIcon />
                  <p>Filtered results here</p>
                </div>
                <div className="flex items-center gap-4 p-2 text-xs text-gray-600 hover:bg-gray-light">
                  <MailOutlineIcon />
                  <p>Filtered results here</p>
                </div>
              </div>
            </div>
          )}

          {/* Options */}
          {showOption && (
            <div
              ref={optionRef}
              className="absolute left-0 top-[48px] flex min-h-[4rem] w-full flex-col gap-4 rounded-b-lg bg-white px-2 py-4 shadow-md transition"
            >
              <div className="flex items-center justify-between px-4 text-sm">
                <p className="w-12 text-gray-500">Gönderen: </p>
                <input
                  className="w-5/6 border-b-[1px] border-gray-400 focus:border-blue-700 focus:outline-none"
                  type="text"
                />
              </div>
              <div className="flex items-center  justify-between  px-4 text-sm">
                <p className="w-12 text-gray-500">Alıcı: </p>
                <input
                  className="w-5/6  border-b-[1px] border-gray-400 focus:border-blue-700 focus:outline-none"
                  type="text"
                />
              </div>
              <div className="flex items-center  justify-between  px-4 text-sm">
                <p className="w-12 text-gray-500">Konu: </p>
                <input
                  className="w-5/6  border-b-[1px] border-gray-400 focus:border-blue-700 focus:outline-none"
                  type="text"
                />
              </div>
              <div className="flex items-center  justify-between  px-4 text-sm">
                <p className="w-48 text-gray-500">İçerdiği kelimeler: </p>
                <input
                  className="w-full  border-b-[1px] border-gray-400 focus:border-blue-700 focus:outline-none"
                  type="text"
                />
              </div>
              <div className="flex items-center  justify-between  px-4 text-sm">
                <p className="w-48 text-gray-500">Şunu içermeyen: </p>
                <input
                  className="w-full  border-b-[1px] border-gray-400 focus:border-blue-700 focus:outline-none"
                  type="text"
                />
              </div>
              <div className="flex items-center  justify-between  px-4 text-sm">
                <p className="w-48 text-gray-500">Boyut: </p>
                <div className="flex gap-4">
                  <select className="w-1/3 p-2 text-sm   focus:outline-none focus:ring-gray-400">
                    <option selected>Open this select menu</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                  <select className="w-1/3  p-2  text-sm focus:outline-none focus:ring-gray-400">
                    <option selected>Open this select menu</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                  <select className="w-1/3  p-2  text-sm focus:outline-none focus:ring-gray-400">
                    <option selected>Open this select menu</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
              </div>
              <button
                onClick={() => {
                  setShowOption(false)
                }}
                className="w-32 self-end rounded-lg bg-blue-500 px-4 py-2 text-white"
              >
                Filtre oluştur
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="flex w-48 justify-end px-2 ">
        <Box
          sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}
        >
          <Tooltip title="Account settings">
            <IconButton
              onClick={() => {
                setOpenSettings(!openSettings)
              }}
              size="small"
              sx={{ ml: 2, padding: 1 }}
              aria-controls={openApp ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openApp ? 'true' : undefined}
            >
              <SettingsIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box
          sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}
        >
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClickApp}
              size="small"
              sx={{ ml: 2, padding: 1 }}
              aria-controls={openApp ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openApp ? 'true' : undefined}
            >
              <AppsIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorElApp}
          id="account-menu"
          open={openApp}
          onClose={handleCloseApp}
          onClick={handleCloseApp}
          PaperProps={{
            elevation: 0,
            sx: {
              display: 'grid',
              gridColumn: '3',
              padding: 3,
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              maxHeight: '20rem',
              overflowY: 'scroll ',

              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 10,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <div className="grid grid-cols-3 gap-2 ">
            <div className="flex h-16 w-16 flex-col items-center justify-center rounded-lg hover:bg-blue-300">
              <MailOutlineIcon />
              Google
            </div>
            <div className="flex h-16 w-16 flex-col items-center justify-center rounded-lg hover:bg-blue-300">
              <MailOutlineIcon />
              Google
            </div>
            <div className="flex h-16 w-16 flex-col items-center justify-center rounded-lg hover:bg-blue-300">
              <MailOutlineIcon />
              Google
            </div>
            <div className="flex h-16 w-16 flex-col items-center justify-center rounded-lg hover:bg-blue-300">
              <MailOutlineIcon />
              Google
            </div>
            <div className="flex h-16 w-16 flex-col items-center justify-center rounded-lg hover:bg-blue-300">
              <MailOutlineIcon />
              Google
            </div>
          </div>
          <Divider sx={{ margin: 1 }} />
          <div className="grid grid-cols-3 gap-2 ">
            <div className="flex h-16 w-16 flex-col items-center justify-center rounded-lg hover:bg-blue-300">
              <MailOutlineIcon />
              Google
            </div>
            <div className="flex h-16 w-16 flex-col items-center justify-center rounded-lg hover:bg-blue-300">
              <MailOutlineIcon />
              Google
            </div>
            <div className="flex h-16 w-16 flex-col items-center justify-center rounded-lg hover:bg-blue-300">
              <MailOutlineIcon />
              Google
            </div>
            <div className="flex h-16 w-16 flex-col items-center justify-center rounded-lg hover:bg-blue-300">
              <MailOutlineIcon />
              Google
            </div>
            <div className="flex h-16 w-16 flex-col items-center justify-center rounded-lg hover:bg-blue-300">
              <MailOutlineIcon />
              Google
            </div>
            <div className="flex h-16 w-16 flex-col items-center justify-center rounded-lg hover:bg-blue-300">
              <MailOutlineIcon />
              Google
            </div>
            <div className="flex h-16 w-16 flex-col items-center justify-center rounded-lg hover:bg-blue-300">
              <MailOutlineIcon />
              Google
            </div>
            <div className="flex h-16 w-16 flex-col items-center justify-center rounded-lg hover:bg-blue-300">
              <MailOutlineIcon />
              Google
            </div>
            <div className="flex h-16 w-16 flex-col items-center justify-center rounded-lg hover:bg-blue-300">
              <MailOutlineIcon />
              Google
            </div>
            <div className="flex h-16 w-16 flex-col items-center justify-center rounded-lg hover:bg-blue-300">
              <MailOutlineIcon />
              Google
            </div>
          </div>
        </Menu>

        <Box
          sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}
        >
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleClose}>
            <Avatar /> Profile
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Avatar /> My account
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </div>
    </nav>
  )
}
