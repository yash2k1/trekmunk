"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Mail, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CaretSortIcon } from "@radix-ui/react-icons"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type UpCommingAdveture = {
  id: number
  trekName: string
  startDate: string
  totalSeats: number
  bookedSeats: number
  booking: string
  Actions: string
}

export const column: ColumnDef<UpCommingAdveture>[] = [
  {
    accessorKey: "id",
    header: "S.no",
  },
  {
    accessorKey: "trekName",
    // header: "Trek Name",
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
  {
    accessorKey: "startDate",
    header: "Start Date",
  },
  {
    accessorKey: "totalSeats",
    header: "Total Seats",
  },
  {
    accessorKey: "bookedSeats",
    header: "Booked Seats",
  },
  {
    accessorKey: "booking",
    header: "Booking",
  },
  {
    accessorKey: "Action",
    header: "Action",
    cell:()=><Mail className="text-orange-500"/>
  },
  // {
  //   accessorKey: "amount",
  //   header: () => <div className="text-right">Amount</div>,
  //   cell: ({ row }) => {
  //     const amount = parseFloat(row.getValue("amount"))
  //     const formatted = new Intl.NumberFormat("en-US", {
  //       style: "currency",
  //       currency: "ind",
  //     }).format(amount)

  //     return <div className="text-right font-medium">{formatted}</div>
  //   },
  // },
  // {
  //   accessorKey: "actions",
  //   header: () => <div className="text-right">Actions</div>,
  //   cell: ({ row }) => {
  //     const payment = row.original

  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant="ghost" className="h-8 w-8 p-0">
  //             <span className="sr-only">Open menu</span>
  //             <MoreHorizontal className="h-4 w-4" />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent align="end">
  //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //           <DropdownMenuItem
  //             onClick={() => navigator.clipboard.writeText(payment.id)}
  //           >
  //             Copy payment ID
  //           </DropdownMenuItem>
  //           <DropdownMenuSeparator />
  //           <DropdownMenuItem>View customer</DropdownMenuItem>
  //           <DropdownMenuItem>View payment details</DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     )
  //   },
  // },
]

