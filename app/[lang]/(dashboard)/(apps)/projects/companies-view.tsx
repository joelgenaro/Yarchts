"use client";
import React from "react";
import {
  Card,
  CardHeader, CardContent
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import ProjectGrid from "./project-grid";
import Blank from "@/components/blank";
import EcommerceStats from "./company-stats";

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));
import { type Project } from "@/app/api/projects/data";
import CompanyStats from "./company-stats";
interface ProjectsViewProps {
  projects: Project[];
}
const CompaniesView = ({ projects }: ProjectsViewProps) => {
  if (projects.length < 1) {
    return (
      <Blank className="max-w-[320px] mx-auto flex flex-col items-center justify-center h-full space-y-3">
        <div className="text-xl font-semibold text-default-900">
          No Company Here
        </div>
        <div></div>
      </Blank>
    );
  }
  return (
    <div className="space-y-5">
      <Card>
        <CardHeader className="flex flex-col flex-wrap gap-6 lg:flex-row">
          <div className="flex flex-1 gap-3">
            <div className="mt-2 mb-1 text-base font-semibold capitalize text-default-900">
              Fence Companies
            </div>
          </div>
          <div className="flex flex-wrap flex-none gap-3 ">
            <Input placeholder="search..." />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            <CompanyStats />
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-4 lg:grid-cols-2">
        {projects?.map((project, i) => (
          <ProjectGrid
            project={project}
            key={`project-grid-${i}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CompaniesView;
