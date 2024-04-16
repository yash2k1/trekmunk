import React from 'react'
import {  userType } from "./column"
import AddUserRole from '@/components/shared/admin/user Management components/AddUserRole';

async function getData(): Promise<userType[]> {
  // Fetch data from your API here.
  const generateRandomString: () => string = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const length = 10;
    return Array.from({ length }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
  };

  const generateRandomEntries: (count: number) => userType[] = (count: number) => {
    const entries: userType[] = [];

    for (let i = 1; i <= count; i++) {
      entries.push({
        srNo: i,
        name: generateRandomString(),
        email: generateRandomString(),
        phoneNo: 91+i*i*i*i*i,
        status: i%2==0,
        action: generateRandomString(),
      });
    }

    return entries;
  };
  return generateRandomEntries(30)
}

export default async function user() {
  const data = await getData()

  return (
    <div className=" bg-white rounded-md ">
    {
      data&& <AddUserRole data={data}/>
    }
  </div>
  
  )
}
