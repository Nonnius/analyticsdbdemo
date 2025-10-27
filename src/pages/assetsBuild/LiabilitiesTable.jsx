import React from 'react'
import { useMemo } from 'react'
import LiabilitiesDataSheet from './LiabilitiesDataSheet.json'
import {useTable} from 'react-table'
import './liabilitiesTable.css'
/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-props-no-spreading */


const LiabilitiesTable = () => {
     const data = useMemo(() => LiabilitiesDataSheet, []);
      const columns = useMemo(() => [
        { Header: "Id", accessor: "id" },
        { Header: "Current Liabilities", accessor: "detail1" },
        { Header: "Yr 2021", accessor: "value1" },
        { Header: "Yr 2020", accessor: "value2" },
      ], []);
    
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
      } = useTable({ columns, data });



  return (
    <div className="table2">
      <div className="container2">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, i) => {
              const fullGroupProps = headerGroup.getHeaderGroupProps();
              const { key: groupKey, ...groupProps } = fullGroupProps;
              return (
                <tr key={groupKey ?? `header-group-${i}`} {...groupProps}>
                  {headerGroup.headers.map((column, j) => {
                    const fullColProps = column.getHeaderProps();
                    const { key: colKey, ...colProps } = fullColProps;
                    return (
                       <th key={colKey ?? `column-${j}`} {...colProps}>
                        {column.render("Header")}
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>
          <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
            prepareRow(row);
            const props = row.getRowProps();
            const { key, ...rest } = props;

            return (
              <tr key={key ?? `row-${i}`} {...rest}>
                {row.cells.map((cell, j) => {
                  const cellProps = cell.getCellProps();
                  const { key: cellKey, ...cellRest } = cellProps;

                  return (
                    <td key={cellKey ?? `cell-${i}-${j}`} {...cellRest}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>

              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LiabilitiesTable