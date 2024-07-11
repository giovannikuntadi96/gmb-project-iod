import React, { useMemo } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "./Columns";
import { useNavigate } from 'react-router-dom';
import MOCK_DATA from "./MOCK_DATA.json";
import "./BasicTable.css";

export const BasicTable = () => {
  const navigate = useNavigate();

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <div>
      <h2>Chatbot Messages</h2>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} onClick={() => {navigate('/message')}}>
                {row.cells.map((cell) => {
                  return (
                   <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
