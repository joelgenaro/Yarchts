"use client";

import { useTransition, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StyleTableViewOptions } from "./view-options";
import { StyleTableFacetedFilter } from "./faceted-filter";
import { StyleForm } from "./form";
import { MinusCircle } from "lucide-react";
import { Table } from "@tanstack/react-table";
import { toast as reToast } from "react-hot-toast";
import { deleteStyles } from '@/actions/style'
import DeleteConfirmationDialog from "@/components/delete-confirmation-dialog";
import { getCategories } from "@/lib/utils";
import { useStyleStore } from "@/store/style";

export function StyleTableToolbar({ table }: {
  table: Table<any>;
}) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const styles = useStyleStore((state) => state.styles);
  const isFiltered = table.getState().columnFilters.length > 0;
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    table.getColumn("style")?.setFilterValue(value);
  };
  const categoryColumn = table.getColumn("category");
  const categories = getCategories(styles);

  const handleDelete = async () => {
    if (Object.keys(table.getSelectedRowModel().rows).length === 0) {
      reToast.error("Please select styles to delete.");
    } else {
      setOpen(true);
    }
  }

  const deleteStyle = async () => {
    const ids = table.getSelectedRowModel().rows.map((row) => row.original.id);

    await startTransition(() => {
      return deleteStyles(ids).then((res) => {
        if (res?.success) {
          reToast.success(res?.message);
        } else {
          reToast.error(res?.message);
        }
      })
    });
  }

  return (
    <>
      <DeleteConfirmationDialog
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={() => deleteStyle()}
        defaultToast={false}
      />
      <div className="flex flex-wrap items-center flex-1 gap-2">
        <Input
          placeholder="Filter styles..."
          value={table.getColumn("style")?.getFilterValue() as string || ""}
          onChange={handleFilterChange}
          className="h-8 min-w-[200px] max-w-sm"
        />

        <StyleForm />

        <Button onClick={handleDelete} disabled={isPending} variant="outline" size="sm" className="h-8">
          <MinusCircle className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
          {isPending ? "Deleting..." : "Delete"}
        </Button>

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
