'use client'
import { ImageUpload } from '@/components/shared/admin/ImageUpload'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Asterisk } from 'lucide-react'
import React, { useState } from 'react'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
const companyProfile = () => {
  // const [field,setField]=useState<string>("");
  let field="Drop your photo here or browse your computer.";
  return (
    <div className=" bg-white rounded-md ">
    <div className="flex justify-between py-4 px-3 border-b-slate-200 border-b-[1px]">
      <p className='font-bold text-xl' >Company Profile</p>
    </div>
     {/* company profile */}
     <div>
     <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="companyName" className='flex items-center'>Company Name <Asterisk className='w-4 h-4'/></Label>
      <Input type="text" id="companyName" placeholder="Company Name" />
    </div>
    {/* Email */}
     <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
    {/* Website */}
     <div className="grid w-full max-w-sm items-center gap-1.5">
     <Label htmlFor="website" className='flex items-center'>Website</Label>
      <Input type="text" id="website" placeholder="Website url" />
    </div>
    {/* Fax */}
     <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="fax">Fax</Label>
      <Input type="text" id="fax" placeholder=" Fax" />
    </div>
    {/* photo */}
     <div className="grid w-full  items-center gap-1.5 border-2 border-black max-w-60 h-36 ">
     <FormField
	control={Form.control}
	name="image"
	render={({field}) => (
		<FormItem>
			<FormControl>
				<ImageUpload value={field.value} onChange={field.onChange}/>
			</FormControl>
			<FormMessage/>
		</FormItem>
	)}
/>
    </div>
    {/* photo
     <div className="grid w-full  items-center gap-1.5 border-2 border-black max-w-60 h-36 ">
     <Label htmlFor="picture">Picture</Label> 
      <Input id="picture" type="file" placeholder="Drop your photo here or browse your computer." className='max-w-60 h-36 flex items-center justify-center hover:bg-blue-300 cursor-pointer' />
    </div> */}
     </div>
  </div>
  )
}

export default companyProfile