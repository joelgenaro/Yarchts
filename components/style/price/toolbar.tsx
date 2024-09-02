"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StyleTableFacetedFilter } from "./faceted-filter";
import { StyleForm } from "./form";
import { Table } from "@tanstack/react-table";
import { getCategories } from "@/lib/utils";
import { useStyleStore } from "@/store/style";

export function StyleTableToolbar({ table }: {
  table: Table<any>;
}) {
  const styles = useStyleStore((state) => state.styles);
  const isFiltered = table.getState().columnFilters.length > 0;
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    table.getColumn("style")?.setFilterValue(value);
  };
  const categoryColumn = table.getColumn("category");
  const categories = getCategories(styles);

  return (
    <>
      <div className="flex flex-wrap items-center flex-1 gap-2">
        <Input
          placeholder="Filter styles..."
          value={table.getColumn("style")?.getFilterValue() as string || ""}
          onChange={handleFilterChange}
          className="h-8 min-w-[200px] max-w-sm"
        />

        <StyleForm />

        {categoryColumn && (
          <StyleTableFacetedFilter
            column={categoryColumn}
            title="Category"
            options={categories}
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
      </div>
    </>
  );
}
