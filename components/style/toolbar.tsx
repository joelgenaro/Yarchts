"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StyleTableViewOptions } from "./view-options";
import { priorities, statuses } from "./data/data";
import { StyleTableFacetedFilter } from "./faceted-filter";
import { Table } from "@tanstack/react-table";
import { PlusCircle, MinusCircle } from "lucide-react";

interface StyleTableToolbarProps {
  table: Table<any>;
}

export function StyleTableToolbar({ table }: StyleTableToolbarProps) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    table.getColumn("title")?.setFilterValue(value);
  };
  const statusColumn = table.getColumn("status");
  const priorityColumn = table.getColumn("priority");

  return (
    <div className="flex flex-wrap items-center flex-1 gap-2">
      <Input
        placeholder="Filter tasks..."
        value={table.getColumn("title")?.getFilterValue() as string || ""}
        onChange={handleFilterChange}
        className="h-8 min-w-[200px] max-w-sm"
      />

      <Button variant="outline" size="sm" className="h-8">
        <PlusCircle className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
        Add
      </Button>

      <Button variant="outline" size="sm" className="h-8">
        <MinusCircle className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
        Delete
      </Button>

      {statusColumn && (
        <StyleTableFacetedFilter
          column={statusColumn}
          title="Status"
          options={statuses}
        />
      )}
      {priorityColumn && (
        <StyleTableFacetedFilter
          column={priorityColumn}
          title="Priority"
          options={priorities}
        />
      )}
      {isFiltered && (
        <Button
          variant="outline"
          onClick={() => table.resetColumnFilters()}
          className="h-8 px-2 lg:px-3"
        >
          Reset
          <X className="w-4 h-4 ltr:ml-2 rtl:mr-2" />
        </Button>
      )}
      <StyleTableViewOptions table={table} />
    </div>

  );
}
