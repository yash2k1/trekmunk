'use client'
import ImageUpload from '@/components/shared/admin/ImageUpload'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Asterisk, Check } from 'lucide-react'
import React from 'react'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
const State = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]
const country = [
  { value: "india", label: "India" },
  { value: "israel", label: "Israel" },
  { value: "afghanistan", label: "Afghanistan" },
  { value: "albania", label: "Albania" },
  { value: "algeria", label: "Algeria" },
  { value: "andorra", label: "Andorra" },
  { value: "angola", label: "Angola" },
  { value: "antigua and barbuda", label: "Antigua and Barbuda" },
  { value: "argentina", label: "Argentina" },
  { value: "armenia", label: "Armenia" },
  { value: "australia", label: "Australia" },
  { value: "austria", label: "Austria" },
  { value: "azerbaijan", label: "Azerbaijan" },
  { value: "bahamas", label: "Bahamas" },
  { value: "bahrain", label: "Bahrain" },
  { value: "bangladesh", label: "Bangladesh" },
  { value: "barbados", label: "Barbados" },
  { value: "belarus", label: "Belarus" },
  { value: "belgium", label: "Belgium" },
  { value: "belize", label: "Belize" },
  { value: "benin", label: "Benin" },
  { value: "bhutan", label: "Bhutan" },
  { value: "bolivia", label: "Bolivia" },
  { value: "bosnia and herzegovina", label: "Bosnia and Herzegovina" },
  { value: "botswana", label: "Botswana" },
  { value: "brazil", label: "Brazil" },
  { value: "brunei", label: "Brunei" },
  { value: "bulgaria", label: "Bulgaria" },
  { value: "burkina faso", label: "Burkina Faso" },
  { value: "burundi", label: "Burundi" },
  { value: "cabo verde", label: "Cabo Verde" },
  { value: "cambodia", label: "Cambodia" },
  { value: "cameroon", label: "Cameroon" },
  { value: "canada", label: "Canada" },
  { value: "central african republic", label: "Central African Republic" },
  { value: "chad", label: "Chad" },
  { value: "chile", label: "Chile" },
  { value: "china", label: "China" },
  { value: "colombia", label: "Colombia" },
  { value: "comoros", label: "Comoros" },
  { value: "congo (brazzaville)", label: "Congo (Brazzaville)" },
  { value: "congo (kinshasa)", label: "Congo (Kinshasa)" },
  { value: "costa rica", label: "Costa Rica" },
  { value: "cote d'ivoire", label: "Cote d'Ivoire" },
  { value: "croatia", label: "Croatia" },
  { value: "cuba", label: "Cuba" },
  { value: "cyprus", label: "Cyprus" },
  { value: "czech republic", label: "Czech Republic" },
  { value: "denmark", label: "Denmark" },
  { value: "djibouti", label: "Djibouti" },
  { value: "dominica", label: "Dominica" },
  { value: "dominican republic", label: "Dominican Republic" },
];

