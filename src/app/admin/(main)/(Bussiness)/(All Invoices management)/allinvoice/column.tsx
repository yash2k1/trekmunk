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
import { MailIcon, NotepadText } from "lucide-react"


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type allInvoiceType = {
  invoiceNumber:string
  customerName: string
  phoneNumber: number
  email: string
  amount:number
  invoiceDate: string
  action: string
}

export const column: ColumnDef<allInvoiceType>[] = [
  // invoice Number
  {
    accessorKey: "invoiceNumber",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Invoice Number
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("invoiceNumber")}</div>,
  },

  // customer Name
  {
    accessorKey: "customerName",
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
    cell: ({ row }) => <div className="capitalize">{row.getValue("customerName")}</div>,
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
  // phone Number
  {
    accessorKey: "phoneNumber",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Phone Number
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("phoneNumber")}</div>,
  },

  // amount
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },

  },
  // invoiceDate
  {
    accessorKey: "invoiceDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date Of Application
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("invoiceDate")}</div>,
  },
  // action
  {
    accessorKey: "action",
    header: "action",
    // cell:({row})=><div className="text-orange-500">{row.getValue("action")}</div>
    cell: ({ row }) => {
   
      return (
        <AlertDialog>
          <AlertDialogTrigger><TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="text-orange-500 hover:text-orange-600 cursor-pointer"> <MailIcon/> </TooltipTrigger>
              <TooltipContent className="bg-black text-white">
                Candidate Details
              </TooltipContent>
            </Tooltip>
          </TooltipProvider></AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="flex items-center"><NotepadText /> <p className="ml-2 font-bold text-2xl">Detail</p> </AlertDialogTitle>
              <AlertDialogDescription className="font-normal">
                {/* <div className="flex"><p className="font-bold mr-1">Name	:</p>{row.getValue("name")}</div>
                <div className="flex"><p className="font-bold mr-1">Phone No	:</p>{row.getValue("phoneNumber")}</div>
                <div className="flex"><p className="font-bold mr-1">Email	:</p>{row.getValue("email")}</div>
                <div className="flex"><p className="font-bold mr-1">Position	:</p>{row.getValue("postion")}</div>
                <div className="flex"><p className="font-bold mr-1">Introduction	:</p> A former National and International athlete in skeet shooting. Specialise in Sports psychology and worked with athletes from Sports Authority of India, Indian Army, NCC Cadets and Punjab police as a mental training coach for seven years. Also, served as researcher and professor of psychology to developed education curriculum in sports , psychology, positive psychology for various universities (Please see resume for details). I hold certification in First aid, WAFA.</div>
                <div className="flex"><p className="font-bold mr-1">Date Of Application	:</p>{row.getValue("invoiceDate")}</div>
                <div className="flex"><p className="font-bold mr-1">Resume	:</p> <div className="text-blue-500 hover:text-blue-700 cursor-pointer">CV_DR SHIVJOT GILL_2023_1710003909175.pdf</div> </div> */}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="border-2 border-zinc-500 hover:bg-zinc-200">Cancel</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>


      )
    }


  },
]

