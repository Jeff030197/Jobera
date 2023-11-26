import React, { useState } from "react";
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
  } from "@tanstack/react-table";
  import DownloadBtn from "../Admin/DownloadBtn";
  import DebouncedInput from "../Admin/DebouncedInput";
  import { SearchIcon, Delete,Pencil } from "../Admin/Icons";

function Job_Posted({ job_posted}) {
    console.log(job_posted);


    const columnHelper = createColumnHelper();
 
    const columns = [
      columnHelper.accessor("", {
        id: "S.No",
        cell: (info) => <span>{info.row.index + 1}</span>,
        header: "S.No",
      }),
     
  
      columnHelper.accessor("job_name", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: "Name",
      }),
      columnHelper.accessor("vacancy", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: "Vacancy",
      }),
      
      columnHelper.accessor("user_id", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: "Employer",
      }),
      columnHelper.accessor("work_schedule", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: "Work Schedule",
      }),
      columnHelper.accessor("type_of_work", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: "Type Of Work",
      }),
      columnHelper.accessor("salary", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: "Salary",
      }),
      columnHelper.accessor("applications", {
        cell: (info) => <span className="flex gap-2"><Delete /> <Pencil /></span>,
        header: "Actions",
      }),
     
    ];

    const [data] = useState(() => [...job_posted]);
    const [globalFilter, setGlobalFilter] = useState("");
  
    const table = useReactTable({
      data,
      columns,
      state: {
        globalFilter,
      },
      getFilteredRowModel: getFilteredRowModel(),
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
    });
    return (
        <>
        {/* <div className="p-4">
            <table className="w-full border">
                <thead>
                    <tr className="text-left uppercase border">
                       
                        <th className="p-2">
                            <Typography variant="h6" color="blue-gray">
                                Name
                            </Typography>
                        </th>
                        <th className="p-2">
                            <Typography variant="h6" color="blue-gray">
                                Vacancy
                            </Typography>
                        </th>
                        <th>
                            <Typography variant="h6" color="blue-gray">
                                Work-Schedule
                            </Typography>
                        </th>
                        <th>
                            <Typography variant="h6" color="blue-gray">
                                Type Of Work
                            </Typography>
                        </th>
                        <th>{""}</th>
                    </tr>
                </thead>
                <tbody>
                    {job_posted.map((job_posted) => (
                        <tr key={job_posted.id} className="border">
                          
                            <td className="p-2">
                                <Typography variant="small" color="blue-gray">
                                    {job_posted.job_name}
                                </Typography>
                            </td>
                            <td className="p-2">
                                <Typography variant="small">
                                    {job_posted.vacancy}
                                </Typography>
                            </td>
                            <td>
                                <Typography variant="small" color="blue-gray">
                                    {job_posted.work_schedule}
                                </Typography>
                            </td>
                            <td>
                                <Typography variant="small" color="blue-gray">
                                    {job_posted.type_of_work}
                                </Typography>
                            </td>
                            <td className="text-center">
                                <button className="mr-2 text-blue-600 duration-700 hover:scale-110">
                                    <BiEdit size={20} />
                                </button>
                                <button className="text-red-600 duration-700 hover:scale-110">
                                    <FaTrashAlt size={20} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div> */}

<div className="p-10  mx-auto text-white fill-gray-400">
       <div className="flex justify-between mb-2">
         <div className="w-full flex items-center gap-1">
           <SearchIcon />
           <DebouncedInput
             value={globalFilter ?? ""}
             onChange={(value) => setGlobalFilter(String(value))}
             className="p-2 bg-transparent outline-none text-black border-b-2 w-1/5 focus:w-1/3 duration-300 border-indigo-500"
             placeholder="Search all columns..."
           />
         </div>
         {/* <DownloadBtn data={data} fileName={"peoples"} /> */}
       </div>
       <table className="border border-gray-700 w-full text-left">
         <thead className="bg-blue-600">
           {table.getHeaderGroups().map((headerGroup) => (
             <tr key={headerGroup.id}>
               {headerGroup.headers.map((header) => (
                 <th key={header.id} className="capitalize px-3.5 py-2">
                   {flexRender(
                     header.column.columnDef.header,
                     header.getContext()
                   )}
                 </th>
               ))}
             </tr>
           ))}
         </thead>
         <tbody>
           {table.getRowModel().rows.length ? (
             table.getRowModel().rows.map((row, i) => (
               <tr
                 key={row.id}
                 className={`
                 ${i % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}
                 `}
               >
                 {row.getVisibleCells().map((cell) => (
                   <td key={cell.id} className="px-3.5 py-2">
                     {flexRender(cell.column.columnDef.cell, cell.getContext())}
                   </td>
                 ))}
               </tr>
             ))
           ) : (
             <tr className="text-center h-32">
               <td colSpan={12}>No Recoard Found!</td>
             </tr>
           )}
         </tbody>
       </table>
       {/* pagination */}
       <div className="flex items-center justify-end mt-2 gap-2 text-black">
         <button
           onClick={() => {
             table.previousPage();
           }}
           disabled={!table.getCanPreviousPage()}
           className="p-1 border border-gray-300 px-2 disabled:opacity-30"
         >
           {"<"}
         </button>
         <button
           onClick={() => {
             table.nextPage();
           }}
           disabled={!table.getCanNextPage()}
           className="p-1 border border-gray-300 px-2 disabled:opacity-30"
         >
           {">"}
         </button>
 
         <span className="flex items-center gap-1">
           <div>Page</div>
           <strong>
             {table.getState().pagination.pageIndex + 1} of{" "}
             {table.getPageCount()}
           </strong>
         </span>
         <span className="flex items-center gap-1">
           | Go to page:
           <input
             type="number"
             defaultValue={table.getState().pagination.pageIndex + 1}
             onChange={(e) => {
               const page = e.target.value ? Number(e.target.value) - 1 : 0;
               table.setPageIndex(page);
             }}
             className="border p-1 rounded w-16 bg-transparent"
           />
         </span>
         <select
           value={table.getState().pagination.pageSize}
           onChange={(e) => {
             table.setPageSize(Number(e.target.value));
           }}
           className="p-2 bg-transparent"
         >
           {[10, 20, 30, 50].map((pageSize) => (
             <option key={pageSize} value={pageSize}>
               Show {pageSize}
             </option>
           ))}
         </select>
       </div>
     </div>
                    </>
    );
}

export default Job_Posted;
