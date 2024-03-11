import React from 'react'
import { column,ReviewManagement } from "./column"
import { DataTable } from "@/components/shared/admin/Table resources/data-table"
import { Button } from '@/components/ui/button';
import { downloadToExcel } from '@/lib/xlsx';

export async function getData(): Promise<ReviewManagement[]> {
  // Fetch data from your API here.
  const generateRandomString = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const length = 10;
    return Array.from({ length }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
  };
  
  const generateRandomEntries = (count:number) => {
    const entries = [];
  
    for (let i = 1; i <= count; i++) {
      entries.push({
        name: generateRandomString(),
        email: generateRandomString(),
        phoneNo: i*i*i*i*i ,
        action:generateRandomString(),
      });
    }
  
    return entries;
  };
return generateRandomEntries(40)
}

export default async function ReviewManagement() {
  const data = await getData()

  return (
    <div className=" bg-white rounded-md ">
      <div className="flex justify-between py-4 px-3 border-b-slate-200 border-b-[1px]">
        <p className='font-bold text-xl' >Mailing List</p>
    
        </div>
      <DataTable columns={column} data={data} /> 
    </div>
  )
}
