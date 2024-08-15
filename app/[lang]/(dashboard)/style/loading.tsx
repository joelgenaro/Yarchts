"use client"

import TableRowSkeleton from "@/components/ui/skeletons/table-row";
import {
  Card, CardTitle,
  CardHeader, CardContent
} from "@/components/ui/card";

const Loading = () => {
  return <>
    <Card>
      <CardHeader>
        <CardTitle>Your Styles</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
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
      </CardContent>
    </Card>
  </>
};

export default Loading;
