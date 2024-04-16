"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const NotFoundPage: React.FC = () => {
    const router =useRouter();
  return (
    <div className="flex flex-col items-center justify-center bg-white h-[100svh] p-4">
      <div className="text-orange-500 text-center">
        <img src={'/404.jpg'} alt='404' className='h-[30svh] aspect-auto w-full'/>
        <h1 className="text-4xl sm:text-9xl font-bold mb-4">404</h1>
        <h2 className="text-xl sm:text-4xl font-semibold mb-8">Looks Like You Took a Wrong Turn</h2>
        <p className="text-lg  sm:text-xl mb-12">
          The destination you're seeking seems to have wandered off the beaten path.
        </p>

          <p className="text-lg" onClick={()=>router.push("/admin")}>
            Let's go on a journey and find your way back  <span className='underline text-blue-400 hover:text-blue-600 cursor-pointer'>home</span> . 
          </p>
        
      </div>
    </div>
  );
};

export default NotFoundPage;