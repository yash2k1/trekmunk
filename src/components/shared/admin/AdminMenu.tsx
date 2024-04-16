"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  StickyNote,
  BarChartBig,
  CircleUserRound,
  SquareUserRound,
  Network,
  BellRing,
  LayoutDashboard,
  Building2,
  UsersRound,
  UserRoundCog,
  Receipt,
  FilePlus2,
  FileStack,
  ShoppingCart,
  Pencil,
  ListTodo,
  Tag,
  FilePen,
  PercentCircle,
  MessageSquareText,
  Folder,
  Settings,
  TicketPercent,
  Percent,
  Trophy,
  Album,
  Package,
  Mail,
  TentTree,
  HelpCircle,
  Star,
  FileType,
  NotebookText,
  NotebookPen,
  Tent,
  SquareStack,
  Megaphone,
  FolderSearch,
  CalendarCheck,
  Wrench,
  Sun,
  LineChart,
  LandPlot,
  Image,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AdminMenuData from "@/constants/AdminMenuData";
import { usePathname } from "next/navigation";
import { DrawerClose } from "@/components/ui/drawer";

const AdminMenu = () => {
  const router = useRouter();
  const pathname = "/" + (usePathname().split("/")[2] || "");

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "LayoutDashboard":
        return <LayoutDashboard height={20} width={20} />;
      case "UsersRound":
        return <UsersRound height={20} width={20} />;
      case "UserRoundCog":
        return <UserRoundCog height={20} width={20} />;
      case "Building2":
        return <Building2 height={20} width={20} />;
      case "BellRing":
        return <BellRing height={20} width={20} />;
      case "StickyNote":
        return <StickyNote height={20} width={20} />;
      case "Network":
        return <Network height={20} width={20} />;
      case "BarChartBig":
        return <BarChartBig height={20} width={20} />;
      case "CircleUserRound":
        return <CircleUserRound height={20} width={20} />;
      case "SquareUserRound":
        return <SquareUserRound height={20} width={20} />;
      case "Receipt":
        return <Receipt height={20} width={20} />;
      case "FilePlus2":
        return <FilePlus2 height={20} width={20} />;
      case "FileStack":
        return <FileStack height={20} width={20} />;
      case "ShoppingCart":
        return <ShoppingCart height={20} width={20} />;
      case "Pencil":
        return <Pencil height={20} width={20} />;
      case "ListTodo":
        return <ListTodo height={20} width={20} />;
      case "Tag":
        return <Tag height={20} width={20} />;

      case "FilePen":
        return <FilePen height={20} width={20} />;
      case "PercentCircle":
        return <PercentCircle height={20} width={20} />;
      case "MessageSquareText":
        return <MessageSquareText height={20} width={20} />;
      case "Folder":
        return <Folder height={20} width={20} />;
      case "Settings":
        return <Settings height={20} width={20} />;
      case "TicketPercent":
        return <TicketPercent height={20} width={20} />;
      case "Percent":
        return <Percent height={20} width={20} />;
      case "Trophy":
        return <Trophy height={20} width={20} />;
      case "Album":
        return <Album height={20} width={20} />;
      case "Package":
        return <Package height={20} width={20} />;
      case "Mail":
        return <Mail height={20} width={20} />;
      case "TentTree":
        return <TentTree height={20} width={20} />;

      case "FileType":
        return <FileType height={20} width={20} />;
      case "NotebookText":
        return <NotebookText height={20} width={20} />;
      case "NotebookPen":
        return <NotebookPen height={20} width={20} />;
      case "Tent":
        return <Tent height={20} width={20} />;
      case "FolderSearch":
        return <FolderSearch height={20} width={20} />;
      case "CalendarCheck":
        return <CalendarCheck height={20} width={20} />;
      case "Wrench":
        return <Wrench height={20} width={20} />;
      case "SquareStack":
        return <SquareStack height={20} width={20} />;
      case "Sun":
        return <Sun height={20} width={20} />;
      case "Image":
        return <Image height={20} width={20} />;
      case "LineChart":
        return <LineChart height={20} width={20} />;
      case "LandPlot":
        return <LandPlot height={20} width={20} />;
      case "Megaphone":
        return <Megaphone height={20} width={20} />;
      case "Star":
        return <Star height={20} width={20} />;
      case "HelpCircle":
        return <HelpCircle height={20} width={20} />;

      default:
        return null;
    }
  };

  return (
    <>
      <div>
        <Accordion type="single" collapsible>
          {AdminMenuData &&
            AdminMenuData.map((item, index) => {
              return (
                <div key={index}>
                  <h4
                    className={`uppercase font-bold flex justify-start text-xs ${
                      index === 0 ? "" : "mt-6"
                    }`}
                  >
                    {item.name}
                  </h4>
                  {
                    <div className="grid gap-1">
                      {
                        //  if title is option
                        item?.routes?.map((btn) => {
                          return (
                            <div key={btn.id} >
                              {btn.title === "option" ? (
                                <AccordionItem
                                  value={btn.id}
                                  className="[&>*:not(:nth-child(1))]:ml-4 [&>*:not(:nth-child(1))]:my-1"
                                >
                                  <AccordionTrigger
                                    className={` ${
                                      btn.options?.some(
                                        (option) => option.path === pathname
                                      )
                                        ? "hover:bg-orange-500   h-9 text-white hover:text-white bg-orange-500 [&[data-state=open]]:bg-white [&[data-state=open]]:text-black  px-0 text font-normal flex items-center justify-start"
                                        : "px-0 text font-normal  h-9  flex items-center justify-start hover:bg-orange-100 hover:text-orange-500"
                                    } `}
                                  >
                                    <div
                                      className=" whitespace-nowrap rounded-md text-sm 
                                      font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2
                                       focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none
                                        disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 px-0
                                        text flex justify-start "
                                    >
                                      {getIconComponent(btn.icon || "")}
                                      <div className="gap-2 rounded-md">
                                         <span>{btn.name} </span> 
                                      <span className="rounded-full bg-red-500 text-white p-[2px] text-[10px] text-center aspect-square inline-block w-6 h-6">9</span>
                                      </div>
                                    </div>
                                    {/* options button */}
                                  </AccordionTrigger>
                                  {btn.options?.map((option) => {
                                    return (
                                      <AccordionContent key={option.id}>
                                        <DrawerClose className="w-full rounded-md">
                                          <div
                                            className={` whitespace-nowrap rounded-md text-sm 
                                            font-normal ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2
                                             focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none
                                              disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 px-0
                                               text  flex items-center justify-start p-2
                                   hover:bg-orange-100 hover:text-orange-500 
                                    ${
                                      option.path === pathname
                                        ? "hover:bg-orange-500 text-white hover:text-white bg-orange-500"
                                        : "hover:bg-orange-100 hover:text-orange-500"
                                    } `}
                                            onClick={() =>
                                              router.push(
                                                "/admin" + option.path || "/"
                                              )
                                            }
                                          >
                                            {getIconComponent(
                                              option.icon || ""
                                            )}
                                            <span className="ml-1">
                                              {option.name}
                                            </span>
                                          </div>
                                        </DrawerClose>
                                      </AccordionContent>
                                    );
                                  })}
                                </AccordionItem>
                              ) : (
                                //  if title is buttons
                                <>
                                  <DrawerClose className="w-full rounded-md">
                                    <div
                                      className={`  whitespace-nowrap rounded-md text-sm 
                                      font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2
                                       focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none
                                        disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 px-0
                                         text  flex items-center justify-start p-2
                                   hover:bg-orange-100 hover:text-orange-500 
                                    ${
                                      btn.path === pathname
                                        ? "hover:bg-orange-500 text-white hover:text-white bg-orange-500"
                                        : "hover:bg-orange-100 hover:text-orange-500"
                                    } `}
                                      onClick={() =>
                                        router.push("/admin" + btn.path || "/")
                                      }
                                    >
                                      {getIconComponent(btn.icon || "")}
                                      <span className="ml-1">{btn.name}</span>
                                    </div>
                                  </DrawerClose>
                                </>
                              )}
                            </div>
                          );
                        })
                      }
                    </div>
                  }
                </div>
              );
            })}
          {}
        </Accordion>
      </div>
    </>
  );
};

export default AdminMenu;
