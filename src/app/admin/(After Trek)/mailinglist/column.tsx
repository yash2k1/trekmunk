"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Mail, UploadIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

import { CaretSortIcon } from "@radix-ui/react-icons"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type mailingList = {
  name: string
  email:string
  date: string
}

export const column: ColumnDef<mailingList>[] = [
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
// Date
{
  accessorKey: "date",
  header: ({ column }) => {
    return (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Date
        <CaretSortIcon className="ml-2 h-4 w-4" />
      </Button>
    )
  },
  cell: ({ row }) => <div className="capitalize">{row.getValue("date")}</div>,
}
]

