"use client"

import React, { useEffect, useState } from "react";
import { CupBar, NoteIcon, CheckShape, Spam } from "@/components/svg";
import { cn } from "@/lib/utils";
import { TabsTrigger } from "@/components/ui/tabs";
import { useCompaniesStore } from "@/store/companies";
import { produce } from "immer";

type CompanyData = {
  text: string;
  total: number;
  color: string;
  icon: JSX.Element;
};

const CompanyStats = () => {
  const [data, setData] = useState<CompanyData[]>([
    {
      text: "All companies",
      total: 0,
      color: "primary",
      icon: <CupBar className="w-3.5 h-3.5" />
    },
    {
      text: "Favorite companies",
      total: 0,
      color: "warning",
      icon: <NoteIcon className="w-3.5 h-3.5" />
    },
    {
      text: "Enabled companies",
      total: 0,
      color: "success",
      icon: <CheckShape className="w-3.5 h-3.5" />
    },
    {
      text: "Disabled companies",
      total: 0,
      color: "destructive",
      icon: <Spam className="w-3.5 h-3.5" />
    },
  ]);
  const setFilteredCompanies = useCompaniesStore((state) => state.setFilteredCompanies);
  const companies = useCompaniesStore((state) => state.companies);

  useEffect(() => {
    setData(prevData => produce(prevData, draft => {
      draft.map(item => {
        switch (item.text) {
          case 'All companies':
            item.total = companies.length;
            break;
          case 'Favorite companies':
            item.total = companies.filter(company => company.isFav === true).length;
            break;
          case 'Enabled companies':
            item.total = companies.filter(company => company.isActive === true).length;
            break;
          case 'Disabled companies':
            item.total = companies.filter(company => company.isActive === false).length;
            break;
          default:
            break;
        }
      });
    }));
  }, [companies]);

  const handleClick = (type: string) => {
    switch (type) {
      case 'Favorite companies':
        setFilteredCompanies(companies.filter(company => company.isFav === true));
        break;
      case 'Enabled companies':
        setFilteredCompanies(companies.filter(company => company.isActive === true));
        break;
      case 'Disabled companies':
        setFilteredCompanies(companies.filter(company => company.isActive === false));
        break;
      default:
        setFilteredCompanies(companies);
        break;
    }
  }

  return (
    <>
      {data.map((item, index) => (
        <TabsTrigger
          key={`company-state-${index}`}
          value={item.text}
          onClick={() => handleClick(item.text)}
          className={cn(
            "flex flex-col gap-1.5 p-4 overflow-hidden   items-start  relative before:absolute before:left-1/2 before:-translate-x-1/2 before:bottom-1 before:h-[2px] before:w-9 before:bg-primary/50 dark:before:bg-primary-foreground before:hidden data-[state=active]:shadow-none data-[state=active]:before:block",
            {
              "bg-primary/30 data-[state=active]:bg-primary/30 dark:bg-primary/70": item.color === "primary",
              "bg-orange-50 data-[state=active]:bg-orange-50 dark:bg-orange-500": item.color === "warning",
              "bg-green-50 data-[state=active]:bg-green-50 dark:bg-green-500": item.color === "success",
              "bg-red-50 data-[state=active]:bg-red-50 dark:bg-red-500 ": item.color === "destructive",
            }
          )}
        >
          <span
            className={cn(
              "h-[95px] w-[95px] rounded-full bg-primary/40 absolute -top-8 -right-8 ring-[20px] ring-primary/30",
              {
                "bg-primary/50  ring-primary/20 dark:bg-primary dark:ring-primary/40": item.color === "primary",
                "bg-orange-200 ring-orange-100 dark:bg-orange-300 dark:ring-orange-400": item.color === "warning",
                "bg-green-200 ring-green-100 dark:bg-green-300 dark:ring-green-400": item.color === "success",
                "bg-red-200 ring-red-100 dark:bg-red-300 dark:ring-red-400": item.color === "destructive",
              }
            )}
          ></span>
          <div className={`w-8 h-8 grid place-content-center rounded-full border border-dashed border-${item.color} dark:border-primary-foreground/60`}>
            <span className={cn(`h-6 w-6 rounded-full grid place-content-center  bg-${item.color}`, {
              "dark:bg-[#EFF3FF]/30": item.color === "primary",
              "dark:bg-[#FFF7ED]/30": item.color === "warning",
              "dark:bg-[#ECFDF4]/30": item.color === "success",
              "dark:bg-[#FEF2F2]/30": item.color === "destructive"
            })}>
              {item.icon}
            </span>
          </div>
          <span className="relative z-10 mt-3 text-sm font-medium capitalize text-default-800 dark:text-primary-foreground">
            {item.text}
          </span>
          <div className="flex items-center gap-1">
            <span className={`text-lg font-semibold text-${item.color} dark:text-primary-foreground`}>{item.total}</span>
          </div>
        </TabsTrigger>
      ))}
    </>
  );
};

export default CompanyStats;