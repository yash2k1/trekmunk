import React from 'react'
import { column, allInvoiceType } from "./column"
import { DataTable } from "@/components/shared/admin/Table resources/data-table"
import { Plus } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

async function getData(): Promise<allInvoiceType[]> {
  // Fetch data from your API here.
  const generateRandomString: () => string = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const length = 10;
    return Array.from({ length }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
  };

  const generateRandomEntries: (count: number) => allInvoiceType[] = (count: number) => {
    const entries: allInvoiceType[] = [];

    for (let i = 1; i <= count; i++) {
      entries.push({

        customerName: generateRandomString(),
        phoneNumber: i * i * i * i * i * i,
        email: generateRandomString(),
        amount: i * i * i * i * i,
        invoiceNumber: i + i + "dsccd" + i,
        invoiceDate: generateRandomString(),
        action: generateRandomString(),
      });
    }

    return entries;
  };
  return generateRandomEntries(40)
}

export default async function allInvoices() {
  const data = await getData()

  return (
    <div className=" bg-white rounded-md ">
      <div className="flex justify-between py-4 px-3 border-b-slate-200 border-b-[1px]">
        <p className='font-bold text-xl' >All Invoices</p>

        {/* rigth side of table heading */}
        <div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger><Plus className='cursor-pointer' /></TooltipTrigger>
              <TooltipContent className='bg-black text-white'>
                <p>Add Invoices</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <DataTable columns={column} data={data} />
    </div>
  )
}
