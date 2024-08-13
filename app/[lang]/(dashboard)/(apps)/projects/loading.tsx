"use client"

import { Skeleton } from "@/components/ui/skeleton";
import CardSkeleton from "@/components/ui/skeletons/card";
import {
  Card,
  CardHeader, CardContent
} from "@/components/ui/card";

const Loading = () => {
  return <>
    <Card>
      <CardHeader className="flex flex-col flex-wrap gap-6 lg:flex-row">
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
