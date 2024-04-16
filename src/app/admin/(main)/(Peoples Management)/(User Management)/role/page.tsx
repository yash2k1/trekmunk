import React from "react";
import { userType } from "./column";
import Roles from "@/components/shared/admin/user Management components/Roles";

async function getData(): Promise<userType[]> {
  // Fetch data from your API here.
  const generateRandomString: () => string = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const length = 10;
    return Array.from(
      { length },
      () => characters[Math.floor(Math.random() * characters.length)]
    ).join("");
  };

  const generateRandomEntries: (count: number) => userType[] = (
    count: number
  ) => {
    const entries: userType[] = [];

    for (let i = 1; i <= count; i++) {
      entries.push({
        srNo: i,
        roleName: generateRandomString(),
        status: i % 2 == 0,
        action: generateRandomString(),
      });
    }
    return entries;
  };
  return generateRandomEntries(40);
}

export default async function user() {
  const data = await getData();

  return (
    <div className=" bg-white rounded-md ">
      {
        data&& <Roles data={data}/>
      }
    </div>
  );
}
