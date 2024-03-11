"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Mail, Pen, Trash, UploadIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

import { CaretSortIcon } from "@radix-ui/react-icons"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ReviewManagement = {
  name: string
  email:string
  phoneNo: number 
  action:string
}

export const column: ColumnDef<ReviewManagement>[] = [
 // Name
 {
  accessorKey: "name",
  header: ({ column }) => {
    return (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Name
        <CaretSortIcon className="ml-2 h-4 w-4" />
      </Button>
    )
  },
  cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
},
 // email
 {
  accessorKey: "email",
  header: ({ column }) => {
    return (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Email
        <CaretSortIcon className="ml-2 h-4 w-4" />
      </Button>
    )
  },
  cell: ({ row }) => <div className="capitalize">{row.getValue("email")}</div>,
},
// phoneNo
{
  accessorKey: "phoneNo",
  header: ({ column }) => {
    return (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Phone No
        <CaretSortIcon className="ml-2 h-4 w-4" />
      </Button>
    )
  },
  cell: ({ row }) => <div className="capitalize">{row.getValue("phoneNo")}</div>,
},
// actions
{
    accessorKey: "Action",
    header: "Action",
    cell:()=> <div className="flex gap-2"> <Pen className="text-orange-500"/> <Trash className="text-orange-500"/> </div>
  
  },
]

