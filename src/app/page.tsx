'use client'
import { useState } from 'react'
import Button from '@mui/material/Button'
import {
  ArrowBackIosIcon,
  ArrowForwardIosIcon,
  CheckBoxOutlineBlankIcon,
  GroupIcon,
  ImageIcon,
  LocalOfferIcon,
  MoreVertIcon,
  ReplayIcon,
} from './assets/Icons'
import { IconButton, Tooltip } from '@mui/material'

type Props = {}
const Home = (props: Props) => {
  const [index, setIndex] = useState<number>(0)
  return (
    <div className="p-2">
      <div>
        <div className="flex justify-between">
          <div className="flex gap-6 py-2">
            <Tooltip title="Select" className="h-8 w-8">
              <IconButton>
                <CheckBoxOutlineBlankIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Refresh" className="h-8 w-8">
              <IconButton>
                <ReplayIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Other" className="h-8 w-8">
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </Tooltip>
          </div>
          <div className="flex items-center gap-4">
            1 - 2 of 2
            <Tooltip title="Back" className="h-8 w-8">
              <IconButton>
                <ArrowBackIosIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Next" className="h-8 w-8">
              <IconButton>
                <ArrowForwardIosIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className="flex gap-2 border-b-2">
          <button
            className={`${
              index === 0
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'border-transparent'
            } flex h-16 w-64 items-center justify-center  gap-4 border-b-2 px-8 py-2 hover:bg-gray-light`}
            onClick={() => {
              setIndex(0)
            }}
          >
            <ImageIcon />
            Primary
          </button>
          <button
            className={`${
              index === 1
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'border-transparent'
            } flex h-16 w-64 items-center justify-center  gap-4 border-b-2 px-8 py-2 hover:bg-gray-light`}
            onClick={() => {
              setIndex(1)
            }}
          >
            <LocalOfferIcon />
            Promotion
          </button>
          <button
            className={`${
              index === 2
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'border-transparent'
            } flex h-16 w-64 items-center justify-center  gap-4 border-b-2 px-8 py-2 hover:bg-gray-light`}
            onClick={() => {
              setIndex(2)
            }}
          >
            <GroupIcon />
            Social
          </button>
        </div>
      </div>
      <div>
        {index === 0 ? (
          <p>Primary content here</p>
        ) : index === 1 ? (
          <p>Promotion content here</p>
        ) : index === 2 ? (
          <p>Social content here</p>
        ) : null}
      </div>
    </div>
  )
}
export default Home
