"use client";

import { useEffect, useMemo, useState } from "react";
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { StyleTablePagination } from "./pagination";
import { StyleTableToolbar } from "./toolbar";
import { columns } from "./columns";
import { getOurFences } from "@/lib/utils";
import { useStyleStore } from "@/store/style";
import clsx from 'clsx';

export function Price() {
    const styles = useStyleStore((state) => state.styles);
    const [rowSelection, setRowSelection] = useState({});
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [sorting, setSorting] = useState<SortingState>([]);

    const data = useMemo(() => {
        return getOurFences(styles);
    }, [styles]);

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
            columnVisibility,
            rowSelection,
            columnFilters,
        },
        enableRowSelection: false,
        onRowSelectionChange: setRowSelection,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
    });

    return (
        <div className="space-y-4">
            <StyleTableToolbar table={table} />
            <div className="border rounded-md">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead className={clsx(
                                        {
                                            'bg-green-50': (header?.column?.parent?.id === '1' || header?.id === '1_1_actions'),
                                            'bg-rose-50': (header?.column?.parent?.id === '2' || header?.id === '1_2_height'),
                                            'bg-amber-50 text-left styleTablePriceHeader': (header?.column?.parent?.id === '3' || header?.id === '1_3_thirdFeetGatePrice'),
                                        },
                                    )} key={header.id} colSpan={header.colSpan}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                )
                                )}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                    className={clsx(
                                        {
                                            'opacity-50': (!row?.original?.isActive),
                                        },
                                    )}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell className={clsx(
                                            {
                                                'bg-green-50': (cell?.column?.parent?.id === '1'),
                                                'bg-rose-50': cell?.column?.parent?.id === '2',
                                                'bg-amber-50': cell?.column?.parent?.id === '3',
                                            },
                                        )} key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    )
                                    )}
                                </TableRow>
                            )
                            )
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <StyleTablePagination table={table} />
        </div >
    );
}
