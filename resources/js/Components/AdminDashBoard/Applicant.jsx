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
import { SearchIcon, Delete, Pencil } from "../Admin/Icons";

function Applicant({ applicants }) {
  console.log(applicants);

  const columnHelper = createColumnHelper();
  const [data, setData] = useState([...applicants]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [isRowInEdit, setIsRowInEdit] = useState(new Array(data.length).fill(false));

  const columns = [
    columnHelper.accessor("", {
      id: "S.No",
      cell: (info) => <span>{info.row.index + 1}</span>,
      header: "S.No",
    }),
    columnHelper.accessor("avatar", {
      cell: (info) => (
        <img
          src={info?.getValue()}
          alt="..."
          className="rounded-full w-10 h-10 object-cover"
        />
      ),
      header: "Profile",
    }),
    columnHelper.accessor("name", {
      cell: (info) =>
        isRowInEdit[info.row.index] ? (
          <input
            type="text"
            className="text-black"
            value={info.row.original.name}
            onChange={(e) => handleNameChange(info.row.index, e.target.value)}
          />
        ) : (
          <span>{info.getValue()}</span>
        ),
      header: "Name",
    }),
    columnHelper.accessor("email", {
      cell: (info) =>
        isRowInEdit[info.row.index] ? (
          <input
            type="text"
            className="text-black"
            value={info.row.original.email}
            onChange={(e) => handleEmailChange(info.row.index, e.target.value)}
          />
        ) : (
          <span>{info.getValue()}</span>
        ),
      header: "Email",
    }),
    columnHelper.accessor("user_type", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Type",
    }),
    columnHelper.accessor("employer", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Contact",
    }),
    columnHelper.accessor("employer", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Employer",
    }),
    columnHelper.accessor("applications", {
      cell: (info) => (
        <span className="flex gap-2">
          <button onClick={() => toggleEditRow(info.row.index)}>
            <Pencil />
          </button>
          <button onClick={() => handleDeleteRow(info.row.index)}>
            <Delete />
          </button>
          {isRowInEdit[info.row.index] && (
            <button onClick={() => saveChanges(info.row.index)}>Save</button>
          )}
        </span>
      ),
      header: "Actions",
    }),
  ];

  const handleDeleteRow = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const handleNameChange = (index, value) => {
    const newData = [...data];
    newData[index].name = value;
    setData(newData);
  };

  const handleEmailChange = (index, value) => {
    const newData = [...data];
    newData[index].email = value;
    setData(newData);
  };

  const toggleEditRow = (index) => {
    const newIsRowInEdit = [...isRowInEdit];
    newIsRowInEdit[index] = !newIsRowInEdit[index];
    setIsRowInEdit(newIsRowInEdit);
  };

  const saveChanges = (index) => {
    toggleEditRow(index);
  };

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
    <div className="p-10 mx-auto text-white fill-gray-400">
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
      </div>
      <table className="border border-gray-700 w-full text-left">
        <thead className="bg-blue-600">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="capitalize px-3.5 py-2">
                  {flexRender(header.column.columnDef.header, header.getContext())}
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
                className={`${i % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}`}
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
              <td colSpan={12}>No Record Found!</td>
            </tr>
          )}
        </tbody>
      </table>
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
            {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
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
  );
}

export default Applicant;
