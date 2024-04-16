"use client"
import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { CaretSortIcon } from "@radix-ui/react-icons"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import { Pen } from "lucide-react"


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type productType = {
  image: string
  title: string
  alternativeText: string
  caption: string
  action: string
}

export const column: ColumnDef<productType>[] = [

  // image
  {
    accessorKey: "image",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Image
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <img loading='lazy' src={row.getValue("image")} alt="not found" className="cursor-pointer w-24 max-h-28"/>,
  },

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
    cell: ({ row }) => <div className="capitalize">{row.getValue("title")}</div>,
  },

  // alternativeText 
  {
    accessorKey: "alternativeText",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Alternative Text
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="capitalize cursor-pointer">{row.getValue("alternativeText")}</div>,
  },

  // caption 
  {
    accessorKey: "caption",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          caption
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="capitalize cursor-pointer">{row.getValue("caption")}</div>,
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
                Edit Image
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
         

        </div>


      )
    }


  },

]

