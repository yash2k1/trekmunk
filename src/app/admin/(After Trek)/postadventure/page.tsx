import React from 'react'
import { column,postAdventure } from "./column"
import { DataTable } from "@/components/shared/admin/Table resources/data-table"

async function getData(): Promise<postAdventure[]> {
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
        trekName: generateRandomString(),
        stateDate:"24-03-24",
        dateOfCompliance:"24-03-24",
        members:0,  
        actions: generateRandomString(),
      });
    }
  
    return entries;
  };
return generateRandomEntries(40)
}

export default async function postAdventure() {
  const data = await getData()

  return (
    <div className=" bg-white rounded-md ">
      <div className="flex justify-between py-4 px-3 border-b-slate-200 border-b-[1px]">
        <p className='font-bold text-xl' >Post Adventure</p>
      </div>
      <DataTable columns={column} data={data} /> 
    </div>
  )
}
