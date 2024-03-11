import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MenuIcon, UserRound, Power, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import Image from 'next/image';
import {
    DrawerTrigger,
} from "@/components/ui/drawer"
import { useRouter } from 'next/navigation';
const AdminNavbar = () => {
    const router = useRouter();
    return (
        <nav className="bg-white sticky z-[99] top-0 w-full h-[62px] flex items-center justify-between px-[10px] shadow-md sm:px-[20px]" >
            {/* nav left side elements */}
            <div className='flex items-center'>
                <DrawerTrigger className='block sm:hidden'> <MenuIcon /></DrawerTrigger>

                <Image
                    src={"https://trekmunk.b-cdn.net/trekmunk-logo-black.png"}
                    className="object-contain sm:w-[150px] cursor-pointer"
                    alt={"logo"}
                    height={"40"}
                    width={"100"}
                    onClick={() => router.push("/admin")}
                />
            </div>
            {/* nav right side elements */}
            <div className='flex items-center justify-end'>
                <Avatar className="w-8 h-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <DropdownMenu>
                    <DropdownMenuTrigger  className="no-wrap w-[70px] sm:w-[130px] h-8 mx-1 shadow-lg border-2 focus:border-orange-400 focus-visible:border-orange-400 border-orange-400  hover:border-orange-400   bg-zinc-100 hover:cursor-pointer rounded-md flex items-center "> <p className='w-[64px] sm:w-[130px] overflow-ellipsis overflow-hidden '>Sanskar sahab</p>  <ChevronDown className="h-4 w-6 opacity-50" /></DropdownMenuTrigger>
                    <DropdownMenuContent className='z-[100]'>
                        <DropdownMenuItem>Edit Profile</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem  onClick={()=>router.push('/admin/login')}>Logout</DropdownMenuItem>                    
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* <Select >
            <SelectTrigger className="w-[70px] sm:w-[130px] h-8 mx-1">
                <SelectValue placeholder="sanskar sahab" />
            </SelectTrigger>
            <SelectContent>
        <SelectGroup>

                <SelectItem value="EditProfile"><div className='flex items-center cursor-pointer'><UserRound/> <p>Edit Profile</p></div></SelectItem>
                <SelectItem value="logOut"  onClick={()=>{router.push('admin/login') ;console.log("chala")}}><div className='flex items-center cursor-pointer'><Power/> <p>Logout</p></div></SelectItem>
        </SelectGroup>

            </SelectContent>
        </Select> */}
                {/* <Select>
      <SelectTrigger className="w-[70px] sm:w-[130px] h-8 mx-1">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select> */}

            </div>
        </nav>
    )
}

export default AdminNavbar