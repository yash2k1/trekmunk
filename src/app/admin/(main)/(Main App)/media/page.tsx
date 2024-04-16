import React from 'react'
import { column, productType } from "./column"
import { DataTable } from "@/components/shared/admin/Table resources/data-table"
import MediaHeader from '@/components/shared/admin/MediaHeader';
import ImageGallery from '@/components/shared/admin/ImageGallery';
import { redirect } from 'next/navigation'

async function getData(): Promise<productType[]> {
  // Fetch data from your API here.
  const generateRandomString: () => string = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const length = 10;
    return Array.from({ length }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
  };

  const generateRandomEntries: (count: number) => productType[] = (count: number) => {
    const entries: productType[] = [];
    for (let i = 1; i <= count; i++) {
      entries.push({
        image:"https://www.trekmunk.com/uploads/systemuploads/WhatsAppImage2022-04-02at21.31.01_1648916195638.jpg",
        title: generateRandomString(),
        alternativeText: generateRandomString(),
        caption: generateRandomString(),
        action: generateRandomString(),  
      });
    }
    return entries;
  };
  return generateRandomEntries(40)
}

export default async function media({searchParams}:any) {
  const data = await getData()
  const tempImg=["https://www.trekmunk.com/uploads/systemuploads/WhatsAppImage2022-04-02at21.31.01_1648916195638.jpg","https://www.trekmunk.com/uploads/systemuploads/20220329_120106_1648914189223.jpg","https://www.trekmunk.com/uploads/systemuploads/WhatsAppImage2022-04-02at21.31.01_1648916195638.jpg","https://www.trekmunk.com/uploads/systemuploads/20220329_120106_1648914189223.jpg","https://www.trekmunk.com/uploads/systemuploads/WhatsAppImage2022-04-02at21.31.01_1648916195638.jpg","https://www.trekmunk.com/uploads/systemuploads/20220329_120106_1648914189223.jpg","https://www.trekmunk.com/uploads/systemuploads/WhatsAppImage2022-04-02at21.31.01_1648916195638.jpg","https://www.trekmunk.com/uploads/systemuploads/20220329_120106_1648914189223.jpg","https://www.trekmunk.com/uploads/systemuploads/WhatsAppImage2022-04-02at21.31.01_1648916195638.jpg","https://www.trekmunk.com/uploads/systemuploads/20220329_120106_1648914189223.jpg","https://www.trekmunk.com/uploads/systemuploads/WhatsAppImage2022-04-02at21.31.01_1648916195638.jpg","https://www.trekmunk.com/uploads/systemuploads/20220329_120106_1648914189223.jpg","https://www.trekmunk.com/uploads/systemuploads/WhatsAppImage2022-04-02at21.31.01_1648916195638.jpg","https://www.trekmunk.com/uploads/systemuploads/20220329_120106_1648914189223.jpg","https://www.trekmunk.com/uploads/systemuploads/WhatsAppImage2022-04-02at21.31.01_1648916195638.jpg","https://www.trekmunk.com/uploads/systemuploads/20220329_120106_1648914189223.jpg","https://www.trekmunk.com/uploads/systemuploads/WhatsAppImage2022-04-02at21.31.01_1648916195638.jpg","https://www.trekmunk.com/uploads/systemuploads/20220329_120106_1648914189223.jpg","https://www.trekmunk.com/uploads/systemuploads/WhatsAppImage2022-04-02at21.31.01_1648916195638.jpg","https://www.trekmunk.com/uploads/systemuploads/20220329_120106_1648914189223.jpg"]
  return (
    <div className=" bg-white rounded-md ">
     <MediaHeader/>
      {
        // showing card view when query is being enter
        (searchParams?.event==="card") ?
        <ImageGallery images={tempImg}/>:
        // showing table view by default or when query is being added
        (!searchParams?.event||searchParams?.event==="table") ? 
        <DataTable columns={column} data={data} />:
        // error page
        redirect(`/not-found`) // Navigate to the new error page

      }
     
    </div>
  )
}
