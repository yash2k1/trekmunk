"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
  ColumnFiltersState,
  getSortedRowModel,
  SortingState,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import React, { useState } from "react"
import { ChevronDownIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { downloadToExcel } from "@/lib/xlsx"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [pagination, setPagination] = useState({
    pageIndex: 0, //initial page index
    pageSize: 10, //default page size
    // rowCount: dataQuery.data?.rowCount,
  });
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [filters, setFilters] = useState("")
  // const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
  //   []
  // )
  
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    // pagination
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination, //update the pagination state when internal APIs mutate the pagination state
    // search
    getFilteredRowModel: getFilteredRowModel(),
    // onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange:setFilters,
    // sorting
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      //...
      pagination,
      globalFilter:filters,
      sorting,
    },
  });

  return (
    
    <div className=" overflow-x-auto scrollbar-hidden px-3">
   
      {/* search feature */}
         <div className="flex justify-between py-4 gap-2 border-b-slate-200 border-b-[1px]">
          {/* show and hide of columns  */}
         <DropdownMenu>
          <DropdownMenuTrigger asChild className=" focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-0 ">
            <Button variant="outline" className="ml-auto  focus-visible:ring-orange-400 ">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
        {/*table search */}
      <Input
          placeholder="search"
          value={filters}
          // value={(table.getColumn(searchColumn)?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            setFilters(event.target.value)
            // table.getColumn(searchColumn)?.setFilterValue(event.target.value)
          }
          className="w-1/4 min-w-[200px] focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-0 "
        />
      </div>
      {/* table */}
      <div className="rounded-md border-bottom">
        <Table >
          <TableHeader  className="font-bold">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="font-bold" >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="font-bold" >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center ">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* footer */}
      <div className="flex justify-between items-center text-sm sm:text-md flex-col sm:flex-row">

        <div >Showing {(table.getRowCount())?pagination.pageSize * pagination.pageIndex + 1:0} to {Math.min(pagination.pageSize * pagination.pageIndex + pagination.pageSize,table.getRowCount())} of {table.getRowCount()} entries </div>

        {/* pagination */}
        <div className="flex items-center justify-end space-x-2 py-4 gap-2">
          Page
          <Button
            variant="outline"
             className="p-0 h-6 rounded-md px-1"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft/>
          </Button>
          {pagination.pageIndex+1}
          <Button
            variant="outline"
            className="p-0 h-6 rounded-md px-1"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRight/>
          </Button>
          of {table.getPageCount()}
        </div>
      </div>

    </div>
  )
}
