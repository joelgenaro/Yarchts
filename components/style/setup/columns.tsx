"use client";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { labels, priorities, statuses } from "./data/data";
import { StyleTableColumnHeader } from "./column-header";
import { StyleTableRowActions } from "./row-actions";
import { ColumnDef } from "@tanstack/react-table";
import { StyleTableColumn } from "@/lib/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const columns: ColumnDef<StyleTableColumn>[] = [
  {
    id: '1',
    header: '',
    columns: [
      {
        id: "actions",
        cell: ({ row }) => <StyleTableRowActions row={row} />
      },
      {
        accessorKey: "image",
        header: ({ column }) => (
          <StyleTableColumnHeader column={column} title="" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex gap-2">
              <Avatar>
                <AvatarImage src={row.getValue("image")} />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            </div>
          );
        },
        enableSorting: false,
        enableHiding: false,
        enableColumnFilter: false,
      },
      {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
            className="translate-y-0.5"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
            className="translate-y-0.5"
          />
        ),
        enableSorting: false,
        enableHiding: false,
        enableColumnFilter: false,
      },
      {
        accessorKey: "isActive",
        header: ({ column }) => (
          <StyleTableColumnHeader column={column} title="Status" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex gap-2">
              <Badge
                variant="soft"
                color={
                  (row?.original?.isActive) ? "success" : "destructive"
                }
                className="capitalize "
              >
                {row?.original?.isActive ? "Activated" : "Deactivated"}
              </Badge>
            </div>
          );
        },
      },
      {
        accessorKey: "category",
        filterFn: (row, id, value) => {
          return value.includes(row.getValue(id))
        },
        header: ({ column }) => (
          <StyleTableColumnHeader column={column} title="Category" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex gap-2">
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("category")}
              </span>
            </div>
          );
        },
        enableHiding: false,
      },
      {
        accessorKey: "style",
        header: ({ column }) => (
          <StyleTableColumnHeader column={column} title="Style" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex gap-2">
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("style")}
              </span>
            </div>
          );
        },
        enableHiding: false,
      },],
  },
  {
    id: '2',
    header: 'Panel',
    columns: [
      {
        accessorKey: "height",
        header: ({ column }) => (
          <StyleTableColumnHeader column={column} title="Height" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex gap-2">
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("height")}
              </span>
            </div>
          );
        },
        enableHiding: false,
      },
      {
        accessorKey: "color",
        header: ({ column }) => (
          <StyleTableColumnHeader column={column} title="Color" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex gap-2">
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("color")}
              </span>
            </div>
          );
        },
        enableHiding: false,
      },
      {
        accessorKey: "length",
        header: ({ column }) => (
          <StyleTableColumnHeader column={column} title="Length" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex gap-2">
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("length")}
              </span>
            </div>
          );
        },
        enableHiding: false,
      },],
  },
  {
    id: '3',
    header: 'Prices',
    columns: [
      {
        accessorKey: "thirdFeetGatePrice",
        header: ({ column }) => (
          <StyleTableColumnHeader column={column} title="3 ft Gate" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex gap-2">
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("thirdFeetGatePrice")}
              </span>
            </div>
          );
        },
        enableHiding: false,
      },
      {
        accessorKey: "foruthFeetGatePrice",
        header: ({ column }) => (
          <StyleTableColumnHeader column={column} title="4 ft Gate" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex gap-2">
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("foruthFeetGatePrice")}
              </span>
            </div>
          );
        },
        enableHiding: false,
      },
      {
        accessorKey: "fifthFeetGatePrice",
        header: ({ column }) => (
          <StyleTableColumnHeader column={column} title="5 ft Gate" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex gap-2">
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("fifthFeetGatePrice")}
              </span>
            </div>
          );
        },
        enableHiding: false,
      },
      {
        accessorKey: "eighthFeetGatePrice",
        header: ({ column }) => (
          <StyleTableColumnHeader column={column} title="8 ft Gate" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex gap-2">
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("eighthFeetGatePrice")}
              </span>
            </div>
          );
        },
        enableHiding: false,
      },
      {
        accessorKey: "tenthFeetGatePrice",
        header: ({ column }) => (
          <StyleTableColumnHeader column={column} title="10 ft Gate" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex gap-2">
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("tenthFeetGatePrice")}
              </span>
            </div>
          );
        },
        enableHiding: false,
      },
      {
        accessorKey: "panelPrice",
        header: ({ column }) => (
          <StyleTableColumnHeader column={column} title="Panel" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex gap-2">
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("panelPrice")}
              </span>
            </div>
          );
        },
        enableHiding: false,
      },
      {
        accessorKey: "lftPrice",
        header: ({ column }) => (
          <StyleTableColumnHeader column={column} title="$/Lft" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex gap-2">
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("lftPrice")}
              </span>
            </div>
          );
        },
        enableHiding: false,
      },
      {
        accessorKey: "postPrice",
        header: ({ column }) => (
          <StyleTableColumnHeader column={column} title="Post" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex gap-2">
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("postPrice")}
              </span>
            </div>
          );
        },
        enableHiding: false,
      },
      {
        accessorKey: "heavyDutyEndPostPrice",
        header: ({ column }) => (
          <StyleTableColumnHeader column={column} title="Heavy Duty End Post" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex gap-2">
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("heavyDutyEndPostPrice")}
              </span>
            </div>
          );
        },
        enableHiding: false,
      },
      {
        accessorKey: "endPostPrice",
        header: ({ column }) => (
          <StyleTableColumnHeader column={column} title="End Post" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex gap-2">
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("endPostPrice")}
              </span>
            </div>
          );
        },
        enableHiding: false,
      },
      {
        accessorKey: "cornerPostPrice",
        header: ({ column }) => (
          <StyleTableColumnHeader column={column} title="Corner Post" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex gap-2">
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("cornerPostPrice")}
              </span>
            </div>
          );
        },
        enableHiding: false,
      },
      {
        accessorKey: "flatCapPrice",
        header: ({ column }) => (
          <StyleTableColumnHeader column={column} title="Flat Cap" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex gap-2">
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("flatCapPrice")}
              </span>
            </div>
          );
        },
        enableHiding: false,
      },
      {
        accessorKey: "gothicCapPrice",
        header: ({ column }) => (
          <StyleTableColumnHeader column={column} title="Gothic Cap" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex gap-2">
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("gothicCapPrice")}
              </span>
            </div>
          );
        },
        enableHiding: false,
      },
      {
        accessorKey: "newEnglandCapPrice",
        header: ({ column }) => (
          <StyleTableColumnHeader column={column} title="New England Cap" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex gap-2">
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("newEnglandCapPrice")}
              </span>
            </div>
          );
        },
        enableHiding: false,
      },
      {
        accessorKey: "federationCapPrice",
        header: ({ column }) => (
          <StyleTableColumnHeader column={column} title="Federation Cap" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex gap-2">
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("federationCapPrice")}
              </span>
            </div>
          );
        },
        enableHiding: false,
      },
    ],
  },
];
