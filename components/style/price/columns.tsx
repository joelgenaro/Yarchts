"use client";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { StyleTableColumnHeader } from "./column-header";
import { StyleTableRowActions } from "./row-actions";
import { ColumnDef } from "@tanstack/react-table";
import { OurStyleTableColumn } from "@/lib/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const columns: ColumnDef<OurStyleTableColumn>[] = [
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
        accessorKey: "ourThirdFeetGatePrice",
        header: ({ column }) => (
          <StyleTableColumnHeader column={column} title="3 ft Gate" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex gap-2">
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("ourThirdFeetGatePrice")}
              </span>
            </div>
          );
        },
        enableHiding: false,
      },
      {
        accessorKey: "ourForuthFeetGatePrice",
        header: ({ column }) => (
          <StyleTableColumnHeader column={column} title="4 ft Gate" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex gap-2">
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("ourForuthFeetGatePrice")}
              </span>
            </div>
          );
        },
        enableHiding: false,
      },
      {
        accessorKey: "ourFifthFeetGatePrice",
        header: ({ column }) => (
          <StyleTableColumnHeader column={column} title="5 ft Gate" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex gap-2">
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("ourFifthFeetGatePrice")}
              </span>
            </div>
          );
        },
        enableHiding: false,
      },
      {
        accessorKey: "ourEighthFeetGatePrice",
        header: ({ column }) => (
          <StyleTableColumnHeader column={column} title="8 ft Gate" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex gap-2">
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("ourEighthFeetGatePrice")}
              </span>
            </div>
          );
        },
        enableHiding: false,
      },
      {
        accessorKey: "ourTenthFeetGatePrice",
        header: ({ column }) => (
          <StyleTableColumnHeader column={column} title="10 ft Gate" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex gap-2">
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("ourTenthFeetGatePrice")}
              </span>
            </div>
          );
        },
        enableHiding: false,
      },
      {
        accessorKey: "ourPanelPrice",
        header: ({ column }) => (
          <StyleTableColumnHeader column={column} title="Panel" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex gap-2">
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("ourPanelPrice")}
              </span>
            </div>
          );
        },
        enableHiding: false,
      },
      {
        accessorKey: "ourLftPrice",
        header: ({ column }) => (
          <StyleTableColumnHeader column={column} title="$/Lft" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex gap-2">
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("ourLftPrice")}
              </span>
            </div>
          );
        },
        enableHiding: false,
      },
      {
        accessorKey: "ourPostPrice",
        header: ({ column }) => (
          <StyleTableColumnHeader column={column} title="Post" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex gap-2">
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("ourPostPrice")}
              </span>
            </div>
          );
        },
        enableHiding: false,
      },
      {
        accessorKey: "ourHeavyDutyEndPostPrice",
        header: ({ column }) => (
          <StyleTableColumnHeader column={column} title="Heavy Duty End Post" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex gap-2">
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("ourHeavyDutyEndPostPrice")}
              </span>
            </div>
          );
        },
        enableHiding: false,
      },
      {
        accessorKey: "ourEndPostPrice",
        header: ({ column }) => (
          <StyleTableColumnHeader column={column} title="End Post" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex gap-2">
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("ourEndPostPrice")}
              </span>
            </div>
          );
        },
        enableHiding: false,
      },
      {
        accessorKey: "ourCornerPostPrice",
        header: ({ column }) => (
          <StyleTableColumnHeader column={column} title="Corner Post" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex gap-2">
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("ourCornerPostPrice")}
              </span>
            </div>
          );
        },
        enableHiding: false,
      },
      {
        accessorKey: "ourFlatCapPrice",
        header: ({ column }) => (
          <StyleTableColumnHeader column={column} title="Flat Cap" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex gap-2">
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("ourFlatCapPrice")}
              </span>
            </div>
          );
        },
        enableHiding: false,
      },
      {
        accessorKey: "ourGothicCapPrice",
        header: ({ column }) => (
          <StyleTableColumnHeader column={column} title="Gothic Cap" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex gap-2">
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("ourGothicCapPrice")}
              </span>
            </div>
          );
        },
        enableHiding: false,
      },
      {
        accessorKey: "ourNewEnglandCapPrice",
        header: ({ column }) => (
          <StyleTableColumnHeader column={column} title="New England Cap" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex gap-2">
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("ourNewEnglandCapPrice")}
              </span>
            </div>
          );
        },
        enableHiding: false,
      },
      {
        accessorKey: "ourFederationCapPrice",
        header: ({ column }) => (
          <StyleTableColumnHeader column={column} title="Federation Cap" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex gap-2">
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("ourFederationCapPrice")}
              </span>
            </div>
          );
        },
        enableHiding: false,
      },
    ],
  },
];
