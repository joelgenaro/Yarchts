"use client";

import React from "react";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import clsx from 'clsx';
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { deleteProjectAction } from "@/action/project-action";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarGroup,
} from "@/components/ui/avatar";
import { Icon } from "@iconify/react";
import DeleteConfirmationDialog from "@/components/delete-confirmation-dialog";
import { UserSelect } from '@/db/schemas/users';
import { formatDate } from "@/lib/utils";
import { useTheme } from "next-themes";

interface CompanyGridProps {
  company: UserSelect;
}

const CompanyGrid = ({ company }: CompanyGridProps) => {
  const [open, setOpen] = React.useState<boolean>(false);
  async function onAction(id: number) {
    // await deleteProjectAction(id);
  }
  const { theme: mode } = useTheme();

  return (
    <>
      <DeleteConfirmationDialog
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={() => onAction(company?.id)}
      />
      <Card className={clsx({
        'opacity-50': company?.isActive === false
      },
      )}>
        <CardHeader className="flex-row items-center gap-3 mb-0 border-none">
          <div className="flex-1">
            <Badge
              color={
                company?.isActive
                  ? "success"
                  : "destructive"
              }
              variant={mode === "dark" ? "soft" : "soft"}
              className="capitalize "
            >
              {company?.isActive ? "Enabled" : "Disabled"}
            </Badge>
          </div>
          <div className="flex-none cursor-pointer">
            {company?.isFav ? (
              <Icon
                icon="heroicons:star-solid"
                className="text-yellow-400 w-[18px] h-[18px]"
              />
            ) : (
              <Icon
                icon="heroicons:star"
                className="text-default-400 w-[18px] h-[18px]"
              />
            )}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size="icon"
                className="flex-none w-6 h-6 rounded-full bg-default-200 hover:bg-default-300"
              >
                <MoreHorizontal className="w-4 h-4 text-default-700" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[196px]" align="end">
              <DropdownMenuItem className="cursor-pointer">
                <Link
                  href={{
                    pathname: `companys/${company?.id}`,
                  }}
                  className="w-full"
                  target="_blank"
                >
                  Enable
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onSelect={() => setOpen(true)}
              >
                Disable
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent className="p-4 pt-0 pb-5">
          {/* logo, title,desc */}
          <Link
            href={{
              pathname: `companys/${company?.id}/overview`,
            }}
          >
            <div className="flex gap-5">
              <div>
                <Avatar className="w-12 h-12 rounded">
                  <AvatarImage src={company?.photoPath ?? ""} alt="" />
                  <AvatarFallback className="uppercase rounded bg-success/30 text-success">
                    {company?.name?.slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="text-base font-semibold capitalize text-default-900">
                {company?.name}
              </div>
            </div>
          </Link>
          {/* team, priority */}
          <div className="flex gap-10 mt-6">
            {company?.overview && (
              <div className="text-xs font-medium text-default-600 max-h-[34px]  overflow-hidden">
                {company?.overview}
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between p-4 border-t">
          <div>
            <div className="text-xs  text-default-600 mb-[2px]">
              Created Date:
            </div>
            <span className="text-xs font-medium text-default-900">
              {formatDate(company?.createdAt)}
            </span>
          </div>
          <div>
            <div className="text-xs  text-default-600 mb-[2px]">Payment Due Date:</div>
            <span className="text-xs font-medium text-default-900">
              {formatDate(company?.trialEndsAt)}
            </span>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default CompanyGrid;