import { cn } from "@/lib/utils"
import { Button } from '@/components/ui/button'
const companyProfile = () => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [value, setValue] = React.useState<{ country: string, state: string }>({ country: "", state: "" });
  return (
    <div className=" bg-white rounded-md pb-4">
      <div className="flex justify-between py-4 px-3 border-b-slate-200 border-b-[1px]">
        <p className='font-bold text-xl' >Company Profile</p>
      </div>
      {/* company profile */}
      <div className='lg:grid lg:grid-cols-3 gap-4 p-4  flex flex-col'>
        {/* company name */}
        <div className="grid w-full  items-center gap-1.5">
          <Label htmlFor="companyName" className='flex items-center  px-3 py-2'>Company Name <Asterisk className='w-4 h-4 text-red-500' /></Label>
          <Input
            placeholder="Company Name"
            type="text"
            id="companyName"
            className=" min-w-[160px] sm:min-w-[200px] focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-0 "
          />
        </div>
        {/* Email */}
        <div className="grid w-full  items-center gap-1.5">
          <Label htmlFor="email" className=' px-3 py-2'>Email</Label>
          <Input
            placeholder="Email"
            type="email"
            id="email"
            className="min-w-[160px] sm:min-w-[200px] focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-0 "
          />
        </div>
        {/* Website */}
        <div className="grid w-full  items-center gap-1.5">
          <Label htmlFor="website" className='flex items-center px-3 py-2'>Website</Label>
          <Input
            placeholder="Website URL"
            type="text"
            id="website"
            className=" min-w-[160px] sm:min-w-[200px] focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-0 "
          />
        </div>
        {/* Fax */}
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="fax" className=' px-3 py-2'>Fax</Label>
          <Input
            placeholder="Fax"
            type="text"
            id="fax"
            className="min-w-[160px] sm:min-w-[200px] focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-0 "
          />
        </div>
        {/* photo */}
        <div className="grid  items-center lg:row-start-1 lg:row-end-3 lg:col-start-3 lg:justify-self-center justify-center max-w-xs min-h-40 max-h-40 border-2 border-dashed border-gray-300 rounded-md hover:text-white hover:bg-orange-500 transition-bg duration-500 ">
          <ImageUpload />
        </div>

      </div>

      {/* Address */}
      <div className='w-full my-4 flex items-center justify-center border-zinc-400 border-b-[1px] relative'><p className='absolute text-center font-light text-md w-16 bg-white'>Address</p></div>
      <div className='grid lg:grid-cols-6 gap-4 p-4 '>
        {/* address 1 */}
        <div className="grid w-full items-center gap-1.5 lg:col-start-1 lg:col-end-4">
          <Label htmlFor="Address1" className='flex items-center px-3 py-2'>Address 1</Label>
          <Textarea
            placeholder="Address 1"
            id="Address1"
            className="h-20 flex whitespace-normal items-start focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-0 "
          />
        </div>
        {/* address 2 */}
        <div className="grid w-full items-center gap-1.5 lg:col-start-4 lg:col-end-7">
          <Label htmlFor="Address2" className='flex items-center px-3 py-2'>Address 2</Label>
          <Textarea
            placeholder="Address 2"
            id="Address2"
            className="h-20 flex whitespace-normal items-start focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-0"
          />
        </div>
        {/* country */}
        <div className="grid w-full items-center gap-1.5  lg:col-start-1 lg:col-end-3">
          <Popover open={open} onOpenChange={setOpen}>
            <Label htmlFor="country" className='flex items-center px-3 py-2'>Country</Label>
            <PopoverTrigger asChild id='country'>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full justify-between"
              >
                {value.country
                  ? country.find((country) => country.value === value.country)?.label
                  : "Select Country..."}
                <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Command>
                <CommandInput placeholder="Search Country..." className="h-9" />
                <CommandEmpty>No Match found.</CommandEmpty>
                <CommandGroup className='h-56 overflow-y-scroll'>
                  {country.map((country) => (
                    <CommandItem
                      key={country.value}
                      value={country.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value.country ? { ...value, country: "" } : { ...value, country: currentValue })

                        setOpen(false)
                      }}
                    >
                      {country.label}
                      <CheckIcon
                        className={cn(
                          "ml-auto h-4 w-4",
                          value.country === country.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
        {/* state */}
        <div className="grid w-full items-center gap-1.5  lg:col-start-3 lg:col-end-5" >
          <Popover open={open2} onOpenChange={setOpen2}>
            <Label htmlFor="state" className='flex items-center px-3 py-2'>State</Label>
            <PopoverTrigger asChild id='state'>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open2}
                className="w-full justify-between"
              >
                {value.state
                  ? State.find((State) => State.value === value.state)?.label
                  : "Select State..."}
                <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Command>
                <CommandInput placeholder="Search State..." className="h-9" />
                <CommandEmpty>No Match found.</CommandEmpty>
                <CommandGroup>
                  {State.map((State) => (
                    <CommandItem
                      key={State.value}
                      value={State.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value.state ? { ...value, state: "" } : { ...value, state: currentValue })
                        setOpen2(false)
                      }}
                    >
                      {State.label}
                      <CheckIcon
                        className={cn(
                          "ml-auto h-4 w-4",
                          value.state === State.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
        {/* City */}
        <div className="grid w-full items-center gap-1.5  lg:col-start-5 lg:col-end-7">
          <Label htmlFor="city" className=' px-3 py-2'>City</Label>
          <Input
            placeholder="City"
            type="text"
            id="city"
            className="min-w-[160px] sm:min-w-[200px] focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-0 "
          />
        </div>
        {/* ZipCode */}
        <div className="grid w-full items-center gap-1.5  lg:col-start-1 lg:col-end-3">
          <Label htmlFor="zipCode" className=' px-3 py-2'>Zip Code</Label>
          <Input
            placeholder="Zip Code"
            type="number"
            id="zipCode"
            className=" min-w-[160px] sm:min-w-[200px] focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-0 "
          />
        </div>
   

      </div>

      {/* Other */}
      <div className='w-full my-4 flex items-center justify-center border-zinc-400 border-b-[1px] relative'><p className='absolute text-center font-light text-md w-16 bg-white'>Other</p></div>
      <div className='grid lg:grid-cols-3 gap-4 p-4 '>
        
        {/* GST No */}
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="gstNo" className=' px-3 py-2'>GST No</Label>
          <Input
            placeholder="GST No"
            type="text"
            id="gstNo"
            className="min-w-[160px] sm:min-w-[200px] focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-0 "
          />
        </div>
        {/* Registration No */}
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="registrationNo" className=' px-3 py-2'>Registration No</Label>
          <Input
            placeholder="Registration No"
            type="text"
            id="registrationNo"
            className="min-w-[160px] sm:min-w-[200px] focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-0 "
          />
        </div>
        {/* Special note for Invoice*/}
        <div className="lg:col-start-1 lg:col-end-4 lg:row-start-2 grid w-full items-center gap-1.5">
          <Label htmlFor="invoiceNote" className='flex items-center px-3 py-2'>Special note for Invoice</Label>
          <Textarea
            placeholder="Special note for Invoice"
            id="invoiceNote"
            className="h-20 flex whitespace-normal items-start focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-0 "
          />
        </div>
      </div>

      {/* saving */}
      <div className='w-full my-4 flex items-center justify-center border-zinc-400 border-b-[1px] relative'></div>
      <div className='grid place-content-center px-4 '>
        
        {/* Save */}
        <Button type="submit" className="mb-4 w-24 font-bold bg-orange-500 hover:bg-orange-400 gap-2 hover:text-white "> <Check className='w-5 h-5'/> Save</Button>

      </div>


    </div>
  )
}
export default companyProfile;