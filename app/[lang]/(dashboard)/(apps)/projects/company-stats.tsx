"use client"

import { CupBar, NoteIcon, CheckShape, Spam } from "@/components/svg";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { TabsTrigger } from "@/components/ui/tabs";

const CompanyStats = () => {
  const data = [
    {
      text: "All companies",
      total: "42,750.98",
      color: "primary",
      icon: <CupBar className="w-3.5 h-3.5" />
    },
    {
      text: "Favorite companies",
      total: "536,23,3",
      color: "warning",
      icon: <NoteIcon className="w-3.5 h-3.5" />
    },
    {
      text: "Enabled companies",
      total: "234,1",
      color: "success",
      icon: <CheckShape className="w-3.5 h-3.5" />
    },
    {
      text: "Disabled companies",
      total: "332,34",
      color: "destructive",
      icon: <Spam className="w-3.5 h-3.5" />
    },
  ];

  return (
    <>
      {data.map((item, index) => (
        <TabsTrigger
          key={`company-state-${index}`}
          value={item.text}
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