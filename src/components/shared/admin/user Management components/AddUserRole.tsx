"use client";
import React, { useState } from "react";
import { Plus, Undo2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DataTable } from "@/components/shared/admin/Table resources/data-table";
import {
  column,
  userType,
} from "@/app/admin/(main)/(Peoples Management)/(User Management)/user/column";
import AddUser from "./AddUser";

type roleType = {
    data: userType[];
  };
const AddUserRole: React.FC<roleType> = ({ data }) => {
  const [isAddRolePage, setIsAddRolePage] = useState<boolean>(false);
  return (
    <div>
            <div className="flex justify-between py-4 px-3 border-b-slate-200 border-b-[1px]">
        <p className='font-bold text-xl' >All User</p>
        
        {/* rigth side of table heading */}
        <div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger onClick={() => setIsAddRolePage(!isAddRolePage)}>
                {isAddRolePage?
                <Undo2 className="cursor-pointer text-zinc-400 hover:text-zinc-600" />
                :
                <Plus className="cursor-pointer text-zinc-400 hover:text-zinc-600" />
                }
              </TooltipTrigger>
              <TooltipContent className="bg-black text-white">
              {isAddRolePage?
                <p>Back To List</p>
                :
                <p>Add Page Category</p>
              }
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

      </div>
        {isAddRolePage?
      <div>
        <div className="h-full">
            <AddUser/>
         
        </div>
      </div>
      :
      <DataTable columns={column} data={data} />}
    </div>
  )
}

export default AddUserRole
