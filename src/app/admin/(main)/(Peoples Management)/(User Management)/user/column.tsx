"use client"
import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { AccessibilityIcon, CaretSortIcon } from "@radix-ui/react-icons"
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
import {  Minus, Pen } from "lucide-react"
import { Switch } from "@/components/ui/switch"


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type userType = {
  srNo: number
  name: string
  email:string
  phoneNo: number
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
  // Name
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="px-0"
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
    cell: ({ row }) => <div className="flex items-center space-x-2">
    {
      row.getValue('phoneNo')===92?
  <Minus className="ml-3"/>
  :
    
    <Switch   defaultChecked={row.getValue('status')}
        onCheckedChange={(value) => row.toggleSelected(!!value)} />
      }
      </div>
  },

 // actions
{
  accessorKey: "Action",
  header: "Action",
  cell:({row})=> <div className="flex gap-2 "> 
  {
    row.getValue('phoneNo')===92?
    
  // {/* accessibility */}
  <TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild >
    <AccessibilityIcon className="text-orange-500 cursor-pointer h-6 w-6 ml-4"/>
    </TooltipTrigger>
    <TooltipContent className="bg-black text-white">
      <p>Access</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
:
<>
 {/* pen */}
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
        <Pen className="text-orange-500 cursor-pointer"/> 
        </TooltipTrigger>
        <TooltipContent className="bg-black text-white">
          <p>Edit</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    
  {/* accessibility */}
  <TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
    <AccessibilityIcon className="text-orange-500 cursor-pointer h-6 w-6 "/>
    </TooltipTrigger>
    <TooltipContent className="bg-black text-white">
      <p>Access</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
</>
 

  }


  {/* accessibility
  <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
        <AccessibilityIcon className="text-orange-500 cursor-pointer h-6 w-6 "/>
        </TooltipTrigger>
        <TooltipContent className="bg-black text-white">
          <p>Access</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider> */}

   </div>

},
]

