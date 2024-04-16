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
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from '@/components/ui/textarea';
import ImageUpload from './ImageUpload';
import { Asterisk } from 'lucide-react';
const MediaHeader = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between py-4 px-3 border-b-slate-200 border-b-[1px]">
      <p className='font-bold text-xl' >All Media</p>
      {/* rigth side of table heading */}
      <div className='grid gap-4 grid-cols-3'>
        {/* card view */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="grid place-content-center" onClick={() => router.push("?event=card")}><IdCardIcon className='cursor-pointer h-6 w-5' /></TooltipTrigger>
            <TooltipContent className='bg-black text-white' >
              <p>Card view</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* table view */}
        <TooltipProvider >
          <Tooltip >
            <TooltipTrigger className="grid place-content-center" onClick={() => router.push("?event=table")}><TableIcon className='cursor-pointer' /></TooltipTrigger>
            <TooltipContent className='bg-black text-white' >
              <p>Table view</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* upload */}
        <Dialog>
          {/* triger button for open dialog */}
          <TooltipProvider>
            <Tooltip>
              <DialogTrigger asChild>
                <TooltipTrigger className="grid place-content-center"><UploadIcon className='cursor-pointer ' /></TooltipTrigger>
              </DialogTrigger>
              <TooltipContent className='bg-black text-white'>
                <p>upload</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* dialog popup */}
          <DialogContent className="w-[80vw] max-w-[425px] max-h-[70svh] px-0">
            <DialogHeader className='border-b-2 border-zinc-200 '>
              
              <DialogTitle className='p-4 flex gap-4 sm:gap-2 sm:text-sm'><UploadIcon className='cursor-pointer' />Upload Media</DialogTitle>
            </DialogHeader>
            {/* create new media item */}
            <div className='grid grid-cols-1 md:grid-cols-1 gap-4 p-4 overflow-y-scroll aspect-square'>

              {/* image info */}
              <div>
                {/* Title */}
                <div className="grid w-full  items-center gap-1.5">
                  <Label htmlFor="title" className='flex items-center  px-3 py-2'>Title <Asterisk className='w-4 h-4 text-red-500' /></Label>
                  <Input
                    placeholder="Enter title"
                    type="text"
                    id="title"
                    className=" min-w-[160px] sm:min-w-[200px] focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-0 "
                  />
                </div>

                {/* alternative Text */}
                <div>
                  <Label htmlFor="alternativeText" className='flex items-center  px-3 py-2'>Alternative Text </Label>
                  <Input
                    placeholder="Enter alternative text"
                    type="text"
                    id="alternativeText"
                    className="min-w-[160px] sm:min-w-[200px] focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-0 "
                  />
                </div>

                {/* caption */}
                <div className="lg:col-start-1 lg:col-end-4 lg:row-start-2 grid w-full items-center gap-1.5">
                  <Label htmlFor="caption" className='flex items-center px-3 py-2'>Caption</Label>
                  <Textarea
                    placeholder="Enter caption"
                    id="caption"
                    className="h-20 flex whitespace-normal items-start focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-0 "
                  />
                </div>

                {/* description */}
                <div className="lg:col-start-1 lg:col-end-4 lg:row-start-2 grid w-full items-center gap-1.5">
                  <Label htmlFor="description" className='flex items-center px-3 py-2'>Description</Label>
                  <Textarea
                    placeholder="Enter description"
                    id="description"
                    className="h-20 flex whitespace-normal items-start focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-0 "
                  />
                </div>


              </div>

              {/* image */}
              <div className="grid rounded-md overflow-hidden max-h-96">
                <ImageUpload />
              </div>

            {/* save btn */}
            <DialogFooter>
              {/* update */}
              <div className='flex justify-end flex-nowrap gap-4 '>
                <DialogClose asChild>
                  <Button  type="submit" className=" sm:w-24 font-bold bg-orange-500 hover:bg-orange-400 hover:text-white text-sm w-14">Update</Button>
                </DialogClose>

                <DialogClose asChild>
                  <Button variant='outline' type="submit" className="sm:w-24 font-bold bg-white hover:bg-zinc-200  hover:text-black text-sm w-14 ">Close</Button>
                </DialogClose>
              </div>
            </DialogFooter>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export default MediaHeader