'use client'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { Asterisk, Undo2 } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import ImageUpload from '@/components/shared/admin/ImageUpload'
import { Button } from '@/components/ui/button'
const page = () => {
    const router=useRouter();
    const prama=useParams();
  return (
    <div className=" bg-white rounded-md ">

    <div className="flex justify-between py-4 px-3 border-b-slate-200 border-b-[1px]">
    <p className=' text-xl' > Media</p>
    {/* rigth side of table heading */}
    <div className=''>
      {/* back */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className='cursor-pointer text-zinc-400 hover:text-zinc-600' onClick={()=>router.back()}><Undo2/></TooltipTrigger>
          <TooltipContent className='bg-black text-white' >
          <p>Back</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  </div>
  <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
    {/* image */}
         <div className="grid rounded-md overflow-hidden max-h-96">
          <ImageUpload image="https://www.trekmunk.com/uploads/systemuploads/WhatsAppImage2022-04-02at21.31.01_1648916195638.jpg"/>
        </div>

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

       {/* update */}
       <div className='grid place-content-end px-4 md:col-start-1 md:col-end-3'>
        <Button type="submit" className="mb-4 w-24 font-bold bg-orange-500 hover:bg-orange-400 gap-2 hover:text-white ">Update</Button>
      </div>
  </div>
  </div>
  )
}

export default page