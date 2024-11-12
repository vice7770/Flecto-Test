"use client";
import React, { useMemo } from "react";
import { Planet, PlanetsResponse } from "./types/api";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { openSansCell, openSansHeader } from "@/lib/fonts";
import { useRouter } from "next/navigation";

interface PlanetsTableProps {
  planets: PlanetsResponse;
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const PlanetsTable = (props: PlanetsTableProps) => {
  const { planets } = props;
  const router = useRouter();
  const columnHelper = createColumnHelper<Planet>();


  const extractPathnameFromUrl = (url: string) => {
    const parsedUrl = new URL(url);
    return parsedUrl.pathname.replace('/api', '');
  };
  
  const columns = useMemo(() => {
    return [
      columnHelper.accessor("name", {
        cell: (info) => info.getValue(),
        header: () => <span>City</span>,
      }),
      columnHelper.accessor("climate", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: () => <span>Climate</span>,
      }),
      columnHelper.accessor("gravity", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: () => <span>Gravity</span>,
      }),
      columnHelper.accessor("population", {
        cell: (info) => (
          <span>
            {info.getValue() !== "unknown"
              ? Number(info.getValue()) / 1000000 +
                "Million, " +
                info.row.original.population.length +
                " races"
              : info.getValue()}
          </span>
        ),
        header: () => <span>Population</span>,
      }),
      columnHelper.accessor("terrain", {
        cell: (info) => info.renderValue(),
        header: () => <span>Terrain</span>,
      }),
    ];
  }, [planets.results]);

  const table = useReactTable({
    data: planets.results,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });
  return (
    <div className="flex w-full h-full overflow-auto rounded-3xl border-4">
      <table className="w-full bg-background border-separate border-spacing-0">
        <thead className="justify-center">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr className="" key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  className={`border-b-4 py-4 text-white text-center text-lg + ${openSansHeader.className}`}
                  key={header.id}
                >
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
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-foreground" onClick={() => {
                router.push(`${basePath}${extractPathnameFromUrl(row.original.url)}`);
              }} >
              {row.getVisibleCells().map((cell) => (
                <td
                  className={`p-3 text-white text-center ${openSansCell.className}`}
                  key={cell.id}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlanetsTable;
