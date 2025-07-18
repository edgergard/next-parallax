import React from "react";
import { twMerge } from "tailwind-merge";
import type { TableColumn } from "@/types";
import { truncate } from "@/utils";

interface Props {
  columns: TableColumn[];
  rows: Record<string, string>[];
}

const CELL_STRING_MAX_LENGTH = 35;

const Table: React.FC<Props> = ({ columns, rows }) => {
  return (
    <table className="">
      <thead className="text-light-gray">
        <tr>
          {columns.map(({ id, name, columnStyle }) => (
            <th
              className={twMerge(
                `
                  font-semibold text-right pl-20 py-[22.5px] first:pl-6 
                  last:pr-6
                `,
                columnStyle,
              )}
              key={id}
            >
              {name}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className="font-family-metrophobic text-white">
        {rows.map((row, index) => (
          <tr className="odd:bg-table-even-row" key={index}>
            {columns.map(({ id, getCustomCell, columnStyle }) => (
              <td
                className={twMerge(
                  "text-right pl-16 py-[26.5px] first:pl-6 last:pr-6",
                  columnStyle,
                )}
                key={id}
              >
                {getCustomCell
                  ? getCustomCell(row[id])
                  : truncate(row[id], CELL_STRING_MAX_LENGTH)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
