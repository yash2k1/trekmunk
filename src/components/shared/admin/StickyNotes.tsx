'use client'
import { Plus, X } from 'lucide-react'
import React, { useState } from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Textarea } from '@/components/ui/textarea'


interface dataType {
  id: number
  text: string
}
export default function stickyNote() {
  const [data, setData] = useState<dataType[]>([
    {
      id: 1,
      text: "this is a sticky note"
    },
    {
      id: 2,
      text: "this is a sticky note"
    }
  ])

  const options = ['bg-yellow-400', 'bg-green-500', 'bg-blue-300', 'bg-red-300', 'bg-orange-300', 'bg-pink-300', 'bg-purple-300', 'bg-indigo-300'];

  const changeData = (removeId: number) => {
    setData(data.filter((item: dataType) => item.id != removeId));
  }
  const addNotes = () => {
    const newID = Math.max(...data.map(item => item.id), 0) + 1;
    const newData = [{ id: newID, text: "" }, ...data];
    setData(newData);
  };
  return (
    <div className=" bg-white rounded-md ">
      <div className="flex justify-between py-4 px-3 border-b-slate-200 border-b-[1px]">
        <p className='font-bold text-xl' >All Sticky Note</p>
        {/* add notes */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger><Plus onClick={addNotes} /></TooltipTrigger>
            <TooltipContent className='bg-orange-500 text-white'>
              <p >Add Sticky Note</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

      </div>
      {(data?.length === 0) ? <div className='font-bold w-full flex justify-center'>No Notes</div> :
        <div className='grid grid-cols-1 lg:grid-cols-2'>

          {data.map((item, index) => {

            return (
              <div key={item.id} className={`m-3 `}>
                <div key={item.id} className={`w-full h-8 pb-2 flex justify-end ${options[item.id % 8]} rounded-md rounded-b-none`}>
                 {/* confirm delete note popup  */}
                  <AlertDialog>
                    <AlertDialogTrigger asChild className='justify-self-end m-1 hover:cursor-pointer' >
                      <X />
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete your
                          note and remove that data from our servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="mt-0 border-0 hover:border-0 bg-black text-white outline-none hover:outline-none hover:bg-gray-600 hover:text-white">Cancel</AlertDialogCancel>
                        <AlertDialogAction className="bg-red-500 text-zinc-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-zinc-50 dark:hover:bg-red-900/90" onClick={() => changeData(item.id)}>
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
                {/* text area */}
                <Textarea
                  placeholder="Type your message here."
                  value={item.text}
                  onChange={(e) => {
                    const updatedData = data.map((d) =>
                      d.id === item.id ? { ...d, text: e.target.value } : d
                    );
                    setData(updatedData);
                  }}
                  className={`min-h-56 ${options[item.id % 8]} text-black rounded-md  rounded-t-none placeholder:text-black focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-zinc-950 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50`}
                />

              </div>
            )
          }
          )}
        </div>
      }

    </div>

  )
}
