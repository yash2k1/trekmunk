"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Mail, UploadIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

import { CaretSortIcon } from "@radix-ui/react-icons"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type postAdventure = {

  trekName: string
  stateDate: string
  dateOfCompliance: string
  members:number
  actions: string
}

export const column: ColumnDef<postAdventure>[] = [
 // trekName
 {
  accessorKey: "trekName",
  header: ({ column }) => {
    return (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Trek Name
        <CaretSortIcon className="ml-2 h-4 w-4" />
      </Button>
    )
  },
  cell: ({ row }) => <div className="capitalize">{row.getValue("trekName")}</div>,
},
// stateDate
{
  accessorKey: "stateDate",
  header: ({ column }) => {
    return (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        State Date
        <CaretSortIcon className="ml-2 h-4 w-4" />
      </Button>
    )
  },
  cell: ({ row }) => <div className="capitalize">{row.getValue("stateDate")}</div>,
},
// dateOfCompliance
{
  accessorKey: "dateOfCompliance",
  header: ({ column }) => {
    return (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Date Of Compliance
        <CaretSortIcon className="ml-2 h-4 w-4" />
      </Button>
    )
  },
  cell: ({ row }) => <div className="capitalize">{row.getValue("dateOfCompliance")}</div>,
},

// memebers
{
  accessorKey: "members",
  header: "Members",
  cell:({row})=><div className="text-orange-500">{row.getValue("members")}</div>

},
// actions
{
  accessorKey: "Action",
  header: "Action",
  cell:()=><UploadIcon className="text-orange-500"/>

},
]

