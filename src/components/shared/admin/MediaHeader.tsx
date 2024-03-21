'use client'
import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { IdCardIcon, TableIcon, UploadIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';

const MediaHeader = () => {
  const router=useRouter();
  return (
    <div className="flex justify-between py-4 px-3 border-b-slate-200 border-b-[1px]">
    <p className='font-bold text-xl' >All Media</p>
    {/* rigth side of table heading */}
    <div className='grid gap-4 grid-cols-3'>
      {/* card view */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="grid place-content-center" onClick={()=>router.push("?event=card")}><IdCardIcon className='cursor-pointer h-6 w-5' /></TooltipTrigger>
          <TooltipContent className='bg-black text-white' >
          <p>Card view</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* table view */}
      <TooltipProvider >
        <Tooltip >
          <TooltipTrigger className="grid place-content-center" onClick={()=>router.push("?event=table")}><TableIcon className='cursor-pointer' /></TooltipTrigger>
          <TooltipContent className='bg-black text-white' >
          <p>Table view</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* upload */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="grid place-content-center"><UploadIcon className='cursor-pointer ' /></TooltipTrigger>
          <TooltipContent className='bg-black text-white'>
          <p>upload</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  </div>
  )
}

export default MediaHeader