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
import { NotepadText } from "lucide-react"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type jobType = {
  name: string
  phoneNumber: number
  email:string
  dateOfApplication: string
  action: string
}

export const column: ColumnDef<jobType>[] = [
 // name
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
// phoneNumber
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

// dateOfApplication
{
  accessorKey: "dateOfApplication",
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
  cell: ({ row }) => <div className="capitalize">{row.getValue("dateOfApplication")}</div>,
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
            <TooltipTrigger className="text-orange-500 cursor-pointer">Detail</TooltipTrigger>
            <TooltipContent className="bg-black text-white">
              Candidate Details
            </TooltipContent>
          </Tooltip>
        </TooltipProvider></AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center"><NotepadText /> <p className="ml-2 font-bold text-2xl">Detail</p> </AlertDialogTitle>
            <AlertDialogDescription className="font-normal">
              <div className="flex my-2"><p className="font-bold mr-1 whitespace-nowrap">Name	:</p>{row.getValue("name")}</div>
              <div className="flex my-2"><p className="font-bold mr-1 whitespace-nowrap">Phone No	:</p>{row.getValue("phoneNumber")}</div>
              <div className="flex my-2"><p className="font-bold mr-1 whitespace-nowrap">Email	:</p>{row.getValue("email")}</div>
              <div className="flex my-2"><p className="font-bold mr-1 whitespace-nowrap">Introduction	:</p> A former National and International athlete in skeet shooting. Specialise in Sports psychology and worked with athletes from Sports Authority of India, Indian Army, NCC Cadets and Punjab police as a mental training coach for seven years. Also, served as researcher and professor of psychology to developed education curriculum in sports , psychology, positive psychology for various universities (Please see resume for details). I hold certification in First aid, WAFA.</div>
              <div className="flex my-2"><p className="font-bold mr-1 whitespace-nowrap">Date Of Application	:</p>{row.getValue("dateOfApplication")}</div>
              <div className="flex my-2"><p className="font-bold mr-1 whitespace-nowrap">Resume	:</p> <div className="text-blue-500 hover:text-blue-700 cursor-pointer">CV_DR SHIVJOT GILL_2023_1710003909175.pdf</div> </div>
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

