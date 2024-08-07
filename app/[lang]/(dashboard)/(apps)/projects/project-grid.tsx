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


const prioritiesColorMap: { [key: string]: any } = {
  high: "destructive",
  low: "info",
  medium: "warning",
};
import { useTheme } from "next-themes";
import { type Project } from "@/app/api/projects/data";
interface ProjectGridProps {
  project: Project;
  onEdit: (project: Project) => void;
}
const ProjectGrid = ({ project, onEdit }: ProjectGridProps) => {
  const [open, setOpen] = React.useState<boolean>(false);
  async function onAction(id: string) {
    await deleteProjectAction(id);
  }
  const { theme: mode } = useTheme();

  return (
    <>
      <DeleteConfirmationDialog
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={() => onAction(project?.id)}
      />
      <Card>
        <CardHeader className="flex-row items-center gap-3 mb-0 border-none">
          <div className="flex-1">

          </div>
          <div className="flex-none cursor-pointer">
            {project?.isFavorite ? (
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
                    pathname: `projects/${project?.id}`,
                  }}
                  className="w-full"
                  target="_blank"
                >
                  View
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onSelect={() => setOpen(true)}
              >
                Delete
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onSelect={() => onEdit(project)}
              >
                Edit
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent className="p-4 pt-0 pb-5">
          {/* logo, title,desc */}
          <Link
            href={{
              pathname: `projects/${project?.id}/overview`,
            }}
          >
            <div className="flex gap-2">
              <div>
                <Avatar className="w-12 h-12 rounded">
                  <AvatarImage src={project?.logo?.src} alt="" />
                  <AvatarFallback className="uppercase rounded bg-success/30 text-success">
                    {project?.title?.slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div>
                <div className="mb-1 text-base font-semibold capitalize text-default-900">
                  {project?.title}
                </div>
                <Badge
                  color={
                    project?.status === "review"
                      ? "warning"
                      : project?.status === "completed"
                        ? "success"
                        : project?.status === "in progress"
                          ? "default"
                          : "info"
                  }
                  variant={mode === "dark" ? "soft" : "soft"}
                  className="capitalize "
                >
                  {project?.status}
                </Badge>
              </div>
            </div>
          </Link>
          {/* team, priority */}
          <div className="flex gap-10 mt-6">
            {project?.description && (
              <div className="text-xs font-medium text-default-600 max-h-[34px]  overflow-hidden">
                {project?.description}
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
              {project?.assignDate}
            </span>
          </div>
          <div>
            <div className="text-xs  text-default-600 mb-[2px]">Payment Due Date:</div>
            <span className="text-xs font-medium text-default-900">
              {project?.dueDate}
            </span>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProjectGrid;
