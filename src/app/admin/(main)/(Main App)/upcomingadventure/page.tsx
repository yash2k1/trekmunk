import React from 'react'




import { column,UpCommingAdveture } from "./column"
import { DataTable } from "@/components/shared/admin/Table resources/data-table"
import { Input } from '@/components/ui/input';

async function getData(): Promise<UpCommingAdveture[]> {
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
        id: i,
        trekName: generateRandomString(),   // Random value for trekName
        startDate: generateRandomString(), // Random value for startDate
        totalSeats: Math.floor(Math.random() * 100),  // Random value for totalSeats (assuming a maximum of 100)
        bookedSeats: Math.floor(Math.random() * 50),   // Random value for bookedSeats (assuming a maximum of 50)
        booking: 'Booking',
        Actions: generateRandomString(),
      });
    }
  
    return entries;
  };
  
  // const generatedEntries = generateRandomEntries(40);
  
return generateRandomEntries(40)
}

export default async function member() {
  const data = await getData()

  return (
    <div className="container mx-auto pb-4 bg-white rounded-md overflow-hidden">
      <div className="flex justify-between py-4 border-b-slate-200 border-b-[1px]">
        <p className='font-bold text-xl' >Upcoming Adventure</p>
        <p>filter</p>
      </div>
      <DataTable columns={column} data={data} />
    </div>
  )
}
