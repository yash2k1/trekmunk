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
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type userType = {
  srNo: number
  roleName: string
  status: boolean
  action: string
}

export const column: ColumnDef<userType>[] = [

  // srNo
  {
    accessorKey: "srNo",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="px-0"
        >
          Sr.No
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="capitalize ">{row.getValue("srNo")}</div>,
  },
  // role Name
  {
    accessorKey: "roleName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="px-0"
        >
          Display Name
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("roleName")}</div>,
  },
  // status
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="px-0"
        >
          Status
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) =>   <div className="flex items-center space-x-2">
   
    <Switch   defaultChecked={row.getValue('status')}
        onCheckedChange={(value) => row.toggleSelected(!!value)} />
  </div>
    
  },

 // actions
{
  accessorKey: "Action",
  header: "Action",
  cell:()=> <div className="flex gap-2"> <Pen className="text-orange-500"/> <Trash className="text-orange-500"/> </div>

},
]

