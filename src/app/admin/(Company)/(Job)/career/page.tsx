import React from 'react'
import { column,jobType } from "./column"
import { DataTable } from "@/components/shared/admin/Table resources/data-table"

async function getData(): Promise<jobType[]> {
  // Fetch data from your API here.
 const generateRandomString:()=>string = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const length = 10;
  return Array.from({ length }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
};

const generateRandomEntries :(count:number)=>jobType[]= (count: number) => {
  const entries:jobType[] = [];

  for (let i = 1; i <= count; i++) {
    entries.push({
      name: generateRandomString(),
      phoneNumber: i*i*i*i*i*i,
      email: generateRandomString(),
      postion:"Assistant Trek Leader",
      dateOfApplication: generateRandomString(),
      action: generateRandomString(),
    });
  }

  return entries;
};
return generateRandomEntries(40)
}

export default async function jobType() {
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
