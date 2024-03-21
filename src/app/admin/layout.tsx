'use client'
import { Inter } from "next/font/google";
import "../globals.css";
import React, { useState } from "react";
import { Provider } from "../../redux/Provider";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer"
import { Heart, X } from "lucide-react";
// import AdminNavbar from '@/components/shared/admin/AdminNavbar';
import AdminMenu from "@/components/shared/admin/AdminMenu";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
    children,
    AdminNavbar,
    
    
}: Readonly<{
    children: React.ReactNode;
    AdminNavbar: React.ReactNode;
 
}>) {
    const [currentRoute, setCurrentRoute] = useState<string>("dashboard");
    const changeCurrentRoute = (input: string): void => {
        setCurrentRoute(input);
    };
    const router = useRouter();
  const pathname = usePathname();
    if(pathname==="/admin/login"){
        return(
        < div className="min-h-[100svh] flex items-center justify-center ring-3" >
            {children}
        </div>
        )
    }
    return (
        < div className="min-h-[100svh]" >
            <div className="flex-grow flex-1 ">
                {/* for mobile view */}
                <div className='block sm:hidden'>
                    <Drawer direction='left' >
                       { AdminNavbar }
                        {/* <AdminNavbar /> */}
                        <DrawerContent>
                            <DrawerHeader>
                                <DrawerTitle>
                                    <DrawerClose className="flex items-center">
                                        <X />
                                        <Image
                                            src={"https://trekmunk.b-cdn.net/trekmunk-logo-black.png"}
                                            className="object-contain"
                                            alt={"logo"}
                                            height={"60"}
                                            width={"150"}
                                        />
                                    </DrawerClose></DrawerTitle>
                            </DrawerHeader>


                            <div style={{ height: `calc(100svh - 62px)` }}>
                                <ScrollArea className="flex-1 h-full border-s-stone-300 w-[100%] rounded-md border p-4 text-lg">
                                    <AdminMenu changeCurrentRoute={changeCurrentRoute} />
                                </ScrollArea>
                            </div>

                        </DrawerContent>
                    </Drawer>
                    <Provider>
                                <div className="bg-gray-300 w-full " style={{ height:`calc(100svh - 62px)` }}>
                                <ScrollArea className="flex-1 border-s-stone-300 rounded-md border h-full text-lg">

                                    <div className="p-4 mb-[50px]">
                                        {/* current route and path */}
                                        <div className="flex justify-between mb-2">
                                            {/* <h1 className="text-[24px]">{currentRoute}</h1> */}
                                            <div className="flex items-center">
                                                <button className="text-orange-400 hover:text-orange-500 text-[14px] mr-2" onClick={() => router.push("/admin")}>Home</button>/
                                                <p className="text-slate-400  text-[14px] ml-2">{currentRoute}</p>
                                            </div>
                                        </div>
                                            {children}
                                       

                                    </div>
                                    <div className="fixed bottom-0 flex items-center w-full bg-white  px-4 py-2">Developed And Managed by Wonder vendors <Heart className="mx-1  text-red-500" /></div>
                                    </ScrollArea>
                                </div>
                            </Provider>
                    {/* <Provider >
                        <div className="bg-gray-300 w-full" style={{ minHeight: `calc(100svh - 62px)` }}>
                            {children}
                            <div className="fixed bottom-0 flex items-center w-full bg-white  px-4 py-2">Developed And Managed by Wonder vendors <Heart className="mx-1 text-red-500" /></div>
                        </div>
                    </Provider> */}
                </div>
          
                {/* for deskstop view */}
                <div className='hidden sm:block h-[100svh] overflow-hidden'>
                    <Drawer>
                       { AdminNavbar }
                        {/* <AdminNavbar /> */}
                        <div className='flex ' style={{ height: `calc(100svh - 62px)` }}>
                            <ScrollArea className="flex-1 border-s-stone-300 w-[20%] max-w-[250px] min-w-[250px] rounded-md border p-4 text-lg">
                                <AdminMenu changeCurrentRoute={changeCurrentRoute} />
                            </ScrollArea>
                            <Provider>
                                
                                 <div className="bg-gray-300 xl:w-full w-[80vw] min-w-[380px]" style={{ height:`calc(100svh - 62px)` }}>
                                    <div className="overflow-y-scroll h-full">
                                        {/* current route and path */}
                                        <div className="flex justify-between mb-2 p-4">
                                            <h1 className="text-[24px]">{(currentRoute==="Dashboard")?currentRoute:""}</h1>
                                           <div className="flex items-center"> 
                                                <button className="text-orange-400 hover:text-orange-500 text-[14px] mr-2" onClick={() => router.push("/admin")}>Home</button>/
                                                <p className="text-slate-400  text-[14px] ml-2">{currentRoute}</p>
                                            </div>
                                            </div>
                                            <div className="px-4 mb-16" >

                                            {children}
                                            </div>
                                    </div>

                                            {/* build by  */}
                                    <div className="fixed bottom-0 flex items-center w-full bg-white  px-4 py-2">Developed And Managed by Wonder vendors <Heart className="mx-1  text-red-500" /></div>

                                 </div>
                                {/* <div className="bg-gray-300 w-[100%] " style={{ height:`calc(100svh - 62px)` }}>
                                <ScrollArea className="flex-1 border-s-stone-300 rounded-md border h-full text-lg">

                                    <div className="p-4 mb-[50px] w-full important"> */}
                                        {/* current route and path */}
                                        {/* <div className="flex justify-end mb-2"> */}
                                            {/* <h1 className="text-[24px]">{currentRoute}</h1> */}
                                            {/* <div className="flex items-center">
                                                <button className="text-orange-400 hover:text-orange-500 text-[14px] mr-2" onClick={() => router.push("/admin")}>Home</button>/
                                                <p className="text-slate-400  text-[14px] ml-2">{currentRoute}</p>
                                            </div>
                                        </div>
                                            {children}
                                       

                                    </div>
                                    <div className="fixed bottom-0 flex items-center w-full bg-white  px-4 py-2">Developed And Managed by Wonder vendors <Heart className="mx-1  text-red-500" /></div>
                                    </ScrollArea>
                                </div> */}
                            </Provider>
                        </div>
                    </Drawer>

                </div>


            </div>
        </div>
    );
}
