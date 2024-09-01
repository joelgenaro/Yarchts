"use client"

import TableRowSkeleton from "@/components/ui/skeletons/table-row";
import {
  Card, CardTitle,
  CardHeader, CardContent
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusCircle, SlidersHorizontal, Filter, MinusCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icon } from "@iconify/react";

const Loading = () => {
  return <>
    <Card>
      <CardHeader>
      </CardHeader>
      <CardContent className="p-1 md:p-5">
        <Tabs defaultValue="setup" className="flex flex-col">
          <TabsList className="mx-auto rounded-full mb-5">
            <TabsTrigger
              className=" rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              value="setup"
            >
              <Icon icon="ph:list" className="h-5 w-5  mr-2 " />
              Setup Your Styles
            </TabsTrigger>
            <TabsTrigger
              value="labor"
              className=" rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Icon icon="ph:work-line" className="h-5 w-5  mr-2 " />
              Setup Labor
            </TabsTrigger>
            <TabsTrigger
              value="price"
              className=" rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Icon icon="ph:house-line" className="h-5 w-5  mr-2 " />
              Our Prices
            </TabsTrigger>
          </TabsList>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center flex-1 gap-2">
              <Input
                placeholder="Filter tasks..."
                className="h-8 min-w-[200px] max-w-sm"
              />

              <Button variant="outline" size="sm" className="h-8">
                <PlusCircle className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
                Add
              </Button>

              <Button variant="outline" size="sm" className="h-8">
                <MinusCircle className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
                Delete
              </Button>

              <Button variant="outline" size="sm" className="h-8">
                <Filter className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
                Category
              </Button>

            </div>
            <div className="border rounded-md">
              <table className="hidden min-w-full text-gray-900 md:table">
                <thead className="text-sm font-normal text-left rounded-lg">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                    </th>
                    <th
                      scope="col"
                      className="relative pt-2 pb-4 pl-3 pr-6 sm:pr-6"
                    >
                      <span className="sr-only"></span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <TableRowSkeleton />
                  <TableRowSkeleton />
                  <TableRowSkeleton />
                  <TableRowSkeleton />
                  <TableRowSkeleton />
                  <TableRowSkeleton />
                </tbody>
              </table>
            </div>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  </>
};

export default Loading;
