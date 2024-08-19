"use client"

import { Skeleton } from "@/components/ui/skeleton";
import CardSkeleton from "@/components/ui/skeletons/card";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader, CardContent
} from "@/components/ui/card";

const Loading = () => {
  return <>
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
      <CardContent className="grid grid-cols-1 gap-5 mt-5 xl:grid-cols-4 lg:grid-cols-2">
        <div className="w-full h-[191px] overflow-hidden rounded-t-md">
          <Skeleton className="w-full h-full" />
        </div>
        <div className="w-full h-[191px] overflow-hidden rounded-t-md">
          <Skeleton className="w-full h-full" />
        </div>
        <div className="w-full h-[191px] overflow-hidden rounded-t-md">
          <Skeleton className="w-full h-full" />
        </div>
        <div className="w-full h-[191px] overflow-hidden rounded-t-md">
          <Skeleton className="w-full h-full" />
        </div>
      </CardContent>
    </Card>
    <div className="grid grid-cols-1 gap-5 mt-5 xl:grid-cols-4 lg:grid-cols-2">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  </>
};

export default Loading;
