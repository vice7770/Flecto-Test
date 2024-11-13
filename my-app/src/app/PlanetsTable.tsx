"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Planet, PlanetsResponse } from "./types/api";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  PaginationState,
  useReactTable,
} from "@tanstack/react-table";
import { QueryClientProvider } from '@tanstack/react-query';
import { openSansCell, openSansHeader } from "@/lib/fonts";
import { usePathname, useRouter } from "next/navigation";
import { getPlanets } from "./api/planets";
import { useQuery } from "@tanstack/react-query";
import queryClient from "@/lib/queryClient";
import { useSearchParams } from 'next/navigation'

interface PlanetsTableProps {
  page: string;
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const PlanetsTableComponent = (props: PlanetsTableProps) => {
  const { page } = props;

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: page ? Number(page) - 1 : 0,
    pageSize: 10,
  });

  const {
    data: planets,
    isLoading,
    isError,
  } = useQuery<PlanetsResponse>({
    queryKey: ["planets", pagination.pageIndex + 1],
    queryFn: () => getPlanets((pagination.pageIndex + 1).toString()),
  });
  
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
  }, [planets?.results]);

  const handlePageChange = (pageIndex: number) => {
    const params = new URLSearchParams(searchParams);
    const page = pageIndex + 1;
    if (page) {
      params.set('page', page.toString());
    } else {
      params.delete('page');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const table = useReactTable({
    data: planets?.results || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    rowCount: planets?.count || 0,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    manualPagination: true,
  });

  if (isLoading) return <div className="flex w-full h-full justify-center items-center ">Loading...</div>;
  if (isError) return <div className="flex w-full h-full justify-center items-center ">Error loading data</div>;

  return (
    <div className="flex flex-col w-full h-full overflow-auto rounded-3xl border-4">
      <table className="w-full bg-background border-separate border-spacing-0">
        <thead className="justify-center">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr className="" key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  className={`border-b-4 py-4 text-white text-center text-lg ${openSansHeader.className}`}
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
      <div className="flex w-full items-center justify-evenly gap-2">
      <button
          className="border rounded p-1"
          onClick={() => {
            table.setPageIndex(0);
            handlePageChange(0);
          }}
          disabled={!table.getCanPreviousPage()}
        >
          {'<<'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => {
            table.previousPage();
            handlePageChange(table.getState().pagination.pageIndex - 1);
          }}
          disabled={!table.getCanPreviousPage()}
        >
          {'<'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => {
            table.nextPage();
            handlePageChange(table.getState().pagination.pageIndex + 1);
          }}
          disabled={!table.getCanNextPage()}
        >
          {'>'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => {
            table.setPageIndex(table.getPageCount() - 1);
            handlePageChange(table.getPageCount() - 1);
          }}
          disabled={!table.getCanNextPage()}
        >
          {'>>'}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount().toLocaleString()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            min="1"
            max={table.getPageCount()}
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              table.setPageIndex(page)
            }}
            className="border p-1 rounded w-16"
          />
        </span>
      </div>
    </div>
  );
};

const PlanetsTable = (props: PlanetsTableProps) => (
  <QueryClientProvider client={queryClient}>
    <PlanetsTableComponent {...props} />
  </QueryClientProvider>
);

export default PlanetsTable;