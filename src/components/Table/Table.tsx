import { useEffect, useMemo, useState } from 'react';
import { flexRender, getCoreRowModel, getFilteredRowModel, useReactTable } from '@tanstack/react-table';
import { DebouncedInput } from './Input';


const Table = ({data, columns}:any) => {
  const [tableData, setTableData] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');

  useEffect(() => {
    setTableData(data)
  }, [data])

  const tableColumns = useMemo(() => columns, [columns]);

  const table = useReactTable({
    data: tableData,
    columns: tableColumns,
    state: {
        globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

 
  return (
    <div className='h-[calc(100vh-112px)] w-full flex flex-col items-center'>
    <div className="mb-4 w-full flex justify-center">
      <DebouncedInput
        value={globalFilter ?? ''}
        onChange={value => setGlobalFilter(String(value))}
        className="rounded-full p-2 px-4 h-12 bg-gray-800 outline-none w-[100%] sm:w-[75%] lg:w-[600px]"
        placeholder="Pesquisar..."
      />
    </div>

    <div className="w-full max-w-4xl overflow-x-auto">
      <table className="table-auto w-full border-collapse ">
        <thead className="bg-gray-100">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className="z-10  p-2 sticky top-0 bg-gray-800">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="border border-gray-800 p-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default Table;
