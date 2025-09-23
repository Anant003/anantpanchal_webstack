import React from "react";
import { Link } from "react-router-dom";

const Table = ({ columns, rowData, linkColumn, linkPath, tableLabel }) => {
  return (
    <div>
      <table aria-labelledby={tableLabel}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowData.map((row, rowIndex) => (
            <tr key={row.id || rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex}>
                  {column.accessor === linkColumn ? (
                    <Link to={`${linkPath}/${row[column.accessor]}`}>{row[column.accessor]}</Link>
                  ) : (
                    row[column.accessor]    
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
