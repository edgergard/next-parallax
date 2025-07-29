import React from "react";
import { twMerge } from "tailwind-merge";
import type { TableColumn } from "@/types";
import { truncate } from "@/utils";

interface Props {
  columns: TableColumn[];
  rows: Record<string, string>[];
  ref?: {
    rowRef?: React.RefObject<HTMLTableRowElement | null>;
    rowIndex?: number;
  };
}

const CELL_STRING_MAX_LENGTH = 35;

const Table: React.FC<Props> = ({ columns, rows, ref }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead className="text-light-gray">
          <tr>
            {columns.map(({ id, name, columnStyle }) => (
              <th
                className={twMerge
                  (`
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
          {rows.map((row, index) => {
            const rowRef = ref?.rowIndex === index ? ref.rowRef : undefined;

            return (
              <tr
                className="odd:bg-table-even-row overflow-x-auto"
                key={row.id}
                ref={rowRef}
              >
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
            );
          })}
        </tbody>
      </table>
    </div>

  );
};

export default Table;
