// 'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import {  StickyNote, BarChartBig, CircleUserRound, SquareUserRound, Network, BellRing, LayoutDashboard, Building2, UsersRound, UserRoundCog, Receipt, FilePlus2, FileStack, ShoppingCart, Pencil, ListTodo, Tag, FilePen, PercentCircle, MessageSquareText, Folder, Settings, TicketPercent, Percent, Trophy, Album, Package, Mail, TentTree, HelpCircle, Star, FileType, NotebookText, NotebookPen, Tent, SquareStack, Megaphone, FolderSearch, CalendarCheck, Wrench, Sun, LineChart, LandPlot, Image, } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AdminMenuData  from '@/constants/AdminMenuData';
import { Button } from '../../ui/button';
import { usePathname } from 'next/navigation'
import { DrawerClose } from '@/components/ui/drawer';

export type AdminMenuProps ={
  changeCurrentRoute: (input: string) => void;
}

const AdminMenu: React.FC<AdminMenuProps> = ({ changeCurrentRoute }) => {
  const router = useRouter();
  const pathname = "/" + (usePathname().split('/')[2] || "");


  const  getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'LayoutDashboard':
        return <LayoutDashboard height={20} width={20} />;
      case 'UsersRound':
        return <UsersRound height={20} width={20} />;
      case 'UserRoundCog':
        return <UserRoundCog height={20} width={20} />;
      case 'Building2':
        return <Building2 height={20} width={20} />;
      case 'BellRing':
        return <BellRing height={20} width={20} />;
      case 'StickyNote':
        return <StickyNote height={20} width={20} />;
      case 'Network':
        return <Network height={20} width={20} />;
      case 'BarChartBig':
        return <BarChartBig height={20} width={20} />;
      case 'CircleUserRound':
        return <CircleUserRound height={20} width={20} />;
      case 'SquareUserRound':
        return <SquareUserRound height={20} width={20} />;
      case 'Receipt':
        return <Receipt height={20} width={20} />;
      case 'FilePlus2':
        return <FilePlus2 height={20} width={20} />;
      case 'FileStack':
        return <FileStack height={20} width={20} />;
      case 'ShoppingCart':
        return <ShoppingCart height={20} width={20} />;
      case 'Pencil':
        return <Pencil height={20} width={20} />;
      case 'ListTodo':
        return <ListTodo height={20} width={20} />;
      case 'Tag':
        return <Tag height={20} width={20} />;

      case 'FilePen':
        return <FilePen height={20} width={20} />;
      case 'PercentCircle':
        return <PercentCircle height={20} width={20} />;
      case 'MessageSquareText':
        return <MessageSquareText height={20} width={20} />;
      case 'Folder':
        return <Folder height={20} width={20} />;
      case 'Settings':
        return <Settings height={20} width={20} />;
      case 'TicketPercent':
        return <TicketPercent height={20} width={20} />;
      case 'Percent':
        return <Percent height={20} width={20} />;
      case 'Trophy':
        return <Trophy height={20} width={20} />;
      case 'Album':
        return <Album height={20} width={20} />;
      case 'Package':
        return <Package height={20} width={20} />;
      case 'Mail':
        return <Mail height={20} width={20} />;
      case 'TentTree':
        return <TentTree height={20} width={20} />;


      case 'FileType':
        return <FileType height={20} width={20} />;
      case 'NotebookText':
        return <NotebookText height={20} width={20} />;
      case 'NotebookPen':
        return <NotebookPen height={20} width={20} />;
      case 'Tent':
        return <Tent height={20} width={20} />;
      case 'FolderSearch':
        return <FolderSearch height={20} width={20} />;
      case 'CalendarCheck':
        return <CalendarCheck height={20} width={20} />;
      case 'Wrench':
        return <Wrench height={20} width={20} />;
      case 'SquareStack':
        return <SquareStack height={20} width={20} />;
      case 'Sun':
        return <Sun height={20} width={20} />;
      case 'Image':
        return <Image height={20} width={20} />;
      case 'LineChart':
        return <LineChart height={20} width={20} />;
      case 'LandPlot':
        return <LandPlot height={20} width={20} />;
      case 'Megaphone':
        return <Megaphone height={20} width={20} />;
      case 'Star':
        return <Star height={20} width={20} />;
      case 'HelpCircle':
        return <HelpCircle height={20} width={20} />;

      default:
        return null;
    }
  };

  return (
    <>
      <div>
        <Accordion type="single" collapsible>
              {
            AdminMenuData && AdminMenuData.map((item, index) => {
              return (
                <div key={index}>
                  <h4 className={`uppercase font-bold flex justify-start text-xs ${index === 0 ? '' : 'mt-6'}`}>{item.name}</h4>
                  {
                    <>
                      {
                        //  if title is option  
                        item?.routes?.map((btn) => {
                          ((btn.path === pathname)&&(btn.title === "button"))?changeCurrentRoute(btn.name):"Dashboard"
                          return (
                            <div key={btn.id} >
                              {(btn.title === "option") ?                       
                                  <AccordionItem value={btn.id} className='[&>*:not(:nth-child(1))]:ml-4 [&>*:not(:nth-child(1))]:my-1'>
                                    <AccordionTrigger className={` ${btn.options?.some((option) => option.path === pathname) ? "hover:bg-orange-500 text-white hover:text-white bg-orange-500 [&[data-state=open]]:bg-white [&[data-state=open]]:text-black " : "hover:bg-orange-100 hover:text-orange-500"} `}>

                                      <Button variant="adminBtn" className={`px-0 text font-normal flex items-center justify-start `}>
                                        {getIconComponent(btn.icon || "")}
                                        <p className="ml-1">{btn.name}</p>

                                      </Button>

                                    </AccordionTrigger>
                                    {
                                      btn.options?.map((option) => {
                                        (option.path === pathname)?changeCurrentRoute(option.name):"";
                                        return (
                                          <AccordionContent key={option.id}>
                                            <DrawerClose className='w-full'>
                                              <Button variant="adminBtn" className=
                                                {`px-0 text font-normal flex items-center justify-start
                                   hover:bg-orange-100 hover:text-orange-500 
                                    ${(option.path === pathname)
                                                    ? "hover:bg-orange-500 text-white hover:text-white bg-orange-500" : "hover:bg-orange-100 hover:text-orange-500"} `} onClick={() => router.push("/admin" + option.path || "/")}>
                                                {getIconComponent(option.icon || "")}
                                                <p className="ml-1">{option.name}</p>

                                              </Button>
                                            </DrawerClose>
                                          </AccordionContent>
                                        )
                                      })
                                    }

                                  </AccordionItem>
                               

                                :
                                

                                //  if title is buttons  
                                <>
                                  <DrawerClose className='w-full'>
                                    <Button variant="adminBtn" className=
                                      {`px-0 text font-normal flex items-center justify-start
                                   hover:bg-orange-100 hover:text-orange-500 
                                    ${(btn.path === pathname)
                                          ? "hover:bg-orange-500 text-white hover:text-white bg-orange-500" : "hover:bg-orange-100 hover:text-orange-500"} `}
                                      onClick={() => router.push("/admin" + btn.path || "/")}>
                                      {getIconComponent(btn.icon || "")}
                                      <p className="ml-1">{btn.name}</p>

                                    </Button>
                                  </DrawerClose>
                                </>
                              }

                            </div>
                          )
                        })
                      }
                    </>

                  }
                </div>
              )
            })
          }
          {
            // // AdminMenuData && AdminMenuData.map((item, index) => {
            //   return (
            //     <div key={index}>
            //       <h4 className={`uppercase font-bold flex justify-start text-xs ${index === 0 ? '' : 'mt-6'}`}>{item.name}</h4>
            //       {
            //         <>

            //           {
            //             //  if title is option  

            //             item?.routes?.map((btn) => {
            //               ((btn.path === pathname)&&(btn.title === "button"))?changeCurrentRoute(btn.name):"Dashboard"
            //               return (
            //                 <div key={btn.id} >
            //                   {(btn.title === "option") ?
                               
            //                       <AccordionItem value={btn.id} className='[&>*:not(:nth-child(1))]:ml-4 [&>*:not(:nth-child(1))]:my-1'>
            //                         <AccordionTrigger className={` ${btn.options?.some((option) => option.path === pathname) ? "hover:bg-orange-500 text-white hover:text-white bg-orange-500 [&[data-state=open]]:bg-white [&[data-state=open]]:text-black " : "hover:bg-orange-100 hover:text-orange-500"} `}>

            //                           <Button variant="adminBtn" className={`px-0 text font-normal flex items-center justify-start `}>
            //                             {getIconComponent(btn.icon || "")}
            //                             <p className="ml-1">{btn.name}</p>

            //                           </Button>

            //                         </AccordionTrigger>
            //                         {
            //                           btn.options?.map((option) => {
            //                             (option.path === pathname)?changeCurrentRoute(option.name):"";
            //                             return (
            //                               <AccordionContent key={option.id}>
            //                                 <DrawerClose className='w-full'>
            //                                   <Button variant="adminBtn" className=
            //                                     {`px-0 text font-normal flex items-center justify-start
            //                        hover:bg-orange-100 hover:text-orange-500 
            //                         ${(option.path === pathname)
            //                                         ? "hover:bg-orange-500 text-white hover:text-white bg-orange-500" : "hover:bg-orange-100 hover:text-orange-500"} `} onClick={() => router.push("/admin" + option.path || "/")}>
            //                                     {getIconComponent(option.icon || "")}
            //                                     <p className="ml-1">{option.name}</p>

            //                                   </Button>
            //                                 </DrawerClose>
            //                               </AccordionContent>
            //                             )
            //                           })
            //                         }

            //                       </AccordionItem>
                               

            //                     :
                                

            //                     //  if title is buttons  
            //                     <>
            //                       <DrawerClose className='w-full'>
            //                         <Button variant="adminBtn" className=
            //                           {`px-0 text font-normal flex items-center justify-start
            //                        hover:bg-orange-100 hover:text-orange-500 
            //                         ${(btn.path === pathname)
            //                               ? "hover:bg-orange-500 text-white hover:text-white bg-orange-500" : "hover:bg-orange-100 hover:text-orange-500"} `}
            //                           onClick={() => router.push("/admin" + btn.path || "/")}>
            //                           {getIconComponent(btn.icon || "")}
            //                           <p className="ml-1">{btn.name}</p>

            //                         </Button>
            //                       </DrawerClose>
            //                     </>
            //                   }

            //                 </div>
            //               )
            //             })
            //           }
            //         </>

            //       }
            //     </div>
            //   )
            // })
          }
        </Accordion>
      </div>
    </>
  )


};

export default AdminMenu;
