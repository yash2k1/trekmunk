"use client"
import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { CaretSortIcon } from "@radix-ui/react-icons"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { MailIcon, NotepadText, Pen, Trash } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type productType = {
  title: string
  displayName: string
  categoryName: string
  event: "On Request"|"Fixed Departure"|"-"
  action: string
  flag: boolean

}

export const column: ColumnDef<productType>[] = [

  // title 
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="capitalize text-orange-500 hover:text-orange-600 cursor-pointer">{row.getValue("title")}</div>,
  },

  // display Name
  {
    accessorKey: "displayName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Display Name
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("displayName")}</div>,
  },

  // category Name
  {
    accessorKey: "categoryName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Customer Name
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("categoryName")}</div>,
  },

    // event
    {
      accessorKey: "event",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Event
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => <div className="capitalize">{row.getValue("event")}</div>,
    },

  // action
  {
    accessorKey: "action",
    header: "action",
    // cell:({row})=><div className="text-orange-500">{row.getValue("action")}</div>
    cell: ({ row }) => {
   
      return (
       <div className="items-center justify-center flex gap-x-2">
      {/* edit product btn */}
         <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="text-orange-500 hover:text-orange-600 cursor-pointer"> <Pen /> </TooltipTrigger>
              <TooltipContent className="bg-black text-white">
                Edit product
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
      {/* delete product btn */}
         <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="text-orange-500 hover:text-orange-600 cursor-pointer"> <Trash/> </TooltipTrigger>
              <TooltipContent className="bg-black text-white">
                Delete product
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
      
       </div>


      )
    }


  },

  // flag
  {
    id: "flag",
    header: ({ table }) => (
      <div className="flex flex-nowrap">    
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
      <p className="ml-2 ">flag</p>

      </div>
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
]

