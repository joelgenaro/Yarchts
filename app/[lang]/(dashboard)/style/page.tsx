"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BasicDataTable from "./basic-table";

const StylePage = async () => {

  return (
    <div className="space-y-5">
      <Card>
        <CardHeader>
          <CardTitle>Your Styles</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <BasicDataTable />
        </CardContent>
      </Card>
    </div>
  );
};

export default StylePage;
