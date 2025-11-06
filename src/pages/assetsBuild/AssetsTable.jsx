import React, { useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import AssetsDataSheet from './AssetsDataSheet.json';
import './assetsTable.css';

const AssetsTable = () => {
  const data = useMemo(() => AssetsDataSheet, []);

  const columns = useMemo(() => [
    {
      accessorKey: 'id',
      header: 'Id',
    },
    {
      accessorKey: 'detail1',
      header: 'Current Assets',
    },
    {
      accessorKey: 'value1',
      header: 'Yr 2021',
    },
    {
      accessorKey: 'value2',
      header: 'Yr 2020',
    },
  ], []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="table w-65 overflow-y-scroll xl:w-88">
      <div className="container">
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup, i) => (
              <tr key={headerGroup.id ?? `header-group-${i}`}>
                {headerGroup.headers.map((header, j) => (
                  <th key={header.id ?? `column-${j}`}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row, i) => (
              <tr key={row.id ?? `row-${i}`}>
                {row.getVisibleCells().map((cell, j) => (
                  <td key={cell.id ?? `cell-${i}-${j}`}>
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

export default AssetsTable;