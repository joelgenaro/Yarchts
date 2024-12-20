"use client";

import { useTransition, useState } from "react";
import { MoreHorizontal } from "lucide-react";
import { Row } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import clsx from 'clsx';
import DeleteConfirmationDialog from "@/components/delete-confirmation-dialog";
import { deleteStyle, updateStyleState } from '@/actions/style'
import { toast as reToast } from "react-hot-toast";
import { useStyleStore } from "@/store/style";
import { styleSchema } from "@/lib/constants";

interface StyleTableRowActionsProps {
  row: Row<any>;
}

export function StyleTableRowActions({ row }: StyleTableRowActionsProps) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const style = styleSchema.parse(row.original);
  const setIsFormOpen = useStyleStore((state) => state.setIsFormOpen);
  const setSelectedStyleId = useStyleStore((state) => state.setSelectedStyleId);

  const onDeleteAction = async (id: number): Promise<void> => {
    await startTransition(() => {
      return deleteStyle(id).then((res) => {
        if (res?.success) {
          reToast.success(res?.message);
        } else {
          reToast.error(res?.message);
        }
      })
    });
  }

  const updateState = async (id: number) => {
    startTransition(() => {
      updateStyleState(id).then((res) => {
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
        onConfirm={() => onDeleteAction(style?.id)}
        defaultToast={false}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <MoreHorizontal className="w-4 h-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuItem className={clsx(
            {
              'pointer-events-none': isPending === true,
              'cursor-pointer': isPending === false,
            },
          )} onClick={() => updateState(style?.id)}> {style?.isActive ? 'Deactivate' : 'Active'}</DropdownMenuItem>
          <DropdownMenuItem onClick={() => (setIsFormOpen(true), setSelectedStyleId(style?.id))}>Edit</DropdownMenuItem>
          <DropdownMenuItem className={clsx(
            {
              'pointer-events-none': isPending === true,
              'cursor-pointer': isPending === false,
            },

          )}
            onSelect={() => setOpen(true)}>
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
