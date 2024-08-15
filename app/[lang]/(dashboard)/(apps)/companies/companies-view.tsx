"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader, CardContent
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Blank from "@/components/blank";
import { Tabs, TabsList } from "@/components/ui/tabs";
import { UserSelect } from '@/db/schemas/users';
import CompanyStats from "./company-stats";
import CompanyGrid from "./company-grid";
import { useCompaniesStore } from "@/store/companies";
import { useDebouncedCallback } from 'use-debounce';

interface CompanyViewProps {
  data: UserSelect[];
}

const CompaniesView = ({ data }: CompanyViewProps) => {
  const [search, setSearch] = useState<string>("");
  const setCompanies = useCompaniesStore((state) => state.setCompanies);
  const setFilteredCompanies = useCompaniesStore((state) => state.setFilteredCompanies);
  const companies = useCompaniesStore((state) => state.companies);
  const filteredCompanies = useCompaniesStore((state) => state.filteredCompanies);

  useEffect(() => {
    setCompanies(data);
    setFilteredCompanies(data);
  }, [data]);

  const handleSearch = useDebouncedCallback((term: string) => {
    setSearch(term);
    setFilteredCompanies(companies.filter(company => company.name.toLowerCase().includes(term.toLowerCase())));
  }, 300);

  if (data.length < 1) {
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
      <Tabs defaultValue="All companies">
        <Card>
          <CardHeader className="flex flex-col flex-wrap gap-6 lg:flex-row">
            <div className="flex flex-1 gap-3">
              <div className="mt-2 mb-1 text-base font-semibold capitalize text-default-900">
                Fence Companies
              </div>
            </div>
            <div className="flex flex-wrap flex-none gap-3 ">
              <Input placeholder="search..." defaultValue={search} onChange={(e) => {
                handleSearch(e.target.value);
              }} />
            </div>
          </CardHeader>
          <CardContent className="p-4 mt-3">
            <TabsList className="grid justify-start w-full h-full grid-cols-2 gap-2 bg-transparent lg:grid-cols-4 md:gap-6">
              <CompanyStats />
            </TabsList>
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 gap-5 mt-5 xl:grid-cols-4 lg:grid-cols-2">
          {filteredCompanies?.map((company, i) => (
            <CompanyGrid
              company={company}
              key={`company-grid-${i}`}
            />
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default CompaniesView;
