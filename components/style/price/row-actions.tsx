"use client";


import { Row } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { useStyleStore } from "@/store/style";

interface StyleTableRowActionsProps {
  row: Row<any>;
}

export function StyleTableRowActions({ row }: StyleTableRowActionsProps) {
  const setIsOurFormOpen = useStyleStore((state) => state.setIsOurFormOpen);
  const setSelectedOurStyleId = useStyleStore((state) => state.setSelectedOurStyleId);

  return (
    <>
      <Button onClick={() => (setSelectedOurStyleId(row?.original?.id), setIsOurFormOpen(true))} className="p-0 h-auto hover:bg-transparent bg-transparent text-primary hover:text-primary/80  hover:underline">
        Edit
      </Button>
    </>
  );
}
