'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import AdminMenuData ,{MenuItem} from '@/constants/AdminMenuData';
import { usePathname } from 'next/navigation';

const CurrentRoute = () => {
    const router = useRouter();
    const pathname = "/"+ (usePathname().split('/')[2] || "");
    type getNameType = (menuItems: MenuItem[], path: string) => string | null;

    const getNameFromPath: getNameType = (menuItems, path) => {
        const stack = [...menuItems];
        
        while (stack.length > 0) {
            const currentItem = stack.pop();
            
            if (currentItem?.path && currentItem.path === path) {
                return currentItem.name;
            }
            
            if (currentItem?.routes) {
                stack.push(...currentItem.routes);
            }
            
            if (currentItem?.options) {
                stack.push(...currentItem.options);
            }
        }
        
        return null;
    }
    
    // Example usage:
    const currentPath = getNameFromPath(AdminMenuData, pathname);
    
  return (
    <div className="flex justify-between mb-2 p-4">
    <h1 className="text-[24px]">{(pathname==="Dashboard")?"":currentPath}</h1>
   <div className="flex items-center"> 
        <button className="text-orange-400 hover:text-orange-500 text-[14px] mr-2" onClick={() => router.push("/admin")}>Home</button>/
        <p className="text-slate-400  text-[14px] ml-2">{currentPath}</p>
    </div>
    </div>
  )
}

export default CurrentRoute
