import "@/app/globals.css";
import React from "react";
import { Provider } from "@/redux/Provider";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Heart, X } from "lucide-react";
import AdminNavbar from "@/components/shared/admin/AdminNavbar";
import AdminMenu from "@/components/shared/admin/AdminMenu";
import Image from "next/image";
import CurrentRoute from "@/components/shared/admin/CurrentRoute";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex-grow flex-1 ">
      {/* for mobile view */}
      <div className="block visible sm:hidden">
        <Drawer direction="left">
          <AdminNavbar />
          <DrawerContent className="z-[400]">
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
                </DrawerClose>
              </DrawerTitle>
            </DrawerHeader>

            <div style={{ height: `calc(100svh - 62px)` }}>
              <ScrollArea className="flex-1 h-full border-s-stone-300 w-[100%] rounded-md border p-4 text-lg">
                <AdminMenu />
              </ScrollArea>
            </div>
          </DrawerContent>
        </Drawer>

        <Provider>
          <div className="flex-1 border-s-stone-300 rounded-md border h-full text-lg bg-gray-300 w-full">
            <div
              className="overflow-y-scroll h-full"
              style={{ height: `calc(100svh - 32px)` }}
            >
              {/* current route and path */}
              <CurrentRoute />
              <div className="px-4 mb-16">{children}</div>
            </div>
            {/* build by */}
            <div className="fixed bottom-0 flex justify-center items-center w-full bg-white text-sm gap-2  pl-4 py-2">
              Developed And Managed by Wonder vendors
              <div className="relative flex group">
                    <Heart className="text-red-500 h-4 w-4 transition-opacity block cursor-pointer group-hover:hidden" />
                    <img
                      className="h-4 w-4 transition-opacity hidden cursor-pointer group-hover:block"
                      src="/heart.gif"
                      alt="heart"
                    />
                  </div>
            </div>
          </div>
        </Provider>
      </div>
      {/* for deskstop view */}
      <div className="hidden sm:block h-[100svh] overflow-hidden">
        <Drawer>
          <AdminNavbar />
          <div className="flex " style={{ height: `calc(100svh - 62px)` }}>
            <ScrollArea className="flex-1 border-s-stone-300 w-[20%] max-w-[250px] min-w-[250px] rounded-md border p-4 text-lg">
              <AdminMenu />
            </ScrollArea>
            <Provider>
              <div
                className="bg-gray-300 xl:w-full w-[80vw] min-w-[380px]"
                style={{ height: `calc(100svh - 62px)` }}
              >
                <div className="overflow-y-scroll h-full">
                  {/* current route and path */}
                  <CurrentRoute />

                  <div className="px-4 mb-16">{children}</div>
                </div>

                {/* build by  */}
                <div className="fixed bottom-0 flex items-center w-full bg-white px-4 py-2 ">
                  Developed And Managed by Wonder vendors
                  <div className="relative mx-1 flex group">
                    <Heart className="text-red-500 h-6 w-6 transition-opacity block cursor-pointer group-hover:hidden" />
                    <img
                      className="h-6 w-6 transition-opacity hidden cursor-pointer group-hover:block"
                      src="/heart.gif"
                      alt="heart"
                    />
                  </div>
                </div>
              </div>
            </Provider>
          </div>
        </Drawer>
      </div>
    </div>
  );
}
