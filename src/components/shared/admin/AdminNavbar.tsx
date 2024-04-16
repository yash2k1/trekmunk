'use client'
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { MenuIcon, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { DrawerTrigger } from "@/components/ui/drawer";
import { useRouter } from "next/navigation";
const AdminNavbar = () => {
  const router = useRouter();
  return (
    <nav className="bg-white sticky z-[99] top-0 w-full h-[62px] flex items-center justify-between px-[10px] shadow-md sm:px-[20px]">
      {/*hamburger icon vissible for mobile view only */}
      <div className=" items-center block sm:hidden">
        <DrawerTrigger className="block sm:hidden">
          <MenuIcon />
        </DrawerTrigger>
      </div>
      {/*hamburger icon vissible for mobile view only */}
      <div className=" items-center hidden sm:block">
        <Image
          src={"https://trekmunk.b-cdn.net/trekmunk-logo-black.png"}
          className="object-contain"
          alt={"logo"}
          height={"60"}
          width={"150"}
        />
      </div>
      {/* nav right side elements */}
      <div className="flex items-center justify-end">
        <Avatar className="w-8 h-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <DropdownMenu>
          <DropdownMenuTrigger className="no-wrap w-[70px] sm:w-[130px] h-8 mx-1 shadow-lg border-2 focus:border-orange-400 focus-visible:border-orange-400 border-orange-400  hover:border-orange-400   bg-zinc-100 hover:cursor-pointer rounded-md flex items-center mr-4">
            <p className="w-[64px] sm:w-[130px] h-5 overflow-ellipsis overflow-hidden text-sm px-1 sm:text-md">
              Sanskar sahab
            </p>
            <ChevronDown className="h-4 w-6 opacity-50" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="z-[100] ">
            <DropdownMenuItem className="cursor-pointer">
              Edit Profile
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => router.push("/admin/login")}
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default AdminNavbar;
